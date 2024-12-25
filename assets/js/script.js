let log = new  Log(document.querySelector('.log'));

let char = new Sorcerer ('Herói');
let monster = new Monstrinho();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();