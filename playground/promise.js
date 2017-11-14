var somePromise= new Promise((resolve,reject)=>{
  setTimeout(()=>{
  resolve('hey it is success');
  reject('hey its rejected');}
  ,2500);
});

somePromise.then((message)=>{
  console.log(message);},(erroemsg)=>{
    console.log(errormsg);

});
