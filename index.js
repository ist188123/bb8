
const Discord = require("discord.js");

const client = new Discord.Client();
client.on("message", async (msg) => {
  
  
  if (msg.content.startsWith('%')) {
    var role = msg.guild.roles.find(role => role.name === "chansey");
    msg.member.addRole(role);
    
  }
  
  
  
  
  if(msg.content.startsWith("//chansey")){
    let roleName = msg.content.split(" ").slice(1).join(" ");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    let membersWithRole = msg.guild.members.filter(member => { 
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.user.username;
    })

    let embed = new discord.RichEmbed({
        "title": `Users with the ${roleName} role`,
        "description": membersWithRole.join("\n"),
        "color": 0xFFFF
    });

    return msg.channel.send({embed});
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });

client.login(process.env.BOT_TOKEN);
