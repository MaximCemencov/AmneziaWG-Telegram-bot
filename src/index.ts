import TelegramBot from 'node-telegram-bot-api';
import path from "node:path";

const token =
    '7324472663:AAFxPdWq0c557z_WKn25V2rXZ62rUyhN43A';
const vpnToken =
    "vpn://AAAHbnjanVXfc6IwEH7vX-EwfTtPISCiM32w6k3Vq4e1dVpLx4kQWxQDheCPdvzfbxMUcMo99NDRZL9vk91vl-TzogSPZPuUYZeSMJKapWdh489nOhIsvH0F-NwogBsF7JKGDEWtK0iVygUUxClKQ60Z9UZDrhVyVLFMTZYVBL-FFI1TdEWp62pN1ooofZtTCoPor_FOhCHLcjHuUo4X7z0WWSqoMPaxyE9FRZiHIzYDiRcu10_6tCg3WyCbBXMrE86SyimGEixTLA-qR8eTVHlMS7BUoxzWtxMsvxHX5LgVqHIGuDQBztYfH4MGHfLWY7gqyhltzyWU9ZwEeu38lvF6vXy4Nzb7aLCa7PbqSlcd5nXcodF6sh8_iBr4k_dW9-rLIjM3OAVZMSpKRdG_UoLQ3cxWZJ8QfaKRa6Qvu1PPWE3rH_po5FHysY5-td-W89rq2uwEprk3dzdawXZBPM-W-t_IRcWTJZ57lJFwgW3yYlm05TghiaLSVSlNpwrKWbQzHIPx0rzr3bbunmYwLZcux932n2HnOAeSCXliRgZkD9xvpWnRvg0-Kh9AdWEIpeVjvBOxyHw2VvgYqgtDxNk8sBtuzPoUDBzKNSdYVE5JOxIMGhiyNrQofJ9NQkIugRnPPddOcojlaW1idLBB6KoX97p3W6M-YYPJbj7S6u3FO20sd7sRC717-UrkT6I3HBIn8ca33Y092iwexnJr6eynC4TCH2a7q5JtVY_3pjZxHpFzq_vyK_dueZ6_JU7P5PLLFfGpyuVSs1nlQXepE_guZTw7DQqjGRWE9Ark1NRQQ-NamHBMuhGDNhkQEmDP3RBgC8Fy1X_zIzbEa3Js2_O1crw1i48UtZ5v6sAPGQfErpk1WmV9-a3Ms5UjEm5IeN7i3yqBZNGDRYtOOh50chVA0EUEFmIacRa8rT7zOTd2AumMeDj3yy4nzsZr6G4X_-R3UUo7iNFL4ic5ZIFjj7X_5ZbSIjt0A-b64sz_FRJSmgQ0hWmUnPd1VEGNiviraTk0udBEAykn86noAjovuXRxuPgLG93qAw"
const welcomeMessage = `
Добро пожаловать в Free VPN бот!

Я верю, что свободный интернет должен быть доступным для всех, поэтому я создал этого Telegram-бота для выдачи ключей подключения к AmneziaVPN. Более подробную информацию о необходимом клиенте вы можете найти на их официальном сайте: [amnezia.org](https://amnezia.org/en).

Команды:
/start - описание бота
/config - информация для подключения
/qrcode - получить QR-код для подключения
`;
const bot = new TelegramBot(token, { polling: true });


// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, welcomeMessage);
});

// Обрабатываем команду /config
bot.onText(/\/config/, (msg) => {
    const chatId = msg.chat.id;
    const configMessage = `Ваш VPN токен:\n\`\`\`${vpnToken}\`\`\``;
    bot.sendMessage(chatId, configMessage, { parse_mode: 'Markdown' });
});

// Обрабатываем команду /qrcode
bot.onText(/\/qrcode/, (msg) => {
    const chatId = msg.chat.id;
    const qrCodePath = path.join(__dirname, '..', 'rsc', 'qrcode.png');
    bot.sendPhoto(chatId, qrCodePath);
});

bot.setMyCommands([
    { command: '/start', description: 'Описание бота' },
    { command: '/config', description: 'Информация для подключения' },
    { command: '/qrcode', description: 'Получить QR код для подключения' },
]);