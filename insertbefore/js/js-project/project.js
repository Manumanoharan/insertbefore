
// var snakeobject=[
//     {
//         'head':16,
//         'tail':6
//     },
//     {
//         'head':31,
//         'tail':9
//     },
//     {
//         'head':38,
//         'tail':1
//     },
//     {
//         'head':42,
//         'tail':21
//     },
//     {
//         'head':46,
//         'tail':36
//     },
//     {
//         'head':49,
//         'tail':11
//     },
//     {
//         'head':16,
//         'tail':11
//     },
//     {
//         'head':67,
//         'tail':51
//     },
//     {
//         'head':84,
//         'tail':28
//     },
//     {
//         'head':93,
//         'tail':73
//     },
//     {
//         'head':95,
//         'tail':75
//     },
//     {
//         'head':98,
//         'tail':78
//     }

// ]

// function generaterandomnumber(){
//     var numbers=6;
//     numbers=Math.random(numbers);
//     console.log(numbers);

//     var bodyElement=document.getElementsByTagName('body');
//     var bodytag=bodyElement[0];
//     bodytag.appendChild(score);
// }
// let buttonElement=document.getElementById('show-btn');
// buttonElement.addEventListener('click',generaterandomnumber());


// console.log(buttonElement);




const colors=['red','yellow','black'];
function colour(){
    
    const color=document.getElementsByClassName('color');
    var cols=color[0 ];

    // const randomNumber=getRandomNumber();
    // randomNumber=Math.random(randomNumber)
    // console.log(randomNumber);
    cols.style.backgroundColor= "green";
    // color.appendChild(colors);
    // var bodyElement=document.getElementsByTagName('body')
    // var bodytag=bodyElement[0]; 
}

//  var col=colour();
//  console.log(col);
    let buttonElement=document.getElementById('show-btn')
    buttonElement.addEventListener('click',colour);
    console.log(buttonElement);






    /*

function addhtml(){
var element=document.createElement('a');
var time=getdate();
element.appendChild(time);
var bodyElement=document.getElementsByTagName('body');
var bodytag=bodyElement[0];
bodytag.appendChild(element);
}

var inex=addhtml();
console.log(inex);
    // let btn=document.getElementById('show-btn');
    // btn.addEventListener('click',addhtml);*/