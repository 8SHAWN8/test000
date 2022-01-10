module.exports = {

        name: 'what can you do?',
        aliases: ["What can you do?"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('SIR , I can Play Music and do chats');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**SIR , I can Play Music and do chats**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**SIR , I can Play Music and do chats**');
        }
        return message.channel.send('**SIR , I can Play Music and do chats**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**SIR , I can Play Music and do chats**")
      }
    }
};
