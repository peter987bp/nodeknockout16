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
    // high energy increase hapiness
    // low energy decrease health
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

    this.decrementEnergyLvl = (value) => {
      if (this.energyLvl === 0) {
        // sleeping 'exhausted' ??message
        console.log('WebPET is sleeping, need to wake it up!');
        return this.energyLvl;
      } else {
        this.energyLvl -= value;
        if (this.energyLvl <= 0 ) {
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

    this.wakeUp = () => {
      this.awake = true;
    }

    this.goToSleep = setInterval(() => {
      if(this._scope.timer % 30 === 0 && this._scope.timer !== 0) {
        this.awake = false;
        this.incrementEnergyLvl(2);
      }
    }, 1000);

    this.watchEnergy = setInterval(() => {
      if(this._scope.timer % 40 === 0 && this._scope.timer !== 0) {
        this.decrementEnergyLvl(1);
      }
    }, 1000);

  }])