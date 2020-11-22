let questions = document.querySelectorAll(".question");
// let me = document.getElementById("me");

// me.parentElement.nextElementSibling


questions.forEach((question) => {
    let rotateValue = "180deg";
    question.addEventListener("click", (evt)=> {
        if(rotateValue  === "180deg" || evt.target.parentElement.nextElementSibling.style.display === "none"){
            questions.forEach((question) => {
                question.parentElement.nextElementSibling.style.display = "none";
                question.nextElementSibling.style.transform = `rotate(0deg)`;
            })
            evt.target.parentElement.nextElementSibling.style.display = "flex";
            evt.target.nextElementSibling.style.transform = `rotate(${rotateValue })`;
            rotateValue  = "0deg";
        }
        else {
            evt.target.parentElement.nextElementSibling.style.display = "none";
            evt.target.nextElementSibling.style.transform = `rotate(${rotateValue })`;
            rotateValue  = "180deg";
        }
        
    })

})