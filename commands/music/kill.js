module.exports = {

        name: 'kill',
        aliases: ["Kill"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Please do not kill Anyone!');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Please do not kill Anyone!**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**Please do not kill Anyone!**');
        }
        return message.channel.send('**Please do not kill Anyone!**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**Please do not kill Anyone!**")
      }
    }
};
