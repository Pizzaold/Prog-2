const express = require('express');
const app = express();
const port = 3001;

const path = require('path');
app.use(express.static(path.join(__dirname, 'ID-Code-readeing-webside')));

const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ID-Code-readeing-webside', 'form.html'));
    }
);

const validId = require('./validate')

app.post('/validate', urlencodedParser, (req, res) => {
    console.log('post')
    console.log(req.body.id_code);
    //res.send(req.body.id_code);
    res.send(validId.idOutput(req.body.id_code))
    }
);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

