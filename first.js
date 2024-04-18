/*const student ={
    age: 23,
    fullname: "rahul",
    cgpa: 2.3,
    ispass: true 
};
student["age"] = student["age"] + 1;

console.log(student.cgpa);

const profile ={
    username : "raju",
    isFollow: true,
    follower: 123,
    following :124,
};
console.log(typeof profile['follower']);

//coditional statement 

let age = 34;
  let result = age>= 18 ? "adult": "not adult ";

  console.log(result);



 let num = prompt("enter a number");
 if(num % 5 === 0){

    console.log(num ," is multiple of 5");
 }else{
    console.log(num,"is not multiple of 5 ");
 }


let score = prompt("enter your score (0-100):");
let grade;

if (score >=90 && score <=100){
    grade = "A";
} else if(score >=70 && score <=89){
    grade = "B";
}
console.log("according to your score your grade is :" , grade);
*/

/*
let guessNum = 35;
let userNum = prompt("Guess the number");

while (guessNum != userNum){
    userNum = prompt("you entered wrong number: guess no again ")
}
console.log("congrajulation you found the correct number");
*/

/*
let marks = [87,98,34,25,15];
let sum = 0;

for(let val of marks){
    sum+=val;
}

let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);
*/


/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(2, 1, "ola");
companies.push("Amazon");


//arrow function

let arrsum = (a , b) => {
    console.log(a+b);
};

//example

function countvowels (str){
    let count = 0;
    for(const char of str){
        if (
        char ==="a"||
        char ==="e"|| 
        char ==="i"|| 
        char==="o" ||
        char==="u"
        )
        {
            count++;
        }
    }
    return count;
}

//same thing in arrow function 

/* 
const countvow = (str)=>
{

}

let nums = ["4", "5", "34", "87"]

nums.forEach((num) => {
    console.log(num*num);
});

*/

/*
let h2 = document.querySelector("h2");
console.dir(h2);

h2.innerText = h2.innerText + " form apna college";
*/

/*
let btn = document.createElement("button");
btn.innerText = "Click Me";

btn.style.color = "white";
btn.style.backgroundColor = "red";

document.querySelector("body").append(btn);

//Q2

let para = document.querySelector("p");
para.classList.add("newclass");
*/

/*

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are hovring on mouse");

};

*/

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});