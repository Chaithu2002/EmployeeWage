// employee wage calculating using switch statement

console.log("Welcome to Employee Wage Computation Program on Master Branch");

let employeeStatus = ()=>{                //using arrow function for getting employee attendance either 1 or 0;
    return Math.round(Math.random()*1);
}

switch(employeeStatus()){
    case 1:
        let perHourWage = 20;
        let fullTimeHours  = 8;
        let totalWage = fullTimeHours * perHourWage;
        let partTimeWage = 4 * perHourWage;
        let partTime = Math.round(Math.random()*8);
        // if employee is worked for part time hours
        if(partTime == 4){
            console.log("employee is present for only part time hours");
            console.log(`Total employee wage for part Time is ${partTimeWage} rupees`);
        }
        // if employess is present full time hours
        console.log("employee is present for full time hours");
        console.log(`Total wage for employee is ${totalWage} rupees`);
        break;
    case 0:
        console.log("employee is absent");
        break; 
}



