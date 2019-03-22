// Load dependencies
const express = require('express'); // Minimalist web application framework 
const cors = require('cors');       // Allow Cross-Origin Resource Sharing
const helmet = require('helmet');   // Protect express app by setting HTTP headers
const morgan = require('morgan');   // Allow logging of app activities to stdout

// Initialize microservice and load middleware
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Advice data
// TODO: Replace w/ in-memory datastore (ex. Redis)
const advice = [
	'Go all out!',
	'Take it easy!',
	'Put it off till tomorrow',
	'Seize the day',
	'Set it and forget it',
	'Put 5 on it!',
	'Meditate on it :)'
];

// Define microservice routes
// HTTP GET endpoint - Random advice
app.get('/', (req, res)=>{
	res.json({advice: advice[Math.floor(Math.random() * advice.length)]});
});
// HTTP GET endpoint - Health check for autoscaling
app.get('/health', (req, res)=>{
	res.send('healthy');
});


// Enable server listener on TCP port 3000 
app.listen(3000, ()=>{
	console.log(`Server started on port 3000`);
});