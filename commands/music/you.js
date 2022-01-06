module.exports = {

        name: 'you',
        aliases: ["You"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('i am good');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Well:)**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**i am good**');
        }
        return message.channel.send('**i am good**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**i am good**")
      }
    }
};
