// ---------------------------------------------------------------- PARTE I
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/*
 1. Crie uma função que retorna o dano do dragão.
  - O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
*/
const dragonDamage = (dragon) => {
  return Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
}

/*
 2. Crie uma função que retorna o dano causado pelo warrior.
  - O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
*/
const warriorDamage = (warrior) => {
  return Math.floor(Math.random() * ((warrior.weaponDmg * warrior.strength) - warrior.strength + 1) + warrior.strength);
};

/*
 3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
  - O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
    A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
*/
const mageCast = (mage) => {
  const mageMana = mage.mana;
  const mageSpellCast = {
    manaCost: 0,
    damageDealt: 'Não possui mana suficiente',
  }
  
  if (mageMana > 15) {
    const mageDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence);
    mageSpellCast.manaCost = 15;
    mageSpellCast.damageDealt = mageDamage;
    return mageSpellCast;
  }
  return mageSpellCast;
}


// const mageAttack = (mage) => {
//   const mageMana = mage.mana;
//   const turnStats = {
//     manaSpent: 0,
//     damageDealt: 'Not enough mana...',
//   };
//   if (mageMana > 15) {
//     const mageDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence);
//     turnStats.manaSpent = 15;
//     turnStats.damageDealt = mageDamage;
//     return turnStats;
//   }
//   return turnStats;
// };
// ---------------------------------------------------------------- PARTE II
/*
2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. 
- Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage
- atualizará os healthPoints do monstro dragon. 
- também deve atualizar o valor das chaves damage e mana do mage.
*/
const gameActions = {
  // ataque warrior
  warriorTurn: (warriorDamage) => {
    const damageDealtW = warriorDamage(warrior);
    warrior.damage = damageDealtW;
    dragon.healthPoints -= damageDealtW;
  },
  // ataque mage
  mageTurn: (mageCast) => {
    const mageTurns = mageCast(mage);
    const damageDealtM = mageTurns.damageDealt;
    mage.damage = damageDealtM;
    mage.mana -= mageTurns.manaCost;
    dragon.healthPoints -= damageDealtM;
  },
  // mageTurn: (mageAttack) => {
  //   const mageTurnStats = mageAttack(mage);
  //   const mageDamage = mageTurnStats.damageDealt;
  //   mage.damage = mageDamage;
  //   mage.mana -= mageTurnStats.manaSpent;
  //   dragon.healthPoints -= mageDamage;
  // },
  // ataque dragon
  dragonTurn: (dragonDamage) => {
    const damageDealtD = dragonDamage(dragon);
    dragon.damage = damageDealtD;
    warrior.healthPoints -= damageDealtD;
    mage.healthPoints -= damageDealtD;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageCast);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());
/*
const battleMembers = { mage, warrior, dragon };
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
const warriorDamage = (warrior) => {
  return Math.floor(Math.random() * ((warrior.weaponDmg * warrior.strength) - warrior.strength + 1) + warrior.strength);
};
*/