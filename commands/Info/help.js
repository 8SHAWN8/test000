const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help <a:yes:883112081614852156>`)
    .setImage("https://i.ibb.co/DwZQS4R/standard.gif")
    .setDescription(` Hello **${message.author.username}**, \n *Choose an category below to see commands* \n\n :question: New to ${bot}? Check out server \n https://discord.gg/x9sDrnf7cT \n\n Also Join Check ToXic Fighters High Quality Music BOT w/ Dashboard  [](https://discord.com/oauth2/authorize?client_id=829542348085526569&permissions=2205281600&scope=bot%20identify%20guilds%20applications.commands&redirect_url=https://yuimusic.imnothingspecialjustcultured.repl.co/api/callback&response_type=code)`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#c90a1d")
    .setFooter(`Requested by: ${message.author.tag}`)


    const music = new Discord.MessageEmbed()
    .setColor("#c90a1d")
    .setTitle(`${bot} Music <a:yes:883112081614852156>`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the music commands: \n\n \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,  \`volume\``)
    .setFooter(`Requested by: ${message.author.tag}`)



    const info = new Discord.MessageEmbed()
    .setColor("#c90a1d")
    .setTitle(`${bot} Info <a:yes:883112081614852156>`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the Info commands: \n\n \`help\`, \`invite\`, \`setprefix\`,  \`setpre\``)
    .setFooter(`Requested by: ${message.author.tag}`)


    let button1 = new MessageButton()
    .setLabel(`Music`)
    .setID(`music`)
    .setStyle("blurple");
    

    let button2 = new MessageButton()
    .setLabel(`Info`)
    .setID(`info`)
    .setStyle("green");

    let button3 = new disbut.MessageButton()
    .setStyle('url')
    .setLabel('💌Support Server') 
    .setURL(`${support}`);



    let row = new MessageActionRow()
    .addComponents(button1, button2, button3);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }


    });


   
}};
