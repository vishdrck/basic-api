import * as express from 'express';

let app: express.Application = express();

app.get('/',function (request:express.Request,response: express.Response ) {
    response.send('Get is working');
});

app.post('/', function (request: express.Request,response: express.Response) {
    response.send('Post is working');
});

app.get('/profile', (request: express.Request, response: express.Response) => {
    response.json({'name' : 'Vishwajith','age': 24 , 'location': 'Colombo'});
});

app.listen(2000, function() {
    console.log('Express API is listening on port ' + 2000);
});