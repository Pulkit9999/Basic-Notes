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
const btn = document.getElementById('btn')
const textarea = document.querySelector('#text-area')

let isEdited = false;

function generateCard() {

  const notes = `<div class="card" style="width: 18rem;">
   
    <div class="card-body">
      <h5 class="card-title">Card-Title</h5>
      <p class="card-text">${textarea.value}</p>
      <a href="#" class=" del btn btn-danger" >Delete</a>
      <a href="#" class=" edit btn btn-primary" >Edit</a>
    </div>
  </div>`

  container.innerHTML +=notes

  textarea.value = ''

}

function delHandler(e) {
  const note = e.target.parentElement.parentElement
  console.log(note)
  note.remove();
  textarea.value = "";
}

function editHandler(e) {

  const para = e.target.previousElementSibling.previousElementSibling

  btn.value = 'Edit'
  isEdited = true
  textarea.value = para.textContent;


}

// Event Delegation  or bubbling and capturing
container.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target.classList.contains('btn-danger')) {
    delHandler(e)
  }
  if (e.target.classList.contains('btn-primary')) {
    editHandler(e)
  }
})

btn.addEventListener('click', function () {
  let textarea = document.getElementById('text-area');

  let para = document.querySelector('.card-text')
  if (!isEdited) {
    // If we are not editing run add function
    generateCard()
  }
  else if (isEdited) {
    // if we are editing run edit
    para.textContent = textarea.value;
    btn.value = 'Add'
    isEdited = false
  } else {

    alert('write something')

  }

});











