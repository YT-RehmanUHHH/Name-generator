let nameArray = [
  "Lego man",
  "The boss",
  "Gangster",
  "The Player",
  "The developer",
  "The Scientist",
  "The really smart",
  "The gobller",
  "The wizard",
];

let imgIndex = 0;

document.getElementById("btn2").addEventListener("click", allName);
document.getElementById("btn1").addEventListener("click", randomName);

function randomName() {
  let firstName = document.getElementById("input1").value;
  let lastName = document.getElementById("input2").value;
  let randNum = Math.floor(Math.random() * 9);
  console.log(randNum);
  let output = `${firstName} "${nameArray[randNum]}" ${lastName}`;
  document.getElementById("result").innerHTML = output;
}

function allName() {
  let firstName = document.getElementById("input1").value;
  let lastName = document.getElementById("input2").value;
  let output = "";

  for (let i = 0; i < nameArray.length; i++) {
    output += firstName + " " + nameArray[i] + " " + lastName + "<br/>";
  }

  document.getElementById("result").innerHTML = output;
}
