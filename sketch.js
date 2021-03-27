var gameState=0,playerCount,form,player,game,database;
var allPlayers;
function setup(){
    createCanvas(400,400)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
    if(playerCount===4){
        state=1
        game.update(state)
    }
    if(gameState===1){
        clear()
        game.play();
        
    }
}

