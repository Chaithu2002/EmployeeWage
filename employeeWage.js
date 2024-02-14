console.log("Welcome to Employee Wage Computation Program on Master Branch");

function employeeAttendance(){
    // employee attendance
    EmpAttendance = Math.round(Math.random()*1)
    if(EmpAttendance == 1){
        let perHourWage = 20;
        let fullTimeHours  = 8;
        let totalWage = fullTimeHours * perHourWage;
        let partTimeWage = 4 * perHourWage;
        let partTime = Math.round(Math.random()*8);
        // if employee is worked for part time hours
        if(partTime == 4){
            console.log("employee is present for only part time hours");
            return `Total employee wage for part Time is ${partTimeWage} rupees`;
        }
        // if employess is present full time hours
        console.log("employee is present for full time hours");
        return `Total wage for employee is ${totalWage} rupees`;
    }else{
        return "employee is absent";
    }
    
}