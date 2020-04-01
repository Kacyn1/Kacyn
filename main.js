document.getElementById('submit').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    if(name.match(/[A-Z][a-z]+ [A-Z][a-z]+/)){
        alert('poprawne');
    } else {
        alert('nie poprawne');
    }
})