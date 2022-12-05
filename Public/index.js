function calc() {
    var date = document.getElementById("input1").value;
    var date1 = document.getElementById("input2").value;
    // get input1 and input2 dates
    var input1date = new Date(date);
    var input2date = new Date(date1);
    //  input1 and input2 get times
    var input1time = input1date.getTime();
    //   console.log(input1time);
    var input2time = input2date.getTime();
    //--------------- subtraction ------------------
    let calc;
    if (input1time > input2time) {
        calc = new Date(input1time - input2time);
    }
    else {
        calc = new Date(input2time - input1time);
    }
    //  console.log(calc);
    var calcdate = calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
    //   console.log(calcdate);
    //split the value "-"
    var calcsplit = calcdate.split("-");
    //  console.log(calcsplit);
    //total days month year
    var days = Number(Math.abs(calcsplit[0]) - 1);
    var month = Number(Math.abs(calcsplit[1]) - 1);
    var year = Number(Math.abs(calcsplit[2]) - 1970);
    //console.log(days);
    // console.log(month);
    // console.log(year);
    //total days
    var totalday = (year * 365) + (month * 30.417) + (days);
    //console.log(totalday);
    //total months
    var totalmonth = totalday / 30.417;
    //console.log(totalmonth);
    //total milliseconds 
    var totalmil = totalday * 24 * 60 * 60 * 1000;
    //total seconds
    var totalsec = totalday * 24 * 60 * 60;
    //console.log(totalsec);
    //total minutes
    var totalmin = totalday * 24 * 60;
    //console.log(totalmin);
    //total hours
    var totalhrs = totalday * 24;
    // console.log(totalhrs);
    //total weeks 
    var weeks = (totalday >= 7) ? totalday / 7 : 0;
    console.log(weeks);
    //total years months days
    var yeartxt = ["year", "years"];
    var monthtxt = ["month", "months"];
    var daytxt = ["day", "days"];
    var result = ((year == 1) ? year + ' ' + yeartxt[0] + ' ' : (year > 1) ? year + '' + yeartxt[1] + ' ' : ' ')
        + ((month == 1) ? month + ' ' + monthtxt[0] + ' ' : (month > 1) ? month + '' + monthtxt[1] + ' ' : ' ')
        + ((days == 1) ? days + ' ' + daytxt[0] + ' ' : (days > 1) ? days + ' ' + daytxt[1] + ' ' : ' ');
    // console.log(result);
    document.getElementById("date").innerHTML = "<p> Total Number Of Milliseconds : " + Math.round(totalmil) + " milliseconds</p>"
        + " <p> Total Number Of Seconds : " + Math.round(totalsec) + " seconds</p>"
        + " <p> Total Number Of Minutes : " + Math.round(totalmin) + " minutes</p>"
        + " <p> Total Number Of Hours : " + Math.round(totalhrs) + " hours</p>"
        + " <p> Total Number Of Days : " + Math.round(totalday) + " days</p>"
        + " <p> Total Number Of Weeks : " + Math.round(weeks) + " weeks</p>"
        + " <p> Total Number Of Months : " + Math.round(totalmonth) + " months</p>"
        + " <p> Total Number Of Date Month Year : " + result + " </P>";
}