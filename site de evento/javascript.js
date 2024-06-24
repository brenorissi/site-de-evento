document.addEventListener('DOMContentLoaded', (event) =>{
    const b1 = document.getElementById('bplay');
    b1.addEventListener('click', () => {
        window.location.href = 'telaplay.html';
    })
})

document.addEventListener('DOMContentLoaded', (event) =>{
    const b2 = document.getElementById('bxbox');
    b2.addEventListener('click', () => {
        window.location.href = 'telaxbox.html';
    })
})

document.addEventListener('DOMContentLoaded', (event) =>{
    const b3 = document.getElementById('bnin');
    b3.addEventListener('click', () => {
        window.location.href = 'telanin.html';
    })
})

document.getElementById('submit').onclick = function(event) {
    event.preventDefault();
    alert('Compra realizada!');
    document.getElementById('form1').reset();
}