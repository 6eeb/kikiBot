const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile <= 0){
        console.log("Commands not found.");
        return;
    };

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} has loaded :D`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = config.prefix

    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    if(message.content.indexOf(prefix) !== 0) return;
});


function changing_status() {
    let status = [`${bot.users.size} Users!`, 'k!help', `${bot.guilds.size} Servers!`]
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
}

bot.on("ready", () => {
    console.log("Kiki is ready!");
    setInterval(changing_status, 3000);
})

bot.login(config.token);