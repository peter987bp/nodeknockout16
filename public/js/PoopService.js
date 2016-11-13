angular.module("webPet")
  .service('PoopService', [
    'HappinessService',
    '$interval',
    function(HappinessService, $interval) {
      this.pooped = false;

      this.init = (scope) => {
        this.pooped = false;
        this._scope = scope;
      }

      this.cleanPoop = () => {
        this.pooped = false;
      }

      this.watchPoop = setInterval(() => {
        if (this._scope.HealthService.isAlive) {
          if(this._scope.timer % 10 === 0 && this._scope.timer !== 0) {
            this.pooped = true;
          }
          if (this.pooped ) {
            HappinessService.decrementHappinessLvl(1);
          }

        } else {
          $interval.cancel(this.watchPoop);
        }
      }, 1000);

  }])
