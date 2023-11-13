const { REST, Routes } = require('discord.js');

const Config = require('../config');

export const registerCommands = (commands) => {
  const commandsToRegister = Array.from(commands.values().map(command => command.data?.toJSON()))

  const rest = new REST().setToken(Config.token)

  const routes = routeBuilder(Config);

  rest.put(route, {body: commandsToRegister});
}

const routeBuilder = ({clientId, guildId}) => guildId ? Routes.applicationGuildCommands(clientId, guildId) : Routes.applicationCommands(clientId);