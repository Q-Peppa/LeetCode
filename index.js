class MyClass {
  x = 10;
  someCallback() {
    console.log(this.x); // Prints 'undefined', not 10
    this.someMethod(); // Throws error "this.method is not a function"
  }
   someMethod() {
    console.log(`someMethod`)
  }
}

let obj = new MyClass();
// obj.someCallback()
setTimeout(obj.someCallback.bind(new MyClass()), 10);
// 1.协助后端修复问卷无法删除的问题
// 2.

