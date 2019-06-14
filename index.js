const Discord = require("discord.js");
var resposta = require('./quest.json');
const client = new Discord.Client();
var jsonData = require('./nest.json');
const prefix = "+";
const http = require('http');

client.on("message", async (msg) => {
//console.log(tamanhoFicheiro)


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
    
    
    
    
    
 if (msg.content.startsWith("!listar")) {
    listaraids('http://pnraidspn.atwebpages.com/raid.php')

}   
    
    
    
}//FIM CANAL PROFESSOR BOSS   
    
});

client.login(process.env.BOT_TOKEN);
