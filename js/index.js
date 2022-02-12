console.log("Your index.js file is loaded correctly!");

$("#logoAndy").click(function(){
    alert("ANDY's LOGO!");
  });

  $(".skillsButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".heading").offset().top},
        'slow');
});