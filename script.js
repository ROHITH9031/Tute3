// Function to change box color
function changeColor(element, color) {

  // Select all boxes
  let boxes = document.querySelectorAll(".color-box","#name");

  // Reset all boxes to white
  boxes.forEach(box => {
    box.style.backgroundColor = "white";
    box.style.color = "black";
  });

  // Change clicked box color
  element.style.backgroundColor = color;
  element.style.color = "white";
}

// Function to greet user
function greetUser() {

  let username = document.getElementById("name").value;

  if(username.trim() === "") {
    document.getElementById("message").innerHTML =
      "Please enter your name";
  }
  else {
    // Display greeting in top heading
    document.getElementById("heading").innerHTML =
      "Hello " + username + "!";
  }
}