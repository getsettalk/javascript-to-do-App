// to do app 11/2021
/* It's application made by sujeet Kumar Sharma */
 /*dont remove this line*/
function con(str){
  console.log(str);
}
//localStorage.clear();
//get all elements
// this twotype variable for insert and edit if null mean insert
var twotype="insrt"; //default is insert value 
var btn = document.getElementById("plus");
var msg = document.getElementById("msg");
btn.addEventListener('click', function (){
  addData();
});
function addData(){
  var data = document.getElementById("item").value;
  if(data !==""){
    msg.innerHTML="";
    if (data.length <58) {
      msg.innerHTML="";
    //  console.log(twotype);
      if (twotype =="insrt") {
       let arr=JSON.parse(localStorage.getItem('todoApp'));
       
        if(arr ==null){
          let dataname =[data];
          localStorage.setItem('todoApp',JSON.stringify(dataname));
        }else{
          arr.push(data);
         localStorage.setItem('todoApp',JSON.stringify(arr));
        }
        document.getElementById("item").value=''; 
         window.navigator.vibrate(400);
        msg.style="color:green";
        msg.innerHTML="Data saved..";
        timeout();
        showData();
      }else{
        //edit 
        let arr=JSON.parse(localStorage.getItem('todoApp'));
        arr[twotype] = data;
        localStorage.setItem('todoApp',JSON.stringify(arr));
        btn.innerHTML="<i class='fas fa-plus-circle'></i>";
        msg.style="color:#8327ef";
        msg.innerHTML="Data updated...";
        twotype="insrt";//again set value
        timeout();
        document.getElementById("item").value=''; 
         window.navigator.vibrate(400);
        showData();
      }
    }else{
     window.navigator.vibrate(300);
     msg.style="color:red";
    msg.innerHTML=" Character Length Must be less than 52 ";
    timeout();
    }
  }else{
    // for vibration
    window.navigator.vibrate(300);
    msg.style="color:red";
    msg.innerHTML="Don't leave Empty Field... ";
    timeout();
  }
  
}
showData();
function showData(){
  let arr=JSON.parse(localStorage.getItem('todoApp'));
    if (arr !==null) {
      let html='<h3>Added product Name :</h3>';
      html = html+'<ul>';
      let srn=1;
      for(let key in arr){
       html= html+`<li><span class="num">${srn}</span>${arr[key]} <span class="action"> <span class="dlt" onclick="deleteData(${key})"><i class="fas fa-trash-alt"></i></span>
       <span class="eid" onclick="editData(${key})"><i class="far fa-edit"></i></span>
        </span></li>`;
        srn++;
      }
      html = html+'</ul>';
      document.getElementById("root").innerHTML=html;
    } else {
      
    }
}
function editData(rid){
  //twotype variable me yaha se rid ke dwra id dala gya hai
  twotype=rid;
  let arr=JSON.parse(localStorage.getItem('todoApp'));
document.getElementById("item").value=arr[rid]; 
msg.innerHTML="Data Loaded for edit..."
btn.innerHTML="<i class='fas fa-pencil-alt'></i>";
window.navigator.vibrate(200);
msg.style="font-weight:579";
timeout();
}
function deleteData(rid){
  let arr=JSON.parse(localStorage.getItem('todoApp'));
  if(confirm("Are You sure... delete this")){
  arr.splice(rid,1);
  
  msg.style="font-weight:600";
  msg.innerHTML="Deleted..."
  }
    localStorage.setItem('todoApp',JSON.stringify(arr));
    document.getElementById("item").value=''; 
  showData();

timeout();
}
function timeout(){
  //clear saved message
setTimeout(function(){
  msg.innerHTML="";
},2500);
}
