let gameBox= document.querySelector('.game-container');
let resetButton=document.getElementById('reset-button');

resetButton.addEventListener('click',function(){
    while (gameBox.lastElementChild) {
        gameBox.removeChild(gameBox.lastElementChild);
    }
    while(true){
    let numberOfGrids=prompt("enter the number of sqaure per side between 1-64");
    numberOfGrids=parseInt(numberOfGrids);
    if(typeof(numberOfGrids)==typeof(1)&& numberOfGrids>=1 &&numberOfGrids<=64){
       createDiv(numberOfGrids);
       break;
     }
   }
});

let gameBoxChildren=gameBox.children;

Array.from(gameBoxChildren).forEach(item=>item.addEventListener('mouseover',function(){
    item.style.background=random_bg_color();
}));


function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function createDiv(value){
    let div=document.createElement('div');
    gameBox.style.cssText =`grid-template-columns: repeat(${value},1fr)`;
    for(i=1;i<=value*value;i++){
        let div=document.createElement('div');
        gameBox.appendChild(div);
    }
    Array.from(gameBoxChildren).forEach(item=>item.addEventListener('mouseover',function(){
        item.style.background=random_bg_color();
    }))
}
Array.from(gameBoxChildren).forEach(item=>item.addEventListener('mouseover',function(){
    item.style.background=random_bg_color();
}))