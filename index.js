const Discord = require("discord.js");
var resposta = require('./quest.json');
const client = new Discord.Client();
var jsonData = require('./quest.json');
const prefix = "+";
const http = require('http');


//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
  


 //---------------------------------------------------		
  //QUEST
  //---------------------------------------------------		
  
//quest
  if (msg.channel.name == '💬-chat-geral') {
if (msg.content.startsWith('!quest')) {

        //mensagem --
              
    
   
        //----------------  
          
          var endereco='http://pnraidspn.atwebpages.com/teste.php'
    
          
      
      let req = http.get(endereco, function(res) {
            let data = '',
                questMap;
        
            res.on('data', function(stream) {
                data += stream;
            });
            res.on('end', function() {
                questMap = JSON.parse(data);
        
              
              //-------------------------------------
            var pppp="";
        //-------------------------------------    
              
             //------
              
              const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	
	
	

              
              
           //-----   
              
              
              
                 for (var x = 0; x < questMap.length; x++) {
  //  msg.sendMessage(questMap[x].cod)
                  
       pppp=pppp+questMap[x].cod+"\n"+questMap[x].missao.trim()+"\n"
       
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
    
    }
       .setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');       
      msg.channel.send(exampleEmbed);
    
  //     msg.channel.send({embed: {
//  color: 3447003,
//  description: "QUEST DISPONIVEIS\n"+pppp
//}});   
              
    //fim mensagem --        
            });
        });
       //----fim quest 
          
    
    






//---------------------------------------------------		
  //fim quest
  //---------------------------------------------------		

  }//fim if

  //fim criar canal----


   if (msg.content.startsWith('!a')) { 
     
   msg.channel.send({embed: {
  color: 3447003,
  description: "**RAID ANUNCIO**"
}});   
     
     
             
   }  
    
if (msg.content.startsWith('!ajuda')) {
    msg.channel.send({embed: {
  color: 3447003,
  description: "COMANDOS DO MRS.BOSS\n\n!ajuda\nComandos do bot\n!quest\nLista de todas as quest.\n!# ginasio !hora raid tempo\n# nivel raid 5,4,3\n hora 12h00\ntempo\n12 ainda com ovo faltam 12 miutos abrir\n-12 aberta a 12 minutos"
}});   
  
}


  }

  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);





