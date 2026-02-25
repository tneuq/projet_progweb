const express = require('express');
const app = express();
const port = 8080;

// On crée une route spécifique pour ce service
app.get('/service2', async (req, res) => {
  try {
    // Le Service 2 appelle le Service 1 via son nom Kubernetes "mon-service-1"
    const response = await fetch('http://mon-service-1:8080/');
    const data = await response.text();
    
    res.send(`Bonjour depuis le Service 2 ! <br> Et voici ce que me répond le Service 1 : <strong>"${data}"</strong>`);
  } catch (error) {
    res.status(500).send("Erreur : Impossible de joindre le Service 1. " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Service 2 en écoute sur le port ${port}`);
});