// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data.json":[function(require,module,exports) {
module.exports = [{
  "alias": "leaders",
  "data": {
    "title": "Больше всего коммитов",
    "subtitle": "Спринт № 213",
    "emoji": "👑",
    "users": [{
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "32"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "27"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "22"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "20"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "19"
    }]
  }
}, {
  "alias": "leaders",
  "data": {
    "title": "Самый большой коммит",
    "subtitle": "Спринт № 213",
    "emoji": "😮",
    "users": [{
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "4001 строка"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "3845 строк"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "3640 строк"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "3453 строки"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "2852 строки"
    }]
  }
}, {
  "alias": "vote",
  "data": {
    "title": "Самый 🔎 внимательный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "🔎",
    "selectedUserId": 4,
    "users": [{
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "22 голоса"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "17 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "11 голосов"
    }, {
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "10 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "8 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "7 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "5 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "4 голоса"
    }]
  }
}, {
  "alias": "leaders",
  "data": {
    "title": "Самый 🔎 внимательный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "🔎",
    "selectedUserId": 11,
    "users": [{
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "22 голоса"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "17 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "15 голосов"
    }, {
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "14 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "12 голосов"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "8 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "5 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "4 голоса"
    }]
  }
}, {
  "alias": "vote",
  "data": {
    "title": "Самый 👪 командный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "👪",
    "offset": 8,
    "users": [{
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "24 голоса"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "21 голос"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "18 голосов"
    }, {
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "14 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "13 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "11 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "7 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "5 голосов"
    }]
  }
}, {
  "alias": "leaders",
  "data": {
    "title": "Самый 👪 командный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "👪",
    "selectedUserId": 6,
    "users": [{
      "id": 2,
      "name": "Александр Шлейко",
      "avatar": "2.jpg",
      "valueText": "24 голоса"
    }, {
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "21 голос"
    }, {
      "id": 6,
      "name": "Андрей Мокроусов",
      "avatar": "6.jpg",
      "valueText": "19 голосов"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "18 голосов"
    }, {
      "id": 1,
      "name": "Евгений Дементьев",
      "avatar": "1.jpg",
      "valueText": "16 голосов"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "14 голосов"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "13 голосов"
    }, {
      "id": 11,
      "name": "Юрий Фролов",
      "avatar": "11.jpg",
      "valueText": "11 голосов"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "9 голосов"
    }, {
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "7 голосов"
    }, {
      "id": 5,
      "name": "Александр Николаичев",
      "avatar": "5.jpg",
      "valueText": "6 голосов"
    }, {
      "id": 4,
      "name": "Вадим Пацев",
      "avatar": "4.jpg",
      "valueText": "5 голосов"
    }]
  }
}, {
  "alias": "chart",
  "data": {
    "title": "Коммиты",
    "subtitle": "Спринт № 213",
    "values": [{
      "title": "203",
      "value": 108
    }, {
      "title": "204",
      "value": 160
    }, {
      "title": "205",
      "value": 126
    }, {
      "title": "206",
      "value": 134
    }, {
      "title": "207",
      "value": 112
    }, {
      "title": "208",
      "value": 152
    }, {
      "title": "209",
      "value": 128
    }, {
      "title": "210",
      "value": 164
    }, {
      "title": "211",
      "value": 118
    }, {
      "title": "212",
      "value": 140
    }, {
      "title": "213",
      "value": 182,
      "active": true
    }, {
      "title": "214",
      "value": 0
    }, {
      "title": "215",
      "value": 0
    }, {
      "title": "216",
      "value": 0
    }, {
      "title": "217",
      "value": 0
    }, {
      "title": "218",
      "value": 0
    }],
    "users": [{
      "id": 3,
      "name": "Дарья Ковалева",
      "avatar": "3.jpg",
      "valueText": "32"
    }, {
      "id": 9,
      "name": "Сергей Бережной",
      "avatar": "9.jpg",
      "valueText": "27"
    }, {
      "id": 7,
      "name": "Дмитрий Андриянов",
      "avatar": "7.jpg",
      "valueText": "22"
    }]
  }
}, {
  "alias": "chart",
  "data": {
    "title": "Строки кода",
    "subtitle": "Спринт № 213",
    "values": [{
      "title": "203",
      "value": 47.798
    }, {
      "title": "204",
      "value": 68.590
    }, {
      "title": "205",
      "value": 55.472
    }, {
      "title": "206",
      "value": 63.073
    }, {
      "title": "207",
      "value": 51.917
    }, {
      "title": "208",
      "value": 65.852
    }, {
      "title": "209",
      "value": 60.693
    }, {
      "title": "210",
      "value": 70.631
    }, {
      "title": "211",
      "value": 57.299
    }, {
      "title": "212",
      "value": 62.839
    }, {
      "title": "213",
      "value": 74.156,
      "active": true
    }, {
      "title": "214",
      "value": 0
    }, {
      "title": "215",
      "value": 0
    }, {
      "title": "216",
      "value": 0
    }, {
      "title": "217",
      "value": 0
    }, {
      "title": "218",
      "value": 0
    }],
    "users": [{
      "id": 12,
      "name": "Алексей Ярошевич",
      "avatar": "12.jpg",
      "valueText": "8739"
    }, {
      "id": 8,
      "name": "Александр Иванков",
      "avatar": "8.jpg",
      "valueText": "7538"
    }, {
      "id": 10,
      "name": "Яна Берникова",
      "avatar": "10.jpg",
      "valueText": "6845"
    }]
  }
}, {
  "alias": "diagram",
  "data": {
    "title": "Размер коммитов",
    "subtitle": "Спринт № 213",
    "totalText": "182 коммита",
    "differenceText": "+42 с прошлого спринта",
    "categories": [{
      "title": "> 1001 строки",
      "valueText": "30",
      "differenceText": "+8"
    }, {
      "title": "501 — 1000 строк",
      "valueText": "32",
      "differenceText": "+6"
    }, {
      "title": "101 — 500 строк",
      "valueText": "58",
      "differenceText": "+16"
    }, {
      "title": "1 — 100 строк",
      "valueText": "62",
      "differenceText": "+12"
    }]
  }
}, {
  "alias": "activity",
  "data": {
    "title": "Коммиты, 1 неделя",
    "subtitle": "Спринт № 213",
    "data": {
      "mon": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 3, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      "tue": [0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 1, 0, 3, 0, 0, 2, 1, 0],
      "wed": [1, 0, 0, 0, 1, 0, 5, 0, 0, 4, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1],
      "thu": [0, 1, 0, 1, 0, 0, 0, 0, 6, 0, 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0],
      "fri": [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 5, 0, 4, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0],
      "sat": [0, 0, 0, 0, 2, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      "sun": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    }
  }
}, {
  "alias": "activity",
  "data": {
    "title": "Коммиты, 2 неделя",
    "subtitle": "Спринт № 213",
    "data": {
      "mon": [0, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2],
      "tue": [0, 1, 2, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "wed": [0, 0, 0, 0, 2, 0, 1, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 0, 0],
      "thu": [0, 0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 1, 2, 0, 3, 0, 1, 1, 0, 0, 0],
      "fri": [0, 0, 0, 1, 1, 0, 2, 0, 4, 0, 0, 0, 2, 0, 3, 2, 0, 0, 0, 0, 1, 1, 0, 1],
      "sat": [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0],
      "sun": [0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1]
    }
  }
}];
},{}],"leader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stories = require("./stories.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CreateLeaderSlide = /*#__PURE__*/function () {
  function CreateLeaderSlide(title, subtitle, emoji, users, data) {
    _classCallCheck(this, CreateLeaderSlide);

    this.title = title;
    this.subtitle = subtitle;
    this.emoji = emoji;
    this.users = users;
    this.data = data;
  }

  _createClass(CreateLeaderSlide, [{
    key: "usersFor",
    value: function usersFor() {
      var _this = this;

      var sliceLeader = this.users.slice(0, 5);
      var createList = "";
      var selectedUser = this.data.selectedUserId;
      var selUser = this.users.find(function (slide) {
        return slide.id === selectedUser;
      });
      var titleList = "";
      titleList = "\n          <div class=\"contentTitle\"> \n           <div class = \"title ".concat(_stories.theme, "\">").concat(this.title, "</div>\n           <div class = \"subtitle ").concat(_stories.theme, "\">").concat(this.subtitle, "</div>\n           </div>\n          ");
      var place = 0;
      sliceLeader.forEach(function (el) {
        place += 1;

        if (el === selUser) {
          createList += "\n                <div class=\"mainContent ".concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n                <div class = \"emoji ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(_this.emoji, "</div>\n                <img src=\"./img/").concat(el.avatar, "\" alt=\"").concat(el.name, "\" class=\"imgUser ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n                <div class=\"userName_").concat(_stories.theme, "\">").concat(el.name, "</div>\n                <div class=\"userValueText ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(el.valueText, " </div>\n                <div class=\"containerUser ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n                <div class=\"number_").concat(_stories.theme, "\">").concat(place, "</div>\n                </div>\n                </div>\n                ");
        } else {
          createList += "\n                <div class=\"mainContent ".concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n                <img src=\"./img/").concat(el.avatar, "\" alt=\"").concat(el.name, "\" class=\"imgUser ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n                <div class=\"userName_").concat(_stories.theme, "\">").concat(el.name, "</div>\n                <div class=\"userValueText ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(el.valueText, " </div>\n                <div class=\"containerUser ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n                <div class=\"number_").concat(_stories.theme, "\">").concat(place, "</div>\n                </div>\n                </div>\n                ");
        }
      });
      _stories.body.innerHTML += titleList + "<div class=\"contentContainer\">".concat(createList, "</div>");
      console.log(_stories.currAlias);
    }
  }]);

  return CreateLeaderSlide;
}();

exports.default = CreateLeaderSlide;
},{"./stories.js":"stories.js"}],"vote.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stories = require("./stories.js");

var _leader = _interopRequireDefault(require("./leader.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CreateVoteSlide = /*#__PURE__*/function (_CreateLeaderSlide) {
  _inherits(CreateVoteSlide, _CreateLeaderSlide);

  var _super = _createSuper(CreateVoteSlide);

  function CreateVoteSlide(title, subtitle, emoji, users) {
    _classCallCheck(this, CreateVoteSlide);

    return _super.call(this, title, subtitle, emoji, users);
  }

  _createClass(CreateVoteSlide, [{
    key: "usersFor",
    value: function usersFor() {
      var usersVote = this.users;
      var sliceVoteFirst = this.users.slice(0, 6);
      var sliceVoteSecond = this.users.slice(6, 12);
      console.log(sliceVoteSecond);
      var titleList = "";
      titleList = "\n               <div class=\"contentTitle\"> \n                <div class = \"title ".concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(this.title, "</div>\n                <div class = \"subtitle ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(this.subtitle, "</div>\n                </div>\n               ");
      var content = "";
      var emoji = "<div class = \"emoji ".concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(this.emoji, "</div>");
      usersVote.forEach(function (el) {
        content += "\n                 <div class=\"mainContentVote ".concat(_stories.theme, "\">\n                 <img src=\"img/").concat(el.avatar, "\" alt=\"").concat(el.name, "\" class=\"imgUserVote\">\n                 <div class=\"userNameVote_").concat(_stories.theme, "\">").concat(el.name, "</div>\n                 <div class=\"userValueTextVote\">").concat(el.valueText, " </div>\n                 </div>\n                 ");
      });
      var button = "\n        <div class=\"buttonUp button_".concat(_stories.theme, " buttonHover\"></div>\n        <div class=\"buttonDown button_").concat(_stories.theme, " buttonNonHover\"></div>\n        ");
      _stories.body.innerHTML += titleList + "<div class=\"contentContainerVote\">".concat(content + button, "</div>");
      var evtClickUp = document.querySelector(".buttonUp");
      var evtClickDown = document.querySelector(".buttonDown");
      var evtClickVote = document.querySelectorAll(".mainContentVote");
      console.log(evtClickVote);

      for (var i = 6; i < evtClickVote.length; i++) {
        evtClickVote[i].classList.add("displayHidden");
        console.log(evtClickVote[i]);
      }

      var _loop = function _loop(_i) {
        evtClickVote[_i].addEventListener("click", function () {
          for (var j = 0; j < evtClickVote.length; j++) {
            evtClickVote[j].classList.remove("clickVoteButoon");
          }

          evtClickVote[_i].classList.add("clickVoteButoon");
        });
      };

      for (var _i = 0; _i < evtClickVote.length; _i++) {
        _loop(_i);
      }

      evtClickUp.addEventListener("click", function () {
        console.log("evt click Up");
        evtClickUp.classList.add("buttonHoverClick_".concat(_stories.theme));
        evtClickDown.classList.remove("buttonHoverClick_".concat(_stories.theme));

        for (var _i2 = 6; _i2 < evtClickVote.length; _i2++) {
          evtClickVote[_i2].classList.add("displayHidden");

          console.log(evtClickVote[_i2]);
        }

        for (var _i3 = 0; _i3 < evtClickVote.length - 6; _i3++) {
          evtClickVote[_i3].classList.remove("displayHidden");

          console.log(evtClickVote[_i3]);
        }

        console.log(evtClickVote);
      });
      evtClickDown.addEventListener("click", function () {
        console.log("evt click Down");
        evtClickDown.classList.add("buttonHoverClick_".concat(_stories.theme));
        evtClickUp.classList.remove("buttonHoverClick_".concat(_stories.theme));

        for (var _i4 = 0; _i4 < evtClickVote.length - 6; _i4++) {
          evtClickVote[_i4].classList.add("displayHidden");

          console.log(evtClickVote[_i4]);
        }

        for (var _i5 = 6; _i5 < evtClickVote.length; _i5++) {
          evtClickVote[_i5].classList.remove("displayHidden");

          console.log(evtClickVote[_i5]);
        }
      });
    }
  }]);

  return CreateVoteSlide;
}(_leader.default);

exports.default = CreateVoteSlide;
},{"./stories.js":"stories.js","./leader.js":"leader.js"}],"chart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stories = require("./stories.js");

var _vote = _interopRequireDefault(require("./vote.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CreateChartSlide = /*#__PURE__*/function (_CreateVoteSlide) {
  _inherits(CreateChartSlide, _CreateVoteSlide);

  var _super = _createSuper(CreateChartSlide);

  function CreateChartSlide(title, subtitle, users, values) {
    var _this;

    _classCallCheck(this, CreateChartSlide);

    _this = _super.call(this, title, subtitle, '', users);
    _this.values = values;
    return _this;
  }

  _createClass(CreateChartSlide, [{
    key: "usersFor",
    value: function usersFor() {
      var userSLice = this.users.slice(0, 2);
      var dataSlice = this.values.slice(0, 11);
      var userSelect = this.values.find(function (userAct) {
        return userAct.active === true;
      });
      console.log(userSelect);
      var titleList = "";
      titleList = "\n               <div class=\"contentTitle\"> \n                <div class = \"title ".concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(this.title, "</div>\n                <div class = \"subtitle ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(this.subtitle, "</div>\n                </div>\n               ");
      var content = "";
      var statusBar = "";
      dataSlice.forEach(function (el) {
        statusBar += "<div class = \"statusBar\">".concat(el.value, " </div>");
      });
      userSLice.forEach(function (el) {
        content += "\n                <div class=\"contentContainerUser".concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n               \n                <img src=\"img/").concat(el.avatar, "\" alt=\"").concat(el.name, "\" class=\"imgUser ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">\n                <div class=\"containerUserInfo\">\n                <div class=\"userName").concat(_stories.currAlias, "_").concat(_stories.theme, "\">").concat(el.name, "</div>\n                \n                <div class=\"cardUserValueText").concat(_stories.currAlias, "_").concat(_stories.theme, "\">").concat(el.valueText, " </div>\n                \n                </div>\n                <div class=\"Slash ").concat(_stories.currAlias, " ").concat(_stories.theme, "\"></div>\n                </div>\n                ");
      });
      var testBar = "";
      dataSlice.forEach(function (el) {
        if (el === userSelect) {
          testBar += "\n                   <div class=\"bars\">\n                   <div class=\"stats\">".concat(el.value, "</div>\n                   <div class=\"pram_").concat(_stories.theme, " userSelect\" style=\"width:40px; height:").concat(el.value, "px\"></div>\n                   \n                   <div class=\"titleChartBar\">").concat(el.title, "</div>\n                   </div>\n                   ");
        } else {
          testBar += "\n                        <div class=\"bars\">\n                        <div class=\"stats\">".concat(el.value, "</div>\n                        <div class=\"pram_").concat(_stories.theme, "\" style=\"width:40px; height:").concat(el.value, "px\"></div>\n                        <div class=\"titleChartBar\">").concat(el.title, "</div>\n                        </div>\n                        ");
        }
      });
      _stories.body.innerHTML += titleList + "<div class=\"mainBar\">".concat(testBar, "</div>") + "<div class=\"containerUser_".concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(content, "</div>");
    }
  }]);

  return CreateChartSlide;
}(_vote.default);

exports.default = CreateChartSlide;
},{"./stories.js":"stories.js","./vote.js":"vote.js"}],"diagram.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stories = require("./stories.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CreateDiagramSlide = /*#__PURE__*/function () {
  function CreateDiagramSlide(title, subtitle, totalText, differenceText, categories) {
    _classCallCheck(this, CreateDiagramSlide);

    this.title = title;
    this.subtitle = subtitle;
    this.totalText = totalText;
    this.differenceText = differenceText;
    this.categories = categories;
  }

  _createClass(CreateDiagramSlide, [{
    key: "usersFor",
    value: function usersFor() {
      var titleList = "";
      titleList = "\n             <div class=\"contentTitle\"> \n              <div class = \"title ".concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(this.title, "</div>\n              <div class = \"subtitle ").concat(_stories.currAlias, " ").concat(_stories.theme, "\">").concat(this.subtitle, "</div>\n              </div>\n             ");
      var mainList = "";
      this.categories.forEach(function (el) {
        mainList += "\n            <div class = \"mainContainer\">\n\n            <div class=\"rollCat_".concat(_stories.theme, "\"></div>\n            <div class=\"titleCat_").concat(_stories.theme, "\">").concat(el.title, "</div>\n            <div class=\"valueTextCat\">").concat(el.differenceText, "</div>\n            <div class=\"differenceTextCat\">").concat(el.valueText, "</div>\n\n            </div>\n            ");
      });
      _stories.body.innerHTML += titleList + "<div class=\"diagramContent\"><div class=\"mainContent_diagram\">".concat(mainList, "</div></div>");
      console.log(this.totalText);
      var colorDiagram;

      if (_stories.theme === "theme_light") {
        colorDiagram = ["#FFB800", "#FFEF99", "#CBCBCB", "#E4E4E4"];
      } else {
        colorDiagram = ["#FFA300", "#633F00", "#292929", "#3E3E3E"];
      }

      var colorText;
      var secondColorText = "#918F8A";

      if (_stories.theme === "theme_dark") {
        colorText = "#FCFBF7";
      } else {
        colorText = "#261C00";
      }

      console.log(colorDiagram);
      console.log(_stories.theme);
      var width = 270,
          height = 270,
          margin = 20;
      var radius = Math.min(width, height) / 2 - margin;
      var svg = d3.select(".diagramContent").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(".concat(width / 2, ",").concat(height / 2, ")"));
      var data = {
        a: 8,
        b: 6,
        c: 16,
        d: 12
      };
      var color = d3.scaleOrdinal().range(colorDiagram);
      var pie = d3.pie().value(function (d) {
        return d[1];
      });
      var data_ready = pie(Object.entries(data));
      svg.selectAll('whatever').data(data_ready).join('path').attr('d', d3.arc().innerRadius(75).outerRadius(radius)).attr('fill', function (d) {
        return color(d.data[0]);
      }).attr("stroke", "black").style("stroke-width", "2px").style("opacity", 0.7);
      var val = this.differenceText;
      var cal = val.slice(0, 14);
      var sal = [val.slice(15, 22)];
      var textData = [this.totalText, cal];
      var barWidth = -20;
      var barHeight = -40;
      var myText = svg.selectAll(".mytext").data(textData).enter().append("text").text(function (d) {
        return d;
      }).style("fill", "".concat(colorText)).attr("x", function (d, i) {
        return barHeight - i * 15;
      }).attr('y', function (d, i) {
        return barWidth + i * 20;
      });
      var myTexts = svg.selectAll(".mytext").data(sal).enter().append("text").text(function (d) {
        return d;
      }).style("fill", "".concat(secondColorText)).attr("x", -25).attr('y', 20);
    }
  }]);

  return CreateDiagramSlide;
}();

exports.default = CreateDiagramSlide;
},{"./stories.js":"stories.js"}],"activity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stories = require("./stories.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var createActivitySlide = /*#__PURE__*/function () {
  function createActivitySlide(title, subtitle, data) {
    _classCallCheck(this, createActivitySlide);

    this.title = title;
    this.subtitle = subtitle;
    this.data = data;
  }

  _createClass(createActivitySlide, [{
    key: "usersFor",
    value: function usersFor() {
      var titleList = "\n<div class=\"contentTitle\">\n<div class=\"title\">".concat(this.title, "</div>\n<div class=\"subtitle\">").concat(this.subtitle, "</div>\n</div>\n\n");
      var footerList = "\n<div class=\"footer\">\n<div class=\"footerBlock_".concat(_stories.theme, "\">2 \u0447\u0430\u0441\u0430</div>\n<div class=\"footerBlock_").concat(_stories.theme, "\">0</div>\n<div class=\"footerBlock_").concat(_stories.theme, "\">1-2</div>\n<div class=\"footerBlock_").concat(_stories.theme, "\">3-4</div>\n<div class=\"footerBlock_").concat(_stories.theme, "\">5-6</div>\n</div>\n");
      var mon = this.data.mon;
      var tue = this.data.tue;
      var wed = this.data.wed;
      var thu = this.data.thu;
      var fri = this.data.fri;
      var sat = this.data.sat;
      var sun = this.data.sun;

      var themePic = _stories.theme.split('_').pop();

      var srcPic = {
        "0": "min-".concat(themePic, ".png"),
        "1": "mid-".concat(themePic, ".png"),
        "2": "mid-".concat(themePic, ".png"),
        "3": "mid-".concat(themePic, ".png"),
        "4": "max-".concat(themePic, ".png"),
        "5": "extra-".concat(themePic, ".png"),
        "6": "extra-".concat(themePic, ".png")
      };

      function sliceData(params) {
        var result = [];

        for (var i = 1; i < params.length; i += 2) {
          result.push(params[i] + params[i - 1]);
        }

        return result;
      }

      var contentMon = "";
      sliceData(mon).forEach(function (el) {
        contentMon += "\n  \n    <img src=\"img/".concat(srcPic[el], "\" class=\"imgAct ").concat(_stories.currAlias, "\">\n   \n    ");
      });
      var contentTue = "";
      sliceData(tue).forEach(function (el) {
        contentTue += "\n  \n    <img src=\"img/".concat(srcPic[el], "\" class=\"imgAct ").concat(_stories.currAlias, "\">\n   \n    ");
      });
      var contentWed = "";
      sliceData(wed).forEach(function (el) {
        contentWed += "\n  \n    <img src=\"img/".concat(srcPic[el], "\" class=\"imgAct ").concat(_stories.currAlias, "\">\n   \n    ");
      });
      var contentThu = "";
      sliceData(thu).forEach(function (el) {
        contentThu += "\n  \n    <img src=\"img/".concat(srcPic[el], "\" class=\"imgAct ").concat(_stories.currAlias, "\">\n   \n    ");
      });
      var contentFri = "";
      sliceData(fri).forEach(function (el) {
        contentFri += "\n  \n    <img src=\"img/".concat(srcPic[el], "\" class=\"imgAct ").concat(_stories.currAlias, "\">\n   \n    ");
      });
      var contentSat = "";
      sliceData(sat).forEach(function (el) {
        contentSat += "\n  \n    <img src=\"img/".concat(srcPic[el], "\" class=\"imgAct ").concat(_stories.currAlias, "\">\n   \n    ");
      });
      var contentSun = "";
      sliceData(sun).forEach(function (el) {
        contentSun += "\n  \n    <img src=\"img/".concat(srcPic[el], "\" class=\"imgAct ").concat(_stories.currAlias, "\">\n   \n    ");
      });
      _stories.body.innerHTML = titleList + "<div class=\"mainContentAct\">".concat("<div class=\"mon\">".concat(contentMon, "</div>") + "<div class=\"tue\">".concat(contentTue, "</div>") + "<div class=\"wed\">".concat(contentWed, "</div>") + "<div class=\"thu\">".concat(contentThu, "</div>") + "<div class=\"fri\">".concat(contentFri, "</div>") + "<div class=\"sat\">".concat(contentSat, "</div>") + "<div class=\"sun\">".concat(contentSun, "</div>"), "   </div>") + footerList;
    }
  }]);

  return createActivitySlide;
}();

exports.default = createActivitySlide;
},{"./stories.js":"stories.js"}],"stories.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.dataLeader = exports.currAlias = exports.body = void 0;

var _data = _interopRequireDefault(require("./data.json"));

var _leader = _interopRequireDefault(require("./leader.js"));

var _vote = _interopRequireDefault(require("./vote.js"));

var _chart = _interopRequireDefault(require("./chart.js"));

var _diagram = _interopRequireDefault(require("./diagram.js"));

var _activity = _interopRequireDefault(require("./activity.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var body = document.querySelector("body");
exports.body = body;
var defPage = window.location.search;
var params = (window.location.search || '').replace('?', '').split('&').reduce(function (acc, curr) {
  var _curr$split = curr.split('='),
      _curr$split2 = _slicedToArray(_curr$split, 2),
      param = _curr$split2[0],
      value = _curr$split2[1];

  acc[param] = value;
  return acc;
}, {});
var slideKey = 'slide';
var themeKey = 'theme';
var currentSlide = params[slideKey];
var currentTheme = params[themeKey];
var slde = _data.default[currentSlide - 1];
var currAlias = slde.alias;
exports.currAlias = currAlias;
var currTitle = slde.data.title;
var currSubtitle = slde.data.subtitle;
var currEmoji = slde.data.emoji;
var reccUser = slde.data.users;
var reccValues = slde.data.values;
var recTotalText = slde.data.totalText;
var recDifferenceText = slde.data.differenceText;
var recCategories = slde.data.categories;
var recData = slde.data.data;
var dataLeader = slde.data;
exports.dataLeader = dataLeader;
var theme = 'theme_' + currentTheme;
exports.theme = theme;

if (theme === 'theme_undefined') {
  exports.theme = theme = 'theme_dark';
}

body.className = theme;
var recLeader = new _leader.default(currTitle, currSubtitle, currEmoji, reccUser, dataLeader);
var recVote = new _vote.default(currTitle, currSubtitle, currEmoji, reccUser);
var recChart = new _chart.default(currTitle, currSubtitle, reccUser, reccValues);
var recDiagram = new _diagram.default(currTitle, currSubtitle, recTotalText, recDifferenceText, recCategories);
var recActivity = new _activity.default(currTitle, currSubtitle, recData);

if (currAlias === 'leaders') {
  recLeader.usersFor();
} else if (currAlias === 'vote') {
  recVote.usersFor();
} else if (currAlias === 'chart') {
  recChart.usersFor();
} else if (currAlias === 'diagram') {
  recDiagram.usersFor();
} else if (currAlias === 'activity') {
  recActivity.usersFor();
}

console.log(defPage);
},{"./data.json":"data.json","./leader.js":"leader.js","./vote.js":"vote.js","./chart.js":"chart.js","./diagram.js":"diagram.js","./activity.js":"activity.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44643" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","stories.js"], null)
//# sourceMappingURL=/stories.7c50bba4.js.map