//here i create a function to choose and save the pokemon choice
function Choices(details){
    let player1=undefined;
    for(let i=0 ; i <pokemon.length; i++){
        if(pokemon[i][`Name`] === details[`target`].getAttribute(`Key_Name`) ){
            player1 = pokemon[i]
        }
    }
    //i define the values and set cookies to remeber those values
    let ai = pokemon[0]
    let player_poke_json = JSON.stringify(player1)
    let ai_player_jsno = JSON.stringify(ai)
    Cookies.set(`player_health` , player1[`Hp`]);
    Cookies.set(`ai_health` , ai[`Hp`]);
    Cookies.set(`player_select` , player_poke_json);
    Cookies.set(`Computer` , ai_player_jsno);
    //i then send them to the battles page
    location.href= `pages/Battle.html`
    }
//this will set a eventlistener to listen to what button is clicked to then send that value of the button as a cookie to the next page
    let pick_button = document.querySelectorAll(`.play_as_button`)
    for(let i=0; i < pick_button.length ; i++){
        pick_button[i].addEventListener(`click` , Choices)
    }