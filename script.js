function changeTheme() {
  let body = document.querySelector("body");

  // body.classList.toggle("dark") this line means we dont need the below if statement
  // toggle basically adds add and remove between the class list

  if (body.classList.contains("darkTheme")) {
    body.classList.remove("darkTheme");
  } else {
    body.classList.add("darkTheme");
  }
}

let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);

function sayHi() {
  alert(
    "To learn more about pilates, register your details here and we'll email you a free guide. "
  );
  let firstName = prompt("What is  your first name? ");
  let surname = prompt("What is your last name? ");
  let email = prompt("Enter your email address to be added to the newsletter.");
  alert(
    `Thank you for your interest, check your inbox ${name} to receive your free 'Learn Pilates' guide.`
  );
}
let learnMore = document.querySelector(".learnMoreButton");
learnMore.addEventListener("click", sayHi);
