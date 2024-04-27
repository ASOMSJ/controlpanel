import "./assets/sass/style.scss";
import "normalize.css/normalize.css"
console.log("hello from webpack");
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
setTimeout(() => {
    alert('danger!');
}, 5000);

var student=require("./studentname");
var student1=new student("abdulmalek","saeed");