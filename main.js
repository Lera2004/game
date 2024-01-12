const $btn = document.getElementById("btn-kick");
const $btn1 = document.getElementById("btn-kick1");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
  init: function () {
    console.log("Start Game!");
    this.renderHP();
  },
  renderHP: function () {
    this.renderHPLife();
    this.renderProgressbarHP();
  },
  renderHPLife: function () {
    this.elHP.innerText = this.damageHP + " / " + this.defaultHP;
  },
  renderProgressbarHP: function () {
    this.elProgressbar.style.width = this.damageHP + "%";
  },
  changeHP: function (count) {
    if (this.damageHP < count) {
      this.damageHP = 0;
      this.renderHP();
      $btn.disabled = true;
      $btn1.disabled = true;
      setTimeout(() => {
        alert("Бедный " + this.name + " проиграл бой!");
      }, 0);
      return;
    }

    this.damageHP -= count;
    this.renderHP();
  },
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
  init: character.init, 
  renderHP: character.renderHP, 
  renderHPLife: character.renderHPLife, 
  renderProgressbarHP: character.renderProgressbarHP, 
  changeHP: character.changeHP, 
};

$btn.addEventListener("click", function () {
  console.log("Kick");
  character.changeHP(random(20));
  enemy.changeHP(random(20));
});

$btn1.addEventListener("click", function () {
  enemy.changeHP(random(20));
});

character.init();
enemy.init();

function random(num) {
  return Math.ceil(Math.random() * num);
}
