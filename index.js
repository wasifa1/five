//Theme Change:
var theme = document.getElementById("theme");
theme.addEventListener("click", function(){
    var num = "ABCDEF"; //this is for only pastel colors
    var colorCode = "#";
    for(let i = 0; i < 6; i++){
        colorCode += num[Math.floor(Math.random() * num.length)];
    }
    

    document.body.style.backgroundColor = colorCode;
});

//Current Date:
var currentDate = new Date();

var format = currentDate.toLocaleDateString("en-US",
    {
        weekday : 'short',
        month : 'short',
        day : 'numeric',
        year : 'numeric' 
    });

document.getElementById("current-date").innerHTML= format.replace(" ", "<br>"); 

//Task-Completed Interactions:

var completedBtns = document.querySelectorAll(".completed-btn");
var taskCountElm = document.getElementById("task-count");
var completedCountElm = document.getElementById("completed-count");
var activityLog =   document.getElementById("activity-log");
var clearHistoryBtn = document.getElementById("clear-history-btn");

var taskCount = parseInt(taskCountElm.innerText);
var completedCount = parseInt(completedCountElm.innerText);

//Clear History :
clearHistoryBtn.addEventListener("click", function(){
    activityLog.innerHTML = " ";
});

for(let i = 0; i < completedBtns.length ;i++){
    completedBtns[i].addEventListener("click", function(event){
        let clickedBtn = event.target;
        clickedBtn.disabled = true;
        clickedBtn.style.opacity = "0.6";
        clickedBtn.parentElement.style.backgroundColor = "Grey";

       

        let taskCard = clickedBtn.parentElement.parentElement.parentElement;
        let taskTitle = taskCard.querySelector(".task-title").innerText;
        let completedTime = new Date().toLocaleTimeString();

        let entry = document.createElement("p");
        entry.innerText = "You have completed the task - " +taskTitle + " at " + completedTime;
        activityLog.appendChild(entry);

        

        entry.classList.add("bg-blue-50", "p-2", "rounded-lg", "m-2", "text-sm" , "text-slate-700")

        taskCount -= 1;
        taskCountElm.innerText = taskCount;

        completedCount +=1;
        completedCountElm.innerText = completedCount;

        alert("Board Updated Successfully");
        
        //Last Alert -> when all tasks completed:
        if(taskCount === 0){
            alert("CONGRATS!!! You have completed all the remaining tasks.")
        }
        
    });
}

//Discover ->  blog.html :
let discoverBlog = document.getElementById("discover-blog")
    .addEventListener("click", function(){
        window.location.href = "blog.html";  
});

