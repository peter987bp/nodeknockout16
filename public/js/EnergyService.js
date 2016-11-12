angular.module("webPet")
  .service('EnergyService', ['HealthService', 'HappinessService', 'TimerService',
    function(HealthService, HappinessService, TimerService) {
    const maxEnergy = 10;
    const energyLvl = 5;
    const awake = true;

    this.energyLvl = energyLvl;
    this.awake = awake;

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
    this.sleep = () => {
      this.awake = false;
      return this.awake;
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
          this.sleep();
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