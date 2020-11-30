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
}


function saveAndExit(){
  var content = JSON.stringify(students)
  fs.writeFileSync ('./data.json', content ,{encoding : 'utf8'})
}





function showMenu(){
  console.log('1.Show all the Students')
  console.log('2.Create a new Students')
  console.log('3,Save and Exit ')
  console.log('4.Delete information.');
  console.log('5.Search information.');
  console.log('6.Change information.');

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
    deleteInfor();
    showMenu();
    break;
    case '5':
    searchInfor();
    showMenu();
    break;
    case '6':
    editInfor();
    showMenu
    break;
  }
}

function main(){
 	loadData();
 	showMenu();
 }
main();

