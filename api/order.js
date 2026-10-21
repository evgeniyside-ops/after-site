// Vercel serverless function: приймає замовлення і надсилає його в Telegram.
// Змінні оточення (Vercel → Settings → Environment Variables): TG_TOKEN, TG_CHAT_ID
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const b = req.body || {};
  const clean = (v, n = 200) => String(v ?? '').slice(0, n).trim();
  const name = clean(b.name), phone = clean(b.phone, 30), city = clean(b.city),
        np = clean(b.np, 30), note = clean(b.note, 500);
  if (!name || !phone || !city || !np || !Array.isArray(b.items) || !b.items.length || b.items.length > 30)
    return res.status(400).json({ ok: false });
  const lines = b.items.map(i =>
    `• ${clean(i.name)} | ${clean(i.color)} | ${clean(i.size, 10)} × ${Number(i.qty) || 1} — ${Number(i.price) || 0} ₴`);
  const total = b.items.reduce((s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 1), 0);
  const text = `🧥 Нове замовлення AFTER®\n\n${name}\n${phone}\n${city}, НП №${np}\n` +
    (note ? `Коментар: ${note}\n` : '') + `\n${lines.join('\n')}\n\nРазом: ${total} ₴ (ціни надійшли з сайту — перевірте)`;
  try {
    const r = await fetch(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.TG_CHAT_ID, text })
    });
    if (!r.ok) return res.status(502).json({ ok: false });
    return res.json({ ok: true });
  } catch (e) { return res.status(502).json({ ok: false }); }
};
