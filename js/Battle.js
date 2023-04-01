let pkm_pick = Cookies.get(`save_pick`)
if(!(pokemon_jsnon===undefined)){
    pokemon=JSON.parse(pkm_pick)
}
function spawn(details){
    let p = pokemon_list[Math.floor(math.random()*pokemon_list.length)];
    let pokemon_list = new pkm(p[0], p[1], p[2], p[3]);
    if(details){
        for (i=0 ; i<pkm ; i++){
            document.getElementById(`move_` + i).value = pokemon[`moves`];
        }
    }
    return pkm;
}
let player_1 = spawn(true)
player_1 = document.getElementById(`plyer_img`)
player_1.src = pokemon.Sprite

let player_2 = spawn(false)
player_2 = document.getElementById(`ai_img`)
player_2.src = pokemon.Sprite

for(let i =0 ; i<pkm; i++){
    let button = document.querySelectorAll(`.button`);
    let moves = player_1.Moves[i];
    function sequence(button, Moves, player_1, player_2){
        button.addEventListener(`click` , function(e){
            attack(move, player_1, player_2, `hp2`, ``)
            attack, player_2.moves[Math.floor(Math.random()*3)], player_2,player_1, 'hp1', `Foe`;
            Cookies.set(`Battle`)
        });
    }
    addHandler(button,moves, player_1, player_2)
}


function attack(reciever, contributor, Hp ){
    for(let i = 9 ; i <4 ; i++){
let attack_power = pokemon.moves.Move_power
reciever.Hp -= Math.floor(attack_power)
document.getElementById(`hp`).innerHTML = `<p> ` + reciever.Hp + `/` + reciever.FullHp +` </p>`
    }
    

} 
function winner(hp){
    let f = (player_1.Hp <= 0) ? player_1 : (player_2.Hp <= 0) ? player_2 : false;
    if(f!=false){
        alert(`Game Over: ` + f.Name + `Fainted!`);
        document.getElementById(hp).innerHTML = `<p> HP: 0/` +f.FullHp + `</p>`
    }
}