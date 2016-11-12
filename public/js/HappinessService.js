angular.module("webPet")
  .service('HappinessService', function() {
    const maxHappiness = 10;
    const happinessLvl = 0;

    this.happinessLvl = happinessLvl;
    this.getHappinessLvl = () => {
      return this.happinessLvl;
    }
    this.incrementHappinessLvl = (value) => {
      this.happinessLvl += value;
      return this.happinessLvl;
    }
    this.decrementHappinessLvl = (value) => {
      this.happinessLvl -= value;
      return this.happinessLvl;
    }
  })