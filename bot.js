const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')
const weather = require('weather-js');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
client.user.setGame(`v!yardım | Bot Geliştiriliyor`)
});

// Buraya dokunma kodu yazalım
client.on(`guildMemberAdd`, member => {
// General isimli kanalı bulması için aşağıdaki kod Gerekli
const channel = guild.member.channels.find('name','general');
// Eğer General kanalı yoksa siktir et.
if (!channel) return;
// Hoşgeldin mesajı
channel.send(`Sunucuya hoşgeldin, ${member}`);
})
// Bitti!

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

if(command === "havadurumu") {
if (!args[0]) return message.channel.send("Şehir girmen gerekiyor :unamused:");
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
       if (err) message.channel.send("Dönüşü olmayan hata! Kim bilir ne oldu!?");
       if (!result) {
           message.channel.send("Düzgün bir şehir gir.")
           return;
       }
       var current = result[0].current;
       var location = result[0].location;
       const embed = new Discord.RichEmbed()
           .setDescription(`**${current.skytext}**`)
           .setTimestamp()
           .setAuthor(`${current.observationpoint} İçin Hava Durumu`)
           .setThumbnail(current.imageUrl)
           .setColor(0x00AE86)
           .addField('Sıcaklık',`${current.temperature} Derece`, true)
           .addField('Hissedilen Sıcaklık',`${current.feelslike} Derece`, true)
           .addField('Rüzgar',current.winddisplay, true)
           .addField('Rüzgar Hızı',current.windspeed, true)
           .addField('Nem', `${current.humidity}%`, true)
           message.channel.send({embed});
   });
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

if(command === "kick") {
  if(!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply("Birini kicklemek için gerekli yetkiye sahip değilsin!");
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Kullanıcı etiketlemen gerek!");
  if(!member.kickable)
    return message.reply("Bu kullanıcı atılmıyor.(");
  let reason = args.slice(1).join(' ');
  if(!reason)
    return message.reply("Sebepsiz yere niye birini atıcaksın ki? Sebep belirtmelisin!");
  await member.kick(reason)
    .catch(error => message.reply(`${message.author} Bu kullanıcıyı atamadım! ${error} hatası meydana geldi!`));
  message.channel.send(`**${member.user.tag}**,** ${reason}** sebebiyle, **${message.author.tag}** tarafından sunucudan atıldı.`);

}

if(command === "avatar") {
  let member = message.mentions.members.first()
  if(!member)
  return message.reply("Kullanıcıyı düzgünce etiketlemen gerekiyor!");
// EMBEDLER HARİKADIR! MÜKKEMMEL MESAJLAR YARATMAK İÇİN BUNLARI SİLME <3
  const Discord = require('discord.js')
       const profl = new Discord.RichEmbed()
       .setImage(member.user.avatarURL)
       .setFooter("Vuexy")
       return message.channel.send(profl);
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

   if(command === "kaccm") {
     var cevaplar = [
       '2 Cm',  '10 Km oha naptın sen?', 'Anakonda Moruq', '1 Metre', '2 Metre', '9 Cm', '16 Cm', 'Zenci Yaragga', '97 Km sanırsam büyütme ilacını fazla kaçırmışsın', '7 Metre'
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
           value: "**Vuexy's Discord Sunucusu!** [https://discord.gg/JzzKDW5] \n**Sunucuna eklemek için tıkla!** [https://goo.gl/AVr9tD] \n**Upvote atmayı unutma! [https://goo.gl/tDGbnm]"
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
    "– Bu işler öyle telefonda olmaz, yüz yüze görüşelim. +Tamam o zaman görüntülü arıyorum.",
    "– Yabancı diliniz var mı? +Bi tane dilim var onu da doğduğumdan beri tanıyorum, yabancı değil. – Tamam, biz sizi ararız.",
    "- Giresun'un yanında niye deniz vardır? - Denize giresun diye!"
  ]
  message.channel.send(`${espiri[Math.floor(Math.random() * 14)]}.`)
}

  if(command === "csgo-gif") {
     let csgo =[
       "https://gph.is/2iJIIH1",
       "https://gph.is/2iwGXwA",
       "https://gph.is/2ixAVvL",
       "https://gph.is/2hhTKCV",
       "http://gph.is/28T6Jo9",
       "http://gph.is/28LHJQw"
     ]
     .setImage(`${csgo[Math.floor(Math.random() * 6)]}.`)
     }

    if(command === "yardım") {
      let embed = new Discord.RichEmbed()
      .setTitle("Vuexy's Bot Komutları (Alpha)")
      .setAuthor("Vuexy")
      .setURL("http://vuexy.cf")
      .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
      .addField("**__Komutlar__**",
      "**v!yardım** - Komutları Gösterir\n**v!ping** - Botun Ping Değerini Gösterir\n**v!windowsaç** - Windows'u Başarıyla Açar Veya Hata Verir\n**v!yazıtura** - Yazı Tura Oynamayı Sağlar\n**v!havadurumu** - Belirlediğiniz Yerdeki Havadurumunu Gösterir\n**v!sunucular** - Botun Olduğu Sunucuları Gösterir\n**v!sunucubilgi** - Sunucu Hakkında Bilgi Verir\n**v!davet** -  Botun Davet Linkini Verir\n**v!temizle** - 100 tane mesaj siler\n**v!reboot** - Botu Yeniden Başlatır\n**v!sigara** - Bir Sigara Yakar\n**v!sorusor** - Bota Soru Sormanızı Sağlar\n**v!soğukespiri** - Rastgele Soğuk Espiri Atar\n**v!avatar** - Etiketlediğiniz Birinin Avatarını Gösterir\n**v!mute** - Miletti susturmanızı sağlar\n**v!unmute** Susturlan insanların susturulmasını geri almayı sağlar\n**v!csgo+gif** - Rastgele CS:GO gifleri gösterir\n**v!kaccm** - Kaç Cm Olduğunu Tahmin Etmeye Çalışır\n**v!kick** - Etiketlenen kişiyi sunucudan atar\n\nToplam **19** Tane Komutumuz Var!")
      message.channel.send(embed)
    }

    if(command === "mute") {
    if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("Bunu kullanmak için yetkin yok!")

              let susturulacak = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
              if(!susturulacak)
              return message.channel.send("Birini etiketlemen gerek")

              if(susturulacak.id === message.author.id)
              return message.channel.send("Kendini sustaramazsın")
              if(susturulacak.highestRole.position >= message.member.highestRole.position)
              return message.channel.send("Bbu kullanıcıyı susturamam.(")
              let role = message.guild.roles.find(r => r.name === "Susturulmuş");
              if(!role) {
              try {
                  role = await message.guild.createRole({
                        name: "Susturulmuş",
                        color: "#0b0a0a",
                        permission:[]
                });

                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                  });
                });
              } catch(e) {
                  console.log(e.stack);
              }

            }

            if(susturulacak.roles.has(role.id)) return message.channel.send("")

            await susturulacak.addRole(role);
            message.channel.send("S U S T U R U L D U N U Z")
    }

    if(command === "unmute") {
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Yeterli yetkiye sahip değilsin!")

                  let susturulacak = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
                  if(!susturulacak) return message.channel.send("Lütfen birini etiketle!")

                  let role = message.guild.roles.find(r => r.name === "Susturulmuş");

                if(!role || !susturulacak.roles.has(role.id)) return message.channel.send("Zaten cezalı değil ki?");

                susturulacak.removeRole(role);
                message.channel.send("Kullanıcının Artık Konuşabilir!")
    }

  if(command === "yazıtura") {
  var flip = Math.floor(Math.random() * 2 + 1);
  if (flip === 1) {
let embed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
.setImage('https://i.hizliresim.com/2J7lPO.png')
message.channel.send(embed);
}

  else {
let embed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
.setImage('https://i.hizliresim.com/9mX7YO.png')
message.channel.send(embed);
}
}

if(command === "windowsaç") {
var flip = Math.floor(Math.random() * 2 + 1);
if (flip === 1) {
let embed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
.setImage('https://orig00.deviantart.net/cee6/f/2015/011/a/2/long_live_windows_xp_bootscreen_animated_gif_by_macmachine95-d8dla2n.gif')
message.channel.send(embed);
}

else {
let embed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
.setImage('https://media.giphy.com/media/4mXjpVNJAFlvi/giphy.gif')
message.channel.send(embed);
}
}

if(command === "sunucular") {
  const servers = client.guilds.map(g => g.name).join("\n");
  let embedo = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`**__Bulunduğum sunucular__** **\n\n${servers}**\n\nToplam **${client.users.size}** memnun kullanıcı! `)
  message.channel.send(embedo);}

if(command === "oyundeğiş") {
  if(message.author.id !== '341656232597258241')
  return message.reply('Üzgünüm! `client.user.setGame` Gerekli yetkiye sahip değilsin!');
  const sayMessage = args.join(` `);
  client.user.setGame(sayMessage);
  message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
 }
});

  client.on('message', msg => {
   client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'general');
    if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
      .setDescription(`${member}, sunucuya katıldı! Hoşgeldin kardeşim!`)
    .setImage("https://media.giphy.com/media/wAVA7WdV2jita/giphy.gif")
    channel.send(embed);
   });

if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm selam kardeşim, hoşgeldin!');
  }
if (msg.content.toLowerCase() === 'selam') {
    msg.channel.sendMessage('Aleyküm selam kardeşim, hoşgeldin!');
  }
  if (msg.content.toLowerCase() === 'ağla') {
      msg.channel.sendMessage(':sob:');
  }
  if (msg.content.toLowerCase() === 'aqla') {
      msg.channel.sendMessage(':sob:');
  }
  if (msg.content.toLowerCase() === 'en iyi kim?') {
      msg.channel.sendMessage('VUEXYY!!');
  }
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
      msg.channel.sendMessage('Aleyküm selam kardeşim, hoşgeldin!');
  }
  if (msg.content.toLowerCase() === 'gavat denince akla') {
      msg.channel.sendMessage('Hemen onun adı gelir PanasonicKalemPilArda!');
  }
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
