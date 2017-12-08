(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', Controller);

    function Controller() {
        var vm = this;

        initController();

        function initController() {
        }

        function salvar(){
            console.log("teste");
        }
    }

})();