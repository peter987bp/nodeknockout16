angular.module("webPet")
.service('HungerService', [
  'HappinessService',
  'EnergyService',
  '$interval',
  function(HappinessService, EnergyService, $interval) {

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
      if(this.hungerLvl - 1 < 0) {
        this.hungerLvl = 0;
        HappinessService.decrementHappinessLvl(1);

      } else if ( this.hungerLvl - 1 === 0) {
        EnergyService.incrementEnergyLvl(1);
        this.hungerLvl = 0;
      } else {
        --this.hungerLvl;
      }
    }

    this.watchHunger = setInterval(() => {
      if (this._scope.HealthService.isAlive) {
        if(this._scope.timer % 30 === 0) {
          this.incrementHungerLvl(1);
        }
      } else {
        $interval.cancel(this.watchHunger);
      }
    }, 1000);
  }
])

