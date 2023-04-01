let pokemon = [
    {
        Name:`Poliwrath`,
        Sprite:"/images/062.png",
        Hp:150,
        Moves: [
            {
               Move_name:`Split Spiral Punch`,
               Move_power:70, 
            },
            {
                Move_name:`Wake-up Slap`,
                Move_Power:70, 
             },
             {
                Move_name:`Steamroll`,
                Move_Power:70, 
             },
             {
                Move_name:`Mega Throw`,
                Move_Power:70, 
             },
            ]
    },
    {
        Name:`Scizor`,
        Sprite:"/images/212.png",
        Hp:210,
        Moves:[
            {
               Move_name:`Hack Off`,
               Move_Power:70, 
            },
            {
                Move_name:`Gaurd Claw`,
                Move_Power:70, 
             },
             {
                Move_name:`Steel Wing`,
                Move_Power:70, 
             },
             {
                Move_name:`Danger Perception`,
                Move_Power:70, 
             },
            ]
    },
    {
        Name:`Dragonite`,
        Sprite:"/images/149.png",
        Hp:190,
        Moves:[
            {
               Move_name:`Giga Impact`,
               Move_Power:70, 
            },
            {
                Move_name:`Dragon Claw`,
                Move_Power:70, 
             },
             {
                Move_name:`Dragon Gate`,
                Move_Power:70, 
             },
             {
                Move_name:`Wrapped Wing`,
                Move_Power:70, 
             },
            ]
    },
]
function Choices(details){
    let pick_1 = undefined;
    for(let i = 0 ; i <pokemon.length; i++){
        if(pokemon[i][`Name`] === details[`target`].getAttribute(`p_name`) ){
            pick_1 = pokemon[i]
        }
    }
    let ai = pokemon[0]
    let player_poke_json = JSON.stringify(pick_1)
    let ai_player_jsno = JSON.stringify(ai)
    Cookies.set(`player_health` , pick_1);
    Cookies.set(`ai_health` , ai);
    Cookies.set(`player_select` , player_poke_json);
    Cookies.set(`Computer` , ai_player_jsno);
    location.href= `pages/Battle.html`
}

let pick_button = document.querySelectorAll(`.play_as_button`)
for(let i=0; i < pick_button.length ; i++){
    pick_button[i].addEventListener(`click` , Choices)
}