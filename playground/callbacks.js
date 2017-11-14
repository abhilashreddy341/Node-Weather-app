var getUser = (id,callback)=>{
  var user = {
    id:id,
    name: " Abhilash"  };
  setTimeout(()=>{callback(user);},3000);

};

getUser(19,(userObject)=>{
  console.log(userObject);
})
