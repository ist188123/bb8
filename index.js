
const Discord = require("discord.js");

const client = new Discord.Client();
client.on("message", async (msg) => {
  
  
  if (msg.content.startsWith('%')) {
    var role = msg.guild.roles.find(role => role.name === "5ovos");
    msg.member.addRole(role);
    
  }
  
  
 
  

  
  //----
  
  
    let notif="";

  
  if(msg.content.startsWith('5ovos')){
    
    let autor=msg.author;
   
     let pokestop =  msg.content.split(" ").slice(1).join(" ");
 // let roleName = msg.content.split(" ").slice(1).join(" ");
let roleName ="CHANSEY";
  //Filtering the guild members only keeping those with the role
  //Then mapping the filtered array to their usernames
  let membersWithRole = msg.guild.members.filter(member => { 
     
      return member.roles.find("name", roleName);
  }).map(member => {
    msg.guild.channels.find("name", "quest-info").sendMessage(member.user+"\nQuest ")
    // msg.guild.channels.find("name", "quest-info").sendMessage(client.users.find(member.user.username, "mensagem").toString())
    
   
      
         notif=notif+member.user+"\n"
    
   // let members = msg.channel.members;
  // let guildMember = members.find('id', member.user.id);

    // send Direct Message to member
   // guildMember.send('test message');
    
    
    
        //  msg.sendMessage(member.user.id,"bla bla bla");
           // msg.guild.channels.find("name", "quest-info").sendMessage("Notificado: " +member.user);
    
    
  })
  
  

 const embed = new Discord.RichEmbed()
                .setTitle(pokestop)
                .setAuthor("POKESTOP", "https://exraidspinhalnovo.webnode.pt/_files/200000044-1157e1263e/450/pstop.png")
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription("CHOCAR 5 OVOS\nNotificado:\n"+notif)
                .setFooter("Pubicado "+autor, "")


                .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000043-cd4a1ce43f/450/chansey.png")

                .setTimestamp();
  
   msg.guild.channels.find("name", "quest-info").sendMessage({ embed });
  
  
}
  
  
  //----
  
  
  
  });

client.login(process.env.BOT_TOKEN);
