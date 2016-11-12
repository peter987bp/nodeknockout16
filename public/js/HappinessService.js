angular.module("webPet")
  .service('HappinessService', [
    'HealthService',
    function(HealthService) {
    const maxHappiness = 10;
    const happinessLvl = 5;
    this._scope = null;

    this.init = (scope) => {
      this._scope = scope;
      this.happinessLvl = happinessLvl;
    }
      //When happiness level is high positive effect to health
      //When happiness level is low it it negative effect to health

    this.getHappinessLvl = () => {
      return this.happinessLvl;
    }

    this.incrementHappinessLvl = (value) => {
      this.happinessLvl += value;
      if(this.happinessLvl >= 10) {
        this.happinessLvl = 10;
        HealthService.incrementHealth(1);
      }
      //increases in energy ups happiness
      return this.happinessLvl;
    };
    this.decrementHappinessLvl = (value) => {
      this.happinessLvl -= value;
      //When happiness reduces it affects health
      if(this.happinessLvl <= 0) {
        this.happinessLvl = 0;
        HealthService.reduceHealth(-1);
      }
      return this.happinessLvl;
    }

  }])

