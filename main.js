// app.js
import { Pokemon } from './pokemon.js';
import { createClickCounter, logs } from './game.js';

const $btn = document.getElementById("btn-kick");
const $btn1 = document.getElementById("btn-kick1");
const $logs = document.getElementById("logs");

const character = new Pokemon("Pikachu", 100, document.getElementById("health-character"), document.getElementById("progressbar-character"));
const enemy = new Pokemon("Charmander", 100, document.getElementById("health-enemy"), document.getElementById("progressbar-enemy"));

const setMaxClicksForBtn = createClickCounter($btn, 6);
const setMaxClicksForBtn1 = createClickCounter($btn1, 6);

$btn1.addEventListener("click", () => {
  console.log("Fire Charmander");
  const damage = random(25);
  if (enemy.changeHP(damage)) {
    const logMessage = `${enemy.name} получил урон: ${damage}. Осталось жизней: ${enemy.damageHP}`;
      log(logMessage);
    const randomLog = logs[random(logs.length)];
    log(randomLog.replace('Charmander', enemy.name).replace('Pikachu', character.name));
  } else {
    log(`${enemy.name} проиграл бой!`);
    $btn.disabled = true;
    $btn1.disabled = true;
  }
});

$btn.addEventListener("click", () => {
  console.log("Kick");
  const characterDamage = random(20);
  const enemyDamage = random(20);
  character.changeHP(characterDamage);
  enemy.changeHP(enemyDamage);

    const logMessage = `${character.name} получил урон: ${characterDamage}. Осталось жизней: ${character.damageHP}`;
  log(logMessage);

  const logMessageEnemy = `${enemy.name} получил урон: ${enemyDamage}. Осталось жизней: ${enemy.damageHP}`;
  log(logMessageEnemy);

  log(logs[random(logs.length)]);
});

character.init();
enemy.init();

function random(num) {
  return Math.floor(Math.random() * num);
}

function log(message) {
  const logEntry = document.createElement("div");
  logEntry.innerText = message;
  $logs.prepend(logEntry);
}
