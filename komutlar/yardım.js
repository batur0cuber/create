const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:sareki:812269724980871168> EVEN Bot | Kullanıcı Menüsü <a:sareki:812269724980871168>")
.setThumbnail("https://cdn.discordapp.com/emojis/812269725421666324.gif?v=1")
    .setDescription(`
╔═════════**NSWF KOMUTLARI**══════════════╗       
║**»** **!4k** : 4k Hd Bir Şekilde +18 Gif Atar.
╔════════**KULLANICI KOMUTLARI**════════════╗
║**»** **!afk** : AFK Komutlarını Gösterir.
║**»** **!istatistik** : Botun İstatistiklerini Gösterir.
║**»** **!ping** : Pinginizi Gösterir.  
║**»** **!komik** : Komik Vineler.
║**»** **!çevir** : V11 Kodlarını V12 Çeviren Komuttur.   
║**»** **!bug-bildir** : Hataları veya Bugları Bize Bildirisiniz.
║**»** **!kullanıcı-bilgi** : Etiketlediğin / kendi profilin hakkında bilgi verir.
╔════════**Yetkili KOMUTLARI**════════════╗
║**»** **!ban** : Ban Komutlarını Gösterir.
║**»** **!unban** : İd İle Kullanıcının Banını Kaldırırsınız.
║**»** **!kapat** : O Kanalı Kilitlersiniz.
║**»** **!banlist** : Sunucuda Banlananları Görürsünüz.
║**»** **!aç** : O Kanalı Açarsınız.
║**»** **!kicklog-kanal <#kanal>** : Kick Log Sistemini Açarsınız.
║**»** **!sunucu-kur** : Basit Sunucu Kurar.
║**»** **!kick** : Kullanıcıyı Atarsınız.
║**»** **!kick-yetkili @rol** : Kick Atacak Rolü Ayarlarsınız.
╔════════**Moderasyon KOMUTLARI**════════════╗
║**»** **!sil** : Belirtilen Mesaj Sayısı Kadar Siler. 
║**»** **!nuke** : Belirtilen Kanalı Tüm Yazılaraı Filan Temizler.
║**»** **!küfür-engel** : Küfür Engel İle Komutlar.
║**»** **!gç-ayarla #kanal** : HG-BB Resimli. 
║**»** **!gç-kapat** : HG-BB Kapatır. 
║**»** **!çekilş** : Çekiliş Komutlarına Bakarsınız.
╚════════════════════════════════════╝
`) 
       .addField(`» EVEN Bot Bağlantıları`, `<a:donenmaviyildiz:810794964153139210>  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=795341279562432522&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/M5CeTAD4a9) <a:donenmaviyildiz:810794964153139210>`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0 
  };
                                       
  exports.help = {
    name: 'kullanıcı', 
    description: '',
    usage: 'yardım'
  };     