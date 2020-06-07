'use strict'

document.getElementById('frmCalcular').addEventListener('submit', (event) => {
    var obj = {
        valorLauda: getValue('txtValorLauda'),
        quantidadeLauda: getValue('txtQuantidadeLauda'),
        txQuantidadeCaracteres: getValue('txQuantidadeCaracteres'),
    };

    if (validate(obj)) {
        exibirResultado(obj, calcular(obj));
    }

    event.preventDefault();
});

function exibirResultado(obj, calc) {
    setHTML('spValorLauda', obj.valorLauda);
    setHTML('spQuantidadeLauda', obj.quantidadeLauda);
    setHTML('spQuantidadeCaracteres', obj.txQuantidadeCaracteres);
    setHTML('spValorTrabalho', 'R$ ' + calc.toFixed(2));
}

function calcular(obj) {
    return (obj.txQuantidadeCaracteres * obj.valorLauda) / obj.quantidadeLauda;
}

function validate(obj) {

    if (obj.valorLauda <= 0) {
        alert('Informe o valor cobrado por lauda.');
        return false;
    }

    if (obj.quantidadeLauda <= 0) {
        alert('Informe a quantidade de caracteres por lauda.');
        return false;
    }

    if (obj.txQuantidadeCaracteres <= 0) {
        alert('Informe a quantidade de caracteres a ser revisado.');
        return false;
    }

    return true;

}

function getValue(el) {
    return document.getElementById(el).value;
}

function setHTML(el, value) {
    document.getElementById(el).innerHTML = value;
}

function help(event) {
    alert(event.getAttribute('data-help'));
}

function contarTextos() {

    var texto = getValue('txtContadorCaracteres');

    if (!document.getElementById('ckContarEspaco').checked) {
        texto =  texto.replace(/\s/g, '');
    }

    var quantidade = texto.length;

    document.getElementById('txQuantidadeCaracteres').value = quantidade;
    document.getElementById('modal').style.display = 'none';
}

function abrirContador() {
    document.getElementById('modal').style.display = 'block';
}

function limpar() {
    document.getElementById('txtContadorCaracteres').value = '';
}