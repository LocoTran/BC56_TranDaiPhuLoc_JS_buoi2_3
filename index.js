/**Bài 1 tính lương nhân viên */

function tinhluong() {
    var songay = document.getElementById("songay").value;
    var luong1ngay = 100000;
    var tienluong = songay * luong1ngay;

    document.getElementById("kqluong").innerHTML = `
    <p>Tiền lương: ${tienluong}</p>`
}

/** Bài 2 tính trung bình 5 số thực*/

function tinhtb5so() {
    var sothu1 = document.getElementById("sothu1").value * 1;
    var sothu2 = document.getElementById("sothu2").value * 1;
    var sothu3 = document.getElementById("sothu3").value * 1;
    var sothu4 = document.getElementById("sothu4").value * 1;
    var sothu5 = document.getElementById("sothu5").value * 1;

    var tb5so = (sothu1 + sothu2 + sothu3 + sothu4 + sothu5) / 5;

    document.getElementById("kqtb5so").innerHTML = `
    <p>Trung bình số: ${tb5so}</p>`;
}

/** Bài 3 Quy đỏi tiền */

function doitien() {
    var tienusd = document.getElementById("tienusd").value * 1;
    var tigia = 23500;
    var tienvnd = tigia * tienusd;

    document.getElementById("doiusd").innerHTML = `
    <p>Số tiền VND: ${tienvnd}</p>`;
}

/** Bài 4 tính diện tích, chu vi hcn*/


function tinhchuvidientich() {
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;

    var chuvi = (chieudai + chieurong) * 2;
    var dientich = chieudai * chieurong;

    document.getElementById("hcn").innerHTML = `
    <p>Chu vi hcn là: ${chuvi}</p>
    <p>Diện tích hcn là: ${dientich}</p>`
}

/** Bài 5 tính tổng 2 ký số */

function tong2kyso() {
    var so2chuso = document.getElementById("so2chuso").value * 1;
    
    var hangdonvi = so2chuso % 10;
    var hangchuc = Math.floor(so2chuso / 10);
    var tong2kyso = hangchuc + hangdonvi;

    document.getElementById("kquatong2kyso").innerHTML = `
    <p>Tổng 2 ký số: ${tong2kyso}</p>`
}
