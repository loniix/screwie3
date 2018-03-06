// Code pour Screwie 2.0.1


// Const
const Discord = require('discord.js')
const bot = new Discord.Client();
const prefix = '!';
const func = require('./functions.js');


// Login
bot.login ('NDE5OTkxNDExODgzMjQ1NTY4.DX4LAQ.KtDYB7KmWB6PFWHLPHq7c9Fabzc')


//

bot.on('message', async message => {
  
  
    // Variables
    let msg =  message.content.toUpperCase(); 
    let sender = message.author;
    let args  = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();


    // Ne pas répondre aux bots
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;




    // Commande de ping
    if (msg === prefix + 'PING') {
        message.channel.send('Pong !')
    }




    
    // Commande de purge et de say

    if (msg.startsWith(prefix + 'SAY')) {
        if (message.guild.me.hasPermission("ADMINISTRATOR")) {
          message.delete();
        }
     
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Je ne réponds uniquement au professeur.')
     
        let botmessage = args.join(" ")
     
        if (!botmessage) return message.reply('Invalide.')
     
        message.channel.send(botmessage)
      }
     
      if (msg.startsWith(prefix + 'PURGE')) {
     
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Désolé, permission insuffisante.');
     
        message.delete();
     
        if (isNaN(args[0])) return message.channel.send('Merci de mettre un nombre valide. \n Usage: ' + prefix + 'purge + <le nombre de mots à purger>');
     
        const fetched = await message.channel.fetchMessages({
          limit: args[0]
        });
        console.log(fetched.size + ' messages trouvés ... suppresion.');
        
        message.channel.bulkDelete(fetched).catch(error => message.channel.send(`Erreur: ${error}`));
      }
    
});
    



// Rôle lorsque que quelqu'un rejoint
bot.on('guildMemberAdd', member => {
    console.log('User' + member.user.username + 'a rejoint le serveur, je lui ai assigné le rôle Arrivant !')
    var role  = member.guild.roles.find ('name', 'Arrivant');
    member.addRole(role)

});


// Message de bienvenue
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'bienvenue');
    if (!channel) return;
    channel.send(`Bienvenue sur **The Old Republic**, ${member} ! /n Je suis **Screwie** et je serais là tout au long de ton aventure !`);
});



// Quand le bot se lance
bot.on('ready', () => {
    console.log ('Screwie en ligne, professeur !') // Message lorsque le bot se lance dans la console
});


// Chatbot
bot.on('message', msg => {
    if (msg.content === 'Salut') {
      msg.channel.send('Salut !');
    }

    if (msg.content === 'Bonjour') {
      msg.channel.send('Salutations !');
      }

    if (msg.content === 'Ca va ?') {
      msg.channel.send('Ma foi, parfait!');
      }
    
      if (msg.content === 'Bonsoir') {
      msg.channel.send('Bonsoir!');
      }
  });