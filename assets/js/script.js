const char = createKnight('Guerreiro');
const monster = createMonstrinho();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)