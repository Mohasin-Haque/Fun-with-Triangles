const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
    return sumOfAngles;
}


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(inputs[0].value, inputs[1].value, inputs[2].value);
    if(sumOfAngles === 180){
        outputEl.innerText="These angles will form a Triangle"
    }else{
        outputEl.innerText = "Oh no ... the angles dont form a Traingle"
    }
}

isTriangleBtn.addEventListener("click", isTriangle)