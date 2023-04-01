let player_pick_json = Cookies.get(`player_select`);
let ai_pick_json = Cookies.get(`cumputer`);

let arena = document.getElementById(`fight_container`)
if(player_pick_json === undefined){
arena.insertAdjacentHTML(`afterend` , `<p> Error in picking </p>`)
}else{
    let player_pick = JSON.parse(player_pick_json);
let ai_pick = JSON.parse(ai_pick_json);
    arena.insertAdjacentHTML(`afterbegin` , (  `
    <div>
        <img ${pokemon[`Sprite`]}
        <h4>${pokemon[`Name`]}</h4>
        <p>${pokemon[`Hp`]}</p>
    </div>
    <div>
    <img ${pokemon[`Sprite`]}
        <h4>${pokemon[`Name`]}</h4>
        <p>${pokemon[`Hp`]}</p>
        <button>${pokemon[`Moves`]}</button>
    </div>
`))
}
