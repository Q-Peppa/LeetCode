// class ClassProto {
//   constructor() {
//     this.init()
//   }
//
//   init() {
//     document.querySelector("button").addEventListener("click", this.debonce(function () {
//       console.log(`click`)
//     }, 3000, true))
//   }
//
//   debonce(fn, wait = 3000, immediate) {
//     let timer, startTimeStamp = 0;
//     let context, args;
//
//     let run = (timerInterval) => {
//       timer = setTimeout(() => {
//         let now = (new Date()).getTime();
//         let interval = now - startTimeStamp
//         if (interval < timerInterval) { // the timer start time has been reset，so the interval is less than timerInterval
//           startTimeStamp = now;
//           run(wait - interval);  // reset timer for left time
//         } else {
//           if (!immediate) {
//             fn.apply(context, args);
//           }
//           clearTimeout(timer);
//           timer = null;
//         }
//
//       }, timerInterval);
//     }
//     return function(){
//       context=this;
//       args=arguments;
//       let now = (new Date()).getTime();
//       startTimeStamp=now; // set timer start time
//
//       if(!timer){
//         if(immediate) {
//           fn.apply(context,args);
//         }
//         run(wait);    // last timer alreay executed, set a new timer
//       }
//     }
//
//   }
// }
//
// new ClassProto()

for (var i=0;i<10;i++){
  setTimeout(()=>{
    console.log(i)
  },1000)
}
