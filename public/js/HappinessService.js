angular.module("webPet")
  .service('HappinessService', function() {
    const maxHappiness = 10;
    const happinessLvl = 0;

    this.happinessLvl = happinessLvl;
    this.getHappinessLvl = () => {
      return this.happinessLvl;
    }
  })