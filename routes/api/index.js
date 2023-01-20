const router = require('express').Router();
const notesRoutes = require('../api/notes');

router.use(notesRoutes)

module.exports = router