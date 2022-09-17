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
    ship5,
    isSunkArray
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
    let coordinate = Math.floor(Math.random() * 99);
    while (
      enemy.playergameboard.missedAttack.find((cur) => cur === coordinate) ||
      enemy.playergameboard.succesAttack.find((cur) => cur === coordinate)
    )
      {coordinate = Math.floor(Math.random() * 99);}
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
            console.log(player2.playergameboard.isSunkArray)
            console.log(player1.playergameboard.isSunkArray)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSwwRkFBMEYsT0FBTztBQUNqRztBQUNBO0FBQ0EsYUFBYTtBQUNiLCtDQUErQyxtQ0FBbUM7QUFDbEY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQSwrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbmNvbnN0IHNoaXAxPXNoaXAoNSk7XG5jb25zdCBzaGlwMj1zaGlwKDQpO1xuY29uc3Qgc2hpcDM9c2hpcCgzKTtcbmNvbnN0IHNoaXA0PXNoaXAoMyk7XG5jb25zdCBzaGlwNT1zaGlwKDIpO1xuXG4gIGNvbnN0IGdhbWVib2FyZEFycmF5ID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFjayA9IFtdO1xuICBjb25zdCBzdWNjZXNBdHRhY2sgPSBbXTtcbiAgY29uc3QgaXNTdW5rQXJyYXkgPSBbXTtcbiAgY29uc3Qgc2hpcEFtb3VudCA9IDU7XG5cbiAgY29uc3QgY2hlY2tob3Jpem9udGFsdmFsaWRpdHkgPSAoc3RhcnRjb29yZGluYXRlLCBsZW4pID0+IHtcbiAgICBpZiAoKHN0YXJ0Y29vcmRpbmF0ZSAlIDEwKSArIGxlbiA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrdmVydGljYWx2YWxpZGl0eSA9IChzdGFydGNvb3JkaW5hdGUsIGxlbikgPT4ge1xuICAgIGlmIChNYXRoLmZsb29yKHN0YXJ0Y29vcmRpbmF0ZSAvIDEwICsgbGVuKSA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrb3ZlcmxhcHBpbmd2YWxpZGl0eSA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChnYW1lYm9hcmRBcnJheS5maW5kKChjdXIpID0+IGN1ci5jb29yZGluYXRlID09PSBjb29yZGluYXRlcykpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW47XG4gICAgaWYgKHNoaXAucHJvcGVydGllcy5wb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoY2hlY2t2ZXJ0aWNhbHZhbGlkaXR5KHN0YXJ0Y29vcmRpbmF0ZSwgbGVuZ3RoKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7ICBcbiAgICAgICAgICBpZiAoIWNoZWNrb3ZlcmxhcHBpbmd2YWxpZGl0eShzdGFydGNvb3JkaW5hdGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgc3RhcnRjb29yZGluYXRlICs9IDEwO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0Y29vcmRpbmF0ZSAtPSAxMCAqIGxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGdhbWVib2FyZEFycmF5LnB1c2goeyBjb29yZGluYXRlOiBzdGFydGNvb3JkaW5hdGUsIHNoaXAgfSk7XG4gICAgICAgICAgc3RhcnRjb29yZGluYXRlICs9IDEwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY2hlY2tob3Jpem9udGFsdmFsaWRpdHkoc3RhcnRjb29yZGluYXRlLCBsZW5ndGgpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghY2hlY2tvdmVybGFwcGluZ3ZhbGlkaXR5KHN0YXJ0Y29vcmRpbmF0ZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc3RhcnRjb29yZGluYXRlKys7XG4gICAgICB9XG4gICAgICBzdGFydGNvb3JkaW5hdGUgLT0gbGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBnYW1lYm9hcmRBcnJheS5wdXNoKHsgY29vcmRpbmF0ZTogc3RhcnRjb29yZGluYXRlLCBzaGlwIH0pO1xuICAgICAgICBzdGFydGNvb3JkaW5hdGUrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkQXJyYXkuZmluZCgoY3VyKSA9PiBjdXIuY29vcmRpbmF0ZSA9PT0gY29vcmRpbmF0ZXMpKSB7XG4gICAgICBzdWNjZXNBdHRhY2sucHVzaChjb29yZGluYXRlcyk7XG4gICAgICBjb25zdCBpbmRleCA9IGdhbWVib2FyZEFycmF5LmZpbmRJbmRleChcbiAgICAgICAgKGN1cikgPT4gY3VyLmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGVzXG4gICAgICApO1xuICAgICAgZ2FtZWJvYXJkQXJyYXlbaW5kZXhdLnNoaXAuaXNIaXQoY29vcmRpbmF0ZXMpO1xuICAgICAgaWYgKGdhbWVib2FyZEFycmF5W2luZGV4XS5zaGlwLmlzU3VuaygpKVxuICAgICAgICBpc1N1bmtBcnJheS5wdXNoKGdhbWVib2FyZEFycmF5W2luZGV4XS5zaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBtaXNzZWRBdHRhY2sucHVzaChjb29yZGluYXRlcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBsb3N0ID0gKCkgPT4ge1xuICAgIGlmIChpc1N1bmtBcnJheS5sZW5ndGggPT09IHNoaXBBbW91bnQpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtaXNzZWRBdHRhY2ssXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2FtZWJvYXJkQXJyYXksXG4gICAgbG9zdCxcbiAgICBzdWNjZXNBdHRhY2ssXG4gICAgc2hpcDEsXG4gICAgc2hpcDIsXG4gICAgc2hpcDMsXG4gICAgc2hpcDQsXG4gICAgc2hpcDUsXG4gICAgaXNTdW5rQXJyYXlcbiAgfTtcbn07XG5leHBvcnQgeyBnYW1lYm9hcmQgfTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgcGxheWVyID0gKHR1cm4gPSAxKSA9PiB7XG5cbiAgY29uc3QgcGxheWVyZ2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmKGVuZW15LnBsYXllcmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpKXJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH07XG4gIGNvbnN0IGNvbXB1dGVyYXR0YWNrID0gKGVuZW15KSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gICAgd2hpbGUgKFxuICAgICAgZW5lbXkucGxheWVyZ2FtZWJvYXJkLm1pc3NlZEF0dGFjay5maW5kKChjdXIpID0+IGN1ciA9PT0gY29vcmRpbmF0ZSkgfHxcbiAgICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5zdWNjZXNBdHRhY2suZmluZCgoY3VyKSA9PiBjdXIgPT09IGNvb3JkaW5hdGUpXG4gICAgKVxuICAgICAge2Nvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7fVxuICAgIGVuZW15LnBsYXllcmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICB9O1xuICByZXR1cm4geyBwbGF5ZXJnYW1lYm9hcmQsIGF0dGFjaywgY29tcHV0ZXJhdHRhY2ssIHR1cm59O1xufTtcbmV4cG9ydCB7IHBsYXllciB9OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmNvbnN0IHNoaXAgPSAobGVuKSA9PiB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgaXNIaXRBcnJheTogW10sXG4gICAgcG9zaXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICB9O1xuICAvLyBpc0hpdCBGdW5jdGlvblxuICBjb25zdCBpc0hpdCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIHByb3BlcnRpZXMuaXNIaXRBcnJheS5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfTtcbiAgLy8gaXNTdW5rIEZ1bmN0aW9uXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAocHJvcGVydGllcy5pc0hpdEFycmF5Lmxlbmd0aCA9PT0gbGVuKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHJldHVybiB7IGxlbiwgaXNIaXQsIHByb3BlcnRpZXMsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgc2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5pbXBvcnQge3BsYXllcn0gZnJvbSAnLi9wbGF5ZXInXG5cbmxldCBzaGlwbnVtYmVyPTE7XG5sZXQgY29tcHV0ZXJzaGlwPTE7XG5cbmNvbnN0IHN0YXJ0YnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpXG5jb25zdCBpbnN0cnVjdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb24nKVxuaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J1NldCB5b3VyIHNoaXAgb2YgbGVuZ3RoIDUnXG5cbmNvbnN0IHBsYXllcjE9cGxheWVyKDEpXG5jb25zdCBwbGF5ZXIyPXBsYXllcigyKVxuLy8gZ2FtZShwbGF5ZXIxLHBsYXllcjIpXG5jb25zdCBwbGF5ZXIxZ3JpZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX3BsYXllcjE+LmdyaWQnKVxuY29uc3QgcGxheWVyMmdyaWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9wbGF5ZXIyPi5ncmlkJylcbmxldCBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXAxO1xubGV0IGN1cnJlbnRjb21wc2hpcD1wbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwMTtcbmNvbnN0IGNvbXB1dGVycGxhY2VzaGlwPSgpPT57XG5cbiAgd2hpbGUoY29tcHV0ZXJzaGlwPDYpe1xuICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gIGlmKGNvbXB1dGVyc2hpcD09PTIpe2N1cnJlbnRjb21wc2hpcD1wbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwMn1cbiAgaWYoY29tcHV0ZXJzaGlwPT09Myl7Y3VycmVudGNvbXBzaGlwPXBsYXllcjIucGxheWVyZ2FtZWJvYXJkLnNoaXAzfVxuICBpZihjb21wdXRlcnNoaXA9PT00KXtjdXJyZW50Y29tcHNoaXA9cGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQuc2hpcDR9XG4gIGlmKGNvbXB1dGVyc2hpcD09PTUpe2N1cnJlbnRjb21wc2hpcD1wbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5zaGlwNX1cbiAgaWYoY29tcHV0ZXJzaGlwPT09Nil7cmV0dXJufVxuICBpZihwbGF5ZXIyLnBsYXllcmdhbWVib2FyZC5wbGFjZVNoaXAoY3VycmVudGNvbXBzaGlwLHJhbmRvbU51bSkpe1xuICAgIGNvbXB1dGVyc2hpcCsrO1xuICB9XG4gIH1cbiAgY29uc29sZS5sb2cocGxheWVyMi5wbGF5ZXJnYW1lYm9hcmQuZ2FtZWJvYXJkQXJyYXkpXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmNvbnN0IGNyZWF0ZUdyaWQ9KGNvbnRhaW5lcixwbGF5ZXIpPT57XG4gICAgbGV0IGNvdW50PTA7XG4gICAgZm9yKGxldCBpPTA7aTwxMDtpKyspe1xuICAgICAgZm9yKGxldCB4PTA7eDwxMDt4Kyspe1xuICAgICAgICBjb25zdCBjcmVhdGVidXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY3JlYXRlYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyaWRidXR0b24nKVxuICAgICAgICBjcmVhdGVidXR0b24uc2V0QXR0cmlidXRlKCdjb29yZGluYXRlRGF0YScsY291bnQpO1xuICAgICAgICBjcmVhdGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlPWNyZWF0ZWJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVEYXRhJylcbiAgICAgICAgICAgIGlmKHBsYXllcj09PXBsYXllcjIpe1xuICAgICAgICAgICAgICBpZihzaGlwbnVtYmVyPT09MSl7IGluc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCA0J31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTIpeyBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXAyO2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCAzJ31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTMpeyBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXAzO2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCAzJ31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTQpeyBjdXJyZW5zaGlwPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnNoaXA0O2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTZXQgeW91ciBzaGlwIG9mIGxlbmd0aCAyJ31cbiAgICAgICAgICAgICAgaWYoc2hpcG51bWJlcj09PTUpe2N1cnJlbnNoaXA9cGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQuc2hpcDU7aW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J1N0YXJ0IGdhbWUnfVxuICAgICAgICAgICAgICBpZihzaGlwbnVtYmVyPjUpe2luc3RydWN0aW9uLnRleHRDb250ZW50PSdTdGFydCBnYW1lJztyZXR1cm59XG4gICAgICAgICAgICAgICAgaWYocGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnNoaXAsY29vcmRpbmF0ZSkpe1xuICAgICAgICAgICAgICAgICAgcGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnNoaXAsY29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlZHNoaXA9cGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQuZ2FtZWJvYXJkQXJyYXk7XG4gICAgICAgICAgICAgICAgICBwbGFjZWRzaGlwLmZvckVhY2goKG9iamVjdCk9PntcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBwZWRidXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2Nvb3JkaW5hdGVEYXRhPScke29iamVjdC5jb29yZGluYXRlfSddYClcbiAgICAgICAgICAgICAgICAgIHNoaXBwZWRidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcHBlZCcpXG4gICAgICAgICAgICAgICAgICBzaGlwcGVkYnV0dG9uLmRpc2FibGVkPXRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzaGlwbnVtYmVyKytcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocGxheWVyPT09cGxheWVyMSl7XG4gICAgICAgICAgICBpZihwbGF5ZXIxLmF0dGFjayhwbGF5ZXIyLE51bWJlcihjb29yZGluYXRlKSkpe2NyZWF0ZWJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgIGlmKHBsYXllcjIucGxheWVyZ2FtZWJvYXJkLmxvc3QoKSl7aW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J3lvdSB3b24nO2NyZWF0ZWJ1dHRvbi5kaXNhYmxlZD10cnVlO3JldHVybn1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjIucGxheWVyZ2FtZWJvYXJkLmlzU3Vua0FycmF5KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyMS5wbGF5ZXJnYW1lYm9hcmQuaXNTdW5rQXJyYXkpXG4gICAgICAgICAgICBwbGF5ZXIyLmNvbXB1dGVyYXR0YWNrKHBsYXllcjEpXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlcmF0dGFja2VkPXBsYXllcjEucGxheWVyZ2FtZWJvYXJkLnN1Y2Nlc0F0dGFjaztcbiAgICAgICAgICAgIGNvbXB1dGVyYXR0YWNrZWQuZm9yRWFjaCgob2JqZWN0KT0+e1xuICAgICAgICAgICAgICBjb25zdCBhdHRhY2tlZGJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bY29vcmRpbmF0ZURhdGE9JyR7b2JqZWN0fSddYClcbiAgICAgICAgICAgICAgYXR0YWNrZWRidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcGF0dGFjaycpXG4gICAgICAgICAgICAgIGF0dGFja2VkYnV0dG9uLmRpc2FibGVkPXRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJhdHRhY2tlZG1pc3NlZD1wbGF5ZXIxLnBsYXllcmdhbWVib2FyZC5taXNzZWRBdHRhY2s7XG4gICAgICAgICAgICBjb21wdXRlcmF0dGFja2VkbWlzc2VkLmZvckVhY2goKG9iamVjdCk9PntcbiAgICAgICAgICAgICAgY29uc3QgbWlzc2VkYXR0YWNrZWRidXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2Nvb3JkaW5hdGVEYXRhPScke29iamVjdH0nXWApXG4gICAgICAgICAgICAgIG1pc3NlZGF0dGFja2VkYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBhdHRhY2ttaXNzZWQnKVxuICAgICAgICAgICAgICBtaXNzZWRhdHRhY2tlZGJ1dHRvbi5kaXNhYmxlZD10cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmKHBsYXllcjEucGxheWVyZ2FtZWJvYXJkLmxvc3QoKSl7aW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQ9J3lvdSBsb3N0JztyZXR1cm59XG4gICAgICAgICAgICBjcmVhdGVidXR0b24uZGlzYWJsZWQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihwbGF5ZXI9PT1wbGF5ZXIxKXtcbiAgICAgICAgICBjcmVhdGVidXR0b24uZGlzYWJsZWQ9dHJ1ZTtcbiAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWJ1dHRvbilcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuICBzdGFydGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBpZihzaGlwbnVtYmVyPDYpcmV0dXJuXG4gICAgY29uc3QgcGxheWVyMmJ1dHRvbnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9wbGF5ZXIyPi5ncmlkJylcbiAgICBjb25zdCBwbGF5ZXIyYnV0dG9uc0FycmF5PUFycmF5LmZyb20ocGxheWVyMmJ1dHRvbnMuY2hpbGRyZW4pXG4gICAgcGxheWVyMmJ1dHRvbnNBcnJheS5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGJ1dHRvbi5kaXNhYmxlZD1mYWxzZTtcbiAgICB9KVxuICAgIGNvbXB1dGVycGxhY2VzaGlwKCk7XG4gIH0pXG5cbmNyZWF0ZUdyaWQocGxheWVyMWdyaWQscGxheWVyMilcbmNyZWF0ZUdyaWQocGxheWVyMmdyaWQscGxheWVyMSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=