const template = `
  it {{vm.test}}
  <pre>
    {{vm.dummies | json}}
  </pre>
  <div>
  <button ng-click="vm._desc()">desc</button>
  <button ng-click="vm._asc()">asc</button>
  </div>
`;

function listCtrl($scope, $reactive) {
  $reactive(this).attach($scope);

  this.test = 'works';
  this.sort = {
    name: 1
  };

  this._desc = () => {
    console.log('_desc');
    this.sort.name = -1;
  };

  this._asc = () => {
    console.log('_asc');
    this.sort.name = 1;
  };

  this.autorun(() => {
    console.log('sort getReact:', this.getReactively('sort', true));
    console.log('sort directly:', this.sort);
    console.log('dummies:', this.dummies);
  });

  this.helpers({
    dummies() {
      const sort = this.getReactively('sort', true);
      return Dummies.find({}, {
        sort
      });
    }
  });
}

angular.module('app').directive('list', () => ({
  template,
  controller: ['$scope', '$reactive',listCtrl],
  restrict: 'E',
  controllerAs: 'vm'
}));
