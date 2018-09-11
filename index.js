
const Discord = require("discord.js");

const client = new Discord.Client();

var jsonData = require('./quest.json');

var raids = jsonData.map(x => x)
var tamanhoFicheiro = Object.keys(raids).length;
//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
  
 //ADICIONAR REGRAS AOS TREINADORES 
  
  var regra="";
  var role = "";
  if (msg.content.startsWith('%')) {
    msg.reply(msg.content.substring(1));
     regra=msg.content.substring(1);
     role = msg.guild.roles.find(role => role.name === regra);
    msg.member.addRole(role);
    
  }
  
  if (msg.content.startsWith('-')) {
    regra=msg.content.substring(1);
     role = msg.guild.roles.find(role => role.name === msg.content.substring(1));
    msg.member.removeRole(role);
    
  }
 
  
// FIM ADICIONAR REGRAS TREINADORES
  
  //----
  
  
   

  
  if(msg.content.startsWith('!')){
    
   

var dmsg=msg.content.substring(1);

 msg.reply("aqui 1");
let cod=dmsg.split(" ")[0];

let pokestop =  dmsg.split(" ").slice(1).join(" ");
let quest="";
let missao="";
let questimagem="";
//ler ficheiro   
    
      msg.reply("aqui 2");
  for (var x = 0; x < tamanhoFicheiro; x++) {

  if (cod == raids[x].cod) {
    quest = raids[x].quest;
    missao = raids[x].missao;
    questimagem = raids[x].questimagem;

  }
} 
    
    
    
    
    msg.reply(quest)
  
    let autor=msg.author;
   
    
 // let roleName = msg.content.split(" ").slice(1).join(" ");
let roleName =quest;
  //Filtering the guild members only keeping those with the role
  //Then mapping the filtered array to their usernames
  let membersWithRole = msg.guild.members.filter(member => { 
     
      return member.roles.find("name", roleName);
  }).map(member => {
  //  msg.guild.channels.find("name", "quest-info").sendMessage(member.user+"\n")
    // msg.guild.channels.find("name", "quest-info").sendMessage(client.users.find(member.user.username, "mensagem").toString())
    
   
    
    // member.user.send("lkjlkjk");
   
 
    
    msg.guild.channels.find("name", "quest-notificacao").sendMessage(member.user+" Quest "+quest+" - Pokestop : " +pokestop);
    
    
    
    
    
  
  })
  
  

 const embed = new Discord.RichEmbed()
                .setTitle(quest)
                .setAuthor(pokestop, "https://exraidspinhalnovo.webnode.pt/_files/200000044-1157e1263e/450/pstop.png")
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription(missao)
                .setFooter("Pubicado ", "")


                .setThumbnail(questimagem)

                .setTimestamp();
  
   msg.guild.channels.find("name", "quest-info").sendMessage({ embed });
    
    
    
    
    
  
}
  
  
  //----
  
  
  
  });

client.login(process.env.BOT_TOKEN);
