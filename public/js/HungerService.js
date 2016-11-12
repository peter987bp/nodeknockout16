angular.module("webPet")
  .service('HungerService', [
    'HappinessService',
    function(HappinessService) {
    const maxHunger = 10;
    const hungerLvl = 5;

    this.hungerLvl = hungerLvl;

    this.getHungerLvl = () => {
      return this.hungerLvl
    }

    this.reduceHunger = () => {
      if(this.hungerLvl - 1 <= 0) {
        this.hungerLvl = 0;
        HappinessService.reduceHappiness();
      } else {
        --this.hungerLvl;
      }
    }
  }])