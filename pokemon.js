// pokemon.js
export class Pokemon {
  constructor(name, defaultHP, elHP, elProgressbar) {
    this.name = name;
    this.defaultHP = defaultHP;
    this.damageHP = defaultHP;
    this.elHP = elHP;
    this.elProgressbar = elProgressbar;
  }

  init() {
    console.log("Start Game!");
    this.renderHP();
  }

  renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife() {
    this.elHP.innerText = `${this.damageHP} / ${this.defaultHP}`;
  }

  renderProgressbarHP() {
    this.elProgressbar.style.width = `${this.damageHP}%`;
  }

  changeHP(count) {
    if (this.damageHP < count) {
      this.damageHP = 0;
      this.renderHP();
      return false;
    }

    this.damageHP -= count;
    this.renderHP();
    return true;
    }
    
}
