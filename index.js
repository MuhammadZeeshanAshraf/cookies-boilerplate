const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: ['http://127.0.0.1:5173']
}));

app.get('/', (req, res) => {
   const { token }  = req.cookies; 
    console.log(token);
  const date = req.cookies.date;
  console.log(req.cookies);
  res.send(`Date from cookies: ${date}`);
});

// Endpoint for setting cookies
app.get('/set-cookies', (req, res) => {
    // Set cookies with some data
    res.cookie('username', 'john_doe');
    res.cookie('language', 'en-US');
    res.cookie('theme', 'dark');
  
    // Send a response indicating the cookies were set
    res.send('Cookies set successfully');
  });
  
  // Endpoint for retrieving cookies
  app.get('/get-cookies', (req, res) => {
    // Retrieve the cookies from the request object
    const username = req.cookies.username;
    const language = req.cookies.language;
    const theme = req.cookies.theme;
  
    // Send a response with the cookie values
    res.send(`
      Username: ${username}<br>
      Language: ${language}<br>
      Theme: ${theme}<br>
    `);
  });
  


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
