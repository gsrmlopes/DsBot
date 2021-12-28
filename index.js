const Discord = require('discord.js');

const Client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const Config = require("./config.json");

const fs = require('fs');

Client.commands = new Discord.Collection();

const CommandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const File of CommandFiles){
    const Command = require(`./commands/${File}`)
    Client.commands.set(Command.name, Command);
}


Client.once("ready", () =>{
    console.log("bot Online!")
}

)
Client.on('message', message =>{
    if(!message.content.startsWith(Config.prefix) || message.author.bot) return;
    const Args = message.content.slice(Config.prefix.length).split(/ +/);
    const Command = Args.shift().toLowerCase();
    if(Command === 'help'){
        Client.commands.get('help').execute(message,Args);
    } else if(Command === 'r'){
        Client.commands.get('r').execute(message,Args);
    }else if(Command === 'rm'){
        Client.commands.get('rm').execute(message,Args);
    } else if (Command === 'cls'){
        Client.commands.get('cls').execute(message,Args);
    }
}
)








Client.login(Config.token)