
const Discord = require("discord.js");

const client = new Discord.Client();
client.on("message", async (msg) => {
  
  
  if (msg.content.startsWith('%')) {
    var role = msg.guild.roles.find(role => role.name === "5ovos");
    msg.member.addRole(role);
    
  }
  
  
 
  
if(msg.content.startsWith('5ovos')){
    let roleName = msg.content.split(" ").slice(1).join(" ");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    let membersWithRole = msg.guild.members.filter(member => { 
       
        return member.roles.find("name", roleName);
    }).map(member => {
      //msg.guild.channels.find("name", "quest-info").sendMessage('\@'+member.user.username)
      // msg.guild.channels.find("name", "quest-info").sendMessage(client.users.find(member.user.username, "mensagem").toString())
        msg.channel.send("Hey " +member.user  + " how's it going?"+msg.author);
     
    })

  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });

client.login(process.env.BOT_TOKEN);
