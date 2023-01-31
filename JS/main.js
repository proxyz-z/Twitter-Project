let btn = document.getElementsByClassName('mainBtn')[0];
let main = document.getElementsByClassName('main')[0];
let mainInp = document.getElementById('mainInput');
btn.addEventListener('click', function() {
    if(!mainInp.value == '') {
        main.style.height = '10vh';
    }
});