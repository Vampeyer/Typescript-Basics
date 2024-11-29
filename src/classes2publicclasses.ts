class enemy { 
    // Ts Declarations 
    public height : number
    public weight : number
    public attack : number
    public  health : number
// public constuctor method
    public constructor(height : number , weight: number , attack : number , health : number){
    this.height = height;
    this.weight = weight;
    this.attack = attack;
    this.health = health; 
}

// class methods , 

public totalPower(height , weight , attack , health) : number{ 
    attack = weight * 2 
    return (height * weight) + (attack * health) 
}


}

let badguy1 = new enemy(2,2,2,2) // IDK why typescript requires me to pass the value here , but whatever . 

console.log(badguy1.totalPower(2,2,2,2))