"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const node_path_1 = __importDefault(require("node:path"));
const token = '7324472663:AAFxPdWq0c557z_WKn25V2rXZ62rUyhN43A';
const vpnToken = "vpn://AAAHe3janVXdUtpAFL73KZiMd7WQbEJInPGCAtag0kiUqRjHWZMFI2ETkw2Cjtd9jD5Dpy_WR-jZDZAwphc2_O2e7zu753znsPu6V4NH8iLKcEBJkkqHtRth48_rdiRY-HkK8K5RACcK2CUNGYraUpAqHVRQEKcopto0WqYpNys5qlimKcsKgu9KisYpuqK0dLUpa1WUvscplUH053gpwpBluRoPKMer93ZElgqqjN0R-amoCgtxyu5A4knA9ZNeXcrNLsjmwtwthHOlgy2GcqxQrAyqa8eNVGVMy7GtRiWs7-VYeSOuyXorUGUHCGgO7KzvrIMGHcrWdbgqKhm9MCCUWX4OHfsjOuqP2dfU-HrZvXqyWDaYBNSMHqfO4NI48ya6aVnmatqdHb1b5C6IN0HWjbpSV5rvKXESLO5mZJUTbT0Mz4bD5HF68hLPO9fHp_ZZgsf2LPjSeNDHVq9jnSC9iYYzrWK7OLsvlvrfyEXF8yVuLMpIMsEeuXVd2vb9hKRp7ai2TacByrm0O3DAuG8PrfP28PoOpge1fafX-TborudAsiFPzMgpWQH3Q2m6tO-Bj8oHUF0YQmn5GC9FLDKfOQofQ3VhiDibB3bCjUWfgoFDpeYEi8op244EgwaGog1dCu8bm5CES2Bn92Hg5Tlk8rg5MrrYIHRmZVZv-Gy0Rux0tLy_0FqdyRM1H5fLC5aEl_KRyJ-kDzghfu6Nz3sL72IxuXLk9qO_Gk8QSj7ZnZ5Knht6trK1kf8d-ed6JE-5dzsMo2fiWzaXX66LV0M-qB0eNnjQPerHUUAZz06DwmhGHSG9DjkdasjUuBY2HJNByqBNTgmJcRgsCLCFYKXqP0QpG-A5Wbft7lol3pxla4ra0kv2OEoYB8SuhTWdFX35ocyLlVOSLEiy2-IfKoHk0jeXVp10POj8KoCgqwgswTTlLPi3Rizi3MyPpR3i265fcTlxNp5T8hLgz_wu2tLexOg295N8MsFZyDr_ctvSUi8JYhZE4sx3MDRVzRHa1P78_PEbPr-2XJrmh38L1ZFZFz9NrYTmt5voJmVj3nSAgHbrL-297f0FZ-3u5A";
const welcomeMessage = `
Добро пожаловать в VPN бот!

Доступные команды:
/start - описание бота
/config - информация для подключения
/qrcode - получить QR код для подключения
`;
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
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
    const qrCodePath = node_path_1.default.join(__dirname, '..', 'rsc', 'qrcode.png');
    bot.sendPhoto(chatId, qrCodePath);
});
bot.setMyCommands([
    { command: '/start', description: 'Описание бота' },
    { command: '/config', description: 'Информация для подключения' },
    { command: '/qrcode', description: 'Получить QR код для подключения' },
]);
