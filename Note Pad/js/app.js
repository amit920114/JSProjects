console.log("First Project");
showNotes();

let addBtn =  document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(addTxt.value)
    // console.log("amit")
    showNotes();
})

// console.log(title)
 function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    // console.log(notes)
 
 let html = "";
 notesObj.forEach(function(element, index){
     html+= `
     <div class="card my-2 mx-2" style="width: 18rem;">
     
     <div class="card-body">
       <h5 class="card-title">Note ${index + 1}</h5>
       <p class="card-text">${element}</p>
    
     </div>
   </div>

             `
     
 });
 let notesElm = document.getElementById("notes");
 if(notesObj.length != 0){
     notesElm.innerHTML = html;
 } else{
     notesElm.innerText = ` Nothing to show`
 }
}