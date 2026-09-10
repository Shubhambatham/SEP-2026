const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Setup DB
const db = new sqlite3.Database('./branches.db');
db.run(`CREATE TABLE IF NOT EXISTS Branches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  location TEXT,
  city TEXT
)`);

// CREATE
app.post('/branches', (req, res) => {
  const { location, city } = req.body;
  db.run('INSERT INTO Branches (location, city) VALUES (?, ?)', [location, city], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, location, city });
  });
});

// READ (all)
app.get('/branches', (req, res) => {
  db.all('SELECT * FROM Branches', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// UPDATE
app.put('/branches/:id', (req, res) => {
  const { location, city } = req.body;
  db.run('UPDATE Branches SET location = ?, city = ? WHERE id = ?', [location, city, req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});

// DELETE
app.delete('/branches/:id', (req, res) => {
  db.run('DELETE FROM Branches WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.listen(5001, () => console.log('Server running on port 5001'));