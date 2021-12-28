const { devNull } = require("os");

module.exports = {
    name: 'r',
    description: "Roda um Dadado com argumentos",
    execute(message, args){
        tentativas = 1;
        roladas = 1;
        dado = 1;
        soma = 0;
        multiplica = 1;
        if(!args[0])return message.reply("usos: $r 1d10\n$r 10#1d10\n$r 1d10+5\n$r 10#1d10+5\n$r 10#1d10\n$r 10#1d10 2\n$r 10#1d10+5x2\n$r [qnt rol]#[qnt dados]d[max dado]+[soma por rol]x[multip. por rol]")
        try {
            base = args[0].toLowerCase();
            if (base.includes("#")){
                tentativas = base.split('#')[0];
                roladas = base.split('#')[1].split('d')[0];
            }
            else {
                tentativas = 1;
                roladas = base.split('d')[0];
            }
            if (base.includes("+")){
                dado = base.split('d')[1].split('+')[0];
                soma = parseInt(base.split('+')[1]);
                if (base.includes("x")){
                    multiplica = base.split('x')[1];
                } else
                    multiplica = 1;
            } else if(base.includes("x")){
                multiplica = base.split('x')[1];
                dado = base.split('d')[1].split('x')[0];
                soma = 0;
            } else{
                dado = base.split('d')[1];
                soma = 0;
                multiplica = 1;
            }
            if(tentativas>75 || roladas>50 || dado -1 >99|| soma>100 ||multiplica >15 ) return message.channel.send("ERRO! Dado alto demais!");
            array = [];
            for (j =0;j<tentativas;j++){
                arrayRolada = [];
                valorRolada =  0;
                for (i =0;i<roladas;i++){
                    rolada = Math.floor(Math.random() *dado)+1;
                    arrayRolada.push(rolada);
                }
                for(var i = 0; i < arrayRolada.length; i++) {
                    valorRolada += arrayRolada[i];
                }
            array.push("` "+((valorRolada+parseInt(soma)) * multiplica)+" ` <= "+arrayRolada.join())
            }
            //chamada = "("+tentativas + " (" + roladas +"d"+(dado+1)+"+"+soma+")*"+multiplica+"\n"
            chamada = " (" + roladas +"d"+(dado)+"+"+soma+")*"+multiplica+"\n"
            message.channel.send(chamada+array.join("\n"));
        } catch(e){
            console.log(e);
        }
    }
}
