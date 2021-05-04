console.log("Notes App");
showNotes();
// searchTxt()

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
    // e.preventDefault();
    let title = document.getElementById("title");
    let titleVal = title.value;
    // console.log(titleVal)
    let addTxt = document.getElementById("addTxt");
    // console.log(addTxt)
    let addTxtVal = addTxt.value;
    // console.log(addTxtVal);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)
    }
    noteObj.push(addTxtVal)
    localStorage.setItem("notes", JSON.stringify(noteObj))
    addTxt.value = ""
    title.value = ""
    showNotes()
    console.log(notes)

    console.log("Button Clicked")
})

function showNotes() {
    console.log("Amit")
    let notes = localStorage.getItem("notes");
    // console.log(notes)
    let title = document.getElementById("title");
    // title.addEventListener("input",()=>{
    //     console.log("input event fired")
    // })
    let titleVal = title.value;
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)
    }
    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
                    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          
                            <p class="card-text"> ${element}</p>
                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;

    });
    // console.log("Amit")
    let notesElem = document.getElementById("notes");
    // console.log(notesElem)
    if (noteObj != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = `
        <hr>
        <button class="btn btn-light" >Nothing to Show, Please add a Note</button>`
    }


}

function deleteNote(index){
    
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)
    }

    noteObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes();

}
// Fuck Search Event

let search = document.getElementById("searchTxt");
search.addEventListener("input", (e)=>{
    // e.preventDefault()
    let searchVal = search.value
    console.log("Input fired",searchVal)
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(searchVal)){
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }

    })
})

