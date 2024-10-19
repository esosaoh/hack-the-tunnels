import axios from 'axios';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_URL;

export const sendDiscordNotification = async (message: string) => {
  try {
    await axios.post(DISCORD_WEBHOOK_URL, {
      content: message,
    });
  } catch (error) {
    console.error('Error sending Discord notification:', error);
  }
};
