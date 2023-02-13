
let data = {
  name: 123,
  key: 1,
  children: [{
    name: 123,
    key: 2,
  }]
}



let result = {};
let findChild = (data1, key,father) => {
  if (!data1) return;
  if (data1.key === key) {
    result.self = data1;
    result.father = father;
    return;
  }
  if (data1.children) {
    data1.children.forEach(item => {
      findChild(item, key,data1);
    })
  }

}
let ans = findChild(data, 2);
console.log('--ans--', result)