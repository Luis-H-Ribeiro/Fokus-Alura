const html = document.querySelector('html');
const focoBt = document.getElementsByClassName('app__card-button--foco')[0];
const curtoBt = document.getElementsByClassName('app__card-button--curto')[0];
const longoBt = document.getElementsByClassName('app__card-button--longo')[0];

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
});

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
});

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto','descanso-longo')
});