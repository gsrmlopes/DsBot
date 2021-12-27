module.exports = {
    name: 'r',
    description: "Roda um Dadado com argumentos",
    execute(message, args){
        tentativas = 1;
        roladas = 1;
        dado = 1;
        soma = 0;
        multiplica = 1;
        if(!args[0])return message.reply("use: $r [número de rodadas]#[quantidade de dados]d[valor do dado]+[soma ao valor rolado] [multiplicaçao do resultado]\n\nExemplo: $rolada 3#1d10+4\n\nOu com multiplicação no final, exemplo: 1#1d3+0 3")
        tem_complemento= false
        base = args[0]
        if (args[1]!= null){
            complementp = args[1]
            tem_complemento = true
        }
        if (tentativas == base.split('#')[0] >75 || roladas == base.split('#')[1].split('d')[0]>=50 || dado == base.split('d')[1].split('+')[0] -1 >=100 ||base.split('+')[1]>=100 || multiplica == args[1]>15) return message.reply("ERRO! dado alto de mais!");
      try {
        if(tem_complemento == false){
            tentativas = base.split('#')[0];
            roladas = base.split('#')[1].split('d')[0];
            dado = base.split('d')[1].split('+')[0]
            if (base.split('+')[1] == null){
                soma = 0;
            } else {
                soma = base.split('+')[1];
            }
            multiplica = 1;
            array = [];
            for (j =0;j<tentativas;j++){
                arrayRolada = [];
                valorRolada =  0;
                for (i =0;i<roladas;i++){
                    rolada = Math.floor(Math.random() *dado)+(1+parseInt(soma));
                    console.log(rolada)
                    arrayRolada.push(rolada);
                }
                for(var i = 0; i < arrayRolada.length; i++) {
                    valorRolada += arrayRolada[i];
                }
            array.push("` "+valorRolada+" ` <= "+arrayRolada.join())
            }
            chamada = "("+tentativas + " " + roladas +"d"+(dado+1)+"+"+soma+")*"+multiplica+"\n"
            message.channel.send(chamada+array.join("\n"));
        } 
        else {
            tentativas = base.split('#')[0];
            roladas = base.split('#')[1].split('d')[0];
            dado = base.split('d')[1].split('+')[0] -1
            if (base.split('+')[1] == null){
                soma = 0;
            } else {
                soma = base.split('+')[1];
            }
            multiplica = args[1];
            array = [];
            for (j =0;j<tentativas;j++){
                arrayRolada = [];
                valorRolada =  0;
                for (i =0;i<roladas;i++){
                    rolada = Math.floor(Math.random() *dado)+(2+parseInt(soma));
                    arrayRolada.push(rolada);
                }
                for(var i = 0; i < arrayRolada.length; i++) {
                    valorRolada += arrayRolada[i];
                }
            array.push("` "+(valorRolada * multiplica)+" ` <= "+arrayRolada.join())
            }
            chamada = "("+tentativas + " (" + roladas +"d"+(dado+1)+"+"+soma+")*"+multiplica+"\n"
            message.channel.send(chamada+array.join("\n"));
        }
    } catch(e) {
        message.channel.send("Uso incorreto!");
    }
}
}
