document.addEventListener('DOMContentLoaded', function () {
    bot_autoaj = document.querySelector('.autoaj');
    bot_ajudar = document.querySelector('.ajudar');
    tipo_de_ajuda = document.querySelector('.tipo_de_ajuda');
    guias = document.querySelectorAll('#guia');

    bot_autoaj.addEventListener('click', function () {
        tipo_de_ajuda.innerHTML = 'Auto Ajuda';
        guias.forEach(function (guia) {
            guia.style.backgroundColor = '#46d49f';
            guia.href = 'emergencia_video_autoaj.html';
        });
    });

    bot_ajudar.addEventListener('click', function () {
        tipo_de_ajuda.innerHTML = 'Ajudar Alguém';
        guias.forEach(function (guia) {
            guia.style.backgroundColor = '#56adc6';
            guia.href = 'emergencia_video.html';
        });
    });
});
