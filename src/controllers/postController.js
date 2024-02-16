const router = require('express').Router();
const creatureService = require('../service/creatureService');

router.get('/all', async (req, res) => {
    const creatures = await creatureService.getAll().lean();

    res.render('post/all-posts', { creatures });
})

router.get('/create', (req, res) => {
    res.render('post/create');
})
router.post('/create', async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description } = req.body;
    const payload = { name, species, skinColor, eyeColor, image, description, owner: req.user };

    await creatureService.create(payload);

    res.redirect('/posts/all')
})

router.get('/profile', (req, res) => {
    res.render('post/profile');
});

router.get('/:creatureId/details', async (req, res) => {
    const { creatureId } = req.params;
    const creature = await creatureService.singleCreature(creatureId).lean();

    res.render('post/details', { creature });
})

module.exports = router