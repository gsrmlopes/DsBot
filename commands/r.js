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
        if(!args[0])return message.reply("usos: $r 1d10\n$r 10#1d10\n$r 1d10+5\n$r 10#1d10+5\n$r 10#1d10\n$r 10#1d10 2\n$r 10#1d10+5 2\n$r [qnt rol]#[qnt dados]d[max dado]+[soma por rol] [multip. por rol]")
        base = args[0]
        try {
            base = args[0]
            if (base.includes("#")){
                tentativas = base.split('#')[0];
                roladas = base.split('#')[1].split('d')[0];
            }
            else {
                tentativas = 1;
                roladas = base.split('d')[0];
            }
            if (base.includes("+")){
                dado = base.split('d')[1].split('+')[0]
                soma = parseInt(base.split('+')[1]);
            } else{
                dado = base.split('d')[1];
                soma = 0;
            }
            if(!args[1]){
                multiplica = 1
            } else{
                multiplica = parseInt(args[1])
            }
            if(tentativas>75 || roladas>50 || dado -1 >99|| soma>99 ||multiplica >15 ) return message.channel.send("ERRO! Dado alto demais!");
            array = [];
            for (j =0;j<tentativas;j++){
                arrayRolada = [];
                valorRolada =  0;
                for (i =0;i<roladas;i++){
                    rolada = Math.floor(Math.random() *dado)+(1+parseInt(soma));
                    arrayRolada.push(rolada);
                }
                for(var i = 0; i < arrayRolada.length; i++) {
                    valorRolada += arrayRolada[i];
                }
            array.push("` "+(valorRolada * multiplica)+" ` <= "+arrayRolada.join())
            }
            //chamada = "("+tentativas + " (" + roladas +"d"+(dado+1)+"+"+soma+")*"+multiplica+"\n"
            chamada = " (" + roladas +"d"+(dado)+"+"+soma+")*"+multiplica+"\n"
            message.channel.send(chamada+array.join("\n"));
        } catch(e){
            console.log(e);
        }
    }
}
