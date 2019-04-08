function checkInputFirstName(){
    var data = document.getElementById("fname").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("fname").value = data.substring(0,data.length-1);
    }
}
function checkInputLastName(){
    var data = document.getElementById("lname").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("lname").value = data.substring(0,data.length-1);
    }
}
function checkInputNumber(){
    var data = document.getElementById("tel").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("tel").value = data.substring(0,data.length-1);
    }
}

function checknull () {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var birth = document.getElementById("birth").value;
    var sex = document.getElementById("sex").value;
    var home = document.getElementById("home").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var emailindex = document.getElementById("email").value.indexOf('@');
    var typecos = document.getElementById("typecos").value;

    
    if(fname == ""  ){
        alert("กรุณากรอกชื่อ");
    }else if(lname == ""){
        alert("กรุณากรอกนามสกุล");
    }else if(birth =="" ){
        alert("กรุณากรอกวันเกิด");
    }else if(sex ==""){
        alert("กรุณากรอกเพศ");
    }else if(home==""){
        alert("กรุณากรอกที่อยู่");
    }else if(tel==""){
        alert("กรุณากรอกเบอร์โทรศัพท์");
    }else if(tel.length != 10 || tel != parseInt(tel)){
        alert("เบอร์โทรศัพท์ต้องเป็นตัวเลขและมีความยาว 10 ตัวเท่านั้น");
    }else if(email==""){
        alert("กรุณากรอกข้อมูลให้ครบ");
    }else if(emailindex == -1){
        alert("อีเมลผิดพลาด");
    }else if(typecos==""){
        alert("กรุณากรอกข้อมูลให้ครบ");
    }else{
        alert("บันทึกข้อมูลสำเร็จ");
        document.getElementById('registrationAddCusto').submit();
    }
}

function number() {
    
    var change = "";
    var value = "";
    var data = document.getElementById("x").value;
    var removed = ""
    if (data.charAt(data.length - 1) != parseInt(data.charAt(data.length - 1)) || data.charAt(0) == '0') {
        document.getElementById("x").value = data.substring(0, data.length - 1);
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data.charAt(i) == ",") {
                data.slice(0, i);
            } else {
                removed += data.substring(i, i + 1);
            }
        }
        var size = -1;
        for (let i = removed.length; i >= 0; i--) {
            if (size == 3) {
                size = 1;
                change += "," + removed.substring(i, i + 1);
            } else {
                change += removed.substring(i, i + 1);
                size++;
            }

        }
        for (let i = change.length; i >= 0; i--) {
            value += change.substring(i, i + 1)
        }
        document.getElementById("x").value = value;

    }
}