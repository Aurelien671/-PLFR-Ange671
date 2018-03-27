const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('message',function(message){
    if (message.content ==='!helpMusique'){
        message.reply('!!!play <link> pour commencer à jouer une chanson,!!!stop pour arrêter de jouer et partir.')
    }
})

bot.on('message',function(message){
    if (message.content ==='Bonne nuit'){
        message.reply('Dors-bien :)')
    }
})

bot.on('message',function(message){
    if (message.content ==='salut ange671'){
        message.reply('Salut')
    }
})

bot.on('message',function(message){
    if (message.content ==='slt ange671'){
        message.reply('Salut')
    }
})

bot.on('message',function(message){
    if (message.content ==='hi ange671'){
        message.reply('Hi')
    }
})

bot.on('message',function(message){
    if (message.content ==='Hi Ange671'){
        message.reply('Hi')
    }
})

bot.on('message',function(message){
    if (message.content ==='slt Ange671'){
        message.reply('Salut')
    }
})

bot.on('message',function(message){
    if (message.content ==='Salut Ange671'){
        message.reply('Salut')
    }
})

bot.on('message',function(message){
    if (message.content ==='bonne nuit'){
        message.reply('Dors-bien :)')
    }
})

bot.on('message',function(message){
    if (message.content ==='bonjours'){
        message.reply('bonjour')
    }
})



bot.login('NDA4NzAxODQyNDI0NTk0NDMz.DZxK2g.S8YZ6GaV6VpFccmxMutH9eqo5DY');
