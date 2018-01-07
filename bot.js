const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
client.user.setGame(`Alpha v0.4`)
});

  client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(ayarlar.prefix) !== 0) return;
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "yaz") {
   const sayMessage = args.join(" ");
   message.delete().catch(O_o=>{});
   message.channel.send(sayMessage);
}
 if(command === "sigara") {
 message.channel.send(':smoking:')
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud:'))
 .then(message => message.edit(':smoking:'))
 .then(message => message.edit(':smoking::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud:'))
 .then(message => message.edit('::smoking::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud:'))
 .then(message => message.edit(':smoking:'))
 .then(message => message.edit(':smoking::cloud::cloud:'))
 .then(message => message.edit('::smoking::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud::cloud:'))
 .then(message => message.edit(':smoking::cloud:'))
 .then(message => message.edit(':smoking:'))
 .then(message => message.edit(':triumph:'))
 .then(message => message.edit('Sigara bitti. Ama üzülme! Biz senin için yakarız...'))
}

if(command === "sunucubilgi") {
  const Discord = require('discord.js')
  const kullanicibilgimk = new Discord.RichEmbed()
  .setAuthor('Sunucu Bilgileri', message.guild.avatarURL)
  .setThumbnail(message.guild.iconURL)
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setTimestamp()
  .addField('Sunucu İsmi', message.guild.name, true )
  .addField('Sunucu ID', message.guild.id, true)
  .addField('Varsayılan Kanal',message.guild.defaultChannel, true)
  .addField('Sunucu Bölgesi',message.guild.region, true)
  .addField('Sunucu Kurucusu',message.guild.owner, true)
  .addField('Toplam Kullanıcı', message.guild.members.size, true)
  .addField('Toplam kanal', message.guild.channels.size, true)
  .addField('AFK kanalı',message.guild.AFKChannel,true)
  .addField('Doğrulama Seviyesi',message.guild.verificationLevel, true)
  .addField('Oluşturulma Tarihi', message.guild.createdAt, true)
  return message.channel.send(kullanicibilgimk);
}

  if(command === "sorusor") {
    var cevaplar = [
      'Evet',  'Hayır', 'Sanırım', 'Kesinlikle'
    ];
    // if(message.channel.id === "324213139866648576" || message.channel.id === "310486176920371211")return message.channel.send(":no_entry_sign:Yasaklı komut. Bu kanalda soru soramazsın.")
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]
    message.channel.send(cevap.toString())
   }

if(command === "davet") {
   message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       author: {
         name: message.author.username,
         icon_url: message.author.avatarURL
       },
     fields: [
         {
           name: "Davet et",
           value: "**Vuexy's Discord Sunucusu** [https://discord.gg/JzzKDW5] \n**Sunucuna eklemek için tıkla** [https://goo.gl/AVr9tD]"
         }
       ],
       timestamp: new Date(),
       footer: {
         icon_url: client.user.avatarURL,
         text: "© Vuexy | Vuexy's Discord Bot"
       }
     }
   })
}
if(command === "soğukespiri") {
  let espiri =[
    "Biliyor musun? Sen yüzme bilmesen ve denize girsen bile batmazsın çünkü tipin kayık!",
    "Kar üzerinde yürüyen adama ne denir. Karabasan.",
    "Yıkanan Ton’a ne denir? Washington!",
    "Oğlumun adını mafya koydum, artık bi mafya babasıyım!",
    "Geçen gün bir taksi çevirdim; hala dönüyor!",
    "Geçen gün kamyonu sürdüm, Leonardo da Vinci.",
    "+Okeyde kıza elin nasıl dedim. -Ojeli dedi. +Ben Şoka girdim. -O Migrosa",
    "-Tuzu uzatır mısın? -Tuuuuuuuuuuuz -Gerizekalı ya kalk git sofradan.",
    "Tatlı yiyip, tatlı konuşuluyorsa; bundan sonra mantı yiyip mantıklı konuşacağız.",
    "Ne yapıyorsun? -Telefonla konuşuyorum. -Aaa sizin telefon konuşuyor mu?",
    "Koltuk altı spreyi aldım evdeki bütün koltukların altına sıktım ohh miss gibi.",
    "Geçen gün arkadaşlarla fırında patates yiyorduk, fırın sıcak geldi bahçeye çıktık?",
    "– Bu işler öyle telefonda olmaz, yüz yüze görüşelim. +Tamam o zaman görüntülü arıyorum."
  ]
  message.channel.send(`${espiri[Math.floor(Math.random() * 13)]}.`)
  }

if(command === "sunucular") {
  const servers = client.guilds.map(g => g.name).join("\n");
  let embedo = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`**__Bulunduğum sunucular__** **\n\n${servers}**\n\nToplam **${client.users.size}** memnun kullanıcı! `)
  message.channel.send(embedo);}

if(command === "oyundeğiş") {
  if(message.author.id !== '341656232597258241')
  return message.reply('Üzgünüm! `client.user.setGame` Gerekli yetkiye sahip değilsin :tired_face: ');
  const sayMessage = args.join(` `);
  client.user.setGame(sayMessage);
  message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
 }
});
  client.on('message', msg => {
if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm selam kardeşim, hoşgeldin!');
  }
if (msg.content.toLowerCase() === 'selam') {
    msg.channel.sendMessage('Aleyküm selam kardeşim, hoşgeldin!');
  }
  if (msg.content.toLowerCase() === 'ağla') {
      msg.channel.sendMessage(':sob:');
  }
  if (msg.content.toLowerCase() === 'en iyi kim?') {
      msg.channel.sendMessage('VUEXYY!!');
  }
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
      msg.channel.sendMessage('Aleyküm selam kardeşim, hoşgeldin!');
  }
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
    let embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setDescription(`${member}, sunucuya katıldı! Hoşgeldin kardeşim!`)
    .setImage("https://media.giphy.com/media/wAVA7WdV2jita/giphy.gif")
  channel.send(embed);
  });

  client.on('message', message => {
  if(message.author.bot) return;
  let kullanici = message.author.username
  const swearWords = ["siktir", "orospu", "göt", "yarrak", "ananı", "yiğitin amk", "sikeyim", "orospu", "çocuğu", "pipi", "çullaması", "amk", "aq", "amına", "siktiğimin", "evladı", "çük", "sik", "sülaleni", "öttüre", "daşşak", "daşak", "yarak", "sktir", "hassiktir", "amq", "amqü"];
  if( swearWords.some(word => message.content.includes(word)) ) {
    message.react(`😡`);
  }
  });

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
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`)
      .then(msg => {
      	msg.edit(`Bot yeniden başlatıldı!`)
      })
      .then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
