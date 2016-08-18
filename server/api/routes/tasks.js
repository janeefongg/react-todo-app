import express from 'express';
import Task from '../helpers/tasks';
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.query.category) {
    res.send();
  } else {
    Task.getAll(req.query.category)
      .then(response => {
        res.send(response);
      });
  }
});

router.post('/', (req, res) => {
  Task.postTask(req.body.category, req.body.task)
    .then(response => {
      Task.getAll(req.query.category)
        .then(result => {
          res.send(result);
        });
    });
});

router.delete('/', (req, res) => {
  Task.removeTask(req.query.category, req.query.task)
    .then(response => {
      res.json({
        success: true
      });
    });
});

router.put('/', (req, res) => {
  Task.getAll(req.body.params.category)
    .then(response => {
      Task.updateTask(req.body.params.category, req.body.params.task, req.body.params.update, response)
        .then(result => {
          res.json({
            success: true
          })
        });
    });
});

module.exports = router;
