const form = document.getElementById("form")
const submit = document.getElementById("submit")

submit.addEventListener('click', val)

function val (e) {

    e.preventDefault();
    form.reset()
}