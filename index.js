let reviews = [{text: "I loved this place so much, I come back at least twice a year for a monthly retreat", author: "Janice Blackwood"}, {text: "If you are feeling like life is bringing you down, and you have to get away from it all, I highly recommend Serenity Health", author: "Adam Ren"}, {text: "I did a day trip to Serenity Health and I can't wait to come back. I will definitely try the week long retreat next time.", author: "Henry Williams"}];

let count = 0;

$(document).ready(function(){
    $("#reviewbody").text(reviews[0].text);
    $("#reviewauthor").text(reviews[0].author);
    count++
})

$("#forwardBtn").click(function () {
    
    $("#reviewbody").text(reviews[count].text);
    $("#reviewauthor").text(reviews[count].author);
    count++;
    if(count > reviews.length-1){
        count = 0;
    }
});

$(".search input").click(function(){
    $(".search input").css("width", "250px");
   
})

$("#spa").mouseover(function(){
   
    $("#spa i").css("display", "none");
    $("#spa h2").css("display", "block");
    $("#spa p").css("display", "block");

});

$("#spa").mouseout(function(){
    
    $("#spa i").css("display", "block");
    $("#spa h2").css("display", "none");
    $("#spa p").css("display", "none");
});

$("#med").mouseover(function(){
  
    $("#med i").css("display", "none");
    $("#med h2").css("display", "block");
    $("#med p").css("display", "block");
});

$("#med").mouseout(function(){
    
    $("#med i").css("display", "block");
    $("#med h2").css("display", "none");
    $("#med p").css("display", "none");
});

$("#gym").mouseover(function(){
   
    $("#gym i").css("display", "none");
    $("#gym h2").css("display", "block");
    $("#gym p").css("display", "block");
});

$("#gym").mouseout(function(){
    
    $("#gym i").css("display", "block");
    $("#gym h2").css("display", "none");
    $("#gym p").css("display", "none");
});

