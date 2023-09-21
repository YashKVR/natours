const app = require('./app');


// Start The Server
const port = 3000;
app.listen(port, () => {
    console.log(`App running on Port: ${port}...`);
})