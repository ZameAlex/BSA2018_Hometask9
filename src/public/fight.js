// create async function fight

import ImprovedFighter from './improvedFighter';
import Fighter from './fighter';

export default async function fight(fighter, improvedFighter, ...args){
    let[point1,point2, ...rest] = args;
    while(fighter.health>0 && improvedFighter.health>0)
    {
        fighter.hit(improvedFighter,point1);
        if(improvedFighter.health<=0){
            console.log(`${fighter.name} wins!`);
            const mes = await improvedFighter.knockout();
            console.log(mes);
            break;
        }
        improvedFighter.hit(fighter,point2);
        if(fighter.health<=0){
            console.log(`${improvedFighter.name} wins!`);
            await fighter.knockout();
            console.log(mes);
            break;
        }
    }
}
