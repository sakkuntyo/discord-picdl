const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) return;
  console.log(msg);
  msg.attachments.forEach(a => {
    fs.writeFileSync(`./${a.name}`,a.file);
  })
  //msg.channel.send(msg.content)
});

client.login('<token>');
