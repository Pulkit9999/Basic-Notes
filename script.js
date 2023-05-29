/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/

let container = document.querySelector('.container');

function generateCard(){
    let notes = document.createElement('div');
    notes.classList.add('spacer');
    let textarea = document.getElementById('text-area');
    notes.innerHTML =`<div class="card" style="width: 18rem;">
   
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">${textarea.value}</p>
      <a href="#" class=" del btn btn-primary" >Delete</a>
    </div>
  </div>`

  

  container.append(notes);
  
  
  notes.querySelector('.del').addEventListener('click',function(){
    notes.remove();
    textarea.value="";
});
  
}
document.getElementById('btn').addEventListener('click', function(){
    let textarea = document.getElementById('text-area');  
    if(textarea.value ){
      generateCard();
    }
    else{
      alert("Text Area cannot be empty...please enter something");
    }
    
});











