import TelegramBot from 'node-telegram-bot-api';
import path from "node:path";

const token =
    'your bot token';
const vpnToken = "token only amneziaWG"
const welcomeMessage = `your welcome message here`;
const bot = new TelegramBot(token, { polling: true });


// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, welcomeMessage);
});

// Обрабатываем команду /config
bot.onText(/\/config/, (msg) => {
    const chatId = msg.chat.id;
    const configMessage = `Token:\n\`\`\`${vpnToken}\`\`\``;
    bot.sendMessage(chatId, configMessage, { parse_mode: 'Markdown' });
});

// Обрабатываем команду /qrcode
bot.onText(/\/qrcode/, (msg) => {
    const chatId = msg.chat.id;
    const qrCodePath = path.join(__dirname, '..', 'rsc', 'your qrcode file name');
    bot.sendPhoto(chatId, qrCodePath);
});

bot.setMyCommands([
    { command: '/start', description: 'Описание бота' },
    { command: '/config', description: 'Информация для подключения' },
    { command: '/qrcode', description: 'Получить QR код для подключения' },
]);