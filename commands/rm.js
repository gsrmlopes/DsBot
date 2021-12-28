module.exports = {
    name: 'rm',
    description: "Roda um Dadado com argumentos",
    execute(message, args){
        // Define o uso caso requisitado
        if(!args[0])return message.reply("Uso mpultiplo do $r\nUso: $rm dado_1 dado_2 dado_n");
        try{
            if(args.length>10) return message.reply("Erro! rode menos dados!");
            //array pra mandar a mensagem final
            arrayMaster=[];
            for(k=0;k<args.length;k++){
                //define valores iniciais
                tentativas = 1;
                roladas = 1;
                dado = 1;
                soma = 0;
                multiplica = 1;
                //sequência para cada array
                base = args[k].toLowerCase();
                //pega se tem múltiplas tentativas (talvez desabilitar?) e qual o número de dados a serem somados
                if (base.includes("#")){
                    tentativas = base.split('#')[0];
                    roladas = base.split('#')[1].split('d')[0];
                }
                else {
                    tentativas = 1;
                    roladas = base.split('d')[0];
                }
                //verifica se tem ou não acréscimo, o valor do dado e se há multiplicação
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
                // verifica se está dentro dos limites do bot
                //(estudar diminuir esses valores)
                if(tentativas>75 || roladas>50 || dado -1 >99|| soma>100 ||multiplica >15 ) return message.channel.send("ERRO! Dado alto demais!");
                //define um array para o total do dado
                array = [];
                //testa cada tentativa definida por "n#"
                for (j =0;j<tentativas;j++){
                    //cria um array pra uma tentativa com múltiplos dados "nD"
                    arrayRolada = [];
                    //define valor 0 pra começar uma tentaiva sem soma prévia
                    valorRolada =  0;
                    for (i =0;i<roladas;i++){
                        //randomiza a jogada
                        rolada = Math.floor(Math.random() *dado)+1;
                        //manda o resultado para o array de valores
                        arrayRolada.push(rolada);
                    }
                    for(var i = 0; i < arrayRolada.length; i++) {
                        valorRolada += arrayRolada[i];
                    }
                array.push("` "+((valorRolada+parseInt(soma)) * multiplica)+" ` <= "+arrayRolada.join())
            }
            arrayMaster.push(array.join());
            }
        // console.log("Array Master:"+arrayMaster.join())
        message.channel.send(arrayMaster.join("\n"));
        } catch (e){
            console.log(e);
        }
    }
}