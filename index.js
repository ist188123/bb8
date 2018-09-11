
const Discord = require("discord.js");

const client = new Discord.Client();

var jsonData = require('./quest.json');

var raids = jsonData.map(x => x)
var tamanhoFicheiro = Object.keys(raids).length;
//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
  
 //ADICIONAR REGRAS AOS TREINADORES 
  if (msg.content.startsWith('%chansey')) {
    var role = msg.guild.roles.find(role => role.name === "CHANSEY");
    msg.member.addRole(role);
    
  }
  
  
 
  
// FIM ADICIONAR REGRAS TREINADORES
  
  //----
  
  
   

  
  if(msg.content.startsWith('!')){
    
   

var mensagem=msg.content.substring(1);

 msg.reply("aqui 1");
let cod=mensagem.split(" ")[0];

let pokestop =  mensagem.split(" ").slice(1).join(" ");
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
  
  
}
  
  
  //----
  
  
  
  });

client.login(process.env.BOT_TOKEN);
