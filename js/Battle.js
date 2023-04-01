
let player_pick_json = Cookies.get(`player_select`);
let ai_pick_json = Cookies.get(`Computer`);

let arena = document.getElementById(`fight_container`)
if(ai_pick_json === undefined){
    arena.insertAdjacentHTML(`afterbegin` , `<p> Error in picking </p>`)
}else {
    let ai_pick = JSON.parse(ai_pick_json)
   arena.insertAdjacentHTML(`afterbegin` , `
   <img src=${ai_pick[`Sprite`]}>
   <div id="ai_battle">
        <p id="ai_hp">${ai_pick[`Hp`]}</p>
        <h4>${ai_pick[`Name`]}</h4>
        
    </div>
   `) 
}
if(player_pick_json === undefined){
arena.insertAdjacentHTML(`afterbegin` , `<p> Error in picking </p>`)
}else{
    let player_pick = JSON.parse(player_pick_json);
    arena.insertAdjacentHTML(`afterbegin` , (  `
    <img src=${player_pick[`Sprite`]}>
    <div id="player_battle">
        <h4 id="player_hp">${player_pick[`Hp`]}</h4>
        <p>${player_pick[`Name`]}</p>
        <div id="moves">
        <button id="move_button">${player_pick[`Moves`][0][`Move_name`]}</button>
        <button id="move_button">${player_pick[`Moves`][1][`Move_name`]}</button>
        <button id="move_button">${player_pick[`Moves`][2][`Move_name`]}</button>
        <button id="move_button">${player_pick[`Moves`][3][`Move_name`]}</button>
        </div>
        
    </div>
`))
}

function Attacks(details){
    for(let i = 0 ; i < player_pick[`moves`].length; i++){
        player_pick[`moves`][i][`Move_Power`] - ai_pick[`Hp`]
    }
}
let attack_button = document.querySelectorAll(`.move_button`)
for(let i=0 ; i < attack_button.length ; i++){
    attack_button[i].addEventListener(`click` , Attacks)
}





    