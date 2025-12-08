const burger = document.querySelector(".burger");
const list = document.querySelector(".burger-list");

burger.addEventListener("click", () => {
    list.classList.toggle("is-visible");
});
