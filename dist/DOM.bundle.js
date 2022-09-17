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


const ship1=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5);
const ship2=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4);
const ship3=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3);
const ship4=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3);
const ship5=(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2);


const gameboard = () => {
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
            // console.log(player2.playergameboard.missedAttack)
            // console.log(player2.playergameboard.succesAttack)
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
    if(shipnumber<5)return
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2I7QUFDQTtBQUNBLDBGQUEwRixPQUFPO0FBQ2pHO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsK0NBQStDLG1DQUFtQztBQUNsRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IHNoaXAxPXNoaXAoNSk7XG5jb25zdCBzaGlwMj1zaGlwKDQpO1xuY29uc3Qgc2hpcDM9c2hpcCgzKTtcbmNvbnN0IHNoaXA0PXNoaXAoMyk7XG5jb25zdCBzaGlwNT1zaGlwKDIpO1xuXG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkQXJyYXkgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrID0gW107XG4gIGNvbnN0IHN1Y2Nlc0F0dGFjayA9IFtdO1xuICBjb25zdCBpc1N1bmtBcnJheSA9IFtdO1xuICBjb25zdCBzaGlwQW1vdW50ID0gNTtcblxuICBjb25zdCBjaGVja2hvcml6b250YWx2YWxpZGl0eSA9IChzdGFydGNvb3JkaW5hdGUsIGxlbikgPT4ge1xuICAgIGlmICgoc3RhcnRjb29yZGluYXRlICUgMTApICsgbGVuID4gMTApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2t2ZXJ0aWNhbHZhbGlkaXR5ID0gKHN0YXJ0Y29vcmRpbmF0ZSwgbGVuKSA9PiB7XG4gICAgaWYgKE1hdGguZmxvb3Ioc3RhcnRjb29yZGluYXRlIC8gMTAgKyBsZW4pID4gMTApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tvdmVybGFwcGluZ3ZhbGlkaXR5ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKGdhbWVib2FyZEFycmF5LmZpbmQoKGN1cikgPT4gY3VyLmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGVzKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbjtcbiAgICBpZiAoc2hpcC5wcm9wZXJ0aWVzLnBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChjaGVja3ZlcnRpY2FsdmFsaWRpdHkoc3RhcnRjb29yZGluYXRlLCBsZW5ndGgpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgIFxuICAgICAgICAgIGlmICghY2hlY2tvdmVybGFwcGluZ3ZhbGlkaXR5KHN0YXJ0Y29vcmRpbmF0ZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBzdGFydGNvb3JkaW5hdGUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRjb29yZGluYXRlIC09IDEwICogbGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ2FtZWJvYXJkQXJyYXkucHVzaCh7IGNvb3JkaW5hdGU6IHN0YXJ0Y29vcmRpbmF0ZSwgc2hpcCB9KTtcbiAgICAgICAgICBzdGFydGNvb3JkaW5hdGUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChjaGVja2hvcml6b250YWx2YWxpZGl0eShzdGFydGNvb3JkaW5hdGUsIGxlbmd0aCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFjaGVja292ZXJsYXBwaW5ndmFsaWRpdHkoc3RhcnRjb29yZGluYXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzdGFydGNvb3JkaW5hdGUrKztcbiAgICAgIH1cbiAgICAgIHN0YXJ0Y29vcmRpbmF0ZSAtPSBsZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdhbWVib2FyZEFycmF5LnB1c2goeyBjb29yZGluYXRlOiBzdGFydGNvb3JkaW5hdGUsIHNoaXAgfSk7XG4gICAgICAgIHN0YXJ0Y29vcmRpbmF0ZSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChnYW1lYm9hcmRBcnJheS5maW5kKChjdXIpID0+IGN1ci5jb29yZGluYXRlID09PSBjb29yZGluYXRlcykpIHtcbiAgICAgIHN1Y2Nlc0F0dGFjay5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gZ2FtZWJvYXJkQXJyYXkuZmluZEluZGV4KFxuICAgICAgICAoY3VyKSA9PiBjdXIuY29vcmRpbmF0ZSA9PT0gY29vcmRpbmF0ZXNcbiAgICAgICk7XG4gICAgICBnYW1lYm9hcmRBcnJheVtpbmRleF0uc2hpcC5pc0hpdChjb29yZGluYXRlcyk7XG4gICAgICBpZiAoZ2FtZWJvYXJkQXJyYXlbaW5kZXhdLnNoaXAuaXNTdW5rKCkpXG4gICAgICAgIGlzU3Vua0FycmF5LnB1c2goZ2FtZWJvYXJkQXJyYXlbaW5kZXhdLnNoaXApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG1pc3NlZEF0dGFjay5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGxvc3QgPSAoKSA9PiB7XG4gICAgaWYgKGlzU3Vua0FycmF5Lmxlbmd0aCA9PT0gc2hpcEFtb3VudCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG1pc3NlZEF0dGFjayxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnYW1lYm9hcmRBcnJheSxcbiAgICBsb3N0LFxuICAgIHN1Y2Nlc0F0dGFjayxcbiAgICBzaGlwMSxcbiAgICBzaGlwMixcbiAgICBzaGlwMyxcbiAgICBzaGlwNCxcbiAgICBzaGlwNVxuICB9O1xufTtcbmV4cG9ydCB7IGdhbWVib2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IHBsYXllciA9ICh0dXJuID0gMSkgPT4ge1xuXG4gIGNvbnN0IHBsYXllcmdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuICBjb25zdCBhdHRhY2sgPSAoZW5lbXksIGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZihlbmVteS5wbGF5ZXJnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSlyZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9O1xuICBjb25zdCBjb21wdXRlcmF0dGFjayA9IChlbmVteSkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gICAgaWYgKFxuICAgICAgZW5lbXkucGxheWVyZ2FtZWJvYXJkLm1pc3NlZEF0dGFjay5maW5kKChjdXIpID0+IGN1ciA9PT0gY29vcmRpbmF0ZSkgfHxcbiAgICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5zdWNjZXNBdHRhY2suZmluZCgoY3VyKSA9PiBjdXIgPT09IGNvb3JkaW5hdGUpXG4gICAgKVxuICAgICAgY29tcHV0ZXJhdHRhY2soZW5lbXkpO1xuICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICB9O1xuICByZXR1cm4geyBwbGF5ZXJnYW1lYm9hcmQsIGF0dGFjaywgY29tcHV0ZXJhdHRhY2ssIHR1cm59O1xufTtcbmV4cG9ydCB7IHBsYXllciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3Qgc2hpcCA9IChsZW4pID0+IHtcbiAgY29uc3QgcHJvcGVydGllcyA9IHtcbiAgICBpc0hpdEFycmF5OiBbXSxcbiAgICBwb3NpdGlvbjogXCJob3Jpem9udGFsXCIsXG4gIH07XG4gIC8vIGlzSGl0IEZ1bmN0aW9uXG4gIGNvbnN0IGlzSGl0ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgcHJvcGVydGllcy5pc0hpdEFycmF5LnB1c2goY29vcmRpbmF0ZXMpO1xuICB9O1xuICAvLyBpc1N1bmsgRnVuY3Rpb25cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChwcm9wZXJ0aWVzLmlzSGl0QXJyYXkubGVuZ3RoID09PSBsZW4pIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHsgbGVuLCBpc0hpdCwgcHJvcGVydGllcywgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgeyBzaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuaW1wb3J0IHtwbGF5ZXJ9IGZyb20gJy4vcGxheWVyJ1xuXG5sZXQgc2hpcG51bWJlcj0xO1xubGV0IGNvbXB1dGVyc2hpcD0xO1xuXG5jb25zdCBzdGFydGJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKVxuY29uc3QgaW5zdHJ1Y3Rpb249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9uJylcbmluc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCA1J1xuXG5jb25zdCBwbGF5ZXIxPXBsYXllcigxKVxuY29uc3QgcGxheWVyMj1wbGF5ZXIoMilcbi8vIGdhbWUocGxheWVyMSxwbGF5ZXIyKVxuY29uc3QgcGxheWVyMWdyaWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9wbGF5ZXIxPi5ncmlkJylcbmNvbnN0IHBsYXllcjJncmlkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfcGxheWVyMj4uZ3JpZCcpXG5sZXQgY3VycmVuc2hpcD1wbGF5ZXIxLnBsYXllcmdhbWVib2FyZC5zaGlwMTtcbmxldCBjdXJyZW50Y29tcHNoaXA9cGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQuc2hpcDE7XG5jb25zdCBjb21wdXRlcnBsYWNlc2hpcD0oKT0+e1xuXG4gIHdoaWxlKGNvbXB1dGVyc2hpcDw2KXtcbiAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTkpO1xuICBpZihjb21wdXRlcnNoaXA9PT0yKXtjdXJyZW50Y29tcHNoaXA9cGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQuc2hpcDJ9XG4gIGlmKGNvbXB1dGVyc2hpcD09PTMpe2N1cnJlbnRjb21wc2hpcD1wbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwM31cbiAgaWYoY29tcHV0ZXJzaGlwPT09NCl7Y3VycmVudGNvbXBzaGlwPXBsYXllcjIucGxheWVyZ2FtZWJvYXJkLnNoaXA0fVxuICBpZihjb21wdXRlcnNoaXA9PT01KXtjdXJyZW50Y29tcHNoaXA9cGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQuc2hpcDV9XG4gIGlmKGNvbXB1dGVyc2hpcD09PTYpe3JldHVybn1cbiAgaWYocGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRjb21wc2hpcCxyYW5kb21OdW0pKXtcbiAgICBjb21wdXRlcnNoaXArKztcbiAgfVxuICB9XG4gIGNvbnNvbGUubG9nKHBsYXllcjIucGxheWVyZ2FtZWJvYXJkLmdhbWVib2FyZEFycmF5KVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5jb25zdCBjcmVhdGVHcmlkPShjb250YWluZXIscGxheWVyKT0+e1xuICAgIGxldCBjb3VudD0wO1xuICAgIGZvcihsZXQgaT0wO2k8MTA7aSsrKXtcbiAgICAgIGZvcihsZXQgeD0wO3g8MTA7eCsrKXtcbiAgICAgICAgY29uc3QgY3JlYXRlYnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNyZWF0ZWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncmlkYnV0dG9uJylcbiAgICAgICAgY3JlYXRlYnV0dG9uLnNldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZURhdGEnLGNvdW50KTtcbiAgICAgICAgY3JlYXRlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZT1jcmVhdGVidXR0b24uZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlRGF0YScpXG4gICAgICAgICAgICBpZihwbGF5ZXI9PT1wbGF5ZXIyKXtcbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTEpeyBpbnN0cnVjdGlvbi50ZXh0Q29udGVudD0nU2V0IHlvdXIgc2hpcCBvZiBsZW5ndGggNCd9XG4gICAgICAgICAgICAgIGlmKHNoaXBudW1iZXI9PT0yKXsgY3VycmVuc2hpcD1wbGF5ZXIxLnBsYXllcmdhbWVib2FyZC5zaGlwMjtpbnN0cnVjdGlvbi50ZXh0Q29udGVudD0nU2V0IHlvdXIgc2hpcCBvZiBsZW5ndGggMyd9XG4gICAgICAgICAgICAgIGlmKHNoaXBudW1iZXI9PT0zKXsgY3VycmVuc2hpcD1wbGF5ZXIxLnBsYXllcmdhbWVib2FyZC5zaGlwMztpbnN0cnVjdGlvbi50ZXh0Q29udGVudD0nU2V0IHlvdXIgc2hpcCBvZiBsZW5ndGggMyd9XG4gICAgICAgICAgICAgIGlmKHNoaXBudW1iZXI9PT00KXsgY3VycmVuc2hpcD1wbGF5ZXIxLnBsYXllcmdhbWVib2FyZC5zaGlwNDtpbnN0cnVjdGlvbi50ZXh0Q29udGVudD0nU2V0IHlvdXIgc2hpcCBvZiBsZW5ndGggMid9XG4gICAgICAgICAgICAgIGlmKHNoaXBudW1iZXI9PT01KXtjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXA1O2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTdGFydCBnYW1lJ31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj41KXtpbnN0cnVjdGlvbi50ZXh0Q29udGVudD0nU3RhcnQgZ2FtZSc7cmV0dXJufVxuICAgICAgICAgICAgICAgIGlmKHBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnBsYWNlU2hpcChjdXJyZW5zaGlwLGNvb3JkaW5hdGUpKXtcbiAgICAgICAgICAgICAgICAgIHBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnBsYWNlU2hpcChjdXJyZW5zaGlwLGNvb3JkaW5hdGUpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwbGFjZWRzaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLmdhbWVib2FyZEFycmF5O1xuICAgICAgICAgICAgICAgICAgcGxhY2Vkc2hpcC5mb3JFYWNoKChvYmplY3QpPT57XG4gICAgICAgICAgICAgICAgICBjb25zdCBzaGlwcGVkYnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbltjb29yZGluYXRlRGF0YT0nJHtvYmplY3QuY29vcmRpbmF0ZX0nXWApXG4gICAgICAgICAgICAgICAgICBzaGlwcGVkYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBwZWQnKVxuICAgICAgICAgICAgICAgICAgc2hpcHBlZGJ1dHRvbi5kaXNhYmxlZD10cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc2hpcG51bWJlcisrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHBsYXllcj09PXBsYXllcjEpe1xuICAgICAgICAgICAgaWYocGxheWVyMS5hdHRhY2socGxheWVyMixOdW1iZXIoY29vcmRpbmF0ZSkpKXtjcmVhdGVidXR0b24uY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpO1xuICAgICAgICAgICAgICBpZihwbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5sb3N0KCkpe2luc3RydWN0aW9uLnRleHRDb250ZW50PSd5b3Ugd29uJztjcmVhdGVidXR0b24uZGlzYWJsZWQ9dHJ1ZTtyZXR1cm59XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5taXNzZWRBdHRhY2spXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zdWNjZXNBdHRhY2spXG4gICAgICAgICAgICBwbGF5ZXIyLmNvbXB1dGVyYXR0YWNrKHBsYXllcjEpXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlcmF0dGFja2VkPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnN1Y2Nlc0F0dGFjaztcbiAgICAgICAgICAgIGNvbXB1dGVyYXR0YWNrZWQuZm9yRWFjaCgob2JqZWN0KT0+e1xuICAgICAgICAgICAgICBjb25zdCBhdHRhY2tlZGJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bY29vcmRpbmF0ZURhdGE9JyR7b2JqZWN0fSddYClcbiAgICAgICAgICAgICAgYXR0YWNrZWRidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcGF0dGFjaycpXG4gICAgICAgICAgICAgIGF0dGFja2VkYnV0dG9uLmRpc2FibGVkPXRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJhdHRhY2tlZG1pc3NlZD1wbGF5ZXIxLnBsYXllcmdhbWVib2FyZC5taXNzZWRBdHRhY2s7XG4gICAgICAgICAgICBjb21wdXRlcmF0dGFja2VkbWlzc2VkLmZvckVhY2goKG9iamVjdCk9PntcbiAgICAgICAgICAgICAgY29uc3QgbWlzc2VkYXR0YWNrZWRidXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2Nvb3JkaW5hdGVEYXRhPScke29iamVjdH0nXWApXG4gICAgICAgICAgICAgIG1pc3NlZGF0dGFja2VkYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBhdHRhY2ttaXNzZWQnKVxuICAgICAgICAgICAgICBtaXNzZWRhdHRhY2tlZGJ1dHRvbi5kaXNhYmxlZD10cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmKHBsYXllcjEucGxheWVyZ2FtZWJvYXJkLmxvc3QoKSl7aW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J3lvdSBsb3N0JztyZXR1cm59XG4gICAgICAgICAgICBjcmVhdGVidXR0b24uZGlzYWJsZWQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihwbGF5ZXI9PT1wbGF5ZXIxKXtcbiAgICAgICAgICBjcmVhdGVidXR0b24uZGlzYWJsZWQ9dHJ1ZTtcbiAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWJ1dHRvbilcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuICBzdGFydGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBpZihzaGlwbnVtYmVyPDUpcmV0dXJuXG4gICAgY29uc3QgcGxheWVyMmJ1dHRvbnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9wbGF5ZXIyPi5ncmlkJylcbiAgICBjb25zdCBwbGF5ZXIyYnV0dG9uc0FycmF5PUFycmF5LmZyb20ocGxheWVyMmJ1dHRvbnMuY2hpbGRyZW4pXG4gICAgcGxheWVyMmJ1dHRvbnNBcnJheS5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGJ1dHRvbi5kaXNhYmxlZD1mYWxzZTtcbiAgICB9KVxuICAgIGNvbXB1dGVycGxhY2VzaGlwKCk7XG4gIH0pXG5cbmNyZWF0ZUdyaWQocGxheWVyMWdyaWQscGxheWVyMilcbmNyZWF0ZUdyaWQocGxheWVyMmdyaWQscGxheWVyMSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==