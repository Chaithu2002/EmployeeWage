console.log("Welcome to Employee Wage Computation Program on Master Branch");

// calculating wages for a month if hours 200 and days 20

function employeeWage(){

    var daysInMonth = 30;
    var day = 1;
    var partTimeDays = 0;
    var fullTimeDays = 0;
    var totalMonthWage = 0;
    var totalHours = 0;
    
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
            // checking if employee has present for 20 days and 100 hours
            if(presentDays == 20 && totalHours == 100){
                return `employee wages for 20 days and 100 hours is ${totalMonthWage}`;
            }
            
            // calculating wage for part time hours
            let partTimeHours = Math.round(Math.random()*4);
            if(partTimeHours == 4){
                let wage = partTimeWage;
                totalMonthWage += wage;
                partTimeDays++;
                totalHours += 4;
            }
            // calculating wages for full time hours
            else{
                let wage = fullTimeWage;
                totalMonthWage += wage;
                fullTimeDays++;
                totalHours += 8;
            }
        }
        day++;
    }
    console.log(`Employee has worked ${partTimeDays} part time days and ${fullTimeDays} full time days`);
    return `Total wages is ${totalMonthWage} rupees`
}

let result = employeeWage();
console.log(result);