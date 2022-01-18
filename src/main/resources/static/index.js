let btn = document.getElementById('btn-test-ajax');
let output = document.getElementById('ajax-output');

btn.addEventListener('click', () => {
    fetch('/hello').then(r => r.text()).then(t => {
        output.innerText = t;
    })
});
