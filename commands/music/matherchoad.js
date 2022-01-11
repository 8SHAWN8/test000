module.exports = {

        name: 'mather',
        aliases: ["matherchod"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Sorry Sir, i can,t Dance. But i can sing a Song');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Sorry Sir, i can,t Dance. But i can sing a Song**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**Sorry Sir, i can,t Dance. But i can sing a Song**');
        }
        return message.channel.send('**Sorry Sir, i can,t Dance. But i can sing a Song**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**Sorry Sir, i can,t Dance. But i can sing a Song**")
      }
    }
};
