angular.module("webPet")
  .service('HealthService', function() {
    const maxHealth = 10;
    this.isAlive = true;
    this._scope = null;

    this.init = (scope) => {
      this._scope = scope;
      this.health = maxHealth;
      this.isAlive = true;
    }

    this.getHealth = () => {
      return this.health;
    }
    this.incrementHealth = (value) => {
      this.health += value;
      if (this.health >= maxHealth) {
        this.health = maxHealth;
      }
      return this.health;
    }
    this.decrementHealth = (value) => {
      this.health -= value;
      return this.health;
    }
    this.reduceHealth = () => {
      if (this.health - 1 <= 0) {
        console.log('pet died');
        this.health = 0;
        this._scope.killTimer();
        this.isAlive = false;
      } else {
        --this.health;
      }
    }
  })