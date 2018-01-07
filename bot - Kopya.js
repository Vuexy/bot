const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
client.user.setGame(`Alpha v0.2`)
});

client.on('message', msg => {
if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm selam kardeşim, hoşgeldin!');
  }
  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content === prefix + 'ping') {
    msg.channel.sendMessage('Pong! **' + client.ping + '** ms');
  }
    if (msg.content.toLowerCase() === prefix + 'temizle') {
   msg.channel.bulkDelete(100);
   msg.channel.sendMessage("100 adet mesaj silindi!");
 }
 if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
