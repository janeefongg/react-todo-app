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

router.delete('/', (req, res) => {
  console.log('inside delete function on server');
  Category.deleteCategory(req.query.category)
    .then(function(response) {
      Category.getAll()
        .then(function(result) {
          res.send(result);
        })
    })
})

module.exports = router;