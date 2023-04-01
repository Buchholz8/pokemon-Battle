
function Choices(details){
    let player1=undefined;
    for(let i=0 ; i <pokemon.length; i++){
        if(pokemon[i][`Name`] === details[`target`].getAttribute(`Key_Name`) ){
            player1 = pokemon[i]
        }
    }
    let ai = pokemon[0]
    let player_poke_json = JSON.stringify(player1)
    let ai_player_jsno = JSON.stringify(ai)
    Cookies.set(`player_health` , player1);
    Cookies.set(`ai_health` , ai);
    Cookies.set(`player_select` , player_poke_json);
    Cookies.set(`Computer` , ai_player_jsno);
    location.href= `pages/Battle.html`
    }

    let pick_button = document.querySelectorAll(`.play_as_button`)
    for(let i=0; i < pick_button.length ; i++){
        pick_button[i].addEventListener(`click` , Choices)
    }