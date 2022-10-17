function CalculateDate() {
    var ngay = new Date(),
        thang = ngay.getMonth(),
        monthword

    switch (thang) {
        case 0:
            monthword = "January";
            break;
        case 1:
            monthword = "February";
            break;
        case 2:
            monthword = "March";
            break;
        case 3:
            monthword = "April";
            break;
        case 4:
            monthword = "May";
            break;
        case 5:
            monthword = "June";
            break;
        case 6:
            monthword = "July";
            break;
        case 7:
            monthword = "August";
            break;
        case 8:
            monthword = "September";
            break;
        case 9:
            monthword = "October";
            break;
        case 10:
            monthword = "November";
            break;
        case 11:
            monthword = "December";
            break;
    }
    var ngayhomnay = monthword + " " + ngay.getDate()
    document.getElementById("today").innerHTML = ngayhomnay

    var lastday = new Date("2021-12-25").getTime()
    var dif = lastday - ngay.getTime()
    var dayleft = Math.floor(dif / (1000 * 60 * 60 * 24))
    document.getElementById("until").innerHTML = dayleft
}