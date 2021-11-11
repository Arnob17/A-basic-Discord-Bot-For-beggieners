const { Client, Intents } = require('discord.js');
const mybot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

mybot.on("ready", () => {
  console.log(`${mybot.user.username} is ready!`);
});

mybot.on("messageCreate", (m) => {
  if (m.content == "ping") {
    m.reply("Pong");
  };
});

mybot.login("usually token goes here but recommending process.env.token");
