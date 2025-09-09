"use strict"

document.addEventListener('DOMContentLoaded', function (){
    const form = document.querySelector('.mail--send-form');
    form.addEventListener('submit', formSend);
        async function formSend(e) {
            e.preventDefault();
    
            let formData = new FormData(form);
           
            let response = await fetch('mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                document.querySelector('#modal-success').classList.add('active')
                formPreview.innerHTML = '';
                form.reset();
            }else {
                 alert('Ошибка!');
            }
           
        }

});