document.write('<scr'+'ipt type="text/javascript" src="/templates/home/scripts/js/jquery.cookie.js"></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="/templates/home/scripts/js/jquery.easyListSplitter.js"></scr'+'ipt>');

$(document).ready(function () {
  
  var minFont = 9;
  var maxFont = 20;
  var origFont = parseFloat($("body").css("font-size"), 10);
  var cookieFont = $.cookie("fontSize");
  if (cookieFont) {
    var curFont = $.cookie("fontSize"); 
	$(".content").css("font-size", curFont+"px");
  } else {
	var curFont = origFont;
  };
  $(".dec").click(function() { //decrease
	if (curFont > minFont) {
      $(".content").css("font-size", (curFont-1)+"px");
	  curFont = parseFloat($(".content").css("font-size"), 10);
	  $.cookie("fontSize", curFont);
	  Cufon.refresh("#submenu");
	};
  });
  $(".def").click(function() { //default
    $(".content").css("font-size", origFont+"px");
	curFont = parseFloat($(".content").css("font-size"), 10);
	$.cookie("fontSize", null);
	Cufon.refresh("#submenu");
  });
  $(".inc").click(function() { //increase
	if (curFont < maxFont) {
      $(".content").css("font-size", (curFont+1)+"px");
	  curFont = parseFloat($(".content").css("font-size"), 10);
	  $.cookie("fontSize", curFont);
	  Cufon.refresh("#submenu");
	};
  });
  
  $("#menu ul li.parent").each(function() {
    $(this).find("ul li a").last().css("background", "none");
  });
  $("#menu ul li.parent").hover(function(){
    $(this).addClass("open");
    $("ul", this).show();
  }, function(){
	$(this).removeClass("open");
    $("ul", this).slideUp(250);
  });
  
  /*$(".menu-footer").easyListSplitter({ 
    colNumber: 5
  });*/
  
  var active_color = '#09090e';
  var inactive_color = '#666666';
  $("input.inputbox").css("color", inactive_color);
  var default_values = new Array();
  $("input.inputbox").focus(function() {
    if (!default_values[this.id]) {
      default_values[this.id] = this.value;
    }
    if (this.value == default_values[this.id]) {
      this.value = '';
      this.style.color = active_color;
    }
    $(this).blur(function() {
      if (this.value == '') {
        this.style.color = inactive_color;
        this.value = default_values[this.id];
      }
    });
  });

});