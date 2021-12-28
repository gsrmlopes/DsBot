module.exports = {
    name: 'help',
    description: "Comando de ajuda básico",
    execute(message, args){
        try{
            args[0].toLowerCase();
            if (!args[0])
            message.channel.send('comandos:\nr -> rola um dado ou multiplos dados iguais\nrm -> roda dados diferentes juntos\ncls -> se o usuário possuir permissão, aparaga n mensagens\nuse $help <comando> para mais informações!')
            if (args[0] == "r")
            message.reply("Csos: $r 1d10\n$r 10#1d10\n$r 1d10+5\n$r 10#1d10+5\n$r 10#1d10\n$r 10#1d10 2\n$r 10#1d10+5*2\n$r [qnt rol]#[qnt dados]d[max dado]+[soma por rol] * [multip. por rol]\n\n Limites: Tentativas> 75\nDados somados 50\nDado máximo D100\n Soma Máxima100\nmultiplicação máxima 15 ")
            if (args[0] == "rm")
            message.reply("Uso múltiplo do $r\nUso: $rm dado_1 multiplicador_dado_1 dado_2 multiplicador_dado_2 dado_n multiplicador_dado_n\n limite: 10 dados")
            if (args[0] == "cls")
            message.reply("Apaga até 100 mensagens anteriores (99+ o comando)\nUso: $cls 2~100")
        }catch(e){console.log(e)}
    }
}