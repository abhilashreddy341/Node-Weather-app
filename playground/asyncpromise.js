asyncProm = (a,b)=>{
  return new Promise((resolve,response)=>{
    setTimeout(()=>{
      if(typeof a==='number'&&typeof b==='number'){
        return resolve(a+b);
      }
      else {
        return reject('a or b is not a number');
      }
    },2000);
});
};

asyncProm(10,12).then((c)=>{
  console.log(`sum is ${c}`);
  return asyncProm(c,10);
},(d)=>{
  console.log(d);
}).then((e)=>{
  console.log(`final result is ${e}`);
},(f)=>{
  console.log(f);
});
