
setTimeout(()=>{
    console.log("hello");
},2000);

async function name() {
    console.log("hello");
}

async function getData() {
  return "New Data";
}

(async function run() {
  const data = await getData();
  console.log(data);
  
})();