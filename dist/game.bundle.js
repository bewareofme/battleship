/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */


const ship1=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1);
const ship2=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1);


const gameboard = () => {
  const gameboardArray = [];
  const missedAttack = [];
  const succesAttack = [];
  const isSunkArray = [];
  const shipAmount = 2;

  const checkhorizontalvalidity = (startcoordinate, len) => {
    if ((startcoordinate % 10) + len > 10) return false;
    return true;
  };
  const checkverticalvalidity = (startcoordinate, len) => {
    if (Math.floor(startcoordinate / 10 + len) > 10) return false;
    return true;
  };
  const checkoverlappingvalidity = (coordinates) => {
    if (gameboardArray.find((cur) => cur.coordinate === coordinates))
      return false;
    return true;
  };

  // eslint-disable-next-line no-shadow
  const placeShip = (ship, startcoordinate) => {
    const length = ship.len;
    if (ship.properties.position === "vertical") {
      if (checkverticalvalidity(startcoordinate, length)) {
        for (let i = 0; i < length; i++) {
          if (!checkoverlappingvalidity(startcoordinate)) return;
          startcoordinate += 10;
        }
        startcoordinate -= 10 * length;
        for (let i = 0; i < length; i++) {
          gameboardArray.push({ coordinate: startcoordinate, ship });
          startcoordinate += 10;
        }
        return;
      }
      return;
    }
    if (checkhorizontalvalidity(startcoordinate, length)) {
      for (let i = 0; i < length; i++) {
        if (!checkoverlappingvalidity(startcoordinate)) return;
        startcoordinate++;
      }
      startcoordinate -= length;
      for (let i = 0; i < length; i++) {
        gameboardArray.push({ coordinate: startcoordinate, ship });
        startcoordinate++;
      }
    }
  };

  const receiveAttack = (coordinates) => {
    if (gameboardArray.find((cur) => cur.coordinate === coordinates)) {
      succesAttack.push(coordinates);
      const index = gameboardArray.findIndex(
        (cur) => cur.coordinate === coordinates
      );
      gameboardArray[index].ship.isHit(coordinates);
      if (gameboardArray[index].ship.isSunk())
        isSunkArray.push(gameboardArray[index].ship);
      return;
    }
    missedAttack.push(coordinates);
  };
  const lost = () => {
    if (isSunkArray.length === shipAmount) return true;
    return false;
  };
  return {
    missedAttack,
    placeShip,
    receiveAttack,
    gameboardArray,
    lost,
    succesAttack,
    ship1,
    ship2
  };
};



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */


const player = (turn = 1) => {
  const playergameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
  const attack = (enemy, coordinate) => {
    enemy.playergameboard.receiveAttack(coordinate);
  };
  const computerattack = (enemy) => {
    const coordinate = Math.floor(Math.random() * 98 + 1);
    console.log(coordinate);
    if (
      enemy.playergameboard.missedAttack.find((cur) => cur === coordinate) ||
      enemy.playergameboard.succesAttack.find((cur) => cur === coordinate)
    )
      computerattack(enemy);
    enemy.playergameboard.receiveAttack(coordinate);
  };
  return { playergameboard, attack, computerattack, turn };
};



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
const ship = (len) => {
  const properties = {
    isHitArray: [],
    position: "horizontal",
  };
  // isHit Function
  const isHit = (coordinates) => {
    properties.isHitArray.push(coordinates);
  };
  // isSunk Function
  const isSunk = () => {
    if (properties.isHitArray.length === len) return true;
    return false;
  };
  return { len, isHit, properties, isSunk };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* eslint-disable import/prefer-default-export */


const game = () => {
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(1);
  const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(2);
  let gameover = 0;
  let turn = 1;
  player1.playergameboard.placeShip(player1.playergameboard.ship1,53)
  player1.playergameboard.placeShip(player1.playergameboard.ship2,42)
  player2.playergameboard.placeShip(player2.playergameboard.ship1,53)
  player2.playergameboard.placeShip(player2.playergameboard.ship2,42)
  while (!gameover) {
    if (turn === 1) {
      const playermove = prompt("what position to attack");
      player1.attack(player2, Number(playermove));
      turn = player2.turn;
      if (player2.playergameboard.lost()) break;
    }
    if (turn === 2) {
      player2.computerattack(player1);
      if (player1.playergameboard.lost()) break;
      turn = player1.turn;
    }
  }
  gameover = 1;
};
game();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQzhCOztBQUU5QixZQUFZLDJDQUFJO0FBQ2hCLFlBQVksMkNBQUk7OztBQUdoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEMsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGckI7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQSwwQkFBMEIscURBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDa0I7Ozs7Ozs7Ozs7Ozs7OztBQ3JCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVnQjs7Ozs7OztVQ2xCaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2tDOztBQUVsQztBQUNBLGtCQUFrQiwrQ0FBTTtBQUN4QixrQkFBa0IsK0NBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IHNoaXAxPXNoaXAoMSk7XG5jb25zdCBzaGlwMj1zaGlwKDEpO1xuXG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkQXJyYXkgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrID0gW107XG4gIGNvbnN0IHN1Y2Nlc0F0dGFjayA9IFtdO1xuICBjb25zdCBpc1N1bmtBcnJheSA9IFtdO1xuICBjb25zdCBzaGlwQW1vdW50ID0gMjtcblxuICBjb25zdCBjaGVja2hvcml6b250YWx2YWxpZGl0eSA9IChzdGFydGNvb3JkaW5hdGUsIGxlbikgPT4ge1xuICAgIGlmICgoc3RhcnRjb29yZGluYXRlICUgMTApICsgbGVuID4gMTApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2t2ZXJ0aWNhbHZhbGlkaXR5ID0gKHN0YXJ0Y29vcmRpbmF0ZSwgbGVuKSA9PiB7XG4gICAgaWYgKE1hdGguZmxvb3Ioc3RhcnRjb29yZGluYXRlIC8gMTAgKyBsZW4pID4gMTApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tvdmVybGFwcGluZ3ZhbGlkaXR5ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKGdhbWVib2FyZEFycmF5LmZpbmQoKGN1cikgPT4gY3VyLmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGVzKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbjtcbiAgICBpZiAoc2hpcC5wcm9wZXJ0aWVzLnBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChjaGVja3ZlcnRpY2FsdmFsaWRpdHkoc3RhcnRjb29yZGluYXRlLCBsZW5ndGgpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWNoZWNrb3ZlcmxhcHBpbmd2YWxpZGl0eShzdGFydGNvb3JkaW5hdGUpKSByZXR1cm47XG4gICAgICAgICAgc3RhcnRjb29yZGluYXRlICs9IDEwO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0Y29vcmRpbmF0ZSAtPSAxMCAqIGxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGdhbWVib2FyZEFycmF5LnB1c2goeyBjb29yZGluYXRlOiBzdGFydGNvb3JkaW5hdGUsIHNoaXAgfSk7XG4gICAgICAgICAgc3RhcnRjb29yZGluYXRlICs9IDEwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoZWNraG9yaXpvbnRhbHZhbGlkaXR5KHN0YXJ0Y29vcmRpbmF0ZSwgbGVuZ3RoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWNoZWNrb3ZlcmxhcHBpbmd2YWxpZGl0eShzdGFydGNvb3JkaW5hdGUpKSByZXR1cm47XG4gICAgICAgIHN0YXJ0Y29vcmRpbmF0ZSsrO1xuICAgICAgfVxuICAgICAgc3RhcnRjb29yZGluYXRlIC09IGxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ2FtZWJvYXJkQXJyYXkucHVzaCh7IGNvb3JkaW5hdGU6IHN0YXJ0Y29vcmRpbmF0ZSwgc2hpcCB9KTtcbiAgICAgICAgc3RhcnRjb29yZGluYXRlKys7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkQXJyYXkuZmluZCgoY3VyKSA9PiBjdXIuY29vcmRpbmF0ZSA9PT0gY29vcmRpbmF0ZXMpKSB7XG4gICAgICBzdWNjZXNBdHRhY2sucHVzaChjb29yZGluYXRlcyk7XG4gICAgICBjb25zdCBpbmRleCA9IGdhbWVib2FyZEFycmF5LmZpbmRJbmRleChcbiAgICAgICAgKGN1cikgPT4gY3VyLmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGVzXG4gICAgICApO1xuICAgICAgZ2FtZWJvYXJkQXJyYXlbaW5kZXhdLnNoaXAuaXNIaXQoY29vcmRpbmF0ZXMpO1xuICAgICAgaWYgKGdhbWVib2FyZEFycmF5W2luZGV4XS5zaGlwLmlzU3VuaygpKVxuICAgICAgICBpc1N1bmtBcnJheS5wdXNoKGdhbWVib2FyZEFycmF5W2luZGV4XS5zaGlwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrLnB1c2goY29vcmRpbmF0ZXMpO1xuICB9O1xuICBjb25zdCBsb3N0ID0gKCkgPT4ge1xuICAgIGlmIChpc1N1bmtBcnJheS5sZW5ndGggPT09IHNoaXBBbW91bnQpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtaXNzZWRBdHRhY2ssXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2FtZWJvYXJkQXJyYXksXG4gICAgbG9zdCxcbiAgICBzdWNjZXNBdHRhY2ssXG4gICAgc2hpcDEsXG4gICAgc2hpcDJcbiAgfTtcbn07XG5leHBvcnQgeyBnYW1lYm9hcmQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBwbGF5ZXIgPSAodHVybiA9IDEpID0+IHtcbiAgY29uc3QgcGxheWVyZ2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICB9O1xuICBjb25zdCBjb21wdXRlcmF0dGFjayA9IChlbmVteSkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OCArIDEpO1xuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xuICAgIGlmIChcbiAgICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5taXNzZWRBdHRhY2suZmluZCgoY3VyKSA9PiBjdXIgPT09IGNvb3JkaW5hdGUpIHx8XG4gICAgICBlbmVteS5wbGF5ZXJnYW1lYm9hcmQuc3VjY2VzQXR0YWNrLmZpbmQoKGN1cikgPT4gY3VyID09PSBjb29yZGluYXRlKVxuICAgIClcbiAgICAgIGNvbXB1dGVyYXR0YWNrKGVuZW15KTtcbiAgICBlbmVteS5wbGF5ZXJnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgfTtcbiAgcmV0dXJuIHsgcGxheWVyZ2FtZWJvYXJkLCBhdHRhY2ssIGNvbXB1dGVyYXR0YWNrLCB0dXJuIH07XG59O1xuZXhwb3J0IHsgcGxheWVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5jb25zdCBzaGlwID0gKGxlbikgPT4ge1xuICBjb25zdCBwcm9wZXJ0aWVzID0ge1xuICAgIGlzSGl0QXJyYXk6IFtdLFxuICAgIHBvc2l0aW9uOiBcImhvcml6b250YWxcIixcbiAgfTtcbiAgLy8gaXNIaXQgRnVuY3Rpb25cbiAgY29uc3QgaXNIaXQgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBwcm9wZXJ0aWVzLmlzSGl0QXJyYXkucHVzaChjb29yZGluYXRlcyk7XG4gIH07XG4gIC8vIGlzU3VuayBGdW5jdGlvblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BlcnRpZXMuaXNIaXRBcnJheS5sZW5ndGggPT09IGxlbikgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICByZXR1cm4geyBsZW4sIGlzSGl0LCBwcm9wZXJ0aWVzLCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoMSk7XG4gIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXIoMik7XG4gIGxldCBnYW1lb3ZlciA9IDA7XG4gIGxldCB0dXJuID0gMTtcbiAgcGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQucGxhY2VTaGlwKHBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXAxLDUzKVxuICBwbGF5ZXIxLnBsYXllcmdhbWVib2FyZC5wbGFjZVNoaXAocGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQuc2hpcDIsNDIpXG4gIHBsYXllcjIucGxheWVyZ2FtZWJvYXJkLnBsYWNlU2hpcChwbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwMSw1MylcbiAgcGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQucGxhY2VTaGlwKHBsYXllcjIucGxheWVyZ2FtZWJvYXJkLnNoaXAyLDQyKVxuICB3aGlsZSAoIWdhbWVvdmVyKSB7XG4gICAgaWYgKHR1cm4gPT09IDEpIHtcbiAgICAgIGNvbnN0IHBsYXllcm1vdmUgPSBwcm9tcHQoXCJ3aGF0IHBvc2l0aW9uIHRvIGF0dGFja1wiKTtcbiAgICAgIHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIE51bWJlcihwbGF5ZXJtb3ZlKSk7XG4gICAgICB0dXJuID0gcGxheWVyMi50dXJuO1xuICAgICAgaWYgKHBsYXllcjIucGxheWVyZ2FtZWJvYXJkLmxvc3QoKSkgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0dXJuID09PSAyKSB7XG4gICAgICBwbGF5ZXIyLmNvbXB1dGVyYXR0YWNrKHBsYXllcjEpO1xuICAgICAgaWYgKHBsYXllcjEucGxheWVyZ2FtZWJvYXJkLmxvc3QoKSkgYnJlYWs7XG4gICAgICB0dXJuID0gcGxheWVyMS50dXJuO1xuICAgIH1cbiAgfVxuICBnYW1lb3ZlciA9IDE7XG59O1xuZ2FtZSgpO1xuZXhwb3J0IHsgZ2FtZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9