console.log("Welcome to Employee Wage Computation Program on Master Branch");

function employeeAttendance(){
    // employee attendance
    EmpAttendance = Math.round(Math.random()*1)
    if(EmpAttendance == 1){
        console.log("employee is present");
        let perHourWage = 20;
        let fullTimeHours  = 8;
        let totalWage = fullTimeHours * perHourWage;
        return `Total wage for employee is ${totalWage} rupees`;
    }else{
        return "employee is absent";
    }
    
}
