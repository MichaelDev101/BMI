//Declare const
const FIRST_NAME=document.querySelector("#firstName");
const LAST_NAME=document.querySelector("#secondName");
const CLIENT_WEIGHT=document.querySelector("#weight");
const CLIENT_HEIGHT=document.querySelector("#height");
const CLIENT_RESULT=document.querySelector(".result");
const CALC_BMI_BTN=document.querySelector(".btn")

//Add an event listener to the button
CALC_BMI_BTN.addEventListener("click", ()=>{
    const FIRST_NAME=document.querySelector("#firstName");
    const LAST_NAME=document.querySelector("#secondName");
    const CLIENT_WEIGHT=document.querySelector("#weight");
    const CLIENT_HEIGHT=document.querySelector("#height");
    const CLIENT_RESULT=document.querySelector(".result");

    //ARITHMETIC OPERATION
    let BMI=(CLIENT_WEIGHT.value) /(CLIENT_HEIGHT.value**2);

    //Let us set the BMI value to 2 decimal place.
    BMI=BMI.toFixed(2);

    //FORM VALIDATION
    if (FIRST_NAME.value=="" || LAST_NAME.value=="" || CLIENT_HEIGHT.value==""  || CLIENT_WEIGHT.value=="") {
        setTimeout(() => {
            CLIENT_RESULT.textContent="Please fill all fields correctly";
            CLIENT_RESULT.style.color="red";
            CLIENT_RESULT.style.fontStyle="italic";
            setTimeout(() => {
                CLIENT_RESULT.textContent="";   
            }, 1500);
        }, 100);
    } else {
        // CLIENT_RESULT.textContent=`${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m. Thank you for using this app.`;  
        // CLIENT_RESULT.style.color="black";
        // CLIENT_RESULT.style.fontStyle="normal";
        if (BMI < 18) {
           CLIENT_RESULT.innerHTML=`${FIRST_NAME.value } ${LAST_NAME.value} Your BMI value is ${BMI}kg/m. You are UNDERWEIGHT.You may want to see a medical doctor.<br> Thanks for using Michael and Kome's BMI Calculator.` 
           CLIENT_RESULT.style.color="red";
           CLIENT_RESULT.style.backgroundColor="black";
           CLIENT_RESULT.style.padding="2%";
           init(); 
        }  else if(BMI>18 && BMI <25){
            CLIENT_RESULT.innerHTML=`${FIRST_NAME.value } ${LAST_NAME.value} Your BMI value is ${BMI}kg/m. You are NORMAL.Please eat and stay healthy.<br> Thanks for using Michael and Kome's BMI Calculator.` 
            CLIENT_RESULT.style.color="green";
            CLIENT_RESULT.style.backgroundColor="black";
            CLIENT_RESULT.style.padding="2%";
            init();
        } else if(BMI>25 && BMI <30){
            CLIENT_RESULT.innerHTML=`${FIRST_NAME.value } ${LAST_NAME.value} Your BMI value is ${BMI}kg/m. You are OVERWEIGHT.Please excercise regularly and visit your doctor.<br> Thanks for using Michael and Kome's BMI Calculator.` 
            CLIENT_RESULT.style.color="orange";
            CLIENT_RESULT.style.backgroundColor="black";
            CLIENT_RESULT.style.padding="2%";
            init();
        } else{
            {
                CLIENT_RESULT.innerHTML=`${FIRST_NAME.value } ${LAST_NAME.value} Your BMI value is ${BMI}kg/m. You are OBESE.Please visit your doctor immediately and seek proper consultation.<br> Thanks for using Michael and Kome's BMI Calculator.` 
                CLIENT_RESULT.style.color="dark red";
                CLIENT_RESULT.style.backgroundColor="black";
                CLIENT_RESULT.style.padding="2%";
                init();  
            }
        }
           
    }
}); 


function init(){
    FIRST_NAME.value="";
    LAST_NAME.value="";
    CLIENT_HEIGHT.value="";
    CLIENT_WEIGHT.value="";
}