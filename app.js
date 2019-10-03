const express = require('express');
const app = express();

const GosReg = require('./checkers/gos-reg');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/gos-reg', async function (req, res) {

    // Говорим что начали работу и закрываем соединение
    res.send('OK');

    const gosReg = new GosReg({
        name: '',
        inn: '7703402683'
    });

    const resp = await gosReg.registered();

    // отсылаем данные на наш сервер
    console.log(resp.data);

    console.log('End');
});

app.listen(3333, function () {
    console.log('Example app listening on port 3333!');
});
