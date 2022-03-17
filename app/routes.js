const router = require('express').Router();

router.use('/api/v1/tickets', require('../routes/ticket'));

router.get('/health', (_req, res) => {
    // const error = new Error('New Error');
    // error.status = 400;
    // throw error;
    res.status(200).json({ massage: 'Success' });
});

module.exports = router;