console.log("Welcome to Employee Wage Computation Program on Master Branch");

// calculating wages for a month

function employeeWage(){

    var daysInMonth = 30;
    var day = 1;
    var partTimeDays = 0;
    var fullTimeDays = 0;
    var totalMonthWage = 0;
    
    // while loop for calculating the employee total wages and no of days present full time or part time.
    
    while(day <= daysInMonth){
        let presentDays;
        let perHourWage = 20;
        let fullTimeHours  = 8;
        let fullTimeWage = fullTimeHours * perHourWage;
        let partTimeWage = 4 * perHourWage;
        // taking attendance for 20 days
        let empAttendance = ()=>{
            return Math.round(Math.random()*1);
        }
        
        if(empAttendance() == 1){
            presentDays++;
            // checking if employee has present for 20 days
            if(presentDays == 20){
                return totalMonthWage;
            }
            
            // calculating wage for part time hours
            let partTimeHours = Math.round(Math.random()*4);
            if(partTimeHours == 4){
                let wage = partTimeWage;
                totalMonthWage += wage;
                partTimeDays++;
            }
            // calculating wages for full time hours
            else{
                let wage = fullTimeWage;
                totalMonthWage += wage;
                fullTimeDays++;
            }
        }
        day++;
    }
    console.log(`Employee has worked ${partTimeDays} part time days and ${fullTimeDays} full time days`);
    return `Total wages is ${totalMonthWage} rupees`
}

let result = employeeWage();
console.log(result);