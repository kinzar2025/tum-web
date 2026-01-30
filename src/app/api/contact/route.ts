import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  lineId: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

async function sendTelegramNotification(data: z.infer<typeof contactSchema>) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('Telegram credentials not configured');
    return;
  }

  const message = `
🔔 *ติดต่อใหม่จาก TUM-WEB*

👤 *ชื่อ:* ${data.name}
${data.email ? `📧 *อีเมล:* ${data.email}` : ''}
${data.lineId ? `💬 *LINE:* ${data.lineId}` : ''}
${data.phone ? `📱 *เบอร์โทร:* ${data.phone}` : ''}
${data.service ? `🛠 *บริการที่สนใจ:* ${data.service}` : ''}
${data.budget ? `💰 *งบประมาณ:* ${data.budget}` : ''}

📝 *ข้อความ:*
${data.message}

${data.source ? `📍 *มาจาก:* ${data.source}` : ''}
${data.utm_source ? `📊 *UTM:* ${data.utm_source} / ${data.utm_medium || '-'} / ${data.utm_campaign || '-'}` : ''}

⏰ ${new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })}
  `.trim();

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send Telegram notification
    await sendTelegramNotification(validatedData);

    // TODO: Save to Supabase database
    // const supabase = createClient();
    // await supabase.from('contacts').insert(validatedData);

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
