var popupModal = document.getElementById("popup_modal");
var body = document.querySelector("body");
var closePopupModal = document.getElementById("close");
var popupForm = document.getElementById("form_container");
var thanks = document.getElementById("thanks");
// console.log(popupModal)
closePopupModal.addEventListener("click",closeModal)
popupForm.addEventListener("submit", submitForm)
setTimeout(() => {
    body.classList.add("dark-bg")
    popupModal.classList.remove("display-none")
}, 3000);
function closeModal () {
    body.classList.remove("dark-bg")
    popupModal.classList.add("display-none")
}
function submitForm (event) {
    event.preventDefault();
    thanks.style.display = "block";
}