const TelegramBot = require('node-telegram-bot-api');
//API Token Telegram
const token = '670805797:AAFk9d0ddJCXKvl6cGUbWOzLRzRYQdmV_Dk';
// Creamos un vot que usa 'polling' para obtener actualizaciones
const bot = new TelegramBot(token, {polling:true});
const request = require('request');
//Cuando mandes el mensaje "Hola" reconoce tu nombre y genera un input: Hola Negan
bot.on('message',(msg) => {
var Hola = "hola";
if
(msg.text.toString().toLowerCase().indexOf(Hola)=== 0) {
bot.sendMessage(msg.chat.id,"Hola  " + msg.from.first_name);
}
});
bot.onText(/\/start/, (msg) => {
 bot.sendMessage(msg.chat.id, "Hola, soy Pepebits en que puedo ayudarte");    
 });