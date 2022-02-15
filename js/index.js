console.log("Your index.js file is loaded correctly!");

$("#logoAndy").click(function(){
    alert("ANDY's LOGO! It is a mash of my name. One day, I would like it to animate by starting with ANDY and then merging into the logo.");
  });

  $(".skillsButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".heading").offset().top},
        'slow');
});

$(".workButton").click(function() {
  $('html,body').animate({
      scrollTop: $(".myWork").offset().top},
      'slow');
});