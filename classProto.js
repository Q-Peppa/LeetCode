"use strict";
class A{

}
A.prototype = null
console.log(Reflect.getOwnPropertyDescriptor(A,"prototype"))
function f() {

}
console.log(Reflect.getOwnPropertyDescriptor(f,"prototype"))
