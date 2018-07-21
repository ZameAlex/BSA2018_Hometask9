// create two instances

// call fight function

import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';
import fight from './fight';

const fighter1 = new Fighter('Alex',30,10000);
const fighter2 = new ImprovedFighter('John',16,5000);

fight(fighter1,fighter2,12,32);