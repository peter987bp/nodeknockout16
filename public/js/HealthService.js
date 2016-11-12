angular.module("webPet")
  .service('HealthService', function() {
    const maxHealth = 10;
    this.health = maxHealth;


    this.getHealth = () => {
      return this.health;
    }
  })