$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});