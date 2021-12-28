module.exports = {
    name: 'cls',
    description: "Apaga X mensagens",
    async execute(message, args){
        if(!args[0]) return message.reply("defina um número de mensagens a apagar quanto tentar novamente")
        try{
            if (isNaN(args[0])) return message.reply("defina um número (int)")
        if(args[0]> 100 || args[0]<1) return message.reply("limite do comando são 1~100 mensagens")

        await message.channel.messages.fetch({limit: args[0]}).then(messages=>{
            message.channel.bulkDelete(messages);
        });
        }catch (e){
            console.log(e);
        }
    }
}