<script type="text/javascript">
  	$(document).ready(function(){
    	$("#home2, #home1").click(function(){
       		$(".project, .resume, .contact, .skills").hide();
       		$('.nav.navbar-nav > li').removeClass('active');
        	// $(".home").show();
        	$(".home").fadeIn();
        	$("#home2").addClass('active');
    	});
    	$(".skills, .project, .resume, .contact, #temp").hide();
    	$("#project").click(function(){
        	$(".home, .resume, .contact, .skills").hide();
        	// $(".project").show();
        	$(".project").fadeIn();
    	});
    	$("#skills").click(function(){
        	$(".home, .project, .resume, .contact").hide();
        	// $(".skills").show();
        	$(".skills").fadeIn();
    	});

    	$("#resume").click(function(){
       		$(".project, .contact, .home, .skills").hide();
        	// $(".resume").show();
        	$(".resume").fadeIn();
        	$(".resume").addClass('active');
    	});
    	$("#contact").click(function(){
       		$(".project, .resume, .home, .skills").hide();
        	// $(".contact").show();
        	$(".contact").fadeIn();
    	});
		$('.nav.navbar-nav > li').hover(function(){
        $('.nav.navbar-nav > li').removeClass('active');
        $(this).addClass('active');}, function(){
        	$(this).removeClass('active');
   		});
	});
  </script>
  <script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-71736143-1', 'auto');
	  ga('send', 'pageview');
</script>
