angular.module('app', [
  'angular-meteor'
]).config(['$compileProvider', ($compileProvider) => {
  $compileProvider.debugInfoEnabled(false);
}]).run([() => {
  console.log("ready");
}]);

function boot() {
  angular.bootstrap(document, ['app']);
}

if(Meteor.isCordova){
  angular.element(document).on('deviceready', boot);
} else {
  angular.element(document).ready(boot);
}

// collection
Dummies = new Mongo.Collection(null);

// data fixtures
Dummies.insert({
  name: 'foo'
});
Dummies.insert({
  name: 'bar'
});
