const express = require('express');
const { getActions, getSingleActions } = require('../controller/action');

const router = express.Router();

router.route('/actions').get(getActions);
router.route('/action:id').get(getSingleActions)

module.exports = router;