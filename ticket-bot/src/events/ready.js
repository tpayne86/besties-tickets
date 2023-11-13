import logger from "../utils/logger";

export default class ReadyEvent extends BaseEvent {
  connected = false;

  constructor(client) {
    super(client);   
  }

  async execute() {
    logger.info(`Client is ready and has been initialized`);
  }
}