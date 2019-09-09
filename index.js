const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const request = require("request");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) return;
  msg.attachments.forEach(a => {
    msg.channel.send(a.attachment)
  })
});

client.login('<token>');
