module.exports = {

        name: 'bot',
        aliases: ["Bot"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Already online Sir , I am standby with you. How Can i help you? Sir');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Already online Sir , I am standby with you. How Can i help you? Sir**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**Already online Sir , I am standby with you. How Can i help you? Sir**');
        }
        return message.channel.send('**Already online Sir , I am standby with you. How Can i help you? Sir**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**Already online Sir , I am standby with you. How Can i help you? Sir**")
      }
    }
};
