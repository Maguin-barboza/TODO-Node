const app = require('../src/app.js');

const port = 3000;
app.set('port', port);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})