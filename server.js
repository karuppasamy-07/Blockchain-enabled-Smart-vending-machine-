const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle GET requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
