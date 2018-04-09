$(document).ready(function() {
    $(".navbar-inverse .navbar-nav>li>a").mouseenter(function(){  
    	$(".navbar-inverse .navbar-nav>li>a").css("color", "green");
 });
    $(".navbar-inverse .navbar-nav>li>a").mouseenter(function(){  
    	$(".navbar-inverse .navbar-nav>li>a").css("font-size", "30px");
 });
     $(".navbar-inverse .navbar-nav>li>a").mouseleave(function(){  
    	$(".navbar-inverse .navbar-nav>li>a").css("color", "#195084");
 });
    $(".navbar-inverse .navbar-nav>li>a").mouseleave(function(){  
    	$(".navbar-inverse .navbar-nav>li>a").css("font-size", "20px");
 });
});