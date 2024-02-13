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

let employee = employeeAttendance();

function calculateDailyWage(employee){
    if(employee == 'present'){
        let dailyWage = 8*20
        return dailyWage;
    }else{
        return "employee is absent";
    }
}