module.exports = {

        name: 'die',
        aliases: ["Die"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('I am not going to die !, You die');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**I am not going to die !, You die**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**I am not going to die !, You die**');
        }
        return message.channel.send('**I am not going to die !, You die**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**I am not going to die !, You die**")
      }
    }
};
