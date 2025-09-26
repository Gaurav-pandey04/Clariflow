const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello, from clariflow server!");
});

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the server! This is data from your Express backend." });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});