window.onload = function() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    document.getElementById("date").value = date;
    document.getElementById("fullname").focus();
};

function notice() {
    var data = document.getElementById("physician").value
    if (data == "Other") {
        alert("Nhập Name!");
        document.getElementById("specified").focus();
    } else document.getElementById("physician").focus();
}

function check(num) {
    var a = num;
    if (a <= 2 && a >= 0) {} else {
        alert("Không hợp lệ! Phải nhập từ 0 đến 2");
    }
}

function sum() {
    a = parseFloat(document.getElementById("activity").value, 10);
    b = parseFloat(document.getElementById("pulse").value, 10);
    c = parseFloat(document.getElementById("grimace").value, 10);
    d = parseFloat(document.getElementById("apperance").value, 10);
    e = parseFloat(document.getElementById("respira").value, 10);
    var sum = a + b + c + d + e;
    document.getElementById("total").value = sum;
}

function register() {
    var result = true;
    for (let i = 0; i < 13; i++) {
        if (document.getElementsByClassName("form__input").value == 'undify') {
            result = false;
            break;
        }
        // alert(document.getElementsByClassName("form__input")[i].value);
    }
    if (result) {
        alert("Đăng ký thành công");
    } else {
        alert("Đăng ký không thành công");
    }

}