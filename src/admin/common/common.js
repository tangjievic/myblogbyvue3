function initVlitForm() {
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.setAttribute('data-valresult', '0')
            } else {
                form.setAttribute('data-valresult', '1')
            }
            form.classList.add('was-validated');
        }, false);
    });
}

export {
    initVlitForm,
}