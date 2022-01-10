module.exports = {

        name: 'nothing',
        aliases: ["Nothing"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Good');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Good**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**Good**');
        }
        return message.channel.send('**Good**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**Good**")
      }
    }
};
