console.log('first satement');

setTimeout(()=>{
  console.log('Async called')
},2000);

setTimeout(()=>{
  console.log('Async2 called')
},0);

console.log('second statement');
