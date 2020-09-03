function opcao1() {
    document.getElementById('label1').innerHTML = 'Peso:';
    document.getElementById('label2').innerHTML = 'Altura:';
    document.getElementById('campo2').hidden = false;
}

function opcao2() {
    document.getElementById('label1').innerHTML = 'Base:';
    document.getElementById('label2').innerHTML = 'Altura:';
    document.getElementById('campo2').hidden = false;
}

function opcao3() {
    document.getElementById('label1').innerHTML = 'Raio:';
    document.getElementById('label2').innerHTML = '';
    document.getElementById('campo2').hidden = true;
}

function calcular() {
    var radios = document.getElementsByName('radio');
    var opcao = 0;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            opcao = radios[i].value;
        }
    }

    var campo1 = document.getElementById('campo1').value;

    // IMC
    if (opcao == 1) {
        var campo2 = document.getElementById('campo2').value;

        if (campo1 == '' || campo2 == '') {
            alert('Informe os valores');
            return;
        }

        alert(campo1 / (campo2 * 2));
    // Retângulo
    } else if (opcao == 2) {
        var campo2 = document.getElementById('campo2').value;

        if (campo1 == '' || campo2 == '') {
            alert('Informe os valores');
            return;
        }

        alert(campo1 * campo2);
    // Círculo
    } else {
        if (campo1 == '') {
            alert('Informe o valor');
            return;
        }

        alert(2 * 3.14 * campo1);
    }
}