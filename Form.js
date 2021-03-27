class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("log in")
        this.greeting=createElement("h3")
    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(130,0) 

        
        this.input.position(130,150)
        this.button.position(250,200)

        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value()
        this.greeting.html("hello "+player.name)
        this.greeting.position(130,150)
        
        playerCount=playerCount+1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
    })
}
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}
