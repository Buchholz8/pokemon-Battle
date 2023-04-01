let pokemon = [
    {
        Name:`Poliwrath`,
        Sprite:"/images/062.png",
        Hp:150,
        Moves: [
            {
               Move_name:`Split Spiral Punch`,
               Move_Power:70, 
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
            attack(move, player_1, player_2, `ai_health`, ``)
            attack, player_2.moves[Math.floor(Math.random()*3)], player_2,player_1, 'Player_health', `Foe`;
            Cookies.set(`Battle`)
        });
    }
    addHandler(button,moves, player_1, player_2)
}
function attack(move, ai, reciever, hp, player){
    let power = 
   reciever.Hp -=Math.floor(power);
   document.getElementById(``)
}