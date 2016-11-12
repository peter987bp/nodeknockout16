angular.module("webPet")
  .service('HealthService', function() {
    const maxHealth = 10;
    this.health = maxHealth;


    this.getHealth = () => {
      return this.health;
    }
    this.incrementHealth = (value) => {
      this.health += value;
      return this.health;
    }
    this.decrementHealth = (value) => {
      this.health -= value;
      return this.health;
    }
  })