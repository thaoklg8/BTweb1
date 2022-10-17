function sum1() {
    var a1 = document.getElementById("soluong1").value;
    if (a1 > 0) {
        a1 = parseInt(a1, 10);
        var b1 = a1 * 10;
        document.getElementById("thanhtien1").value = b1 + '$';
    } else {
        alert("Khong hop le");
    }
}

function sum2() {
    var a2 = document.getElementById("soluong2").value;
    if (a2 > 0) {
        a2 = parseInt(a2, 10);
        var b2 = a2 * 20;
        document.getElementById("thanhtien2").value = b2 + '$';
    } else {
        alert("Khong hop le");
    }
}

function sum3() {
    var a3 = document.getElementById("soluong3").value;
    if (a3 > 0) {
        a3 = parseInt(a3, 10);
        var b3 = a3 * 15;
        document.getElementById("thanhtien3").value = b3 + '$';
    } else {
        alert("Khong hop le");
    }
}

function sum() {
    var a1 = Number(document.getElementById("soluong1").value);
    var a2 = Number(document.getElementById("soluong2").value);
    var a3 = Number(document.getElementById("soluong3").value);
    document.getElementById("sum").value = a1 * 10 + a2 * 20 + a3 * 15 + '$';
}