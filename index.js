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
if (msg.content.startsWith('!')) {

       
   
        //----------------  
          
          var endereco='http://pnraidspn.atwebpages.com/teste.php'
    
          var dmsg = msg.content.substring(1);
    
    
          let cod = dmsg.split(" ")[0];
    
          let pokestop = dmsg.split(" ").slice(1).join(" ");
          let quest = "";
          let missao = "";
          let questimagem = "";
      
      let req = http.get(endereco, function(res) {
            let data = '',
                questMap;
        
            res.on('data', function(stream) {
                data += stream;
            });
            res.on('end', function() {
                questMap = JSON.parse(data);
        
                 for (var x = 0; x < questMap.length; x++) {
  //  msg.sendMessage(questMap[x].cod)
                  
        msg.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}});
    
       
    
    
    }
    
                
            });
        });
       //----fim quest 
          
    
    






//---------------------------------------------------		
  //fim quest
  //---------------------------------------------------		

  }//fim if

  //fim criar canal----







  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);





