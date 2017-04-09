$("#spa-btn").click(function(){
	$("#spa").slideToggle();
});
$("#div-btn").click(function(){
	if($(".page-header").hasClass("d1")){
		$(".page-header").removeClass("d1");
	}else{
		$(".page-header").addClass("d1");
	}
	if($(".panel-default").hasClass("d1")){
		$(".panel-default").removeClass("d1");
	}else{
		$(".panel-default").addClass("d1");
	}
	if($(".panel-heading").hasClass("d2")){
		$(".panel-heading").removeClass("d2");
	}else{
		$(".panel-heading").addClass("d2");
	}
	if($(".panel-body").hasClass("d3")){
		$(".panel-body").removeClass("d3");
	}else{
		$(".panel-body").addClass("d3");
	}
	if($(".text-center").hasClass("d4")){
		$(".text-center").removeClass("d4");
	}else{
		$(".text-center").addClass("d4");
	}
});
$("#diag-btn").click(function(){
	$("#diag").slideToggle();
});
$("#code-btn").click(function(){
	$.get({url: "/github/index.js", cache: "false", dataType: "text", success: function( data ) {
		var safedata = data.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
		$("#code-snippet").html(safedata);
		$("#code-container").slideToggle();
		$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	}});
});