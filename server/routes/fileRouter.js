const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const fileController = require('../controllers/fileController');

router.post('/api/files', authMiddleware, fileController.createDir);
router.post('/api/files/all', authMiddleware, fileController.fetchFiles);

module.exports = router;
