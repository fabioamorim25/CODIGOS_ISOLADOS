let btn = document.getElementById('btnToast');
let toast = document.getElementsByClassName('toast')[0]

btn.addEventListener('click', () => {
    var tst = new bootstrap.Toast(toast)
    tst.show()
})


