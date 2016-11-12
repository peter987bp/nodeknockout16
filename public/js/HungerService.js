angular.module("webPet")
  .service('HungerService', function() {
    const maxHunger = 10;
    const hungerLvl = 0;

    this.hungerLvl = hungerLvl;

    this.getHungerLvl = () => {
      return this.hungerLvl
    }
    this.incrementHungerLvl = (value) => {
      this.hungerLvl += value;
      return this.hungerLvl;
    }
    this.decrementHungerLvl = (value) => {
      this.hungerLvl -= value;
      return this.hungerLvl;
    }
  })