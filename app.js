const fullDarkCheckbox = document.querySelector("#full-dark");
const containerDarkCheckbox = document.querySelector("#container-dark");
const containerDark = document.querySelector(".container-dark-mode");
fullDarkCheckbox.addEventListener("change", () => {
  if (fullDarkCheckbox.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

containerDarkCheckbox.addEventListener("change", () => {
  if (containerDarkCheckbox.checked) {
    containerDark.classList.add("dark");
  } else {
    containerDark.classList.remove("dark");
  }
});
