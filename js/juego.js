angular.module("JuegoTragamonedas", [])
.controller("ControladorTragamonedas", function ($scope) {
    $scope.rodillos = [];
    $scope.girar = function () {
        for (let i = 0; i < 3; i++) {
            $scope.rodillos[i] = new Simbolo();
        }
    };
});
