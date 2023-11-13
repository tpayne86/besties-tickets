const express = require('express');
const router = express.Router();

router.use('/guilds', GuildRouter);

module.exports = router;