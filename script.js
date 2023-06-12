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
    //console.log(JSON.stringify(notesObj));
    addTxt.value="";
    //console.log(notesObj);
});