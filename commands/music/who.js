module.exports = {

        name: 'Who',
        aliases: ["who"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Hello Sir, I am a assistant of this Sarver. I can play music and Reply Message.');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Hello Sir, I am a assistant of this Sarver. I can play music and Reply Message.**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('**Hello Sir, I am a assistant of this Sarver. I can play music and Reply Message.**');
        }
        return message.channel.send('**Hello Sir, I am a assistant of this Sarver. I can play music and Reply Message.**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**Hello Sir, I am a assistant of this Sarver. I can play music and Reply Message.**")
      }
    }
};
