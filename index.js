//discordbotの操作に必要
const discordtoken = '<discordtoken>'
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const request = require("request");

//dropboxの操作に必要
const dropboxtoken = '<dropboxtoken>'
const fetch = require('isomorphic-fetch');
const dropbox = require('dropbox').Dropbox;
const dbx = new dropbox({ accessToken: dropboxtoken, fetch: fetch});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) return;
  msg.attachments.forEach(a => {
    console.log(a)
    //画像のバイナリ取得
    var request = require("request");
      
    request.get(a.attachment,{encoding: null},(err,res,body) => {
      //画像アップロード
      var filename = Math.random().toString(32).substring(2) + ".jpg"
      dbx.filesUpload({
        path: `/${filename}`,
        contents: body
      }).then((res) => {
        console.log(res)
        //画像ダウンロードリンク作成
        dbx.filesGetTemporaryLink({
          path: `/${filename}`
        }).then((res) => {
          console.log(res)
          msg.channel.send("<" + res.link + ">")
        }).catch((err) => {
          console.log(err)
        })
      }).catch((err) => {
        console.log(err)
      })
    })
  })
});

client.login(discordtoken);
