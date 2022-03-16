function adicionar() {
let sel = document.getElementById('txts')
let num = document.getElementById('txtn')

    if(num.value < 1 && num.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        alert('OK!')
        let n = Number(num.value)
        
    }
}

