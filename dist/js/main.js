//Mobile nav button

var toggleBtn = document.getElementById("togglediv");
var mainnav = document.getElementById('mainnav');
toggleBtn.addEventListener("click", function(){
	toggleBtn.classList.toggle("active");
	console.log('javascript');
	if(mainnav.style.bottom ==='' || mainnav.style.bottom ==='100%'){
		mainnav.style.bottom="0";
	}else{
		mainnav.style.bottom = "100%";
	}
});

//Portfolio Gallery

var workItems = [
	{thumbnailID: "linkUrec",
	itemID:"urec"
	},
	{thumbnailID: "linkStore",
	itemID:"onlineStore"
	},
	{thumbnailID: "linkCity",
	itemID:"cityFactApp"
	},
	{thumbnailID: "linkJS",
	itemID:"jsPractice"
	},
	{thumbnailID: "linkTodo",
	itemID:"todoAppMobile"
	},
	{thumbnailID: "linkInvestecs",
	itemID:"investecsWebsite"
	},
	{thumbnailID: "link8188",
	itemID:"yonge8188Website"
	}
];

var allWorks = document.getElementsByClassName("work-item");
var allThumbnails = document.getElementsByClassName("thumbnail-item");

workItems.forEach(function(item){
		var thumbnail = document.getElementById(item.thumbnailID);
		var selectWork = document.getElementById(item.itemID);

		thumbnail.addEventListener("click", function(){
			for(i=0;i<allWorks.length;i++){
				allWorks[i].style.height = "0";
			}
			selectWork.style.height = "100%";
			for(i=0;i<allThumbnails.length;i++){
				allThumbnails[i].classList.remove("active-item");
			}
			thumbnail.classList.add("active-item");		
		})
	}
);