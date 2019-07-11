const Discord = require("discord.js");
var resposta = require('./quest.json');
const client = new Discord.Client();
var jsonData = require('./nest.json');
const prefix = "+";
const http = require('http');

client.on("message", async (msg) => {
//console.log(tamanhoFicheiro)
var mensagem=msg.content;
var sort_by_tipo = "quest"
    //-------------------------
    //funcoes -----
    //-------------------------
    var add_minutes = function (dt, minutes) {
        var d = new Date(dt.getTime() + minutes * 60000),
            dformat = [mzero(d.getUTCHours() + 1),
            mzero(d.getMinutes())].join(':');

        return dformat;
    }

    var mzero = function (mzero) {
        if (mzero < 10) {
            mzero = "0" + mzero
        }
        return mzero;
    }

    

    
    
    
    //var pCode='http://pnraidspn.atwebpages.com/raid.php'
    function leinforaid(pCode, cb) {  //leraud

        http.request(pCode).on('response', function (response) {
            var data = '';
            response.on("data", function (chunk) {
                data += chunk;
            });
            response.on('end', function () {
                var pCJSON = JSON.parse(data);
                cb(pCJSON);

            });
        }).end();
    }





    async function listaraids(endereco) {

        var lista = "";
        var result = await leinforaid(endereco, async function (pCLatLng) {
            pCLatLng.forEach(nivel => {
                lista = lista + "Raid " + nivel.nivel + " - " + nivel.boss + "\n"
            })
            msg.channel.send({
                embed: {
                    color: 3447003,
                    description: "**Raids disponiveis**\n" + lista+"\nPN PoGo Raids"
                }
            });

        })
    }

    async function listapokestop(endereco,oquelista) {

    var lista = "";
    var result = await leinforaid(endereco, async function (pCLatLng) {
       await pCLatLng.forEach(nivel => {
        
       lista = lista + nivel.cod + "\n" + nivel.local + "\n"
       
        })
        var nomelista="";
       if(oquelista.startsWith('ginasio')){
        nomelista="**Ginasios**\n"
        }else{
        nomelista="**Pokestops**\n"
        }
 await msg.channel.send({
                embed: {
                    color: 3447003,
                    description: nomelista + lista+"\nPN PoGo Raids"
                }
            });

       
    })
}

     
   
    
 //--listar quest  
    
   
    
    
    
    function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}
    
    
   async function show_quest(squest) {
var lista=""
    await squest.forEach(nivel => {
        lista = lista + "\n" + nivel.cod + "\n**Missão**\n" + nivel.missao + "\n**Recompensa**\n" + nivel.quest + "\n\n"
    })
    msg.channel.send({
        embed: {
            color: 3447003,
            description: "**Quest disponiveis**\n" + lista+"\nPN PoGo Raids"
        }
    });
}






function listar_quest(){

  
    
    'use strict';
var request = require('request');

var url = 'http://pnraidspn.atwebpages.com/teste.php';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is already parsed as JSON:
      show_quest(data)
      //console.log(data);
   }
});



} 
   


    
    //-------------------------
    //fim funcoes -----
    //-------------------------


if (msg.channel.name == 'professor-boss') {
  
    if (mensagem.startsWith("!ginasio")) {
    listapokestop('http://pnraidspn.atwebpages.com/ginasios.php',mensagem.substring(1))
     }
    
    if (mensagem.startsWith("!pokestop")) {
    listapokestop('http://pnraidspn.atwebpages.com/poketstop.php',mensagem.substring(1))
     }
    
    
    //if (msg.content.startsWith("!listar")) {
    if (mensagem.startsWith("!listar")) {
    listaraids('http://pnraidspn.atwebpages.com/raid.php')
    
}   
     
    
    
    if (mensagem.startsWith("!listaq")) {
         
   listar_quest('http://pnraidspn.atwebpages.com/teste.php')
}
    
     //-------------------------
    //----- anunicar raids
     //-------------------------
    
    if (mensagem.startsWith("!i")) {
    var today = new Date();



    var boss = ""
    var ovo = ""
    var tiporaid = "";
    var tempo = "";
    var local = "";

    //nivel raid
    tiporaid = mensagem.split(" ")[1]

    //tempo falta
    tempo = mensagem.split(" ")[mensagem.split(" ").length - 1]
     var waitnotifica=tempo




    for (x = 2; x < mensagem.split(" ").length - 1; x++) {
        local = local + mensagem.split(" ")[x] + " "
    }
    async function informaraid(tiporaid,endereco) {


        var ispokemon = isNaN(tiporaid);
        console.log("--ispokemon--->", ispokemon)
        if (ispokemon) {
            tempo = -(45 - parseInt(tempo))
            
        }
        var result = await leinforaid(endereco,async function (pCLatLng) {
            pCLatLng.forEach(nivel => {
                if (ispokemon) {

                    if (nivel.boss.toLocaleUpperCase() == tiporaid.toLocaleUpperCase()) {
                        tiporaid = nivel.nivel;
                        boss = nivel.imagem;

                    }

                } else {
                    if (nivel.nivel == tiporaid) {
                        tiporaid = nivel.nivel;
                        boss = "";
                    }

                }


            })


            //------------------------------


            switch (tiporaid) {
                case "1":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000097-88ffa8a090/200/nivel1.png";
                    break;
                case "2":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000097-88ffa8a090/200/nivel1.png";
                    break;

                case "3":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

                    break;
                case "4":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

                    break;
                case "5":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";

                    break;

            }

            //se não tiver boss então mostra a imagem do ovo
            if (boss == "") {
                boss = ovo;

            }


            if (typeof parseInt(tiporaid) == "number" && tiporaid.trim() != "") {

                var date = new Date();

                var horaatual = add_minutes(date, 0)
                var hora = add_minutes(date, tempo);
                var fecha = add_minutes(date, 45 + parseInt(tempo))

              const raidinfomsg = new Discord.RichEmbed()
                            .setColor('#FF0000')
                            .setTitle("\@everyone")
                            .setURL('https://discord.js.org/')
                            .setAuthor('ANUNCIO RAID ' + tiporaid, ovo, 'https://discord.js.org')
                            .setThumbnail(boss)
                            .addField('Ginásio', local)
                            //.addBlankField()
                            .addField('Abre', "**" + hora + "**", true)
                            .addField('Termina', "**" + fecha + "**", true)
                            .setTimestamp()
                            .setFooter('Anunciado por : ' + msg.author.username, 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');
                        msg.guild.channels.find("name", "info-raids").sendMessage(raidinfomsg);
                
                setTimeout(function () {
                    var abertaoufechada="Abriu"
                    
                    if (ispokemon) {
                        abertaoufechada="Terminar"
                        //----
                        
                       
                        
                        
                        
                        
                         const radiinfo = new Discord.RichEmbed()
                            .setColor('#FF0000')
                           .setTitle("INFORMAÇÃO\n\@everyone")
                            .setThumbnail(boss)
                            .addField('A terminar', "Raid Nivel "+ tiporaid)
                            .addField('Fecha', fecha)
                            //.addBlankField()
                            .addField('Ginásio', local)
                            .setTimestamp()
                            .setFooter('PN PoGo Raids', 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');
                        msg.guild.channels.find("name", "💬-chat-geral").sendMessage(radiinfo);
                
                        
                        
                        //----
                        //console.log("Faltam 5 minutos para "+abertaoufechada+"\nRAID NIVEL "+tiporaid+"\nLocal:"+local)
                     }else{
                         
                         const radiinf = new Discord.RichEmbed()
                            .setColor('#FF0000')
                            .setTitle("INFORMAÇÃO\n\@everyone")
                            .setThumbnail(boss)
                            .addField('Abriu', "Raid Nivel "+ tiporaid)
                            .addField('Fecha', fecha)
                            //.addBlankField()
                            .addField('Ginásio', local)
                            .setTimestamp()
                            .setFooter('PN PoGo Raids', 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');
                        msg.guild.channels.find("name", "💬-chat-geral").sendMessage(radiinf);
                
                         
                         
                         
                        //console.log(abertaoufechada+"\nRAID NIVEL "+tiporaid+"\nLocal:"+local) 
                        setTimeout(function () {
                            const radiinf = new Discord.RichEmbed()
                            .setColor('#FF0000')
                            .setTitle("INFORMAÇÃO\n\@everyone")
                            .setThumbnail(boss)
                            .addField('A terminar', "Raid Nivel "+ tiporaid)
                            .addField('Fecha', fecha)
                            //.addBlankField()
                            .addField('Ginásio', local)
                            .setTimestamp()
                            .setFooter('PN PoGo Raids', 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');
                        msg.guild.channels.find("name", "💬-chat-geral").sendMessage(radiinf);
                
                            //console.log("Faltam 5 minutos para terminar\nRAID NIVEL "+tiporaid+"\nLocal:"+local)
                        }, 40*60000); 
                    }     

         
                }, waitnotifica*60000); 
                
                
                
                
            } else {
            msg.channel.send({
                            embed: {
                                color: 3447003,
                                description: "ATENÇÃO:\nFalta o **nivel** da raid exemplo:\n!i **1** piscinas 22\n\nOu o Pokemon " + tiporaid + " não está carregado"
                            }
                        });   
            }

            //-------------------------------------
        });//leinforaid

    }


    if (!isNaN(tempo)) {
       
        informaraid(tiporaid,'http://pnraidspn.atwebpages.com/raid.php')
    } else {
       msg.channel.send({
                    embed: {
                        color: 3447003,
                        description: "ATENÇÃO:\nFalta o **tempo** da raid exemplo:\n!i tyra piscinas **22**"
                    }
                });


    }


}

     //-------------------------
    //fim anunicar raids ----
     //-------------------------
    
    
    
 
    
    
    
    
if (mensagem.startsWith('!nest')) {
    var dia = new Date();
    var hoje = dia.getDate() + "-" + dia.getMonth() + "-" + dia.getFullYear();
    var find = mensagem.split(" ")[1].toLocaleLowerCase()
    var conta = mensagem.split(" ")[0].length + mensagem.split(" ")[1].length
    var onde = mensagem.substring(conta + 1, mensagem.length).trim().toLocaleUpperCase()
    
    async function getNest(endereco,qualPokemon) {
        var cp=""
        var lista = "";
        var achou=false;
        var pokemon="";
        var imagem="";
        var tipo="";
        var result = await leinforaid(endereco, async function (pCLatLng) {
            pCLatLng.forEach(nivel => {
                if(nivel.boss.toLocaleUpperCase()==qualPokemon.toLocaleUpperCase()){
                    achou=true;
                    cp="";
                    pokemon=nivel.boss;
                    imagem=nivel.imagem;
                    tipo=nivel.bosstipo
                nivel.cpnivel.forEach(nivel => {
                    cp = cp + "\n" + nivel
                   
                })
                
            }
            })
           if(achou){
            //mensagem
               const nestmensagem = new Discord.RichEmbed()
                .setColor('#FF0000')
                .setTitle("\@everyone"+" Reporte de ninho " + hoje)
                .setURL('https://discord.js.org/')
                .setAuthor('Ninho de ' + pokemon.toLocaleUpperCase(), imagem, 'https://discord.js.org')
                .setThumbnail(imagem)
                .addField('Local', onde)
               .addField('Tipo', tipo )
                //.addBlankField()
                .addField('CP IV (100%)', cp, true)
                .setTimestamp()
                .setFooter('Reportado por : ' + msg.author.username, 'https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png');

           // msg.guild.channels.find("name", "nest").sendMessage("\@everyone");
            msg.guild.channels.find("name", "nest").sendMessage(nestmensagem);
 
              //fim mensagem 
           }else{
                 msg.channel.send({
                    embed: {
                        color: 3447003,
                        description: "O pokemon "+find+" não está carregado!"
                    }
                });
           }
            
        })
    }
    
    getNest('http://pnraidspn.atwebpages.com/raid.php',find)

}//fim !nest----

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}//FIM CANAL PROFESSOR BOSS   
    
});

client.login(process.env.BOT_TOKEN);
