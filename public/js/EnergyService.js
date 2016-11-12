angular.module("webPet")
  .service('EnergyService', function() {
    const maxEnergy = 10;
    const energyLvl = 5;
    this._scope = null;

    this.init = (scope) => {
      this._scope = scope;
      this.energyLvl = energyLvl;
    }

    this.getEnergyLvl = () => {
      return this.energyLvl;
    }
    this.incrementEnergyLvl = (value) => {
      this.energyLvl += value;
      return this.energyLvl;
    }
    this.decrementEnergyLvl = (value) => {
      this.energyLvl -= value;
      return this.energyLvl;
    }
    this.reduceEnergy = () => {
      if(this.energyLvl - 1 <= 0) {
        this.energyLvl = 0
        HealthService.reduceHealth();
      } else {
        --this.energyLvl;
      }
    }
  })