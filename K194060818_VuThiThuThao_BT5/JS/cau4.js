function getText() {
    var string = document.getElementById("idtext").value;
    return string;
}

var chuoi = "";
var result = "";
var n = chuoi.length;

function inHoa() {
    chuoi = getText();
    result = chuoi.toUpperCase();
    document.getElementById("result").value = result;
}

function inThuong() {
    chuoi = getText();
    result = chuoi.toLowerCase();
    document.getElementById("result").value = result;
}

function demTu() {
    chuoi = getText().split(' ').filter(function(i) {
        return i
    });
    document.getElementById("result").value = chuoi.length;
}

function inTungDong() {
    var arr = getText().split(' ');
    arr.forEach(element => {
        result += element + "\n"
    });
    document.getElementById("result").value = result;
}

function demHoa() {
    chuoi = xoaKhoangTrang(getText());
    let n2 = chuoi.length;
    var arr = chuoi.split('');
    result = 0;
    for (let b = 0; b < n2; b++) {
        if (arr[b] == arr[b].toUpperCase()) {
            result++;
        }
    }
    document.getElementById("result").value = result;
}

function demThuong() {
    chuoi = xoaKhoangTrang(getText());
    let n2 = chuoi.length;
    var arr = chuoi.split('');
    var result = 0;
    for (let b = 0; b < n2; b++) {
        if (arr[b] == arr[b].toLowerCase()) {
            result++;
        }
    }
    document.getElementById("result").value = result;
}

function xoaKhoangTrang(chuoi) {
    var n = chuoi.length;
    for (let i = 0; i < n; i++) {
        result = chuoi.replace(" ", "");
        chuoi = result;
    }
    return result;
}

function demNguyenAm() {
    chuoi = xoaKhoangTrang(getText()).toLowerCase();
    var n = chuoi.length;
    var arr = chuoi.split('');
    var result1 = "";
    var result2 = "";
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < n; i++) {
        if (vowels.indexOf(arr[i]) !== -1) {
            if (result1.indexOf(arr[i]) === -1) {
                result1 += arr[i];
            }
        }
        if (vowels.indexOf(arr[i]) === -1) {
            if (result2.indexOf(arr[i]) === -1) {
                result2 += arr[i];
            }
        }
    }
    result = "Nguyen am la: " + result1 + " Phu am la: " + result2;
    document.getElementById("result").value = result;
}

function chuyenTrang() {
    window.location.assign("https://www.w3schools.com")
}