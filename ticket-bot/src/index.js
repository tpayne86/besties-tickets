const { config } = require('dotenv');
config();

const botConfig = require('./config');
const { intents, token } = botConfig;

const discordClient = new DiscordClient({intents}, token);

discordClient.login();