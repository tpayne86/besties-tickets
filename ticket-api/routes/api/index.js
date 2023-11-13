const express = require('express');
const router = express.Router();

router.use('/guild', GuildRouter);

module.exports = router;