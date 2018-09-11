
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
    
    msg.reply("aqui 1");
var mensagem=msg.content;
var msg=mensagem.substr(1)


let cod=msg.split(" ")[0];

let pokestop =  msg.split(" ").slice(1).join(" ");
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
    
    
    
    
    msg.reply(missao)
  
  
}
  
  
  //----
  
  
  
  });

client.login(process.env.BOT_TOKEN);
