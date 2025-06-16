function fn(cb){
    console.log('executar função de callback');
    console.log(typeof cb);
    cb();
}

// Pode-se passar uma função como parâmetro
fn(function(){
    console.log('executar função de callback dentro da fn');
});

function callback(){
    console.log('executar função de callback dentro da fn');
}

// Da pra se fazer assim também
fn(callback);

const objeto = {
    nome : "teste",
    callback
}

// E pode-se colocar dentro de um objeto
objeto.callback();