System.register(['angular'], function(exports_1) {
    var TestController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            TestController = (function () {
                function TestController($scope) {
                    $scope.message = 'Hello World';
                }
                return TestController;
            })();
            exports_1("TestController", TestController);
        }
    }
});
//# sourceMappingURL=index.js.map