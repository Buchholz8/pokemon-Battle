//I redefine the values and set them to the cookies to use later on 
let player_pick_json = Cookies.get(`player_select`);
let ai_pick_json = Cookies.get(`Computer`);

let user_hp = Cookies.get(`player_health`)
let computer_hp = Cookies.get(`ai_health`)

let ai_pick = JSON.parse(ai_pick_json);
let player_pick = JSON.parse(player_pick_json);
//i create a "arena" by setting a div to it
let arena = document.getElementById(`fight_container`)
//i write an if else loop to make sure they chose something
if(ai_pick_json === undefined){
    arena.insertAdjacentHTML(`afterbegin` , `<p> Error in picking </p>`)
}
//this else loop wiil then inject the ai pokemon using the saved cookie
else {
    let ai_pick = JSON.parse(ai_pick_json);
   arena.insertAdjacentHTML(`afterbegin` , `
   <img src=${ai_pick[`Sprite`]}>
   <div id="ai_battle">
        <p id="ai_hp">${ai_pick[`Hp`]}</p>
        <h4>${ai_pick[`Name`]}</h4>
        
    </div>
   `) 
}
//i write an if else loop to make sure they chose something
if(player_pick_json === undefined){
arena.insertAdjacentHTML(`afterbegin` , `<p> Error in picking </p>`)
}
//here is an else that will inject the player pokemon which will have more information than the oppenent
else{
    arena.insertAdjacentHTML(`afterbegin` , (  `
    <img src=${player_pick[`Sprite`]}>
    <div id="player_battle">
        <h4 id="player_hp">${player_pick[`Hp`]}</h4>
        <p>${player_pick[`Name`]}</p>
        <div id="moves">
        <button class="move_button">${player_pick[`Moves`][0][`Move_name`]}</button>
        <button class="move_button">${player_pick[`Moves`][1][`Move_name`]}</button>
        <button class="move_button">${player_pick[`Moves`][2][`Move_name`]}</button>
        <button class="move_button">${player_pick[`Moves`][3][`Move_name`]}</button>
        </div>
    </div>
`))
}
//next i do the fighting part of the game, i create a function that will remove numbers off the hp based off the attack number or "damage number"
function Attacks(details){
let i=0
    computer_hp = computer_hp - ai_pick[`Moves`][i][`Move_power`];
Cookies.set(`computer_hp` , computer_hp)
 user_hp = user_hp - player_pick[`Moves`][i][`Move_power`];
 Cookies.set(`player_health` , user_hp)

    
  let active_ai = document.getElementById(`ai_hp`)
 active_ai[`innerHTML`] = computer_hp
 let active_player = document.getElementById(`player_hp`)
active_player[`innerHTML`] = user_hp
//this makes sure that the game will end
if(computer_hp <= 0){
    arena.insertAdjacentHTML("beforebegin" , `<h1> Game Over ${player_pick[`Name`]} has won! </h1>`)
} else if(user_hp <= 0){
    arena.insertAdjacentHTML("beforebegin" , `<h1> Game Over ${ai_pick[`Name`]} has won! </h1>`)
}
}
//then i make the buttons listen and start the function
let attack_button = document.querySelectorAll(`.move_button`)
for(let i=0 ; i < attack_button.length ; i++){
    attack_button[i].addEventListener(`click` , Attacks)
}


