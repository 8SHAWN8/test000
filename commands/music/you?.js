module.exports = {

        name: 'you?',
        aliases: ["You?"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('I am pretty well');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Feeling good :)**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**I am pretty well**');
        }
        return message.channel.send('**I am pretty well**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**I am pretty well**")
      }
    }
};
