

export default class InteractionCreateEvent extends BaseEvent {
  constructor(client) {
    super(client);
  }

  async execute(interaction) {
    if (interaction.isChatInputCommand()) {
      const command = this.client.commands.get(interaction.commandName);

      if(!command) return;

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
          await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
      }
    }

    if (interaction.isButton()) {
      buttonInteractions[interaction.customId](interaction)();
    }
    if (interaction.isStringSelectMenu()) {
      stringSelectMenuInteraction[interaction.customId](interaction)();
    }
    if (interaction.isModalSubmit()) {
      modalSubmitInteraction[interaction.customId](interaction)();
    }
  }
}