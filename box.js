class Box{
    constructor(x,y){

        var options={
            isStatic:true
        }
        this.wall1 = Bodies.rectangle(450,620,200,20,options);
        this.wall2 = Bodies.rectangle(300,620,200,20,options);
        this.wall3 = Bodies.rectangle(380,650,200,20,options);

        
        World.add(world,this.wall1);
        World.add(world,this.wall2);
        World.add(world,this.wall3);
      
    
    }

    display(){
        var pos1 = this.wall1.position;
        var pos2 = this.wall2.position
        var pos3 = this.wall3.position
        
        push();
    
        rectMode(CENTER);
        fill(255);
        rect(pos1.x,pos1.y,20,100);
        rect(pos2.x,pos2.y,20,100);
        rect(pos3.x,pos3.y,150,20);
        pop();


    }



}
