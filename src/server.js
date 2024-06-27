const express = require('express');
const app = express();
const path = require('path');

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'views')));

// Rota para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para conectar ao WhatsApp
app.get('/connect', (req, res) => {
    // Lógica para conectar ao WhatsApp aqui
    res.send('Conectado ao WhatsApp!');
});

// Definição da porta
const PORT = process.env.PORT || 3000; // Acessa a variável de ambiente diretamente

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});