//I redefine the values and set them to the cookies to use later on 
let player_pick_json = Cookies.get(`player_select`);
let ai_pick_json = Cookies.get(`Computer`);

let user_hp = Cookies.get(`player_health`)
let computer_hp = Cookies.get(`ai_health`)

let ai_pick = JSON.parse(ai_pick_json);
let player_pick = JSON.parse(player_pick_json);
//i create a "arena" by setting a section in the html to "arena"
let arena = document.getElementById(`fight_container`)
//i write an if else loop to make sure they chose something
if (ai_pick_json === undefined) {
    arena.insertAdjacentHTML(`afterbegin`, `<p> Error in picking </p>`)
}
//this else loop wiil then inject the ai pokemon using the saved cookies
else {
    let ai_pick = JSON.parse(ai_pick_json);
    arena.insertAdjacentHTML(`afterbegin`, `
   <img src=${ai_pick[`Sprite`]}>
   <div id="ai_battle">
        <h4 id="ai_hp">${ai_pick[`Hp`]}</h4>
        <p>${ai_pick[`Name`]}</p>
        
    </div>
   `)
}
//i wrote an if else loop to make sure they chose something
if (player_pick_json === undefined) {
    arena.insertAdjacentHTML(`afterbegin`, `<p> Error in picking </p>`)
}
//here is an else that will inject the player pokemon which will have more information than the oppenent
else {
    arena.insertAdjacentHTML(`afterbegin`, (`
    <img src=${player_pick[`Sprite`]}>
    <div id="player_battle">
        <h4 id="player_hp">${player_pick[`Hp`]}</h4>
        <p>${player_pick[`Name`]}</p>
        <div id="moves">
        <button attack="${player_pick[`Moves`][0][`Move_Power`]}" class="move_button">${player_pick[`Moves`][0][`Move_name`]} power:${player_pick[`Moves`][0][`Move_Power`]} </button>
        <button attack="${player_pick[`Moves`][1][`Move_Power`]}" class="move_button">${player_pick[`Moves`][1][`Move_name`]} power:${player_pick[`Moves`][1][`Move_Power`]} </button>
        <button attack="${player_pick[`Moves`][2][`Move_Power`]}" class="move_button">${player_pick[`Moves`][2][`Move_name`]} power:${player_pick[`Moves`][2][`Move_Power`]} </button>
        <button attack="${player_pick[`Moves`][3][`Move_Power`]}" class="move_button">${player_pick[`Moves`][3][`Move_name`]} power:${player_pick[`Moves`][3][`Move_Power`]} </button>
        </div>
    </div>
`))
}
//next i do the fighting part of the game, i create a function that will remove numbers off the hp based off the attack number or "damage number"
function Attacks(details) {
    let random_number = Math.floor(Math.random() * 4)
    let n = random_number

//im stuck here , i thought that if i saved what button was click using cookies that i could then bring that data here but using Cookies.get(``) but in doing this its now not able to read `Move_Power` and is erroring
    let player_att = Cookies.get(`attack_clicked`)
    let x = player_att
    computer_hp = computer_hp - player_pick[`Moves`][x][`Move_Power`];
    Cookies.set(`computer_hp`, computer_hp)
    user_hp = user_hp - ai_pick[`Moves`][n][`Move_Power`];
    Cookies.set(`player_health`, user_hp)
    
    
    //this will inject an updated hp onto the screen
    let active_ai = document.getElementById(`ai_hp`)
    active_ai[`innerHTML`] = computer_hp
    let active_player = document.getElementById(`player_hp`)
    active_player[`innerHTML`] = user_hp

    //this makes sure that the game will end and it will also set the losers hp to 0 so there are no - numbers
    if (computer_hp <= 0) {
        arena.insertAdjacentHTML("beforebegin", `<h1> Game Over ${player_pick[`Name`]} has won! </h1>
        <a href="/index.html">Restart </a>`)
       active_ai[`innerHTML`] = 0 
       Cookies.remove(`player_health`)
       Cookies.remove(`computer_hp`)
    } 
    //this else if will check for the player hp being 0 or lower and will then inject the game over screen with a href link that will take them back to the start, this also removes the cookies to fully reset the game
    else if (user_hp <= 0) {
        arena.insertAdjacentHTML("beforebegin", `<h1> Game Over ${ai_pick[`Name`]} has won! </h1>
        <a href="/index.html"> Restart </a>`)
        active_player[`innerHTML`] = 0
        Cookies.remove(`player_health`)
        Cookies.remove(`computer_hp`)
        } 
}
//then i make the buttons listen and start the function
let attack_button = document.querySelectorAll(`.move_button`)
for (let i = 0; i < attack_button.length; i++) {
    attack_button[i].addEventListener(`click`, Attacks)
    Cookies.set(`attack_clicked` ,attack_button[i] )
}


