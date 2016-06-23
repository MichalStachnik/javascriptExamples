function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function givLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }

}

var michal = new User();
var ozzy = new User();
michal.name = "michal";
ozzy.name = "ozzy";

michal.giveLife(ozzy);
console.log(michal.life);
console.log(ozzy.life);

User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
}
//every User now has access to the uppercut function

ozzy.uppercut(michal);

User.prototype.magic = 60;
