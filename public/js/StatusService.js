angular.module("webPet")
  .service('StatusService', function() {
    const maxHealth = 10;
    this.health = maxHealth;


    this.getHealth = () => {
      return this.health;
    }
  })