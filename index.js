
const Discord = require("discord.js");

const client = new Discord.Client();
client.on("message", async (msg) => {
  
  
  if (msg.content.startsWith('%')) {
    var role = msg.guild.roles.find(role => role.name === "chansey");
    msg.member.addRole(role);
    
  }
  
  
  
  
  });

client.login(process.env.BOT_TOKEN);
