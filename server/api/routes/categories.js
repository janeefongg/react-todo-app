import express from 'express';
import Category from '../helpers/categories';
const router = express.Router();


router.get('/', (req, res) => {
  Category.getAll()
    .then(response => {
      res.send(response);
    });
});

router.post('/', (req, res) => {
  console.log(req.body.category);
  Category.postCategory(req.body.category)
    .then(response => {
      console.log('this is the response', response);
      Category.getAll()
        .then(function(response) {
          res.send(response);
        });
    })
});

module.exports = router;