$("#togglediv").click(function(){
	$("#togglediv").toggleClass("active");
	$("#mainnav").slideToggle();
});

imageGallery("#linkStore", "#onlineStore");
imageGallery("#linkCity", "#cityFactApp");
imageGallery("#linkJS", "#jsPractice");
imageGallery("#linkTodo", "#todoAppMobile");
imageGallery("#linkInvestecs", "#investecsWebsite");
imageGallery("#link8188", "#yonge8188Website");
imageGallery("#linkPortfolio", "#portfolioWebsite");


function imageGallery(thumbnailID, itemID){
	$(thumbnailID).click(function(){
		$(".work-item").hide();
		$(itemID).show();
		$(".thumbnail-item").removeClass("active-item");
		$(thumbnailID).addClass("active-item");
	})
}