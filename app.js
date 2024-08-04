import tabela2024 from './tabela.js'
import express, { response } from 'express';
import { modeloTime,atualizaTime } from './validacao.js';

const app = express();
app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(tabela2024);

});

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    const time = tabela2024.find((infoTime) => infoTime.sigla === siglaInformada);
    if (!time) {
        resposta.status(404).send('Time não encontrado');
        return
    }
    resposta.status(200).send(time)
});

app.put('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    const time = tabela2024.find((infoTime) => infoTime.sigla === siglaInformada);
    if(!time){
        resposta.status(404).send("Time informado não existe na série A")
        return
    }
    const {error} = atualizaTime.valid(requisicao.body)
    if(error){
        resposta.status(400).send(error)
    }
    const campos = Object.keys(requisicao.body);
    for (let campo of campos);
    time[campo] = requisicao.body[campo];
    resposta.status(200).send(time)
});

app.post('/', (requisicao, resposta) => {
    const novoTime = requisicao.body;
    const{error} = modeloTime.validate(novoTime)
    if(error){
        resposta.status(400).send(error)
        return
    }
    tabela2024.push(novoTime)
    resposta.status(200).send(novoTime)
});

app.delete('/:sigla',(requisicao,resposta)=> {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    const indexTime = tabela2024.findIndex((infoTime)=> infoTime.sigla=== siglaInformada);
    if(indexTime===-1){
        resposta.status(404).send("Time informado não existe na série A")
        return
    }
    const timeRemovido = tabela2024.splice(indexTime,1);
    resposta.status(200).send(timeRemovido);

});

app.listen(300, () => console.log('Servidor rodando'));
