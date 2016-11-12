angular.module("webPet")
  .service('EnergyService', function() {
    const maxEnergy = 10;
    const energyLvl = 5;

    this.energyLvl = energyLvl;
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
  })