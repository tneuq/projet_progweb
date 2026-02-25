const express = require('express');
const { Pool } = require('pg'); // Import du module PostgreSQL
const app = express();
const port = 8080;

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'monutilisateur',
  host: 'postgres-service', // Le nom du Service Kubernetes de la DB
  database: 'mabase',
  password: 'monmotdepasse',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    // On fait une requête simple à la base de données
    const result = await pool.query('SELECT NOW() as heure_actuelle');
    const heureDb = result.rows[0].heure_actuelle;
    
    res.send(`Hello ! Mon premier service fonctionne.<br>Connexion DB réussie ! Heure de la base : <strong>${heureDb}</strong>`);
  } catch (error) {
    res.status(500).send("Erreur de connexion à la DB : " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Service 1 en écoute sur le port ${port}`);
});