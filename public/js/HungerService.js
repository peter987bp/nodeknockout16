angular.module("webPet")
.service('HungerService', [
  'HappinessService',
  function(HappinessService) {

    this._scope = null;
    const maxHunger = 10;
    const hungerLvl = 5;

    this.init = (scope) => {

      this._scope = scope;
      this.hungerLvl = hungerLvl;
    }

    this.getHungerLvl = () => {
      return this.hungerLvl;
    }

    this.incrementHungerLvl = (value) => {
      this.hungerLvl += value;
      return this.hungerLvl;
    }

    this.decrementHungerLvl = (value) => {
      this.hungerLvl -= value;
      return this.hungerLvl;
    }

    this.reduceHunger = () => {
      if(this.hungerLvl - 1 <= 0) {
        this.hungerLvl = 0;
        HappinessService.reduceHappiness();
      } else {
        --this.hungerLvl;
      }
    }

    this.watchHunger = setInterval(() => {
      if(this._scope.timer % 30 === 0) {
        this.incrementHungerLvl(1);
      }
    }, 1000);
  }
])

