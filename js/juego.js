angular.module("JuegoTragamonedas", [])
.controller("ControladorTragamonedas", function ($scope, $timeout) {

    $scope.rodillos = [];

    // Contadores
    $scope.ganasteCount = 0;
    $scope.casiCount = 0;
    $scope.perdisteCount = 0;

    $scope.girar = function () {

        // Limpiar mensaje anterior
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.className = "";
        resultadoDiv.innerHTML = "";

        // Generar los 3 símbolos
        $scope.rodillos = [
            new Simbolo(),
            new Simbolo(),
            new Simbolo()
        ];

        // Esperar a que termine la animación completa
        $timeout(function () {
            evaluar();
        }, 1300);
    };

    function evaluar() {

        var a = $scope.rodillos[0].indice;
        var b = $scope.rodillos[1].indice;
        var c = $scope.rodillos[2].indice;

        console.log("Evaluando: ", a, b, c); // Para debug

        var mensaje = "";
        var clase = "";

        if (a === b && b === c) {
            mensaje = "GANASTE";
            clase = "ganar";
            $scope.ganasteCount++;
        }
        else if (a === b || a === c || b === c) {
            mensaje = "CASI";
            clase = "casi";
            $scope.casiCount++;
        }
        else {
            mensaje = "PERDISTE";
            clase = "perder";
            $scope.perdisteCount++;
        }

        console.log("Mensaje: ", mensaje, "Clase: ", clase); // Para debug

        // Mostrar mensaje con estilo
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = mensaje;
        resultadoDiv.className = clase + " mostrar";

        // Actualizar tabla
        document.getElementById("ganasteCount").innerText = $scope.ganasteCount;
        document.getElementById("casiCount").innerText = $scope.casiCount;
        document.getElementById("perdisteCount").innerText = $scope.perdisteCount;
    }

});