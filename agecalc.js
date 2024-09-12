const Btn = document.querySelector("#calculate-age-button");
const ageInput = document.querySelector("#birthdate-input");
const output = document.querySelector(".age");


// let birthdate = new Date( year.value ,month.value+1 ,day.value );
// let currntdate = new Date();

// Btn.addEventListener("click", () => {
//     console.log('hello');
//     let yearage= currntdate.getFullYear() - birthdate.getFullYear();
//     let monthage = currntdate.getMonth() - birthdate.getMonth();
//     let dayage = currntdate.getDate() - birthdate.getDate();
   

//     if (monthage < 0) {
//         yearage--;
//         monthage = 12 - birthdate.getMonth() + currntdate.getMonth();
//     }
//     if (dayage < 0) {
//         monthage--;
//         dayage = 30 - birthdate.getDate() + currntdate.getDate();
//     }
//     output.innerHTML = `Your age is ${yearage} Years, ${monthage} Months, ${dayage} Days`;

// })




Btn.addEventListener("click", () => {
    const birthdateValue = ageInput.value;
    
    if (!birthdateValue) {
        output.innerHTML = "Please enter a valid birthdate.";
        return;
    }
    if(new Date(birthdateValue) > new Date()){
        output.innerHTML = "Please enter a valid birthdate.";
        return;
    }
    
    const birthdate = new Date(birthdateValue);
    const currntdate = new Date();

    let yearage = currntdate.getFullYear() - birthdate.getFullYear();
    let monthage = currntdate.getMonth() - birthdate.getMonth();
    let dayage = currntdate.getDate() - birthdate.getDate();
    
    if (monthage < 0 || (monthage === 0 && dayage < 0)) {
        yearage--;
        monthage += 12;
    }
    
    if (dayage < 0) {
        monthage--;
        const daysInMonth = new Date(currntdate.getFullYear(), currntdate.getMonth(), 0).getDate();
        dayage += daysInMonth;
    }

    output.innerHTML = `Your Age is ${yearage} Years, ${monthage} Months, ${dayage} Days`;
});