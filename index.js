
const Discord = require("discord.js");

const client = new Discord.Client();
client.on("message", async (msg) => {
  
  
  if (msg.content.startsWith('%')) {
    msg.reply("oi");
    
  }
  
  
  
  
  });

client.login(process.env.BOT_TOKEN);
