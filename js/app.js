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
let Moves_n = pokemon.Moves.Move_name
for(let i = 0; i < pokemon.length ; i++){
    document.body.insertAdjacentHTML(`beforeend` , `<div class="prod_div>
    <img src="${pokemon[i][`Sprite`]}</img>
    <h1>${pokemon[i][`Hp`]}</h1>
    <h2>${pokemon[i][`Name`]}</h2>
    <p>${pokemon[i][`Moves_n`]}</p>
    <p>${pokemon[i].Moves}</p>
    <button class="Play_button" id="${pokemon[i][`Name`]}"> Play As</button>
    </div>
    `);
}