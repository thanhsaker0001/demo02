var readlineSync = require('readline-sync');
var fs = require('fs')
var students = []


 function loadData(){
  	var fileContent=fs.readFileSync('./data.json');
  	students=JSON.parse(fileContent);
  }


function showStudents () {
  for (var student of students){
    console.log(student.name ,student.phoneNumber , student.maSinhVien)
  }
}

function showCreateStudent(){
   var name = readlineSync.question('> Họ Và Tên : ')
    var maSinhVien = readlineSync.question('> Mã Sinh Viên : ')
     var phoneNumber = readlineSync.question('> Số điện thoại : ')
     var student = {
       name : name ,
       maSinhVien : maSinhVien ,
       phoneNumber : phoneNumber 
     };
     students.push(student)
var readlineSync = require('readline-sync');
var fs = require('fs')
var students = []


 function loadData(){
  	var fileContent=fs.readFileSync('./data.json');
  	students=JSON.parse(fileContent);
  }


function showStudents () {
  for (var student of students){
    console.log(student.stt,student.name ,student.phoneNumber , student.maSinhVien)
  }
}

function showCreateStudent(){
  var name = readlineSync.question('> Họ Và Tên : ')
  var maSinhVien = readlineSync.question('> Mã Sinh Viên : ')
  var phoneNumber = readlineSync.question('> Số điện thoại : ')

  var student = {
    name : name ,
    maSinhVien : maSinhVien ,
    phoneNumber : phoneNumber 
  };
  student.stt=students.length+1;
  students.push(student)
}


function saveAndExit(){
  var content = JSON.stringify(students)
  fs.writeFileSync ('./data.json', content ,{encoding : 'utf8'})
}



function changeInfo(){
  var sttChange=readlineSync.question('nhập stt cần sửa :');
  sttChange=sttChange;
  for(var i=0;i<students.length;i++){
    if(students[i].stt==sttChange) {
    var nameNew=readlineSync.question('nhập tên mới:');
    students[i].name = nameNew;
    var phoneNew=readlineSync.question('nhập số điện thoại  mới:');
    students[i].phoneNumber=phoneNew;  
    var msvNew=readlineSync.question('nhập msv mới:');
    students[i].maSinhVien = msvNew;
    saveAndExit();
    break;
    }
  }
}
function deleteInfo(){
  var sttDelete=readlineSync.question('nhập stt cần xóa:');
  sttDelete=sttDelete;
  for(var i=0;i<students.length;i++){
  if(students[i].stt==sttDelete){
  students.splice(i,1);
  saveAndExit();
  break;
  }
}
}


function showMenu(){
  console.log('1.Hiển thị tất cả thông tin ')
  console.log('2.Tạo thông tin mới')
  console.log('3,Save and Exit ')
  console.log('4.Xoá thông tin.');
  console.log('5.Tìm kiếm thông tin.');
  console.log('6.Sửa thông tin.');

  var readlineSync = require('readline-sync');
  var fs = require('fs')
  var students = []


  function loadData(){
      var fileContent=fs.readFileSync('./data.json');
      students=JSON.parse(fileContent);
    }


  function showStudents () {
    for (var student of students){
      console.log(student.stt,student.name ,student.phoneNumber , student.maSinhVien)
    }
  }

  function showCreateStudent(){
    var name = readlineSync.question('> Họ Và Tên : ')
    var maSinhVien = readlineSync.question('> Mã Sinh Viên : ')
    var phoneNumber = readlineSync.question('> Số điện thoại : ')

    var student = {
      name : name ,
      maSinhVien : maSinhVien ,
      phoneNumber : phoneNumber 
    };
    student.stt=students.length+1;
    students.push(student)
  }


  function saveAndExit(){
    var content = JSON.stringify(students)
    fs.writeFileSync ('./data.json', content ,{encoding : 'utf8'})
  }



  function changeInfo(){
    var sttChange=readlineSync.question('nhập stt cần sửa :');
    sttChange=sttChange;
    for(var i=0;i<students.length;i++){
      if(students[i].stt==sttChange) {
      var nameNew=readlineSync.question('nhập tên mới:');
      students[i].name = nameNew;
      var phoneNew=readlineSync.question('nhập số điện thoại  mới:');
      students[i].phoneNumber=phoneNew;  
      var msvNew=readlineSync.question('nhập msv mới:');
      students[i].maSinhVien = msvNew;
      saveAndExit();
      break;
      }
    }
  }
  function deleteInfo(){
    var sttDelete=readlineSync.question('nhập stt cần xóa:');
    sttDelete=sttDelete;
    for(var i=0;i<students.length;i++){
    if(students[i].stt==sttDelete){
    students.splice(i,1);
    saveAndExit();
    break;
    }
  }
  }


function searchInfor(){
  var findMsv=readlineSync.question('nhập mã sinh viên  muốn tìm:');
  for(var i=0;i<students.length;i++){
    if(students[i].maSinhVien == findMsv){
      console.log(students[i]);
    }
  }
}


  function showMenu(){
    console.log('1.Hiển thị tất cả thông tin ')
    console.log('2.Tạo thông tin mới')
    console.log('3,Save and Exit ')
    console.log('4.Xoá thông tin.');
    console.log('5.Tìm kiếm thông tin.');
    console.log('6.Sửa thông tin.');

    var option = readlineSync.question('> Select option : ')
    switch (option) {
      case '1' : 
      showStudents();
      showMenu();
      break;
      case '2' :
      showCreateStudent();
      showMenu();
      break;
      case '3' :
      saveAndExit ();
      console.log('Thank you !, Thông tin bạn đã được lưu');
      break;
      default :
      console.log('Nhập sai ')
      showMenu();
      break;
      case '4' :
      deleteInfo();
      showMenu();
      break;
      case '5':
      searchInfor(students);
      showMenu();
      break;
      case '6':
      changeInfo();
      showMenu
      break;
    }
  }



  function main(){
    loadData();
    showMenu();
  }
  main();



