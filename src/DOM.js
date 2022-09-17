/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */

import {player} from './player'

let shipnumber=1;
let computership=1;

const startbutton=document.querySelector('.start')
const instruction=document.querySelector('.instruction')
instruction.textContent='Set your ship of length 5'

const player1=player(1)
const player2=player(2)
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