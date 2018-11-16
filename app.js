require('dotenv').config({ path: 'variables.env' });
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.login(token);