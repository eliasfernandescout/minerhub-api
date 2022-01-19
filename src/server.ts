import cors from 'cors';
import exppress, { response } from 'express';

const axios = require('axios').default;

const app = exppress();
app.use(exppress.json());

app.use(
    cors({
        origin: '*',
    }),
);

const instance = axios.create({
    baseURL: 'https://api.f2pool.com/bitcoin/mattei2005',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});



app.get('/minerhubdata/:currency/:user', async (request, response) => {
    const { currency, user } = request.params;
    try {
        const { data } = await axios.get(`https://api.f2pool.com/${currency}/${user}`);
        console.log(data)
        response.send(data)
    } catch (error) {
        console.log(error)
    }
});

app.listen(5002, () => {
    console.log('SERVER STARTED ON PORT 5002');
});
