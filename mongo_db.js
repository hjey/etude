/*
const mongoose = require("mongoose");
module.exports = () => {
  function connect() {
    mongoose.connect('localhost:27017', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./user.js'); // user.js는 나중에 만듭니다.
};
 */

// 1. mongoose 모듈 가져오기
const mongoose = require("mongoose");

// 1-1) Authentication Setting
const user_name = "localhost_express";
const passWd = "tiger";
const my_cluster_url = "localhost";


main().catch(err => console.log('MongoDB Err - ', err));

async function main(){
  await mongoose.connect(
    "mongodb://" + user_name + ":" + passWd + "@" + my_cluster_url + ":27017/admin", { dbName: "express_mongo" }
  );
  console.log('Connected');
}
//mongoose.connect('아이디:비밀번호@주소:포트/admin', { dbName: '데이터베이스' }, function(err) {});


// 6. Schema 생성. (혹시 스키마에 대한 개념이 없다면, 입력될 데이터의 타입이 정의된 DB 설계도 라고 생각하면 됩니다.)
const student = mongoose.Schema({
  name: "string",
  address: "string",
  age: "number",
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
var Student = mongoose.model("Schema", student);

// 8. Student 객체를 new 로 생성해서 값을 입력
var newStudent = new Student({
  name: "Hong Gil Dong",
  address: "서울시 강남구 논현동",
  age: "22",
});

// 9. 데이터 저장
const save_one = function(){
  newStudent.save(function (err, data) {
    if (err) {
      console.log('MONGODB SAVE_ONE ERR - ', err);
    } else {
      console.log("Done save_one func!");
    }
  });
}

// 10. Student 레퍼런스 전체 데이터 가져오기
const show_list = function(){
  Student.find(function (err, students) {
    console.log("--- Read all ---");
    if (err){
      console.log('MONGODB SHOW_LIST ERR - ', err);
    } else {
      console.log(students);
      console.log('Done show_list func!');
    }
  });
}

// 11. 특정 아이디값 가져오기
const show_one = function(){
  Student.findOne({ _id: "63bcc5db42eed0fd9f98c07b" }, function (err, student) {
    console.log("--- Read one ---");
    if (err) {
      console.log('MONGODB SHOW_ONE ERR - ', err);
    } else {
      console.log(student);
      console.log('Done show_one func!');
    }
  });
}

// 12. 특정아이디 수정하기
const update_one = function(){
  Student.findById(
    { _id: "63bcc5db42eed0fd9f98c07b" },
    function (err, student) {
      console.log("--- Update(PUT) ---");
      if (err) {
        console.log('MONGODB UPDATE_ONE ERR - ', err);
      } else {
        student.name = "--modified--";
        student.save(function (err, modified_student) {
          if (err) {
            console.log(err);
          } else {
            console.log(modified_student);
            console.log('Done update_one func!');
          }
        });
      }
    }
  );
}

// 13. 삭제
const delete_one = function(){
  Student.deleteOne(
    { _id: "585b7c4371110029b0f584a2" },
    function (err, output) {
      console.log("--- Delete ---");
      if (err) {
        console.log(err);
      }

      /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
          어떤 과정을 반복적으로 수행 하여도 결과가 동일하다. 삭제한 데이터를 다시 삭제하더라도, 존재하지 않는 데이터를 제거요청 하더라도 오류가 아니기 때문에
          이부분에 대한 처리는 필요없다. 그냥 삭제 된것으로 처리
      */
      console.log("--- deleted ---");
    }
  );
}
// show_list(); T

/*
async function main(){

// Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
// See https://docs.mongodb.com/ecosystem/drivers/node/ for more details

    const user_name = 'localhost_express';
    const passWd = 'tiger';
    const my_cluster_url = 'localhost';
    
    const uri = "mongodb+srv://" + user_name + ":" + passWd + "@" + my_cluster_url + "/sample_airbnb?retryWrites=true&w=majority";

console.log('passing mongo');
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);
*/