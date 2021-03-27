class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref("game state")
        gameStateRef.on("value",function (data){
         gameState=data.val()
        })
    }
    start(){
        if(gameState===0){
            form=new Form()
            form.display();
            player=new Player()
           player.getCount()
        }
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        textSize(30)
        text("Game Start",120,100)

        if(allPlayers!==undefined){
            var display_position=130
            for(var plr in allPlayers){
               // display_position=display_position+20
               display_position+=20
               text(allPlayers[plr].name,120,display_position)
            }
        }
    }
}