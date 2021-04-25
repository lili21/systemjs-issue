System.register('test', ['react'], function (exports) {
  'use strict';
  var useEffect, createElement;
  return {
    setters: [function (module) {
      useEffect = module.useEffect;
      createElement = module.createElement;
    }],
    execute: function () {

      exports('default', Test);

      function Test() {
        useEffect(() => {
          console.log('test');
        }, []);
        return /*#__PURE__*/createElement("div", null, "Hello, Test Component");
      }

    }
  };
});
