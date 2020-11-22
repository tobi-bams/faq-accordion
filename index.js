let questions = document.querySelectorAll(".question");
// let me = document.getElementById("me");

// me.style.fontWeight = "700"


questions.forEach((question) => {
    let rotateValue = "180deg";
    question.addEventListener("click", (evt)=> {
        if(rotateValue  === "180deg" || evt.target.parentElement.nextElementSibling.style.display === "none"){
            questions.forEach((question) => {
                question.parentElement.nextElementSibling.style.display = "none";
                question.nextElementSibling.style.transform = `rotate(0deg)`;
                question.style.fontWeight = "400";

            })
            evt.target.parentElement.nextElementSibling.style.display = "flex";
            evt.target.nextElementSibling.style.transform = `rotate(180deg)`;
            evt.target.style.fontWeight = "700";
            rotateValue  = "0deg";
        }
        else {
            evt.target.parentElement.nextElementSibling.style.display = "none";
            evt.target.nextElementSibling.style.transform = `rotate(${rotateValue })`;
            evt.target.style.fontWeight = "400";
            rotateValue  = "180deg";
        }
        
    })

})