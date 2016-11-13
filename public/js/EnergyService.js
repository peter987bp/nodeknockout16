angular.module("webPet")
  .service('EnergyService', ['HealthService', 'HappinessService',
    function(HealthService, HappinessService) {
    const maxEnergy = 10;
    const energyLvl = 5;

    this.awake = true;

    this._scope = null;

    this.init = (scope) => {
      this._scope = scope;
      this.energyLvl = energyLvl;
      this.awake = true;
    }

    this.getEnergyLvl = () => {
      return this.energyLvl;
    }
    this.getAwake = () => {
      return this.awake;
    }
    //if energyLvl is 10 > no increment, reach 10 && increment hapiness
    this.incrementEnergyLvl = (value) => {
      if (this.energyLvl === 10) {
        // already 'energetic', ??message
        console.log('I cant be more energetic');
        return this.energyLvl;
      } else {
        this.energyLvl += value;
        if (this.energyLvl > 10) {
          this.energyLvl = maxEnergy;
          HappinessService.incrementHappinessLvl(1);
          //message 'energetic'
          console.log('I am energetic');
        }
        return this.energyLvl;
      }
    }
    // if energyLvl is 0 > going to sleep && decrement Health
    this.decrementEnergyLvl = (value) => {
      if (this.energyLvl === 0) {
        // sleeping 'exhausted' ??message
        console.log('WebPET is sleeping, need to wake it up!');
        return this.energyLvl;
      } else {
        this.energyLvl -= value;
        if (this.energyLvl < 0 ) {
          this.energyLvl = 0;
          HealthService.decrementHealth(1);
          //message 'exhausted'
          console.log('I am exhausted');
          this.awake = false;
        }
        return this.energyLvl;
      }
    }



    this.reduceEnergy = () => {
      if(this.energyLvl - 1 <= 0) {
        this.energyLvl = 0
        HealthService.reduceHealth();
      } else {
        --this.energyLvl;
      }
    }

  }])