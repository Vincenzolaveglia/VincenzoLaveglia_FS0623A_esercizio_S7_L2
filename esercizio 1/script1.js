function saveName() {
    const name = document.getElementById('name').value
    localStorage.setItem('userName', name)
    showValue()
}

function deleteName() {
    localStorage.removeItem('userName')
    showValue()
}

function showValue() {
    const savedValue = localStorage.getItem('userName');
    const elementValueSaved = document.getElementById('savedValue');

    if (savedValue) {
        elementValueSaved.textContent = 'Valore salvato: ' + savedValue;
    } else {
        elementValueSaved.textContent = '';
    }
}

showValue()