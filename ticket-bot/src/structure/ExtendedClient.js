import logger from "../utils/logger";

const { Collection } = require("discord.js");
const fs = require('node:fs');
const path = require('node:path')
const { DISCORD_CLIENT_ID } = require("../utils/constants");

export default class ExtendedClient extends Client {
  config;
  commands;

  constructor(options, config) {
    super(options);

    this.config = config;

    this.commands = new Collection();
    this.loadEvents();
  }

  msToHm (ms) {
    if(ms instanceof Date) ms = ms.getTime();

		const days = Math.floor(ms / (24 * 60 * 60 * 1000));
		const daysms = ms % (24 * 60 * 60 * 1000);
		const hours = Math.floor(daysms / (60 * 60 * 1000));
		const hoursms = ms % (60 * 60 * 1000);
		const minutes = Math.floor(hoursms / (60 * 1000));
		const minutesms = ms % (60 * 1000);
		const sec = Math.floor(minutesms / 1000);

		let result = "0s";

		if (days > 0) result = `${days}d ${hours}h ${minutes}m ${sec}s`;
		if (hours > 0) result = `${hours}h ${minutes}m ${sec}s`;
		if (minutes > 0) result = `${minutes}m ${sec}s`;
		if (sec > 0) result = `${sec}s`;
		return result;
  }

  loadEvents () {
		this.on("interactionCreate", (interaction) => new InteractionCreateEvent(this).execute(interaction));
		this.on("ready", () => new ReadyEvent(this).execute());
	}

  deployCommands() {
		const commands = [
			AddCommand.data.toJSON(),
			ClaimCommand.data.toJSON(),
			CloseCommand.data.toJSON(),
			RemoveCommand.data.toJSON(),
			RenameCommand.data.toJSON()
		];

		const { guildId } = jsonc.parse(fs.readFileSync(path.join(__dirname, "../../config/config.jsonc"), "utf8"));

		if(!process.env["TOKEN"]) throw Error("Discord Token Expected, deploy-command");
		const rest = new REST({ version: "10" }).setToken(process.env["TOKEN"]);

		rest
			.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands })
			.then(() => console.log("✅  Successfully registered application commands."))
			.catch(console.error);
	}
}