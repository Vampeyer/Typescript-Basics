var enemy = /** @class */ (function () {
    // public constuctor method
    function enemy(height, weight, attack, health) {
        this.height = height;
        this.weight = weight;
        this.attack = attack;
        this.health = health;
    }
    // class methods , 
    enemy.prototype.totalPower = function (height, weight, attack, health) {
        attack = weight * 2;
        return (height * weight) + (attack * health);
    };
    return enemy;
}());
var badguy1 = new enemy(2, 2, 2, 2); // IDK why typescript requires me to pass the value here , but whatever . 
console.log(badguy1.totalPower(2, 2, 2, 2));
