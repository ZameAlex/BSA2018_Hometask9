// Create class Fighter

export default class Fighter{
    constructor(name,power,health){
        this.name=name;
        this.power=power;
        this.health=health;
        console.log(`${this.name}; power: ${this.power}; health: ${this.health}`);
    }

    setDamage(damage){
        this.health-=damage;
        console.log(`${this.name}'s health: ${this.health}`);
    }

    hit(enemy,point=1){
        let damage = this.power*point;
        console.log(`${this.name} hits ${enemy.name} on ${damage} damage!`);
        enemy.setDamage(damage);
    }

    knockout(){
        console.log('time is over');
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${this.name} in knockout`);
        },500);
        });
    }
}
