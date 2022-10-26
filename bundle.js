
    (function(modules){
      function require(id) {
        const [fn,mapping] = modules[id];

        function localRequire(relativePath) {
          return require(mapping[relativePath])
        }
        
        const module={
          exports:{}
        }

        fn(localRequire,module,module.exports)

        return module.exports
      }

      require(0)
    })({
      0:[
        function (require,module,exports) {
          "use strict";

var _info = _interopRequireDefault(require("./info.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log(_info["default"]);
        },
        {"./info.js":1}
      ],
    
      1:[
        function (require,module,exports) {
          "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _consts = require("./consts.js");
var _default = "\u6B22\u8FCE\u6765\u5230".concat(_consts.company);
exports["default"] = _default;
        },
        {"./consts.js":2}
      ],
    
      2:[
        function (require,module,exports) {
          "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.company = void 0;
var company = 'aideng';
exports.company = company;
        },
        {}
      ],
    })
  
  