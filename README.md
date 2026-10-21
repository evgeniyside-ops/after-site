# AFTER® site
index.html — сайт, api/order.js — прийом замовлень у Telegram, img/ — ваші фото.
1. @BotFather в Telegram → /newbot → отримайте TG_TOKEN. Напишіть боту будь-яке повідомлення.
2. Відкрийте https://api.telegram.org/bot<TG_TOKEN>/getUpdates → знайдіть chat.id → це TG_CHAT_ID.
3. Завантажте папку в GitHub, імпортуйте у Vercel, додайте TG_TOKEN і TG_CHAT_ID в Environment Variables, Deploy.
4. Підключіть домен: Vercel → Settings → Domains.
Токен бота нікому не показуйте і не вставляйте в index.html.
