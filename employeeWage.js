function employeeAttendance(){
    // greeting's message to users
    console("Welcome to Employee Wage Computation Program on Master Branch");
    
    EmpAttendance = Math.round(Math.random()*1)
    if(EmpAttendance == 1){
        return "present";
    }else{
        return "absent";
    }
    
}

// UC 2 code

let employee = employeeAttendance();

function calculateDailyWage(employee){
    if(employee == 'present'){
        let dailyWage = 8*20
        return dailyWage;
    }else{
        return "employee is absent";
    }
}

// UC 3 code

function partTimeWage(employee){
    if(employee == 'present'){
        let wage = 4*20;
        return wage;
    }else{
        return "employee is absent";
    }
}

// UC 4 code
// solving the above problem using switch statement

let employeeStatus = randomNumber();

function randomNumber(){
    return Math.round(Math.random()*1);
}

switch(employeeStatus){
    case 1:
        console.log("employee is present");
        let partTime = Math.round(Math.random()*4);
        if(partTime == 4){
            let wage = 4*20;
            console.log(`employee Daily wage is ${wage} rupees`);
        }else{
            let wage = 8*20;
            console.log(`employee Daily wage is ${wage} rupees`);
        }
        break;
    case 0:
        console.log("employee is absent");
        break; 
}


// UC5 Code

function CalculateMonthWage(){
    let days = 20;
    let hours = 20*8;
    let ratePerHour = 20;
    return hours * ratePerHour;
}


