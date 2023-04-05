//display current day and time at top of the page
function displayCurrentDateAndTimeAtTop(){
  $("#currentDay").text(dayjs().format("MMM D, YYYY at hh:mm:ss a"));
}

displayCurrentDateAndTimeAtTop();




//function to open bootstrap modal
$(function() {
  $("# openButtonId").click(function() {
    $("#id at very first modal element").modal("show");
  });
});



//Save the user inputs to local storage

$(function() {
  //select the element with the class .btn.saveBtn.col-2.col-md-1"
  var modalSubmitButton = $("id here");
  modalSubmitButton.click(function() {
   
    var projectName = $(this).siblings(".description").val();
    var projectType = $(this).parent().attr("id");
    var dueDate = $(this).parent().attr("id");
    

    storeToLocal({
      projectName: projectName,
      projectType: projectType,
      dueDate: dueDate
    });
    
  });
});


 //retrieve from local storage, goes through every hour looking for stored data and retrieves it if there. if there is a saved task then it sets the textarea elemnt to the saved value
 function retrieveFromLocal() {
  var projectName = localStorage.getItem(projectName;
    var projectName = localStorage.getItem(projectName;
      var projectName = localStorage.getItem(projectName;

    if (savedTaskText !== null) {
      $("#hour-" + hour + " .description").val(savedTaskText);
   

    
    }
  }
}

retrieveFromLocal();























