//load notes
showNotes();

//if user add a notes,add it to localStorage

let addBtn = document.getElementById('addbtn');
addBtn.addEventListener('click', () => {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (addTxt.value.trim() == "") {
    alert("Enter some text");
    return;
  }
  if (notes == null) {
    notesObj = [];
    //console.log(notesObj);
  } else {
    notesObj = JSON.parse(notes);
    //console.log(notesObj);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

//show notes

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
    //console.log(notesObj);
  } else {
    notesObj = JSON.parse(notes);
    //console.log(notesObj);
  }
  let html = "";
  Array.from(notesObj).forEach((element, index) => {
    html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
            <div class="form-group">
                <textarea class="form-control hagga" id="card-Txt${index+1}" rows="3">${element}</textarea>
              </div>
              <div class="k">
                <button class="btn btn-primary" id="delbtn${index}" onclick="deleteNote(${index})">Delete Note</button>
                <button class="btn btn-warning" id="savebtn${index}" onclick="saveNote(${index})">Save</button>
           </div>
        </div>
      </div>`;
  });
  let notesElem = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

//Function to delete note
function deleteNote(index) {
  //console.log(index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  //console.log(notesObj);
  notesObj.splice(index, 1);
  //console.log(notesObj);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  showNotes();
}

//Function to save note
function saveNote(index) {
  //console.log(index); 
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj[index]=document.getElementById(`card-Txt${index+1}`).value;
  localStorage.setItem("notes",JSON.stringify(notesObj));
  showNotes();
}

//search
let i=0;
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    let inputVal = search.value.toLowerCase();
     //console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("textarea")[0].value.toLowerCase();
        //console.log(element.getElementsByTagName("textarea")[0]);
        //console.log('note value!', cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
  });
});