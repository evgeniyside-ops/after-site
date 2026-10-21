# AFTER® site
index.html — сайт, api/order.js — приём заказов в Telegram, img/ — ваши фото.
1. @BotFather в Telegram → /newbot → получите TG_TOKEN. Напишите боту любое сообщение.
2. Откройте https://api.telegram.org/bot<TG_TOKEN>/getUpdates → найдите chat.id → это TG_CHAT_ID.
3. Залейте папку в GitHub, импортируйте в Vercel, добавьте TG_TOKEN и TG_CHAT_ID в Environment Variables, Deploy.
4. Подключите домен: Vercel → Settings → Domains.
Токен бота никому не показывайте и не вставляйте в index.html.
