
const Discord = require("discord.js");

const client = new Discord.Client();
client.on("message", async (msg) => {
  
  
  if (msg.content.startsWith('%')) {
    var role = msg.guild.roles.find(role => role.name === "5ovos");
    msg.member.addRole(role);
    
  }
  
  
 
  

  
  //----
  
  
    

  
  if(msg.content.startsWith('5ovos')){
    msg.reply(msg.content);
 // let roleName = msg.content.split(" ").slice(1).join(" ");
let roleName ="CHANSEY";
  //Filtering the guild members only keeping those with the role
  //Then mapping the filtered array to their usernames
  let membersWithRole = msg.guild.members.filter(member => { 
     
      return member.roles.find("name", roleName);
  }).map(member => {
    //msg.guild.channels.find("name", "quest-info").sendMessage('\@'+member.user.username)
    // msg.guild.channels.find("name", "quest-info").sendMessage(client.users.find(member.user.username, "mensagem").toString())
     // msg.channel.send("Hey " +member.user  + " how's it going?"+msg.author+"https://www.google.com/maps/place/38°38'08.5%22N+8°54'29.2%22W/@38.635691,-8.9098598,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d38.635691!4d-8.9081074");
   
    
    
    
    
     
            const embed = new Discord.RichEmbed()
                .setTitle("INFORMAÇÃO")
                .setAuthor("Olá treinadores.", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription("Hey " +member.user  + " how's it going?"+msg.author)
                .setFooter("Desenvolvido por Damasc010 - Pinhal Novo, pubicado ", "https://www.google.com/maps/place/38°38'08.5%22N+8°54'29.2%22W/@38.635691,-8.9098598,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d38.635691!4d-8.9081074")


                .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000043-cd4a1ce43f/450/chansey.png")

                .setTimestamp();



            msg.guild.channels.find("name", "quest-info").sendMessage({ embed });
    
    
    
    
    
    
    
    
    
    
    
  })


}
  
  
  //----
  
  
  
  });

client.login(process.env.BOT_TOKEN);
