// create async function fight

import ImprovedFighter from './improvedFighter';
import Fighter from './fighter';

export default async function fight(fighter, improvedFighter, ...points){
    console.log(`${fighter.name} vs ${improvedFighter.name}!\n Fight!`);
    for(var i=0;i<points.length ||(fighter.health>0 && improvedFighter.health>0);i++)
    {
        console.log(`Round ${i+1}!`);
        fighter.hit(improvedFighter,points[i]);
        if(improvedFighter.health<=0){
            console.log(`${fighter.name} wins!`);
            const mes = await improvedFighter.knockout();
            console.log(mes);
            break;
        }
        improvedFighter.hit(fighter,points[i]);
        if(fighter.health<=0){
            console.log(`${improvedFighter.name} wins!`);
            await fighter.knockout();
            console.log(mes);
            break;
        }
    }
}
