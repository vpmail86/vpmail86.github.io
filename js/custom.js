$(document).ready(function() {

  $("#column-1 .nav-menu a").click(function(){
    $("#column-3").removeClass("showme")
    $("#column-2").addClass("showme");
  }); 

  $(".tab-content ul li a").click(function(){
    $("#column-3").addClass("showme");
   
  });


  $(".bg-team .nav-menu a").click(function(){
    $("#column-3").addClass("showme")
  });

// Javascript to enable link to tab
var url = document.location.toString();


if (url.match('#')) {
    $('.nav-menu a[href=#'+url.split('#')[1]+']').tab('show') ;
} 

// Change hash for page-reload
$('.nav-menu a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
 $("#column-3.team").addClass("showme")
})

  $("#contact-form").validate();
  $('.hidethisdiv').hide();
  $('.hidethisdiv:first').show();


  $('.category').show();

  
   $(".logo-holder").delay(300).addClass("fadeIn");

  $("#box-content-black").removeClass("stretchRight").delay(600).queue(function(next){
  $(this).addClass("stretchRight");
  next();
  });
 

  $("#column-2").hover(
  function() {
  $("#column-2").addClass("showme");
  },
  function() {
  // $("#column-2").removeClass("showme");
  // $("#column-3").removeClass("showme")
  });

  $("#column-3").hover(
  function() {
  $("#column-2").addClass("showme");
  $("#column-3").addClass("showme")
  },

  function() {
  $("#column-2 ul li a").removeClass("active");
  });




  $("#column-2").hover(
  function() {
  $("#column-2").addClass("showme");
  },
  function() {
  // $("#column-2").removeClass("showme");
  // $("#column-3").removeClass("showme")
  });


//     $("#three-col-outer.updated #column-1").hover(
// function() {   
// },
// function() {
// $("#three-col-outer.updated #column-2").removeClass("showme"); 
// });


});

$('#column-1 ul li a').click(function(){
  
 $("#column-2 ul li").removeClass("active");
});


if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      $("#column-2").addClass("showme")
  } else {
      // No hash found
  }


$('.btnNext').click(function(){
$('.nav-menu > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme"); return false;
});
$('.btnPrevious').click(function(){
$('.nav-menu > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");    return false;
});

$('.btnNext-1').click(function(){
$('.nav-menu-1 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-1').click(function(){
$('.nav-menu-1 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");  return false;
});

$('.btnNext-2').click(function(){
$('.nav-menu-2 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-2').click(function(){
$('.nav-menu-2 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});

$('.btnNext-3').click(function(){
$('.nav-menu-3 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-3').click(function(){
$('.nav-menu-3 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});

$('.btnNext-4').click(function(){
$('.nav-menu-4 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-4').click(function(){
$('.nav-menu-4 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});

$('.btnNext-5').click(function(){
$('.nav-menu-5 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-5').click(function(){
$('.nav-menu-5 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});

$('.btnNext-6').click(function(){
$('.nav-menu-6 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-6').click(function(){
$('.nav-menu-6 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});

$('.btnNext-7').click(function(){
$('.nav-menu-7 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-7').click(function(){
$('.nav-menu-7 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});
$('.btnNext-8').click(function(){
$('.nav-menu-8 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-8').click(function(){
$('.nav-menu-8 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});
$('.btnNext-9').click(function(){
$('.nav-menu-9 > .active').next('li').find('a').trigger('click');    $("#column-2").addClass("showme");return false;
});
$('.btnPrevious-9').click(function(){
$('.nav-menu-9 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});
 $('.btnPrevious-10').click(function(){
$('.nav-menu-10 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});
$('.btnPrevious-10').click(function(){
$('.nav-menu-10 > .active').prev('li').find('a').trigger('click'); $("#column-2").addClass("showme");   return false;
});