/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2349011865654','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2Y6jSBD8l3q1NQ3Y+EBqaQHT2NjY2MYXq3kooIAyp6uKyyP/+4g+pkda7WzvW50ZkRmR+QNkOaZoiVog/QAFwRVkqFuytkBAAkoZBIiAPvAhg0ACmqa3lRiZ+fGmGuUy2muqWa8OPTMXl72bO4wXaVzHvHPU5Wfw6IOidBPs/SHg+NTcWBTw6d6uz8iIxKO+lvUnr7Jv2XqgNqcX6xwr1/hwnjyDRxcRYoKzUCsilCICkyVqLYjJ1+iX2o3z/UAbOU9HETpk3YjJ8XIPtJQqjlMZvjDz8KRRnDP9Iv1psbKrqBajS3idh95148KemSfLWN/wPAvtGvpH+Sy2cv5Gn+IwQ/7CRxnDrP1y3fPZOBZhMiQLEu92lZ8HdXiN3EK+XuUBE7y80AelOQ2H88nXiGexgO4ncVWs55mVT2v7NMp7ut428f2g6E/Hm7p2vXoct6r5O3GLfHgl/j91v82Hjmu/DKZ0FtQv8WoZFZ7nX6LFwstNL9xyJYy9q8dxX7XNibARm1WFHywPZVa4Ez7Dnl+1LKknG2ebDaZ3g1Wcm8bcJ33ISvInlnzT4/Hw0D6xs20Y10Zpa7xa76JZ2PKmjvz5RJgYTiKLL/4ap7QR1OOqTBttoEVb4nnBuV557t0o69E5cvSZRU50K8vPrxnFqF34QOIffUBQiCkjkOE8686Goz6AfrVHHkHstbpAWzqHynWWZ1uPUyyKW/d6tJC+0HhreSnEKIrUPNWfoCMenkEfFCT3EKXIn2PKctKaiFIYIgqkv7/3QYYa9qZbhzbg+yDAhLJDVhZJDv0PUT8uoeflZcb2beap3QIRIHGfx4gxnIW0K2OZQeJFuEJqBBkFUgATin4liAjygcRIiX41rZr7Xd1FgzdW47UN+iB91QP7QALCYDjleH4yEkfiUBqLf9FvdRcXFsW3DDHQBxnsnoPdRlmsQR8kb9/GosBNOUHgptPRYNR97C4evxh3AD5iECcUSEA1T268HiqaNTuPzFrXZS2U1VAGnxl+OOVNCnV5J/drvcehZomBqqbTtG62L9tYwMfNPBj7F3kRo/TSdp33zyBAAo2w4zZrRYvutZhaauPV3iG9UF6rbvVgtr8sb7YxJJVyFnnXNI3rJbNH6DhbBPOb7Fq8vhlv61gsTulEx5BDmu7UVA2fOzQfVdhDv4PxmpDty2CyaisN8kYv8qweFwmjSNWcaVpOhJ3G4rm+KJ921vrs6McgmtJwsXVst4mTTQgbX5DPWVSaFTTHq1Cw05767uHXHkreZxd+tVenXbcNMHodBe8S/beWb8w7z3GP/m9B3qfLv3SossV0NBlOtDxXZr1zHRaVQ82DcjDWeWJHg97gJKvGvEjN6Ak8Ht/7oEggC3KSAgnQ1IWgD0hedg5eZEH+ByRV5hbKNlS7vBNImfzZFTZOEWUwLYDEj8f8mOeHk9HbK4vkxRzSqBuw6UBxweMn3UeSdGEHAAA=
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
