angular.module("webPet")
  .service('PoopService', [
    'HappinessService',
    function(HappinessService) {
      this.pooped = false;

      this.init = (scope) => {
        this.pooped = false;
        this._scope = scope;
      }

      this.cleanPoop = () => {
        this.pooped = false;
      }

      this.watchPoop = setInterval(() => {
        if(this._scope.timer % 60 === 0 && this._scope.timer !== 0) {
          this.pooped = true;
        }
        if (this.pooped) {
          HappinessService.decrementHappinessLvl(1);
        }
      }, 1000);

  }])
