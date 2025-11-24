const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikcontroller = require('../controllers/komikcontroller');
const upload = multer({storage: multer.memoryStorage()});

router.post('/komik', upload.single('cover'), komikcontroller.createKomik);
router.get('/komik', komikcontroller.getAllKomiks);
router.get('/komik/:id', komikcontroller.getKomikById);
router.put('/komik/:id', upload.single('cover'), komikcontroller.updateKomik);
router.delete('/komik/:id', komikcontroller.deleteKomik);

module.exports = router;
