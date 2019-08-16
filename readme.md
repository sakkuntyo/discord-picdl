# discordでオウム返しするBot

discord.jsを使ったdiscord bot

## 動作環境

- ubuntu 18.04
- nodejs 10.16.1
- discord.js library

## 起動方法

```
# nodejsのインストール
$ git clone https://github.com/creationix/nvm ~/.nvm
$ source ~/.nvm/nvm.sh
$ echo "source ~/.nvm/nvm.sh" >> ~/.bashrc
$ nvm install 10.16.0
$ nvm use 10.16.0

# このアプリの起動
$ git clone https://github.com/sakkuntyo/discord-oumukaesi-nodejs
$ cd discord-oumukaesi-nodejs
$ sed "s/<token>/ここにトークンを入れる/g" -i index.js
$ npm install
$ npm start

# デーモンにしたい場合、pm2を使う
$ npm install -g pm2
$ pm2 start bin/www line-oumukaesi
## OSの起動と同時に起動
$ pm2 startup
## 現在のpm2 listの状態を保存
$ pm2 save
```

## [Discord Developer Portal](https://discordapp.com/developers/)のページで行う事

### 1.アプリケーション作成

### 2.Bot設定ページのBUILD-A-BOTにある Add Bot ボタンを押下

今後このページからBot設定を行う

### 3.OAuth2設定ページから招待リンクを作成してBotをチャンネルに追加する

- 必要なスコープ
  - bot
- 必要な権限
  - Send Messages

### 4.tokenはBot設定ページの Click to Reveal Token をクリックして表示される物を使用する
