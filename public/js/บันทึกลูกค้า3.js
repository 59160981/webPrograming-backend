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
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1)) || data.charAt(0) != '0') {
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
    var emailnet = document.getElementById("email").value.indexOf('.com');
    var typecos = document.getElementById("typecos").value;

    
    if(fname == ""  ){
        alert("กรุณากรอกชื่อ");
    }else if(lname == ""){
        alert("กรุณากรอกนามสกุล");
    }else if(birth =="" ){
        alert("กรุณาเลือกวันเกิด");
    }else if(sex ==""){
        alert("กรุณาเลือกเพศ");
    }else if(home==""){
        alert("กรุณากรอกที่อยู่");
    }else if(tel==""){
        alert("กรุณากรอกเบอร์โทรศัพท์");
    }else if(tel.length != 10 || tel != parseInt(tel)){
        alert("เบอร์โทรศัพท์ต้องเป็นตัวเลขและมีความยาว 10 ตัวเท่านั้น");
    }else if(email==""){
        alert("กรุณากรอกอีเมล");
    }else if(emailindex == -1){
        alert("อีเมลผิดพลาดต้องมีเครื่องหมาย @ , .com");
    }else if(emailnet == -1){
        alert("อีเมลผิดพลาดต้องลงท้ายด้วย .com");
    }else if(typecos==""){
        alert("กรุณาเลือกประเภทลูกค้า");
    }else{
        alert("บันทึกข้อมูลสำเร็จ");
        document.getElementById('registrationAddCusto').submit();
    }
}
