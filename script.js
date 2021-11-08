// deal with date and time
const date=new Date();
const datestring=date.toLocaleDateString();
const hour=date.getHours();
$("#currentday").text(datestring);
$("#hour"+hour).addClass("present");