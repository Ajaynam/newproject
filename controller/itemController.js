const db = require('../db/db');

exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { username, email };

  db.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    newUser.id = result.insertId;
    res.status(201).json(newUser);
  });
};

// controllers/itemController.js
// ...

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
  
    db.query('UPDATE users SET ? WHERE id = ?', [updatedItem, id], (err) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ ...updatedItem, id });
    });
  };
  
  exports.deleteItem = (req, res) => {
    const { id } = req.params;
  
    db.query('DELETE FROM users WHERE id = ?', id, (err) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ message: 'Item deleted successfully' });
    });
  };
  
