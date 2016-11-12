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
    this.reduceHealth = () => {
      if (this.health - 1 <= 0) {
        console.log('u ded');
        this.health = 0;
      } else {
        --this.health;
      }
    }
  })