const inputBox = document.getElementById("i1");
const listConatainer = document.getElementById("licon");

function addTask(){
    if(inputBox.value === '')
        alert("You must write something");
    else
    {
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listConatainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        
        // Add click event to toggle checked class
        li.addEventListener("click", function(e) {
            if (e.target !== span) { // Don't toggle if clicking on delete button
                li.classList.toggle("checked");
            }
        });
        
        // Add click event to delete button
        span.addEventListener("click", function() {
            li.remove();
        });
    }
    inputBox.value = "";
}