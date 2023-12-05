$(document).ready(function(){



  var realTime = dayjs().format('MMM D, YYYY h:mm:ss a');
  $('#currentDay').text(realTime);

function updateBlock(){

  var time= dayjs().hour()

  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
    if (blockHour < time) {
      $(this).addClass('past');
      
    } else if (blockHour === time) {
      $(this).addClass('present');
      $(this).removeClass('past');
    } else {
      $(this).addClass('future');
      $(this).removeClass('past');
      $(this).removeClass('present');
    }
    
  });
}

updateBlock()
setInterval(updateBlock, 15000)



$('.saveBtn').on("click" ,function () {
  var key = $(this).parent().attr('id')
  var value = $(this).siblings('.description').val()
 
  
  localStorage.setItem(key,value)
});

$("#hour-9 .description").val(localStorage.getItem('hour-9'))
$("#hour-10 .description").val(localStorage.getItem('hour-10'))
$("#hour-11 .description").val(localStorage.getItem('hour-11'))
$("#hour-12 .description").val(localStorage.getItem('hour-12'))
$("#hour-13 .description").val(localStorage.getItem('hour-13'))
$("#hour-14 .description").val(localStorage.getItem('hour-14'))
$("#hour-15 .description").val(localStorage.getItem('hour-15'))
$("#hour-16 .description").val(localStorage.getItem('hour-16'))
$("#hour-17 .description").val(localStorage.getItem('hour-17'))


})







