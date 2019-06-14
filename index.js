const Discord = require("discord.js");
var resposta = require('./quest.json');
const client = new Discord.Client();
var jsonData = require('./nest.json');
const prefix = "+";
const http = require('http');

client.on("message", async (msg) => {
//console.log(tamanhoFicheiro)
var mensagem=msg.content;

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
                    description: "Raids disponiveis\n" + lista
                }
            });

        })
    }

    //-------------------------
    //fim funcoes -----
    //-------------------------


if (msg.channel.name == 'professor-boss') {
    
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





    for (x = 2; x < mensagem.split(" ").length - 1; x++) {
        local = local + mensagem.split(" ")[x] + " "
    }
    async function informaraid(tiporaid,endereco) {


        var ispokemon = isNaN(tiporaid);
        console.log("--ispokemon--->", ispokemon)
        if (ispokemon) {
            tempo = -tempo
            console.log(tempo)
        }
        var result = await leinforaid(endereco,async function (pCLatLng) {
            pCLatLng.forEach(nivel => {
                if (ispokemon) {

                    if (nivel.boss == tiporaid) {
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
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
                    break;
                case "2":
                    ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
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
    
    
    
 if (msg.content.startsWith("!listar")) {
    listaraids('http://pnraidspn.atwebpages.com/raid.php')

}   
    
    
    
    
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
                if(nivel.boss==qualPokemon){
                    achou=true;
                    cp="";
                    pokemon=nivel.boss;
                    imagem=nivel.imagem;
                    tipo=nivel.bosstipo
                nivel.nivel.forEach(nivel => {
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
    
    getNest('http://pnraidspn.atwebpages.com/nest.php',find)

}//fim !nest----

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}//FIM CANAL PROFESSOR BOSS   
    
});

client.login(process.env.BOT_TOKEN);
