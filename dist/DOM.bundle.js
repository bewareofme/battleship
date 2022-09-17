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


const gameboard = () => {
const ship1=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5);
const ship2=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4);
const ship3=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3);
const ship4=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3);
const ship5=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2);

  const gameboardArray = [];
  const missedAttack = [];
  const succesAttack = [];
  const isSunkArray = [];
  const shipAmount = 5;

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
          if (!checkoverlappingvalidity(startcoordinate)) return false;
          startcoordinate += 10;
        }
        startcoordinate -= 10 * length;
        for (let i = 0; i < length; i++) {
          gameboardArray.push({ coordinate: startcoordinate, ship });
          startcoordinate += 10;
        }
        return true;
      }
      return false;
    }
    if (checkhorizontalvalidity(startcoordinate, length)) {
      for (let i = 0; i < length; i++) {
        if (!checkoverlappingvalidity(startcoordinate)) return false;
        startcoordinate++;
      }
      startcoordinate -= length;
      for (let i = 0; i < length; i++) {
        gameboardArray.push({ coordinate: startcoordinate, ship });
        startcoordinate++;
      }
      return true
    }
    return false
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
      return true;
    }
    missedAttack.push(coordinates);
    return false;
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
    ship2,
    ship3,
    ship4,
    ship5
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
    if(enemy.playergameboard.receiveAttack(coordinate))return true
    return false
  };
  const computerattack = (enemy) => {
    const coordinate = Math.floor(Math.random() * 99);
    if (
      enemy.playergameboard.missedAttack.find((cur) => cur === coordinate) ||
      enemy.playergameboard.succesAttack.find((cur) => cur === coordinate)
    )
      computerattack(enemy);
    enemy.playergameboard.receiveAttack(coordinate);
  };
  return { playergameboard, attack, computerattack, turn};
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
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */



let shipnumber=1;
let computership=1;

const startbutton=document.querySelector('.start')
const instruction=document.querySelector('.instruction')
instruction.textContent='Set your ship of length 5'

const player1=(0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(1)
const player2=(0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(2)
// game(player1,player2)
const player1grid=document.querySelector('.container_player1>.grid')
const player2grid=document.querySelector('.container_player2>.grid')
let currenship=player1.playergameboard.ship1;
let currentcompship=player2.playergameboard.ship1;
const computerplaceship=()=>{

  while(computership<6){
  const randomNum = Math.floor(Math.random() * 99);
  if(computership===2){currentcompship=player2.playergameboard.ship2}
  if(computership===3){currentcompship=player2.playergameboard.ship3}
  if(computership===4){currentcompship=player2.playergameboard.ship4}
  if(computership===5){currentcompship=player2.playergameboard.ship5}
  if(computership===6){return}
  if(player2.playergameboard.placeShip(currentcompship,randomNum)){
    computership++;
  }
  }
  console.log(player2.playergameboard.gameboardArray)
}

// eslint-disable-next-line no-shadow
const createGrid=(container,player)=>{
    let count=0;
    for(let i=0;i<10;i++){
      for(let x=0;x<10;x++){
        const createbutton=document.createElement('button')
        createbutton.classList.add('gridbutton')
        createbutton.setAttribute('coordinateData',count);
        createbutton.addEventListener('click',()=>{
            const coordinate=createbutton.getAttribute('coordinateData')
            if(player===player2){
              if(shipnumber===1){ instruction.textContent='Set your ship of length 4'}
              if(shipnumber===2){ currenship=player1.playergameboard.ship2;instruction.textContent='Set your ship of length 3'}
              if(shipnumber===3){ currenship=player1.playergameboard.ship3;instruction.textContent='Set your ship of length 3'}
              if(shipnumber===4){ currenship=player1.playergameboard.ship4;instruction.textContent='Set your ship of length 2'}
              if(shipnumber===5){currenship=player1.playergameboard.ship5;instruction.textContent='Start game'}
              if(shipnumber>5){instruction.textContent='Start game';return}
                if(player1.playergameboard.placeShip(currenship,coordinate)){
                  player1.playergameboard.placeShip(currenship,coordinate)
                  const placedship=player1.playergameboard.gameboardArray;
                  placedship.forEach((object)=>{
                  const shippedbutton=document.querySelector(`button[coordinateData='${object.coordinate}']`)
                  shippedbutton.classList.add('shipped')
                  shippedbutton.disabled=true;
                })
                shipnumber++
              }
            }
            if(player===player1){
            if(player1.attack(player2,Number(coordinate))){createbutton.classList.add('success');
              if(player2.playergameboard.lost()){instruction.textContent='you won';createbutton.disabled=true;return}
            }
            player2.computerattack(player1)
            const computerattacked=player1.playergameboard.succesAttack;
            computerattacked.forEach((object)=>{
              const attackedbutton=document.querySelector(`button[coordinateData='${object}']`)
              attackedbutton.classList.add('shipattack')
              attackedbutton.disabled=true;
            })
            const computerattackedmissed=player1.playergameboard.missedAttack;
            computerattackedmissed.forEach((object)=>{
              const missedattackedbutton=document.querySelector(`button[coordinateData='${object}']`)
              missedattackedbutton.classList.add('shipattackmissed')
              missedattackedbutton.disabled=true;
            })
            if(player1.playergameboard.lost()){instruction.textContent='you lost';return}
            createbutton.disabled=true;
        }
        })
        if(player===player1){
          createbutton.disabled=true;
      }
        container.appendChild(createbutton)
        count++;
      }
    }
    return container;
  }
  startbutton.addEventListener('click',()=>{
    if(shipnumber<6)return
    const player2buttons=document.querySelector('.container_player2>.grid')
    const player2buttonsArray=Array.from(player2buttons.children)
    player2buttonsArray.forEach((button)=>{
      // eslint-disable-next-line no-param-reassign
      button.disabled=false;
    })
    computerplaceship();
  })

createGrid(player1grid,player2)
createGrid(player2grid,player1)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9NLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQzhCOztBQUU5QjtBQUNBLFlBQVksMkNBQUk7QUFDaEIsWUFBWSwyQ0FBSTtBQUNoQixZQUFZLDJDQUFJO0FBQ2hCLFlBQVksMkNBQUk7QUFDaEIsWUFBWSwyQ0FBSTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQyw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDd0M7O0FBRXhDOztBQUVBLDBCQUEwQixxREFBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLCtDQUFNO0FBQ3BCLGNBQWMsK0NBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQixrQkFBa0IsS0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsa0NBQWtDLHlDQUF5QztBQUMzRSxrQ0FBa0MseUNBQXlDO0FBQzNFLGtDQUFrQyx5Q0FBeUM7QUFDM0UsaUNBQWlDLHlDQUF5QztBQUMxRSwrQkFBK0IscUNBQXFDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLGtCQUFrQjtBQUN6RztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELGlEQUFpRCxrQ0FBa0MsMkJBQTJCO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLE9BQU87QUFDM0Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsMEZBQTBGLE9BQU87QUFDakc7QUFDQTtBQUNBLGFBQWE7QUFDYiwrQ0FBK0MsbUNBQW1DO0FBQ2xGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0EsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG5jb25zdCBzaGlwMT1zaGlwKDUpO1xuY29uc3Qgc2hpcDI9c2hpcCg0KTtcbmNvbnN0IHNoaXAzPXNoaXAoMyk7XG5jb25zdCBzaGlwND1zaGlwKDMpO1xuY29uc3Qgc2hpcDU9c2hpcCgyKTtcblxuICBjb25zdCBnYW1lYm9hcmRBcnJheSA9IFtdO1xuICBjb25zdCBtaXNzZWRBdHRhY2sgPSBbXTtcbiAgY29uc3Qgc3VjY2VzQXR0YWNrID0gW107XG4gIGNvbnN0IGlzU3Vua0FycmF5ID0gW107XG4gIGNvbnN0IHNoaXBBbW91bnQgPSA1O1xuXG4gIGNvbnN0IGNoZWNraG9yaXpvbnRhbHZhbGlkaXR5ID0gKHN0YXJ0Y29vcmRpbmF0ZSwgbGVuKSA9PiB7XG4gICAgaWYgKChzdGFydGNvb3JkaW5hdGUgJSAxMCkgKyBsZW4gPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBjaGVja3ZlcnRpY2FsdmFsaWRpdHkgPSAoc3RhcnRjb29yZGluYXRlLCBsZW4pID0+IHtcbiAgICBpZiAoTWF0aC5mbG9vcihzdGFydGNvb3JkaW5hdGUgLyAxMCArIGxlbikgPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBjaGVja292ZXJsYXBwaW5ndmFsaWRpdHkgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkQXJyYXkuZmluZCgoY3VyKSA9PiBjdXIuY29vcmRpbmF0ZSA9PT0gY29vcmRpbmF0ZXMpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0Y29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAubGVuO1xuICAgIGlmIChzaGlwLnByb3BlcnRpZXMucG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKGNoZWNrdmVydGljYWx2YWxpZGl0eShzdGFydGNvb3JkaW5hdGUsIGxlbmd0aCkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyAgXG4gICAgICAgICAgaWYgKCFjaGVja292ZXJsYXBwaW5ndmFsaWRpdHkoc3RhcnRjb29yZGluYXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHN0YXJ0Y29vcmRpbmF0ZSArPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBzdGFydGNvb3JkaW5hdGUgLT0gMTAgKiBsZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBnYW1lYm9hcmRBcnJheS5wdXNoKHsgY29vcmRpbmF0ZTogc3RhcnRjb29yZGluYXRlLCBzaGlwIH0pO1xuICAgICAgICAgIHN0YXJ0Y29vcmRpbmF0ZSArPSAxMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGNoZWNraG9yaXpvbnRhbHZhbGlkaXR5KHN0YXJ0Y29vcmRpbmF0ZSwgbGVuZ3RoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWNoZWNrb3ZlcmxhcHBpbmd2YWxpZGl0eShzdGFydGNvb3JkaW5hdGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHN0YXJ0Y29vcmRpbmF0ZSsrO1xuICAgICAgfVxuICAgICAgc3RhcnRjb29yZGluYXRlIC09IGxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ2FtZWJvYXJkQXJyYXkucHVzaCh7IGNvb3JkaW5hdGU6IHN0YXJ0Y29vcmRpbmF0ZSwgc2hpcCB9KTtcbiAgICAgICAgc3RhcnRjb29yZGluYXRlKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKGdhbWVib2FyZEFycmF5LmZpbmQoKGN1cikgPT4gY3VyLmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGVzKSkge1xuICAgICAgc3VjY2VzQXR0YWNrLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgY29uc3QgaW5kZXggPSBnYW1lYm9hcmRBcnJheS5maW5kSW5kZXgoXG4gICAgICAgIChjdXIpID0+IGN1ci5jb29yZGluYXRlID09PSBjb29yZGluYXRlc1xuICAgICAgKTtcbiAgICAgIGdhbWVib2FyZEFycmF5W2luZGV4XS5zaGlwLmlzSGl0KGNvb3JkaW5hdGVzKTtcbiAgICAgIGlmIChnYW1lYm9hcmRBcnJheVtpbmRleF0uc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgaXNTdW5rQXJyYXkucHVzaChnYW1lYm9hcmRBcnJheVtpbmRleF0uc2hpcCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgbG9zdCA9ICgpID0+IHtcbiAgICBpZiAoaXNTdW5rQXJyYXkubGVuZ3RoID09PSBzaGlwQW1vdW50KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHJldHVybiB7XG4gICAgbWlzc2VkQXR0YWNrLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdhbWVib2FyZEFycmF5LFxuICAgIGxvc3QsXG4gICAgc3VjY2VzQXR0YWNrLFxuICAgIHNoaXAxLFxuICAgIHNoaXAyLFxuICAgIHNoaXAzLFxuICAgIHNoaXA0LFxuICAgIHNoaXA1XG4gIH07XG59O1xuZXhwb3J0IHsgZ2FtZWJvYXJkIH07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IHBsYXllciA9ICh0dXJuID0gMSkgPT4ge1xuXG4gIGNvbnN0IHBsYXllcmdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuICBjb25zdCBhdHRhY2sgPSAoZW5lbXksIGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZihlbmVteS5wbGF5ZXJnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSlyZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9O1xuICBjb25zdCBjb21wdXRlcmF0dGFjayA9IChlbmVteSkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gICAgaWYgKFxuICAgICAgZW5lbXkucGxheWVyZ2FtZWJvYXJkLm1pc3NlZEF0dGFjay5maW5kKChjdXIpID0+IGN1ciA9PT0gY29vcmRpbmF0ZSkgfHxcbiAgICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5zdWNjZXNBdHRhY2suZmluZCgoY3VyKSA9PiBjdXIgPT09IGNvb3JkaW5hdGUpXG4gICAgKVxuICAgICAgY29tcHV0ZXJhdHRhY2soZW5lbXkpO1xuICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICB9O1xuICByZXR1cm4geyBwbGF5ZXJnYW1lYm9hcmQsIGF0dGFjaywgY29tcHV0ZXJhdHRhY2ssIHR1cm59O1xufTtcbmV4cG9ydCB7IHBsYXllciB9OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmNvbnN0IHNoaXAgPSAobGVuKSA9PiB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgaXNIaXRBcnJheTogW10sXG4gICAgcG9zaXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICB9O1xuICAvLyBpc0hpdCBGdW5jdGlvblxuICBjb25zdCBpc0hpdCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIHByb3BlcnRpZXMuaXNIaXRBcnJheS5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfTtcbiAgLy8gaXNTdW5rIEZ1bmN0aW9uXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAocHJvcGVydGllcy5pc0hpdEFycmF5Lmxlbmd0aCA9PT0gbGVuKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHJldHVybiB7IGxlbiwgaXNIaXQsIHByb3BlcnRpZXMsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgc2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5pbXBvcnQge3BsYXllcn0gZnJvbSAnLi9wbGF5ZXInXG5cbmxldCBzaGlwbnVtYmVyPTE7XG5sZXQgY29tcHV0ZXJzaGlwPTE7XG5cbmNvbnN0IHN0YXJ0YnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpXG5jb25zdCBpbnN0cnVjdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb24nKVxuaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J1NldCB5b3VyIHNoaXAgb2YgbGVuZ3RoIDUnXG5cbmNvbnN0IHBsYXllcjE9cGxheWVyKDEpXG5jb25zdCBwbGF5ZXIyPXBsYXllcigyKVxuLy8gZ2FtZShwbGF5ZXIxLHBsYXllcjIpXG5jb25zdCBwbGF5ZXIxZ3JpZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX3BsYXllcjE+LmdyaWQnKVxuY29uc3QgcGxheWVyMmdyaWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9wbGF5ZXIyPi5ncmlkJylcbmxldCBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXAxO1xubGV0IGN1cnJlbnRjb21wc2hpcD1wbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwMTtcbmNvbnN0IGNvbXB1dGVycGxhY2VzaGlwPSgpPT57XG5cbiAgd2hpbGUoY29tcHV0ZXJzaGlwPDYpe1xuICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gIGlmKGNvbXB1dGVyc2hpcD09PTIpe2N1cnJlbnRjb21wc2hpcD1wbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwMn1cbiAgaWYoY29tcHV0ZXJzaGlwPT09Myl7Y3VycmVudGNvbXBzaGlwPXBsYXllcjIucGxheWVyZ2FtZWJvYXJkLnNoaXAzfVxuICBpZihjb21wdXRlcnNoaXA9PT00KXtjdXJyZW50Y29tcHNoaXA9cGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQuc2hpcDR9XG4gIGlmKGNvbXB1dGVyc2hpcD09PTUpe2N1cnJlbnRjb21wc2hpcD1wbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwNX1cbiAgaWYoY29tcHV0ZXJzaGlwPT09Nil7cmV0dXJufVxuICBpZihwbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5wbGFjZVNoaXAoY3VycmVudGNvbXBzaGlwLHJhbmRvbU51bSkpe1xuICAgIGNvbXB1dGVyc2hpcCsrO1xuICB9XG4gIH1cbiAgY29uc29sZS5sb2cocGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQuZ2FtZWJvYXJkQXJyYXkpXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmNvbnN0IGNyZWF0ZUdyaWQ9KGNvbnRhaW5lcixwbGF5ZXIpPT57XG4gICAgbGV0IGNvdW50PTA7XG4gICAgZm9yKGxldCBpPTA7aTwxMDtpKyspe1xuICAgICAgZm9yKGxldCB4PTA7eDwxMDt4Kyspe1xuICAgICAgICBjb25zdCBjcmVhdGVidXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY3JlYXRlYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyaWRidXR0b24nKVxuICAgICAgICBjcmVhdGVidXR0b24uc2V0QXR0cmlidXRlKCdjb29yZGluYXRlRGF0YScsY291bnQpO1xuICAgICAgICBjcmVhdGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlPWNyZWF0ZWJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVEYXRhJylcbiAgICAgICAgICAgIGlmKHBsYXllcj09PXBsYXllcjIpe1xuICAgICAgICAgICAgICBpZihzaGlwbnVtYmVyPT09MSl7IGluc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCA0J31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTIpeyBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXAyO2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCAzJ31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTMpeyBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXAzO2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCAzJ31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTQpeyBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXA0O2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCAyJ31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTUpe2N1cnJlbnNoaXA9cGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQuc2hpcDU7aW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J1N0YXJ0IGdhbWUnfVxuICAgICAgICAgICAgICBpZihzaGlwbnVtYmVyPjUpe2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTdGFydCBnYW1lJztyZXR1cm59XG4gICAgICAgICAgICAgICAgaWYocGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnNoaXAsY29vcmRpbmF0ZSkpe1xuICAgICAgICAgICAgICAgICAgcGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnNoaXAsY29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlZHNoaXA9cGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQuZ2FtZWJvYXJkQXJyYXk7XG4gICAgICAgICAgICAgICAgICBwbGFjZWRzaGlwLmZvckVhY2goKG9iamVjdCk9PntcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBwZWRidXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2Nvb3JkaW5hdGVEYXRhPScke29iamVjdC5jb29yZGluYXRlfSddYClcbiAgICAgICAgICAgICAgICAgIHNoaXBwZWRidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcHBlZCcpXG4gICAgICAgICAgICAgICAgICBzaGlwcGVkYnV0dG9uLmRpc2FibGVkPXRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzaGlwbnVtYmVyKytcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocGxheWVyPT09cGxheWVyMSl7XG4gICAgICAgICAgICBpZihwbGF5ZXIxLmF0dGFjayhwbGF5ZXIyLE51bWJlcihjb29yZGluYXRlKSkpe2NyZWF0ZWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgIGlmKHBsYXllcjIucGxheWVyZ2FtZWJvYXJkLmxvc3QoKSl7aW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J3lvdSB3b24nO2NyZWF0ZWJ1dHRvbi5kaXNhYmxlZD10cnVlO3JldHVybn1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllcjIuY29tcHV0ZXJhdHRhY2socGxheWVyMSlcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyYXR0YWNrZWQ9cGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQuc3VjY2VzQXR0YWNrO1xuICAgICAgICAgICAgY29tcHV0ZXJhdHRhY2tlZC5mb3JFYWNoKChvYmplY3QpPT57XG4gICAgICAgICAgICAgIGNvbnN0IGF0dGFja2VkYnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbltjb29yZGluYXRlRGF0YT0nJHtvYmplY3R9J11gKVxuICAgICAgICAgICAgICBhdHRhY2tlZGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaGlwYXR0YWNrJylcbiAgICAgICAgICAgICAgYXR0YWNrZWRidXR0b24uZGlzYWJsZWQ9dHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlcmF0dGFja2VkbWlzc2VkPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLm1pc3NlZEF0dGFjaztcbiAgICAgICAgICAgIGNvbXB1dGVyYXR0YWNrZWRtaXNzZWQuZm9yRWFjaCgob2JqZWN0KT0+e1xuICAgICAgICAgICAgICBjb25zdCBtaXNzZWRhdHRhY2tlZGJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bY29vcmRpbmF0ZURhdGE9JyR7b2JqZWN0fSddYClcbiAgICAgICAgICAgICAgbWlzc2VkYXR0YWNrZWRidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcGF0dGFja21pc3NlZCcpXG4gICAgICAgICAgICAgIG1pc3NlZGF0dGFja2VkYnV0dG9uLmRpc2FibGVkPXRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYocGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQubG9zdCgpKXtpbnN0cnVjdGlvbi50ZXh0Q29udGVudD0neW91IGxvc3QnO3JldHVybn1cbiAgICAgICAgICAgIGNyZWF0ZWJ1dHRvbi5kaXNhYmxlZD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKHBsYXllcj09PXBsYXllcjEpe1xuICAgICAgICAgIGNyZWF0ZWJ1dHRvbi5kaXNhYmxlZD10cnVlO1xuICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlYnV0dG9uKVxuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG4gIHN0YXJ0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGlmKHNoaXBudW1iZXI8NilyZXR1cm5cbiAgICBjb25zdCBwbGF5ZXIyYnV0dG9ucz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX3BsYXllcjI+LmdyaWQnKVxuICAgIGNvbnN0IHBsYXllcjJidXR0b25zQXJyYXk9QXJyYXkuZnJvbShwbGF5ZXIyYnV0dG9ucy5jaGlsZHJlbilcbiAgICBwbGF5ZXIyYnV0dG9uc0FycmF5LmZvckVhY2goKGJ1dHRvbik9PntcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgYnV0dG9uLmRpc2FibGVkPWZhbHNlO1xuICAgIH0pXG4gICAgY29tcHV0ZXJwbGFjZXNoaXAoKTtcbiAgfSlcblxuY3JlYXRlR3JpZChwbGF5ZXIxZ3JpZCxwbGF5ZXIyKVxuY3JlYXRlR3JpZChwbGF5ZXIyZ3JpZCxwbGF5ZXIxKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==