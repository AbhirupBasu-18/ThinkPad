//load notes
showNotes();

//if user add a notes,add it to localStorage

let addBtn=document.getElementById('addbtn');
addBtn.addEventListener('click',()=>{
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(addTxt.value.trim()==""){
        alert("Enter some text");
        return;
    }
    if(notes==null){
        notesObj=[];
        //console.log(notesObj);
    }
    else{
        notesObj=JSON.parse(notes);
        //console.log(notesObj);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    showNotes();
});

//show notes

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
        //console.log(notesObj);
    }
    else{
        notesObj=JSON.parse(notes);
        //console.log(notesObj);
    }
    let html="";
    Array.from(notesObj).forEach((element,index)=>{
        html+=`<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Notes</h5>
            <div class="form-group">
                <textarea class="form-control" id="card-Txt${index+1}" rows="3">${element}</textarea>
              </div>
              <div class="k">
                <button class="btn btn-primary" id="delbtn${index+1}">Delete Note</button>
                <button class="btn btn-warning" id="savebtn${index+1}">Save</button>
           </div>
        </div>
      </div>`;
    });
  let notesElem=document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
      } else {
        notesElem.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}

//Function to delete node
function deleteNote(index){
    
}