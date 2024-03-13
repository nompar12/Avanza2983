const greenColor = document.querySelector(".green");
const yellowColor = document.querySelector(".yellow");
const whiteColor = document.querySelector(".white");
const imageCard = document.querySelector(".img-container");
const itemTag = document.querySelector(".tag");
const buttonText = document.querySelector(".button-text");

greenColor.addEventListener("click", function(){
    imageCard.style.backgroundImage = "url('../img 2/butterfly-8387989_1280.jpg')";
    itemTag.style.backgroundColor = "white";
    itemTag.style.color = "black";
    buttonText.style.color = "white";
});

yellowColor.addEventListener("click", function(){
    imageCard.style.backgroundImage = "url('../img 2/narzissen-8598191_1280.jpg')";
    itemTag.style.backgroundColor = "white";
    itemTag.style.color = "black";
    buttonText.style.color = "white";
});

whiteColor.addEventListener("click", function(){
    imageCard.style.backgroundImage = "url('../img 2/ruby-throated-hummingbird-8596660_1280.jpg')";
    itemTag.style.backgroundColor = "white";
    itemTag.style.color = "black";
    buttonText.style.color = "black";
});
const cart =() => {
naturalezaButton.style.display = "none";
feedBackBtn.style.display = "block";


}
const feedBackFun = () => {
naturalezaButton.addEventListener("click", cart);

feedBackBtn.style.display = "none";

}
feedBack.addEventListener("click", feedBackFun);