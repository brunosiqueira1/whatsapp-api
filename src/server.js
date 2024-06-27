const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const whatsappRoutes = require('./routes/message');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use('/api', whatsappRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});