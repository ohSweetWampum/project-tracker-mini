//display current day and time at top of the page
function displayCurrentDateAndTimeAtTop(){
  $("#currentDay").text(dayjs().format("MMM D, YYYY at hh:mm:ss a"));
}

displayCurrentDateAndTimeAtTop();




//function to open bootstrap modal




//Save the user inputs to local storage

$(function() {
  //select the element with the class .btn.saveBtn.col-2.col-md-1"
  var submitButton = $(".btn.submitBtn.col-2.col-md-1");
  submitButton.click(function() {
   
    var taskText = $(this).siblings(".description").val();
    var taskTime = $(this).parent().attr("id");

    storeToLocal({
      taskText: taskText,
      taskTime: taskTime
    });
    
  });
});

























