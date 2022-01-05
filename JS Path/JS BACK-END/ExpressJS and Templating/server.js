const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello fron .get')
    res.send('HEllo express server from world!')
})

app.post('/cats', (req, res) => {
    res.send('Create world!')
})


app.put('/cats/', (req, res) => {
    
    res.send('Put!')
})

app.all('/', (req, res)=> {
    console.log('Handle all!');
})



app.listen(3000, () => console.log('Server is listening on port 3000'))