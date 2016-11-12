angular.module("webPet")
  .service('HappinessService', [
    function() {
    const maxHappiness = 10;
    const happinessLvl = 5;
    this._scope = null;

    this.init = (scope) => {
      this._scope = scope;
      this.happinessLvl = happinessLvl;
    }

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

    this.reduceHappiness = () => {
      if(this.happinessLvl - 1 <= 0) {
        this.happinessLvl = 0
        //HealthService.reduceHealth();
      } else {
        --this.happinessLvl;
      }
    }
  }])

