const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
console.log('am online!');

});



client.on('message',msg => {
if (msg.content === 'ping'){
msg.channel.send('pong !');
}
});



client.login('TOKEN-HERE'); //U CAN GET BOT TOKEN BY GOING TO DISCORD DEVELOPER PORTAL 
//CODED BY Arnob !!#1919
