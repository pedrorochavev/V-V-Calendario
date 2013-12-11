var stageWidth,stageHeight,canvasWidth,canvasHeight;
var canvas = 0;
var context = null;
var preload = null;
var index = 0;
var videoWindowStart = null;
var videoWindowLoop = null;
var videoWindowEnd = null;
var sizeReference = null;
var stage = null;
var bitmapLogo = null;
var bitmapText = null;
var ticker = null;
var loaderAnimIntervalController = 0;
var loaderAnimInterval = null;
var videoStage = null;
var v = null;
var enterLoop = 0;
var soundInstance = null;
var iOSPlayBtn = null;
var audioFile = "";
var controlInterval;
var textInterval = 0;
var counter = 0;
var counterText = 0;
var preloadCalled = 0; 
var imageArray = [];
var animPng = null; 
var animIndex = 0;
var animEnd = false;
var animEndControl = 0;
var months = [];
var animConstantMin = 10;
var animConstantMax = 40;
var cursorOverMonth = false;
var currentSelectedMonth = 0;
var startWidth = 1024; 
var startHeight = 768;
var removeFiltersControl = false;
var calendarMode = false;
var episodeBackground = null;
var seqSetInterval = null;
var idSequence=0;
var monthsToShow = [
						{
							images: [
										{src: "img/people_reflex.png", origX: 0, origY: 0},
										{src: "img/baloes_right.png", origX: 0, origY: 0},
										{src: "img/episodio1_mesa.png", origX: 0, origY: 0},
										{src: "img/episodio1_mesa_back.png", origX: 0, origY: 0},
										{src: "img/episodio1_mesa_cin.png", origX: 0, origY: 0},
										{src: "img/episode1_cadeira.png", origX: 0, origY: 0},
										{src: "img/episode1_cadeira_back.png", origX: 0, origY: 0},
										{src: "img/episode1_cadeira_cin.png", origX: 0, origY: 0},
										{src: "img/episode1_meninas_cin.png", origX: 0, origY: 0},
										{src: "img/episode1_meninas.png", origX: 0, origY: 0},
										{src: "img/episode1_meninas_back.png", origX: 0, origY: 0},
										{src: "img/baloes_left.png", origX: 0, origY: 0},
										{src: "img/video_sombra.png", origX: 0, origY: 0},
										{src: "img/video_sombra.png", origX: 0, origY: 0},
										{src: "img/video_moldura.png", origX: 0, origY: 0},
										{src: "img/video_moldura_aniversario_padrao.png", origX: 0, origY: 0},
										{src: "img/aniversario_frame.jpg", origX: 0, origY: 0}
									],  
							objects:[], 
							buildCalendar: buildJanFebCalendar,
							playVideo: playVideoJanFeb,
							reverseVideo: reverseVideoJanFeb,
							closeCalendar: closeJanFebCalendar,
							openDays:openJanFevDays,
							closeDays: closeJanFevDays,
							closePage:closePageCalendarJanFev,
							months: [1,2], 
							name: "JAN/FEB", 
							video: ["videos/aniversario_video.mp4","videos/aniversario_video.webm"], 
							audio: "", 
							btn: {src: "img/jan_feb_btn.png", origX: 139, origY: 193, pointEndX:400, pointEndY:300, w: 99,h: 27},
							active: true,
							videoActive: false
						},
						{
							images: [
							
							
							
								{src: "img/picnic/video_padrao.png", origX: 0, origY: 0},
								{src: "img/picnic/video_frame.jpg", origX: 0, origY: 0},
								
								
								{src: "img/picnic/sequencia/frame_1.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_2.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_3.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_4.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_5.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_6.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_7.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_8.png", origX: 0, origY: 0},
								//{src: "img/picnic/sequencia/frame_9.png", origX: 0, origY: 0},
								//{src: "img/picnic/sequencia/frame10.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_11.png", origX: 0, origY: 0},
								{src: "img/picnic/sequencia/frame_12.png", origX: 0, origY: 0},
								

								{src: "img/picnic/sequencia/toalha.png", origX: 0, origY: 0},
								

								{src: "img/picnic/arvore.png", origX: 0, origY: 0},
								{src: "img/picnic/arvore_white.png", origX: 0, origY: 0},
								{src: "img/picnic/arvore_cinza.png", origX: 0, origY: 0},
								{src: "img/picnic/arvore_padrao.png", origX: 0, origY: 0},
								

								{src: "img/picnic/pessoa.png", origX: 0, origY: 0},
								{src: "img/picnic/pessoa_white.png", origX: 0, origY: 0},
								

								{src: "img/picnic/bicicletaMala.png", origX: 0, origY: 0},
								{src: "img/picnic/bicicletaMala_white.png", origX: 0, origY: 0},
								{src: "img/picnic/bicicletaMala_cinza.png", origX: 0, origY: 0},
								{src: "img/picnic/bicicletaMala_padrao.png", origX: 0, origY: 0},
								

								{src: "img/picnic/cachorro.png", origX: 0, origY: 0},
								{src: "img/picnic/cachorro_white.png", origX: 0, origY: 0},
								{src: "img/picnic/cachorro_cinza.png", origX: 0, origY: 0},
								{src: "img/picnic/cachorro_padrao.png", origX: 0, origY: 0}
								
								
							
							
							
							],  
							objects:[], 
							buildCalendar: buildMarcAprCalendar,
							playVideo: playVideoMarcApr,
							reverseVideo: reverseVideoMarcApr,
							closeCalendar: closeMarcAprCalendar,
							openDays:openMarcAprDays, 
							closeDays: closeMarcAprDays,
							closePage:closePageCalendarMarcApr,
							months: [3,4], 
							name: "MAR/APR", 
							video: ["videos/picnic.mp4","videos/picnic.webm"], 
							audio: "", 
							btn: {src: "img/mar_apr_btn.png", origX: 83, origY: 315, pointEndX:350, pointEndY:380, w: 99, h: 27},
							active: true,
							videoActive: false
						},
						{
							images: [
								{src: "img/casorio/casalSeq1.png", origX: 0, origY: 0},
								{src: "img/casorio/casalSeq2.png", origX: 0, origY: 0},
								{src: "img/casorio/casalSeq3.png", origX: 0, origY: 0},
								{src: "img/casorio/casalSeq4.png", origX: 0, origY: 0},
								{src: "img/casorio/casalSeq5.png", origX: 0, origY: 0},
								{src: "img/casorio/casalSeq6.png", origX: 0, origY: 0},
								{src: "img/casorio/pessoa1.png", origX: 0, origY: 0},
								{src: "img/casorio/casalSeq.png", origX: 0, origY: 0},
								{src: "img/casorio/arvore.png", origX: 0, origY: 0},
								{src: "img/casorio/folhas.png", origX: 0, origY: 0},
								{src: "img/casorio/pessoa2.png", origX: 0, origY: 0},
								{src: "img/casorio/folhas_blur.png", origX: 0, origY: 0}
							
							],  
							objects:[], 
							buildCalendar: buildMayJunCalendar,
							playVideo: playVideoMayJun,
							reverseVideo: reverseVideoMayJun,
							closeCalendar: closeMayJunCalendar,
							openDays:openMarcMayJun, 
							closeDays: closeMayJunDays,
							closePage:closePageCalendarMayJun,
							months: [5,6], 
							name: "MAY/JUN", 
							video: [], 
							audio: "", 
							btn: {src: "img/may_jun_btn.png", origX: 139, origY:465, pointEndX:480, pointEndY:500, w: 99, h: 27},
							active: true,
							videoActive: false
						},
						{
							images: [],  
							objects:[], 
							buildCalendar: buildJanFebCalendar,
							playVideo: playVideoJanFeb,
							reverseVideo: reverseVideoJanFeb,
							closeCalendar: closeJanFebCalendar,
							months: [7,8], 
							name: "JUL/AUG", 
							video: [], 
							audio: "", 
							btn: {src: "img/jul_aug_btn.png", origX: 849, origY:193, pointEndX:650, pointEndY:260, w: 99, h: 27},
							active: false,
							videoActive: false
						},
						{
							images: [],  
							objects:[], 
							buildCalendar: buildJanFebCalendar,
							playVideo: playVideoJanFeb,
							reverseVideo: reverseVideoJanFeb,
							closeCalendar: closeJanFebCalendar,
							months: [9,10], 
							name: "SEP/OCT", 
							video: [], 
							audio: "", 
							btn: {src: "img/sep_oct_btn.png", origX: 899, origY:315, pointEndX:680, pointEndY:350, w: 99, h: 27},
							active: false,
							videoActive: false
						},
						{
							images: [],  
							objects:[], 
							buildCalendar: buildJanFebCalendar,
							playVideo: playVideoJanFeb,
							reverseVideo: reverseVideoJanFeb,
							closeCalendar: closeJanFebCalendar,
							months: [11,12], 
							name: "NOV/DEC", 
							video: [], 
							audio: "", 
							btn: {src: "img/nov_dec_btn.png", origX: 849, origY:465, pointEndX:540, pointEndY:460, w: 99, h: 27},
							active: false,
							videoActive: false
						}
						
]; 

	

var angle = 0;
var speed = 0.4;
var range = 10;


var videoDimensions = {width: 0, height: 0};
var isiPad = navigator.userAgent.match(/iPad/i) != null;

// For use within iPad developer UIWebView
// Thanks to Andrew Hedges!
var ua = navigator.userAgent;
var isiPad = /iPad/i.test(ua);
var isiPhone =  /iPhone/i.test(ua);
var isAndroid = /Android 4/i.test(ua);
var isAndroidOlder =  /Android 2/i.test(ua);
var isAndroidTablet = /Android 3/i.test(ua);

 function supports_canvas() 
 {
            //return !!document.createElement('canvas').getContext;
            if (navigator.appVersion.indexOf("MSIE 7.") != -1)
                return false;
            if (navigator.appVersion.indexOf("MSIE 8.") != -1)
                return false;
            return true;
 }
 
 if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
    var addToHomeConfig = {
        animationIn:'bubble',        // Animation In
        animationOut:'drop',        // Animation Out
        lifespan:30000,                // The popup lives 30 seconds
        expire:2,                    // The popup is shown only once every 2 minutes
        touchIcon:true,
        message:'Para instalar esta aplicação no seu %device, prima o %icon e depois o <strong>Adicionar ao ecrã principal</strong>.'
    };
    
    document.write('<link rel="stylesheet" href="css/add2home.css">');
    document.write('<script type="application/javascript" src="js/vendor/add2home.js"><\/s' + 'cript>');
	}





function init()
{
	/*$(".navigationLeft").click(function (){
		monthsToShow[currentSelectedMonth].closePage();
	});
		
		
	$(".navigationRight").click(function (){
		monthsToShow[currentSelectedMonth].closePage();
	});*/
	
	//setCal("#cal1", 2013, 1);
	//setCal("#cal2", 2013, 2);
	
	
	

	document.getElementById("nextYear").style.opacity = 0;
	iOSPlayBtn = document.getElementById("iOSPlayBtn");
	iOSPlayBtn.onclick = function(){
		//videoWindowStart.load();
	//	videoWindowLoop.load();	
			iOSPlayBtn.style.display = "none";
		videoWindowStart.play();	
		controlInterval = setInterval( function(){  if(Math.round(videoWindowStart.currentTime)>1){ buildStage(); clearInterval(controlInterval); }; }, (1000/24));
	};
	
	if(isAndroid || isAndroidOlder || isAndroidTablet || isiPhone)
	{
		alert($(window).width() +"-"+ $(window).height());
		
		if($(window).width()<800 || $(window).heigth()<800)
		{
			$("body").css("background-image",'url(../img/phonestyle.png)');
			
			isAndroidOlder = true;
			isiPhone = true;
		}
		
		
	}
	
	
	if(isAndroid || isAndroidOlder || isAndroidTablet || isiPhone || isiPad)
	{
		var viewportmeta = document.querySelector('meta[name="viewport"]');
	    if (viewportmeta) {
	        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
	        document.body.addEventListener('gesturestart', function () {
	            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
	        }, false);
	    }
	    
	}
	
		window.onresize = stageResize;
		window.onorientationchange = stageResize;
	
	if(isAndroidOlder || isiPhone)
	{
		$("body").css("min-width","auto").css("min-height","auto");	
		
		stageResize();
	}
	else
	{
		
        if (supports_canvas()){
	
	
	
			console.log("init calendar");
			preload = new createjs.PreloadJS();
			preload.onFileLoad = handleFileLoad;
			preload.onProgress = handleOverallProgress;
			preload.onFileProgress = handleFileProgress;
			preload.onError = handleFileError;
			preload.setMaxConnections(10);
			
			sizeReference = document.getElementById("hiddenObjects");
			videoWindowStart = document.getElementById("introVideo");
			videoWindowLoop = document.getElementById("introLoop");
			videoWindowEnd = document.getElementById("introEnd");
			if(isiPad || isAndroid)
			{
				videoWindowStart.load();
			//	videoWindowLoop.load();	
			}
			canvas = document.getElementById("mainStage");
			
			videoStage = document.getElementById("videoStage");
			
			context = videoStage.getContext("2d");
			stageResize();
			//console.log("CLIENT", videoStage.clientWidth,videoStage.clientHeight);
			
			videoDimensions.width = Math.floor(videoStage.clientWidth);
		    videoDimensions.height = Math.floor(videoStage.clientHeight);
		    videoStage.width = videoDimensions.width;
		    videoStage.height = videoDimensions.height;	
			
			document.getElementById("loading").style.display = "block";
			
			loaderAnimInterval = setInterval(function(){
				
				if(loaderAnimIntervalController==0)
				{
					document.getElementById("loaderText").style.visibility = "hidden";
					loaderAnimIntervalController = 1;
				}
				else
				{
					document.getElementById("loaderText").style.visibility = "visible";
					loaderAnimIntervalController = 0;
				}
				
				
			},50);
			
			preload.installPlugin(createjs.SoundJS);
			preload.loadFile("img/vev_logo.png");
			preload.loadFile("img/calendar_2013.png");
			var x;
		
			for(x=0;x<monthsToShow.length;x++)
			{
					
				preload.loadFile(monthsToShow[x].btn.src);
			}
			if(!$.browser.mozilla)
			{
				
				preload.loadFile("videos/center.mp4");
				preload.loadFile("videos/open.mp4");
				preload.loadFile("videos/dissolve.mp4");
				/*preload.loadFile("audio/som_fundo.mp3");
				audioFile = "audio/som_fundo.mp3";*/
				
			}
			else
			{
				preload.loadFile("videos/center.webm");
				preload.loadFile("videos/open.webm");
				preload.loadFile("videos/dissolve.webm");
				/*preload.loadFile("audio/som_fundo.wav");
				audioFile = "audio/som_fundo.wav";*/
			} 
			
			if(isiPad || isAndroid)
			{
				var i=216;
				for(i=216;i<217;i++)
				{
					imageArray.push("img/sequence_center/center_00"+i+".jpg");
					preload.loadFile("img/sequence_center/center_00"+i+".jpg");
				}
					
			}
			if(window.navigator.appVersion.search("Safari")!=-1 && window.navigator.appVersion.search("Chrome")==-1 ) 
			{	
			//	alert(window.navigator.appVersion.search("Safari") + " - " + window.navigator.appVersion);
				
				
				
				$(".main-content").css("background-color","#dfe3e2");
			}	
			
		//	if( window.navigator.appVersion.search("Chrome")!=-1)
			//	alert(window.navigator.plataform);
				
		}
		else
		{
			$("#loading").css("display","none");
			$("#mainContentDiv").css("display","none");
			$("#iOSPlayBtn").css("display","none");
			$("#countingDays").css("display","none");
			$("#ieMode").css("display","block");
		}
	}
}

function animateLoaderImage(index)
{
	items = document.getElementsByClassName("imageItem");
	
	var properties = [
        'transform',
        'WebkitTransform',
        'msTransform',
        'MozTransform',
        'OTransform'
	];
	
    var p;
    items[index].style.visibility = "visible";
    
    while (p = properties.shift()) {
        if (typeof items[index].style[p] != 'undefined') {
            items[index].style[p] = 'rotateX( 0deg )';
        }
    }
    
}


function handleFileLoad(event)
{
//	console.log("File Loaded", event.src);
}

function handleOverallProgress(event)
{
		//console.log("Overall Progress ", preload.progress);
		var progresso = preload.progress * 100;
		
		if(progresso>=25)
			animateLoaderImage(0);
		if(progresso>=50)
			animateLoaderImage(1);
		if(progresso>=75)
			animateLoaderImage(2);
		if(progresso>98)
			animateLoaderImage(3);
			
		document.getElementById("barrinha").style.width = progresso+"%";
		
		if(Math.floor(progresso)==100)
		{
			if(preloadCalled==0)
			{
				preloadCalled = 1;
				endPreload();
				
			}
				
		}	
		
		
		
}

function handleFileProgress(event)
{
		//console.log("File Progress ", event.progress,event.src);		

}

function handleFileError(event)
{
	//console.log("Error ", event.src);		
}


function stop() {
	if (preload != null) { preload.close(); }
}


function endPreload()
{
	clearInterval(loaderAnimInterval);
	loaderAnimInterval = null;
	document.getElementById("nextYear").style.opacity = 1;
	document.getElementById("loaderText").style.visibility = "hidden";
	
	
	videoWindowStart.style.visibility = "visible";
	videoWindowLoop.style.visibility = "visible";
	videoWindowEnd.style.visibility = "hidden";
	window.onresize = stageResize;
	stageResize();

	//$("head").append('<script src="js/vendor/easeljs/easeljs-0.5.0.min.js" />');


	v = videoWindowStart;
	videoWindowStart.addEventListener("ended", videoEnded, true);
												    
	videoWindowEnd.addEventListener("ended", videoEnded, true);
	videoWindowLoop.addEventListener("ended", videoEnded, true);
	
		//videoWindowLoop.addEventListener("pause",videoLoopPause,true);
		
		//videoWindowStart.addEventListener("pause",videoStartPause,true);
	
	setTimeout(function(){
		document.getElementById("loading").style.opacity = 0;
		setTimeout(function(){
							$("#loading").css("display","none");
		},300);
		//alert("VideoPlay");
		//introVideo.load(); 
		
		if(isiPad || isAndroid)
		{
			iOSPlayBtn.style.display = "block";
			//alert("Is IPAD");
		}
		else
		{
			//console.log("END");
			
			controlInterval = setInterval( function(){  if(Math.round(videoWindowStart.currentTime)>4){ buildStage(); clearInterval(controlInterval); }; }, (1000/24));
			videoWindowStart.play(); 
			//setTimeout(function(){  alert("VIDEO PLAT") },500);
			//setTimeout(buildStage, 3300);
		}
	
	},1000);

}
function videoStartPause()
{
	 videoWindowStart.play();
}

function videoLoopPause()
{
	videoWindowLoop.play();
}

function videoEnded()
{
	//alert("VIDEO ENDED")
	//clearInterval(controlInterval);
     	if(enterLoop==1)
    	{
    			//videoWindowLoop.currentTime = 0.1; //setting to zero breaks iOS 3.2, the value won't update, values smaller than 0.1 was causing bug as well.
    			if(animEnd)
    			{
    				
    				if(animEndControl==0)
    				{
    				
    					videoWindowLoop.pause();
    					videoWindowLoop.style.visibility = "hidden"
    					videoWindowEnd.style.visibility = "visible";
    					//$(videoWindowLoop).remove();
    					videoWindowEnd.play();
    					animEndControl++;
    				}
    				else
    				{
    					videoWindowEnd.pause();
    					videoWindowEnd.style.visibility = "hidden";
    					//$(videoWindowEnd).remove();
    					buildDesiredCalendar();
    				}
    			}
    			else	
    				videoWindowLoop.play();
    			
    		
    		
    	}
    	if(enterLoop==0)
    	{
    	 	enterLoop =1;
    	 	if(isiPad || isAndroid || isAndroidTablet)
    	 	{
    	 	//	videoWindowStart.src= "videos/center.mp4";
    	 	//	videoWindowStart.load();
 				//$(videoWindowStart).remove();
				
				//videoWindowStart.stop();
  	    		videoWindowStart.style.visibility = "hidden";
				videoWindowLoop.style.visibility = "hidden"; 
   	 		
    	 		animPng = $('<img src="'+imageArray[0]+'" width="900px" height="700px" style="position: absolute; top: 0; left: 0; z-index: 1;" border="0" />');
    	 		$("#hiddenObjects").append(animPng);
    	 		stageResize();
    	 		//animateImages();
    	 	//		    	 		videoWindowStart.play();
				soundInstance = createjs.SoundJS.play("audio/som_fundo.mp3", createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1, 1);
    	 	
    	 		
    	 	}
    	 	else
    	 	{
    	 		//console.log()
				//videoWindowStart.removeEventListener("pause",videoStartPause);
				videoWindowStart.pause();
				
				
				//videoWindowStart.src = null;
				
				
			//	$(videoWindowStart).remove();
				
				//videoWindowStart.stop();
   	    		videoWindowLoop.style.visibility = "visible";
 	    		videoWindowStart.style.visibility = "hidden";
				
				
    	 		videoWindowLoop.play();
    	 		
    	 		console.log("VIDEO WINDOW PLAY");
    	 	}
    	 	//
    		
    	}
    	return false;
}

function stageResize()
{
	var videoWidth, videoHeight, videoX, videoY;
	var canvasX, canvasY;
	var videoOWidth = 900;
	var videoOHeight = 700;
	
	
	stageWidth = $(sizeReference).width();
	stageHeight = $(sizeReference).height();

	videoHeight = (videoOHeight * stageWidth) / videoOWidth;
	videoWidth = stageWidth;
	
	if(videoHeight>stageHeight)
	{
		videoWidth = (videoOWidth * stageHeight) / videoOHeight;
		videoHeight = stageHeight;	
	}

	videoX = (stageWidth-videoWidth) * 0.5;
	videoY = (stageHeight-videoHeight) * 0.5;
	
	canvasHeight = (startHeight * stageWidth) / startWidth;
	canvasWidth = stageWidth;
	
	if(canvasHeight>stageHeight)
	{
		canvasWidth = (startWidth * stageHeight) / startHeight;
		canvasHeight = stageHeight;	
	}

	canvasX = (stageWidth-canvasWidth) * 0.5;
	canvasY = (stageHeight-canvasHeight) * 0.5;
	canvas.width = stageWidth;
	canvas.height = stageHeight;
	canvas.style.position = "absolute";
	
	$(videoWindowStart).width(videoWidth).height(videoHeight).css({top: videoY+"px", left: videoX+"px"});
	$(videoWindowLoop).width(videoWidth).height(videoHeight).css({top: videoY+"px", left: videoX+"px"});
	$(videoWindowEnd).width(videoWidth).height(videoHeight).css({top: videoY+"px", left: videoX+"px"});
	
	if(calendarMode)
	{
		if(bitmapLogo!=null)
			TweenMax.to(bitmapLogo, 0.5, {y: 15,x: 30, ease: Expo.easeInOut});
		 
		canvas.style.top = 0+"px";
		canvas.style.left = 0+"px";
		canvas.width = stageWidth;
		canvas.height = stageHeight;
		 
		buildEpisodeBackground();
		
	}
	else
	{	
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		canvas.style.top = canvasY+"px";
		canvas.style.left = canvasX+"px";
		/*$(videoWindowStart).width(videoWidth).height(videoHeight).css({top: videoY+"px", left: videoX+"px"});
		$(videoWindowLoop).width(videoWidth).height(videoHeight).css({top: videoY+"px", left: videoX+"px"});
		$(videoWindowEnd).width(videoWidth).height(videoHeight).css({top: videoY+"px", left: videoX+"px"});
		*/
		
		if(animPng!=null)
			animPng.width(videoWidth).height(videoHeight).css({top: videoY+"px", left: videoX+"px"});
		
		iOSPlayBtn.style.top = ((stageHeight-54)*0.5)+"px";
		iOSPlayBtn.style.left = ((stageWidth-173)*0.5)+"px";
		
		
		if(bitmapLogo!=null)
		{
			var finalPosition = (stageHeight*20)/768;
			
			bitmapLogo.x = (canvasWidth-bitmapLogo.image.width)*0.5;
			bitmapText.x = (canvasWidth-bitmapText.image.width)*0.5;
			
			TweenMax.to(bitmapLogo, 0.5, {y: finalPosition, ease: Expo.easeInOut});
			TweenMax.to(bitmapText, 0.5, {y: (finalPosition+70),delay: 0.3, ease: Expo.easeInOut});
		
		}
		
		if(isAndroid || isiPad)
		{
			
			//alert($("body").height() + " - " + $(window).height());
		}
		
		var a = 0;
		for(a=0; a<months.length; a++)
		{
			months[a].object.x = months[a].x = (canvasWidth*months[a].origX)/startWidth;
			months[a].object.y = months[a].y = (canvasHeight*months[a].origY)/startHeight;
			continueAnimation(a);
		}	
	}	
	
}
/*

function animateImages()
{
	 requestAnimFrame(animateImages);
     render();
}

function render()
{
	 if(animIndex==imageArray.length)
	 {
	 	animIndex = 0;
	 }
	 
	 animPng.attr("src",imageArray[animIndex]);
	 stageResize();
	 animIndex++;
}
*/
var daysCountDecember=32;

function buildStage()
{
	console.log("BUILD STAGE");
	clearInterval(controlInterval);
	var stageWidth = $(sizeReference).width();
	var stageHeight = $(sizeReference).height();
	
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver();
	createjs.Ticker.setFPS(30);
	
	bitmapLogo = new createjs.Bitmap("img/vev_logo.png");
	bitmapLogo.x = (canvasWidth-bitmapLogo.image.width)*0.5;
	//console.log(bitmapLogo.x); 
	bitmapLogo.y = -200;
	
	stage.addChild(bitmapLogo);
	
	bitmapText = new createjs.Bitmap("img/calendar_2013.png");
	
	//console.log("IMG",canvasWidth,bitmapText.image.width)
	bitmapText.x = (canvasWidth-99)*0.5;
	//console.log(bitmapText.x);
	bitmapText.y = -200;
	
	stage.addChild(bitmapText);
	
	var finalPosition = (canvasHeight*20)/768;
	
	 
	
	var i = 0;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(window);
	
	var x;

	for(x=0;x<monthsToShow.length;x++)
	{
		/*var bmp,graphics,shape,container;
		bmp = new createjs.Bitmap(monthsToShow[x].btn.src);
		graphics = new createjs.Graphics();
		graphics.setStrokeStyle(1);
		graphics.beginStroke( createjs.Graphics.getRGB(0,0,0));
		graphics.beginFill( createjs.Graphics.getRGB(0,0,0));
		graphics.drawRect(0,0,bmp.image.width,bmp.image.height);
		shape = new createjs.Shape(graphics);
		shape.alpha = 0;
		bmp.hitArea = shape; 
		
		months.push({animStatus: true, object: new createjs.Container(),x: 0,y:0,origX: monthsToShow[x].btn.origX, origY: monthsToShow[x].btn.origY, animPause: false,imgW: bmp.image.width, imgH: bmp.image.height});
		months[x].object.addChild(bmp);
		months[x].object.addChild(shape);*/
		
		var bmp,graphics,shape,container;
		bmp = new createjs.Bitmap(monthsToShow[x].btn.src);
//		graphics = new createjs.Graphics();
//		graphics.setStrokeStyle(1);
//		graphics.beginStroke( createjs.Graphics.getRGB(0,0,0));
//		graphics.beginFill( createjs.Graphics.getRGB(0,0,0));
//		graphics.drawRect(0,0,bmp.image.width,bmp.image.height);
//		shape = new createjs.Shape(graphics);
//		shape.alpha = 0;
//		bmp.hitArea = shape; 
		//console.log(bmp.image.width);
		months.push({animStatus: true, line:{object: new createjs.Shape(), iniX: (monthsToShow[x].btn.origX+(bmp.image.width/2)) , iniY: (monthsToShow[x].btn.origY+(bmp.image.height/2)), endX: monthsToShow[x].btn.pointEndX, endY: monthsToShow[x].btn.pointEndY }, object: new createjs.Bitmap(monthsToShow[x].btn.src), x: 0,y:0,origX: monthsToShow[x].btn.origX, origY: monthsToShow[x].btn.origY, animPause: false,imgW: monthsToShow[x].btn.w, imgH: monthsToShow[x].btn.h});
		drawLine(months[x].line.object,(canvasWidth*months[x].line.iniX)/startWidth,(canvasHeight*months[x].line.iniY)/startHeight,(canvasWidth*months[x].line.endX)/startWidth,(canvasHeight*months[x].line.endY)/startHeight);
		
		months[x].line.object.alpha = 0;
		//months[x].object.addChild(bmp);
		//months[x].object.addChild(shape);
	}
	
/*	bmp = createjs.Bitmap("img/jan_feb_btn.png");
	graphics = createjs.Graphics();
	graphics.setStrokeStyle(1);
	graphics.beginStroke(Graphics.getRGB(0,0,0));
	graphics.beginFill(Graphics.getRGB(0,0,0));
	graphics.drawRect(0,0,bmp.image.width,bmp.image.height);
	shape = new Shape(graphics);
	shape.alpha = 0;
	bmp.hitArea(shape); */
	
	
	var a = 0;
	for(a=0; a<months.length; a++)
	{
		console.log(months[a].object.image.width, months[a].object.image.height);
		months[a].object.cache(0,0,months[a].imgW, months[a].imgH);
		months[a].object.x = months[a].x = (canvasWidth*months[a].origX)/startWidth;
		months[a].object.y = months[a].y = (canvasHeight*months[a].origY)/startHeight;
		months[a].object.alpha = 0;
		months[a].object.id = a;
		if(monthsToShow[a].active) 
		{
			months[a].object.onMouseOver = setMouseActive; 
			months[a].object.onMouseOut = setMouseInactive;
			months[a].object.onClick = continueToCalendar; 
		}
		stage.addChild(months[a].line.object);
		stage.addChild(months[a].object);
		TweenMax.to(months[a].object, 0.5, {alpha: 1, delay: (1+(0.3*a)), ease: Expo.easeInOut});
		TweenMax.to(months[a].line.object, 0.5, {alpha: 1, delay: (1+(0.3*a)), ease: Expo.easeInOut});
		continueAnimation(a);
		
	} 
	setTimeout(function(){ stageResize(); },100);
	
	TweenMax.to(bitmapLogo, 0.5, {y: finalPosition,delay: 0.1, ease: Expo.easeInOut, onUpdate: function(){ stage.update(); }});
	TweenMax.to(bitmapText, 0.5, {y: (finalPosition+70),delay: 0.3, ease: Expo.easeInOut, onUpdate: function(){  stage.update(); }});
	
	
	
//	var d = new Date();
//	var n = d.getDate();
	
	
	
//	$("#countingDays").html(daysCountDecember-n+"<span class='textDay'>days</span>");
	
//	TweenMax.to($("#countingDays"), 0.5, {css: {opacity: 1},delay: 0.5});
	
	//addtext days
//	TweenMax.to($())
	
	
	
}

function continueAnimation(myobject)
{

	if(!animEnd)
	{
		if(!months[myobject].animPause)
		{
			var animConstant = Math.floor(Math.random() * (animConstantMax - animConstantMin + 1)) + animConstantMin;
			var speed = Math.floor(Math.random()*(5 - 1 + 1)) + 1;
			if(months[myobject].animStatus)
			{
				TweenMax.to(months[myobject].object, speed, {bezier:{type: "soft" , values:[{x:months[myobject].x-(animConstant/2), y: months[myobject].y+(animConstant)},{x: months[myobject].x-animConstant, y: months[myobject].y}]},ease: Power0.easeInOut, onUpdate:updateLine, onUpdateParams:[myobject], onComplete: continueAnimation,onCompleteParams:[myobject]});
				months[myobject].animStatus = false;
				
			}
			else
			{
				TweenMax.to(months[myobject].object, speed, {bezier:{type: "soft" , values:[{x:months[myobject].x-(animConstant/2), y: months[myobject].y-(animConstant)},{x: months[myobject].x, y: months[myobject].y}]},ease: Power0.easeInOut, onUpdate:updateLine, onUpdateParams:[myobject], onComplete: continueAnimation,onCompleteParams:[myobject]});
				months[myobject].animStatus = true;
		
			}
		}
	}	
}

function updateLine(element){
	
	if(months[element].line.object,(months[element].object.x) < (canvasWidth/2)){
	 drawLine(months[element].line.object,(months[element].object.x+(months[element].imgW+6)),(months[element].object.y+(months[element].imgH/2)) , (canvasWidth*months[element].line.endX)/startWidth,(canvasHeight*months[element].line.endY)/startHeight );
	}else{
		 drawLine(months[element].line.object,(months[element].object.x-6),(months[element].object.y+(months[element].imgH/2)) , (canvasWidth*months[element].line.endX)/startWidth,(canvasHeight*months[element].line.endY)/startHeight );
	}
}


function drawLine(obj,iX,iY,eX,eY){
	
	//var lineShape = new createjs.Shape();
	var graphicLine = obj.graphics;
	graphicLine.clear();	
	graphicLine.setStrokeStyle(1).beginStroke("#bbc0bd");
	graphicLine.moveTo(iX, iY);
	graphicLine.lineTo(eX, eY);
	graphicLine.endStroke();
		 
}
	



function tick()
{
	
	
	stage.update();
	if(angle>=0 && angle<2 && cursorOverMonth==true)
	{
		angle += speed;
		updateImage();
		//console.log(angle);
		
		
	}
	else if(angle>0 && cursorOverMonth==false)
	{
		angle -= speed;
		updateImage();
	}
	else if(cursorOverMonth==false)
	{
		if(removeFiltersControl)
			removeFilters();
	}

}

function removeFilters()
{
	var u = 0;
	//console.log("removeFilters");
	
	
	/* erro */
	//currentSelectedMonth = 0;
	
	for(u=0;u<months.length;u++)
	{
		months[u].object.updateCache();
	
		months[u].object.filters = [];
		months[u].object.alpha = 1;
	}
	removeFiltersControl = false;
}

function updateImage()
{
	var a=0;
	var value = Math.sin(angle)*range;
	//console.log(value);
	for(a=0;a<months.length; a++)
	{
		months[a].object.updateCache();
		if(a!=currentSelectedMonth)
		{
			//console.log(createjs);
			months[a].object.alpha =1- ((value/range)*1);
			months[a].object.filters = [new createjs.BoxBlurFilter(value,value,10)];
			months[a].object.mouseEnabled = true;
			
			months[a].line.object.alpha =1- ((value/range)*1);
		}	
		 
	}
}




function continueToCalendar(event)
{
	currentSelectedMonth = event.target.id;
	//console.log("currentMonth "+currentSelectedMonth)
	
	TweenMax.to(bitmapText, 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete: function(o){
			stage.removeChild(bitmapText);
		}});
	
	var i=0;
	for(i=0; i<months.length; i++)
	{
		TweenMax.killTweensOf(months[i].object);
		months[i].object.mouseEnabled = false;
		TweenMax.to([months[i].object,months[i].line.object], 0.5, {alpha: 0, delay: (0.25*i)+0.5, onComplete: function(o){
			stage.removeChild(months[o].object);
			stage.removeChild(months[o].line.object);
		}, onCompleteParams: [i]});
	}
	
	if(isAndroid || isiPad)
	{
		
		//alert($("body").height() + " - " + $(window).height());
		animEnd = true;
		animEndControl=1;
		enterLoop=1;
		$(animPng).remove();
		videoWindowStart.pause();
		
		//videoWindowEnd.load();
		videoWindowStart.style.visibility = "hidden";   
		videoWindowLoop.style.visibility = "hidden";  
		videoWindowEnd.style.visibility = "visible";
		if(videoWindowEnd.readyState==4)
			videoWindowEnd.currentTime = 0.1;
		
		videoWindowEnd.play();
		
	}
	else
	{
		TweenMax.delayedCall(i*0.25,clickToEnd);
	}
}


function setMouseActive(event)
{
	canvas.style.cursor = "pointer";

	cursorOverMonth = true; 
	
	objectId = event.target.id;
	currentSelectedMonth = objectId;
	angle = 0;
	months[objectId].animPause = true;
	TweenMax.killTweensOf(event.target);
	//console.log("Over");
	removeFiltersControl = true;
	
}

function setMouseInactive(event)
{
	

		canvas.style.cursor = "auto";	
		cursorOverMonth = false;
		months[parseInt(event.target.id)].animPause = false;
		continueAnimation(event.target.id);
		//console.log("Out");
	
	
}

function forwardMouseEvent(event)
{
	var x = (!window.Event) ? e.pageX : event.clientX;
	var y = (!window.Event) ? e.pageY : event.clientY;
	var receiver = document.elementFromPoint(x,y);
	if (receiver && receiver.nodeType == 3) { // Opera
		receiver = receiver.parentNode;
	}
	$(receiver).trigger(event);
}

function clickToEnd()
{
	animEnd = true;
	
	
	
}



function buildDesiredCalendar()
{
	//console.log("BUILD CALENDAR");
	
	/*$(".navigationLeft").css("visibility" , "visible");
	$(".navigationRight").css("visibility" , "visible");
	*/
	
	setCal("#cal1", 2013, monthsToShow[currentSelectedMonth].months[0]);
	setCal("#cal2", 2013, monthsToShow[currentSelectedMonth].months[1]);
	
	
	preload.onProgress = handleCalendarProgress;
	document.getElementById("lastYear").style.visibility = "hidden";
	document.getElementById("nextYear").style.visibility = "hidden";		
	$(".loader-container-center-images").css("opacity","0");

			loaderAnimInterval = setInterval(function(){
				
				if(loaderAnimIntervalController==0)
				{
					document.getElementById("loaderText").style.visibility = "hidden";
					loaderAnimIntervalController = 1;
				}
				else
				{
					document.getElementById("loaderText").style.visibility = "visible";
					loaderAnimIntervalController = 0;
				}
				
				
			},50);	
	document.getElementById("barrinha").style.width = "0%";
	document.getElementById("loading").style.display = "block";
	document.getElementById("loading").style.background = "transparent";
	document.getElementById("loading").style.opacity = 1;
	var i=0;
	preloadCalled = 0;
	
	
	//console.log("currentSelectedMonth : "+currentSelectedMonth);
	for(i=0;i<monthsToShow[currentSelectedMonth].video.length; i++)
	{
		preload.loadFile(monthsToShow[currentSelectedMonth].video[i]);
	}
	preload.loadFile(monthsToShow[currentSelectedMonth].audio);
	
	for(i=0;i<monthsToShow[currentSelectedMonth].images.length;i++)
	{
		preload.loadFile(monthsToShow[currentSelectedMonth].images[i].src);
	}

}

function handleCalendarProgress()
{
	var progresso = preload.progress * 100;
		
			
		document.getElementById("barrinha").style.width = progresso+"%";
		
		if(Math.floor(progresso)==100)
		{
			if(preloadCalled==0)
			{
				preloadCalled = 1;
				endEpisodePreload();
				
			}
				
		}	
		
		
}

function endEpisodePreload()
{
		clearInterval(loaderAnimInterval);
	loaderAnimInterval = null;
	document.getElementById("nextYear").style.opacity = 1;
	document.getElementById("loaderText").style.visibility = "hidden";
	stageResize();
	canvas.width = stageWidth; 
 	canvasHeight = stageHeight;
	canvas.style.top = 0+"px";
	canvas.style.left = 0+"px";
	var finalPosition = (stageHeight*20)/768;
	
	bitmapLogo.x = (stageWidth-bitmapLogo.image.width)*0.5;
	bitmapText.x = (stageWidth-bitmapText.image.width)*0.5;
	
	bitmapLogo.y = finalPosition;
	bitmapText.y = (finalPosition+70);


	
	setTimeout(function(){
		calendarMode=true;
		document.getElementById("loading").style.opacity = 0;
		setTimeout(function(){
							$("#loading").css("display","none");
		},300);
		TweenMax.to(bitmapLogo, 0.5, {scaleX: 0.7,scaleY: 0.7, ease: Expo.easeInOut});
		TweenMax.to(bitmapLogo, 1, {x: 30, y: 15, ease: Expo.easeInOut,onComplete: buildNavigation});
	},1000);
}

function buildNavigation()
{
	
	buildEpisodeBackground();
	TweenMax.to(episodeBackground, 1, {alpha: 1, ease: Expo.easeInOut});

	
	
	$("#navigationMenu").css("opacity","0").css("display","block");
	$("#playVideoBtn").css("opacity","0").css("display","block").on("click",monthsToShow[currentSelectedMonth].playVideo);
	
	$("#homeBtn").on("click",monthsToShow[currentSelectedMonth].closeCalendar);
	
	TweenMax.to($("#navigationMenu"),0.5,{delay: 0.9, css:{opacity:1},ease: Expo.easeInOut, onComplete:monthsToShow[currentSelectedMonth].buildCalendar});
	
	
	TweenMax.to($("#playVideoBtn"),0.5,{delay: 1.2, css:{opacity:1},ease: Expo.easeInOut});
	
}
function rebuildMainStage()
{
	calendarMode = false;
	
	//console.log("Destroy Nav");
	
	
	$("#homeBtn").off("click",monthsToShow[currentSelectedMonth].closeCalendar);
	
	
	currentSelectedMonth = -1;
	var a=0;
	var finalPosition = (canvasHeight*20)/768;

	TweenMax.to(bitmapLogo, 0.5, {scaleX: 1, scaleY: 1, y: finalPosition, x: ((canvasWidth-bitmapLogo.image.width)*0.5) , ease: Expo.easeInOut, onComplete: function (){
				stageResize();
				videoWindowStart.currentTime = 0.1;
				videoWindowStart.play();
  	    		videoWindowStart.style.visibility = "visible";
				controlInterval = setInterval( function(){  if(Math.round(videoWindowStart.currentTime)>4){ buildMonths(); clearInterval(controlInterval); }; }, (1000/24));
				//buildMonths();
		
	}});
	
	
	

}
function buildMonths()
{
	var finalPosition = (canvasHeight*40)/768;
	enterLoop=0;
	animEnd = false;
	animEndControl = 0;
	
	bitmapText.alpha = 0;
	bitmapText.x = (canvasWidth-bitmapText.image.width)*0.5;
	bitmapText.y = (finalPosition+70);
	stage.addChild(bitmapText);
	
	TweenMax.to(bitmapText, 0.5,{alpha: 1, ease: Expo.easeInOut});
	for(a=0; a<months.length; a++)
	{
		months[a].object.cache(0,0,months[a].imgW, months[a].imgH);
		months[a].object.x = months[a].x = (canvasWidth*months[a].origX)/startWidth;
		months[a].object.y = months[a].y = (canvasHeight*months[a].origY)/startHeight;
		months[a].object.alpha = 0;
		months[a].line.object.alpha = 0;
		months[a].object.id = a;
		months[a].object.mouseEnabled = true;
		if(monthsToShow[a].active) 
		{
			months[a].object.onMouseOver = setMouseActive; 
			months[a].object.onMouseOut = setMouseInactive;
			months[a].object.onClick = continueToCalendar; 
		}
		stage.addChild(months[a].line.object);
		stage.addChild(months[a].object);
		
		TweenMax.to(months[a].object, 0.5, {alpha: 1, delay: (1+(0.3*a)), ease: Expo.easeInOut});
		TweenMax.to(months[a].line.object, 0.5, {alpha: 1, delay: (1+(0.3*a)), ease: Expo.easeInOut});
		continueAnimation(a);
	}

}
function destroyNavigation()
{
	
}

function destroyEpisodeBackground()
{
	
}

function buildEpisodeBackground()
{
	var g = new createjs.Graphics();
	g.setStrokeStyle(1);
	g.beginStroke( createjs.Graphics.getRGB(0,0,0,0));
	g.beginLinearGradientFill( ["#bec1bf","#dadcdb"],[0.40,0.60],0,0,0,stageHeight);
	g.drawRect(0,0,stageWidth,stageHeight);
	
	if(episodeBackground!=null)
	{ 
		stage.removeChild(episodeBackground);
		episodeBackground = new createjs.Shape(g);
		episodeBackground.alpha = 1;
	}
	else
	{
		episodeBackground = new createjs.Shape(g);
		episodeBackground.alpha =0;
	}
		
	
	episodeBackground.x = 0;
	episodeBackground.y = 0;
	stage.addChildAt(episodeBackground,0);
	 
}


/*///// */

function openJanFevDays(){
	$("#calendario").css("opacity","0").css("display","block");
	
	TweenMax.to($("#calendario"), 2, {css:{opacity: 1}, ease: Expo.easeInOut});
}

function openMarcAprDays(){
	$("#calendario").css("opacity","0").css("display","block");
	
	TweenMax.to($("#calendario"), 2, {css:{opacity: 1}, ease: Expo.easeInOut});
}

function openMarcMayJun(){
	$("#calendario").css("opacity","0").css("display","block");
	
	TweenMax.to($("#calendario"), 2, {css:{opacity: 1}, ease: Expo.easeInOut});
}






function closeJanFevDays(){
	$("#calendario").css("opacity","1").css("display","block");
	
	TweenMax.to($("#calendario"), 2, {css:{opacity: 0}, ease: Expo.easeInOut, onComplete: function(){
		$("#calendario").css("display","none");
		}});
}


function closeMarcAprDays(){
	$("#calendario").css("opacity","1").css("display","block");
	
	TweenMax.to($("#calendario"), 2, {css:{opacity: 0}, ease: Expo.easeInOut, onComplete: function(){
		$("#calendario").css("display","none");
		}});
}

function closeMayJunDays(){
	$("#calendario").css("opacity","1").css("display","block");
	
	TweenMax.to($("#calendario"), 2, {css:{opacity: 0}, ease: Expo.easeInOut, onComplete: function(){
		$("#calendario").css("display","none");
		}});
}




/*//////////////////// BUILD ANIMATION CALENDAR ////////////////////////////////////*/

function buildJanFebCalendar()
{
		//alert("Build janFev");
		monthsToShow[currentSelectedMonth].objects = [];
		
		
		monthsToShow[currentSelectedMonth].objects.push(new createjs.Bitmap("img/baloes_left.png"));
		monthsToShow[currentSelectedMonth].objects[0].x = (stageWidth/4) - (monthsToShow[currentSelectedMonth].objects[0].image.width/2);
		monthsToShow[currentSelectedMonth].objects[0].y = stageHeight; 
		
		stage.addChild(monthsToShow[currentSelectedMonth].objects[0]);
		
		
		monthsToShow[currentSelectedMonth].objects.push(new createjs.Bitmap("img/baloes_right.png"));
		monthsToShow[currentSelectedMonth].objects[1].x = ((stageWidth/4) - (monthsToShow[currentSelectedMonth].objects[1].image.width/2))+(stageWidth/2);
		monthsToShow[currentSelectedMonth].objects[1].y = stageHeight;
		
		stage.addChild(monthsToShow[currentSelectedMonth].objects[1]);
		
		
		
		 
		//$("#episode1").css("background-image","url(../img/people_reflex.png)").css("opacity","0").css("display","block");
		$("#episode1").css("opacity","0").css("display","block"); 
		
		
		$("#episode1").append($('<div class="myVideoWindow" id="episodeVideoWindowBack"></div>'));
		$("#episodeVideoWindowBack").css({display:"none", position: "absolute", top:"45px",left: "55px", width: "601px", height: "345px"});
		$("#episodeVideoWindowBack").append('<img src="img/video_moldura_aniversario_padrao.png" border="0" style="position:absolute;display:block;top:0px;left:0px" />');
		$('#episodeVideoWindowBack').css({ transformOrigin: '50% 345px' });
		$("#episodeVideoWindowBack").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		
		
		$("#episode1").append($('<div class="myVideoWindow" id="episodeVideoWindow"></div>'));
		
		$("#episodeVideoWindow").css({display:"none", position: "absolute", top:"45px",left: "55px", width: "601px", height: "345px"});
		$("#episodeVideoWindow").append('<img src="img/video_moldura_cin.png" border="0" style="position:absolute;display:block;top:0px;left:0px;" />');
		$("#episodeVideoWindow").append('<img src="img/video_moldura.png" class="backface" border="0" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		
		if($.browser.mozilla)
		
			$("#episodeVideoWindow").append('<video class="backface" style="position:absolute;display:none;z-index:2;width:585px;height:329px;top: 8px; left: 8px;" id="episodeVideo"><source src="videos/aniversario_video.webm"  type="video/webm" /></video>');
		else
			$("#episodeVideoWindow").append('<video class="backface" style="position:absolute;display:none;z-index:2;width:585px;height:329px;top: 8px; left: 8px;" id="episodeVideo"><source src="videos/aniversario_video.mp4"  type="video/mp4" /></video>');
		
		
		$("#episodeVideoWindow").append('<img src="img/aniversario_frame.jpg" id="episodeVideoFrame" class="backface" border="0" style="position:absolute;display:inline-block;top:8px;left:8px;width:585px;height:329px;z-index:3;" />');
		$("#episodeVideoWindow").append('<div id="playVideoJanFavBTN" style="width:54px; height:54px; display:block;position:absolute; cursor:pointer; z-index:3; left:50%;top:50%;margin-left:-27px; margin-top:-27px;"> <img src="img/videoPlayBTN.png"/> </div>');
		$("#playVideoJanFavBTN").on("click", function(){
			
			$("#episodeVideoFrame").css("display","none");
			if(isAndroid || isAndroidOlder || isAndroidTablet || isiPhone || isiPad)
			{
				document.getElementById('episodeVideo').play();
			}
			else
			{
				document.getElementById('episodeVideo').currentTime = 0.1;
				document.getElementById('episodeVideo').play();
			}
			
			$(this).css("display", "none");
		});
		
		document.getElementById('episodeVideo').addEventListener("ended", function(){$("#playVideoJanFavBTN").css("display", "block"); $("#episodeVideoFrame").css("display","inline-block");}, true);;
		
		
		
		
		document.getElementById('episodeVideo').load();
		
		
		
		$('#episodeVideoWindow').css({ transformOrigin: '50% 345px' });
		$("#episodeVideoWindow").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		 
		$("#episode1").append($('<div class="perspectiveBackground" id="image1back"></div>'));
		$("#episode1").append($('<div class="perspectiveBackground" id="image2back"></div>'));
		$("#episode1").append($('<div class="perspectiveBackground" id="image3back"></div>'));
		
		


		$('#image1back').css({display:"block", position: "absolute", top:"103px",left: "210px", width: "320px", height: "246px"});
		$('#image1back').append('<img src="img/episodio1_mesa_padrao.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image1back').css({ transformOrigin: '50% 246px' });
		$("#image1back").css({
			perspective: '1100px', 
			rotateX: '-105deg'
		});      

		$('#image2back').css({display:"block", position: "absolute", top:"1px",left: "448px", width: "224px", height: "349px"});
		$('#image2back').append('<img src="img/episode1_meninas_padrao.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image2back').css({ transformOrigin: '50% 349px' });
		$("#image2back").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		
		$('#image3back').css({display:"block", position: "absolute", top:"22px",left: "0px", width: "313px", height: "328px"});
		$('#image3back').append('<img src="img/episode1_cadeira_padrao.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image3back').css({ transformOrigin: '50% 328px' });
		$("#image3back").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		
		$("#episode1").append($('<div class="perspectiveStyle" id="image1"></div>'));
		$("#episode1").append($('<div class="perspectiveStyle" id="image2"></div>'));
		$("#episode1").append($('<div class="perspectiveStyle" id="image3"></div>'));
		
		$('#image1').css({display:"block", position: "absolute", 'z-index':'4', top:"103px",left: "210px", width: "320px", height: "246px"});
		$('#image1').append('<img src="img/episodio1_mesa_cin.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image1').append('<img src="img/episodio1_mesa.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		$('#image1').append('<img src="img/episodio1_mesa_back.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#image1').css({ transformOrigin: '50% 246px' }); 
		$("#image1").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		$('#image1').on("mouseover",function(){
			$(".overingimage",this).css("opacity","0");
			forwardMouseEvent("mouseover");
		}).on("mouseout",function(){
			$(".overingimage",this).css("opacity","1");
			forwardMouseEvent("mouseout");
		});

		$('#image2').css({display:"block", position: "absolute", 'z-index':'2', top:"1px",left: "448px", width: "224px", height: "349px"});
		$('#image2').append('<img src="img/episode1_meninas_cin.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image2').append('<img src="img/episode1_meninas.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		$('#image2').append('<img src="img/episode1_meninas_back.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#image2').on("mouseover",function(){
			$(".overingimage",this).css("opacity","0");
			forwardMouseEvent("mouseover");
		}).on("mouseout",function(){
			$(".overingimage",this).css("opacity","1");
			forwardMouseEvent("mouseout");
		});
		$('#image2').css({ transformOrigin: '50% 349px' });
		$("#image2").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		$('#image3').css({display:"block", position: "absolute", 'z-index':'3', top:"22px",left: "0px", width: "313px", height: "328px"});
		$('#image3').append('<img src="img/episode1_cadeira_cin.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image3').append('<img src="img/episode1_cadeira.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		$('#image3').append('<img src="img/episode1_cadeira_back.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#image3').on("mouseover",function(){
			$(".overingimage",this).css("opacity","0");
			forwardMouseEvent("mouseover");
		}).on("mouseout",function(){
			$(".overingimage",this).css("opacity","1");
			forwardMouseEvent("mouseout");
		});
		$('#image3').css({ transformOrigin: '50% 328px' });
		$("#image3").css({
			perspective: '1100px', 
			rotateX: '-105deg'
		});      

		//TweenMax.to($("#episode1"),0.5,{css:{opacity: 1},ease: Expo.easeInOut}); 
		TweenMax.to($("#episode1"),0.5,{css:{opacity: 1},ease: Expo.easeInOut}); 
		$('#image3').transition({ rotateX: '0deg' , delay: 500}, 700, 'in-out');
		$('#image2').transition({ rotateX: '0deg' , delay: 1100}, 700, 'in-out');
		$('#image1').transition({ rotateX: '0deg' , delay: 1700}, 700, 'in-out');
		
		TweenMax.delayedCall(1.7,animateLeftBaloon,[]);   
		TweenMax.delayedCall(3.4,animateRightBaloon,[]);
		monthsToShow[currentSelectedMonth].openDays();
		
}

	/*///////////// MARC APRiL //////////////////////////*/
	
function buildMarcAprCalendar()
{	
	

	
	//alert("APR");
	

		monthsToShow[currentSelectedMonth].objects = [];
		
		
		//monthsToShow[currentSelectedMonth].objects.push(new createjs.Bitmap("img/baloes_left.png"));
		
		//monthsToShow[currentSelectedMonth].objects[0].x = (stageWidth/4) - (monthsToShow[currentSelectedMonth].objects[0].image.width/2);
		//monthsToShow[currentSelectedMonth].objects[0].y = stageHeight; 
		
		//stage.addChild(monthsToShow[currentSelectedMonth].objects[0]);
		
		
		//monthsToShow[currentSelectedMonth].objects.push(new createjs.Bitmap("img/baloes_right.png"));
		
		//monthsToShow[currentSelectedMonth].objects[1].x = ((stageWidth/4) - (monthsToShow[currentSelectedMonth].objects[1].image.width/2))+(stageWidth/2);
		//monthsToShow[currentSelectedMonth].objects[1].y = stageHeight;
		
		//stage.addChild(monthsToShow[currentSelectedMonth].objects[1]);
		
		
		
		 //video//
		//$("#episode1").css("background-image","url(../img/people_reflex.png)").css("opacity","0").css("display","block");
		$("#episode2").css("opacity","0").css("display","block"); 
		
		
		$("#episode2").append($('<div class="myVideoWindow" id="episodeVideoWindowBack2"></div>'));
		$("#episodeVideoWindowBack2").css({display:"none", position: "absolute", top:"45px",left: "55px", width: "601px", height: "345px"});
		$("#episodeVideoWindowBack2").append('<img src="img/picnic/video_padrao.png" border="0" style="position:absolute;display:block;top:0px;left:0px" />');
		$('#episodeVideoWindowBack2').css({ transformOrigin: '50% 345px' });
		$("#episodeVideoWindowBack2").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		
		
		$("#episode2").append($('<div class="myVideoWindow" id="episodeVideoWindow2"></div>'));
		
		$("#episodeVideoWindow2").css({display:"none", position: "absolute", top:"45px",left: "55px", width: "601px", height: "345px"});
		$("#episodeVideoWindow2").append('<img src="img/video_moldura_cin.png" border="0" style="position:absolute;display:block;top:0px;left:0px;" />');
		$("#episodeVideoWindow2").append('<img src="img/video_moldura.png" class="backface" border="0" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		
		if($.browser.mozilla)
		
			$("#episodeVideoWindow2").append('<video class="backface" style="position:absolute;display:none;z-index:2;width:585px;height:329px;top: 8px; left: 8px;" id="episodeVideo2"><source src="videos/picnic.webm"  type="video/webm" /></video>');
		else
			$("#episodeVideoWindow2").append('<video class="backface" style="position:absolute;display:none;z-index:2;width:585px;height:329px;top: 8px; left: 8px;" id="episodeVideo2"><source src="videos/picnic.mp4"  type="video/mp4" /></video>');
		
		
		$("#episodeVideoWindow2").append('<img src="img/picnic/video_frame.jpg" id="episodeVideoFrame2" class="backface" border="0" style="position:absolute;display:inline-block;top:8px;left:8px;width:585px;height:329px;z-index:3;" />');
		$("#episodeVideoWindow2").append('<div id="playVideoJanFavBTN2" style="width:54px; height:54px; display:block;position:absolute; cursor:pointer; z-index:3; left:50%;top:50%;margin-left:-27px; margin-top:-27px;"> <img src="img/videoPlayBTN.png"/> </div>');
		$("#playVideoJanFavBTN2").on("click", function(){
			//console.log("TESTE");
			$("#episodeVideoFrame2").css("display","none");
			if(isAndroid || isAndroidOlder || isAndroidTablet || isiPhone || isiPad)
			{
				document.getElementById('episodeVideo2').play();
			}
			else
			{
				document.getElementById('episodeVideo2').currentTime = 0.1;
				document.getElementById('episodeVideo2').play();
			}
			
			$(this).css("display", "none");
		});
		
		document.getElementById('episodeVideo2').addEventListener("ended", function(){   $("#playVideoJanFavBTN2").css("display", "block"); 			$("#episodeVideoFrame2").css("display","block");}, true);;
		
		
		
		
		document.getElementById('episodeVideo2').load();
		
		
		
		$('#episodeVideoWindow2').css({ transformOrigin: '50% 345px' });
		$("#episodeVideoWindow2").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		 
		$("#episode2").append($('<div class="perspectiveBackground" style="z-index:1" id="image1back2"></div>'));
		$("#episode2").append($('<div class="perspectiveBackground" style="z-index:2" id="image2back2"></div>'));
		$("#episode2").append($('<div class="perspectiveBackground" style="z-index:3" id="image3back2"></div>'));
		
		//$("#episode2").append($('<div class="perspectiveBackground" style="z-index:0" id="image4back2"></div>'));
		
		
		/*/////////////  adicionar imagens sequencia   /////////////*/

		$('#image1back2').css({display:"block", position: "absolute", top:"150px",left: "0px", width: "600px", height: "330px"});
		$('#image1back2').append('<img id="img_1" src="img/picnic/sequencia/frame_1.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_2" src="img/picnic/sequencia/frame_2.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_3" src="img/picnic/sequencia/frame_3.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_4" src="img/picnic/sequencia/frame_4.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_5" src="img/picnic/sequencia/frame_5.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_6" src="img/picnic/sequencia/frame_6.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_7" src="img/picnic/sequencia/frame_7.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_8" src="img/picnic/sequencia/frame_8.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		//$('#image1back').append('<img id="img_9" src="img/picnic/sequencia/frame_9.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		//$('#image1back').append('<img src="img/picnic/sequencia/frame_10.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image1back2').append('<img id="img_9" src="img/picnic/sequencia/frame_12.png" style="position:absolute;display:none;top:0px;left:0px;" />');
		
		
		/*  AQUI PADROES  */
		
		$('#image2back2').css({display:"block", position: "absolute", top:"130px",left: "530px", width: "167px", height: "196px"});
		$('#image2back2').append('<img src="img/picnic/bicicletaMala_padrao.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image2back2').css({ transformOrigin: '50% 196px' });
		$("#image2back2").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		
		$('#image3back2').css({display:"block", position: "absolute", "z-index":"6", top:"320px",left: "410px", width: "120px", height: "107px"});
		$('#image3back2').append('<img src="img/picnic/cachorro_padrao.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image3back2').css({ transformOrigin: '50% 107px' });
		$("#image3back2").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
	
	
		/*$('#image4back2').css({display:"block", position: "absolute", top:"-10px",left: "85px", width: "267px", height: "324px"});
		$('#image4back2').append('<img src="img/picnic/arvore_padrao.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image4back2').css({ transformOrigin: '50% 324px' });
		$("#image4back2").css({
			perspective: '1100px',
			rotateX: '-105deg'
		}); */



		$("#episode2").append($('<div class="perspectiveStyle" style="z-index:-1"id="image12"></div>'));
		$("#episode2").append($('<div class="perspectiveStyle" id="image22"></div>'));
		$("#episode2").append($('<div class="perspectiveStyle" id="image32"></div>'));
		$("#episode2").append($('<div class="perspectiveStyle" id="image42"></div>'));
		$("#episode2").append($('<div class="perspectiveStyle" id="image52"></div>'));
		
		$('#image12').css({display:"block", position: "absolute", 'z-index':'0', top:"-10px",left: "85px", width: "267px", height: "324px"});
		$('#image12').append('<img src="img/picnic/arvore_cinza.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image12').append('<img src="img/picnic/arvore.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		$('#image12').append('<img src="img/picnic/arvore_white.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#image12').css({ transformOrigin: '50% 324px' }); 
		$("#image12").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		$('#image12').on("mouseover",function(){
			$(".overingimage",this).css("opacity","0");
			forwardMouseEvent("mouseover");
		}).on("mouseout",function(){
			$(".overingimage",this).css("opacity","1");
			forwardMouseEvent("mouseout");
		});

/* CHAO*/


		$('#image22').css({display:"block", position: "absolute", 'z-index':'3', top:"138px",left: "292px", width: "97px", height: "158px"});
		$('#image22').append('<img src="img/picnic/pessoa.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		$('#image22').append('<img src="img/picnic/pessoa_white.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#image22').on("mouseover",function(){
			$(".overingimage",this).css("opacity","0");
			forwardMouseEvent("mouseover");
		}).on("mouseout",function(){
			$(".overingimage",this).css("opacity","1");
			forwardMouseEvent("mouseout");
		});
		$('#image22').css({ transformOrigin: '50% 158px' });
		$("#image22").css({
			perspective: '1100px', 
			rotateX: '0deg', opacity:0
		}); 



		$('#image32').css({display:"block", position: "absolute", 'z-index':'3', top:"264px",left: "194px", width: "291px", height: "128px"});
		
		$('#image32').append('<img src="img/picnic/sequencia/toalha.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:0;" />');
		
		$('#image32').css({ transformOrigin: '50% 128px' });
		$("#image32").css({
			perspective: '1100px', 
			rotateX: '0deg', opacity:0
		});




		$('#image42').css({display:"block", position: "absolute", 'z-index':'2', top:"130px",left: "530px", width: "167px", height: "196px"});
		$('#image42').append('<img src="img/picnic/bicicletaMala_cinza.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image42').append('<img src="img/picnic/bicicletaMala.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		$('#image42').append('<img src="img/picnic/bicicletaMala_white.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#image42').on("mouseover",function(){
			$(".overingimage",this).css("opacity","0");
			forwardMouseEvent("mouseover");
		}).on("mouseout",function(){
			$(".overingimage",this).css("opacity","1");
			forwardMouseEvent("mouseout");
		});
		
		$('#image42').css({ transformOrigin: '50% 196px' });
		$("#image42").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});      
		
		
		$('#image52').css({display:"block", position: "absolute", 'z-index':'6', top:"320px",left: "410px", width: "120px", height: "107px"});
		$('#image52').append('<img src="img/picnic/cachorro_cinza.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#image52').append('<img src="img/picnic/cachorro.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;z-index:1;" />');
		$('#image52').append('<img src="img/picnic/cachorro_white.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#image52').on("mouseover",function(){
			$(".overingimage",this).css("opacity","0");
			forwardMouseEvent("mouseover");
		}).on("mouseout",function(){
			$(".overingimage",this).css("opacity","1");
			forwardMouseEvent("mouseout");
		});
		$('#image52').css({ transformOrigin: '50% 107px' });
		$("#image52").css({
			perspective: '1100px', 
			rotateX: '-105deg'
		});  
		
		    

		//TweenMax.to($("#episode1"),0.5,{css:{opacity: 1},ease: Expo.easeInOut}); 
		TweenMax.to($("#episode2"),0.5,{css:{opacity: 1},ease: Expo.easeInOut});
		
		 $('#image12').transition({ rotateX: '0deg' , delay: 500, onComplete:function(){
		 			idSequence=0;
		 			//alert("ole2");
		 			seqSetInterval = setInterval(imageSequencia,(1000/5));
		 		}
		 	}, 700, 'in-out');
		
		
		
		//TweenMax.delayedCall(1.7,animateLeftBaloon,[]);   
		//TweenMax.delayedCall(3.4,animateRightBaloon,[]);
		monthsToShow[currentSelectedMonth].openDays();

}

function buildMarcAprCalendarImages(){
	
		$('#image22').transition({ opacity: 1 , delay: 500}, 700, 'in-out');
		$('#image32').transition({ opacity: 1 , delay: 1000}, 700, 'in-out');
		$('#image42').transition({ rotateX: '0deg' , delay: 1500}, 700, 'in-out');
		$('#image52').transition({ rotateX: '0deg' , delay: 2000}, 700, 'in-out');	
	
}




function imageSequencia(){
	
	
	if(idSequence > 9){
		//alert("ole MATA: ")
		//console.log("ole MATA: ", seqSetInterval)
		clearInterval(seqSetInterval);
		seqSetInterval = null;
		buildMarcAprCalendarImages();
	}else{
	
		//console.log("SSEQ"+idSequence);
		if(idSequence!=0){
			var text = "#img_"+(idSequence-1);
			$("#image1back2").find(text).css("display", "none");
		}
		
		$("#image1back2").find("#img_"+idSequence).css("display", "block");
		idSequence++;	
	}
}


	/*///////////// MAY JUN //////////////////////////*/
	
function buildMayJunCalendar()
{
		
		$("#playVideoBtn").css({display:"none"});
		
	monthsToShow[currentSelectedMonth].objects = [];
	
	
	/*Alterar opacidade*/
	
	$("#episode3").css("opacity","0").css("display","block"); 
		
		
		$(".contentEpisode3:first-child").append($('<div class="perspectiveBackground" style="z-index:1" id="pessoa1"></div>'));
		$(".contentEpisode3:first-child").append($('<div class="perspectiveBackground" id="pessoa1back"></div>'));
		
		$(".contentEpisode3:first-child").append($('<div class="perspectiveBackground" style="z-index:2" id="casal"></div>'));
		$(".contentEpisode3:first-child").append($('<div class="perspectiveBackground" style="z-index:3" id="arvoreG"></div>'));
		
		$("#episode3").append($('<div class="perspectiveBackground" style="z-index:4" id="folhas1"></div>'));
		$("#episode3").append($('<div class="perspectiveBackground" style="z-index:4" id="folhas1p"></div>'));
		
		
		$(".contentEpisode3:not(.contentEpisode3:first-child)").append($('<div class="perspectiveBackground" style="z-index:5" id="pessoa2"></div>'));
		$(".contentEpisode3:not(.contentEpisode3:first-child)").append($('<div class="perspectiveBackground" id="pessoa2back"></div>'));
		
		$("#episode3").append($('<div class="perspectiveBackground" style="z-index:6" id="folhas2"></div>'));
		

		
		$('#pessoa1').css({display:"block", position: "absolute", 'z-index':'0', top:"0px",left: "505px", width: "120px", height: "360px"});
		$('#pessoa1').append('<img src="img/casorio/pessoa1_cinza.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#pessoa1').append('<img src="img/casorio/pessoa1.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#pessoa1').append('<img src="img/casorio/pessoa1_white.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#pessoa1').css({ transformOrigin: '50% 360px' }); 
		$("#pessoa1").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});  
		
		
		

		/* background*/
		$('#pessoa1back').css({display:"block", position: "absolute", top:"0px",left: "505px", width: "120px", height: "360px"});
		$('#pessoa1back').append('<img src="img/casorio/pessoa1_back.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#pessoa1back').css({ transformOrigin: '50% 360px' });
		$("#pessoa1back").css({
			perspective: '1100px',
			rotateX: '-105deg'
		}); 
		
		/*---*/
		
		$('#casal').css({display:"block", position: "absolute", opacity:"0", 'z-index':'1', top:"25px",left: "200px", width: "299px", height: "197px"});
		$('#casal').append('<img src="img/casorio/casalSeq1.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;" />');
		
		
		
		$('#arvoreG').css({display:"block", position: "absolute", opacity:"0", 'z-index':'2', top:"120px",left: "100px", width: "468px", height: "390px"});
		$('#arvoreG').append('<img src="img/casorio/arvore.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;" />');
		
		$('#folhas1').css({display:"block", opacity:"0", position: "absolute", 'z-index':'4', top:"0px",left: "0px", width: "100%", height: "100%", "background-position":"bottom", overflow:"hidden","background-image":"url(img/casorio/folhas.png)", "background-repeat":"repeat-x"});
		$('#folhas1p').css({display:"block", opacity:"0", position: "absolute", 'z-index':'4', top:"0px",left: "0px", width: "100%", height: "100%", "background-position":"bottom", overflow:"hidden","background-image":"url(img/casorio/folhasp.png)", "background-repeat":"repeat-x"});
		
		$('#pessoa2').css({display:"block", position: "absolute", 'z-index':'4', top:"180px",left: "50px", width: "195px", height: "286px"});
		$('#pessoa2').append('<img src="img/casorio/pessoa2_cinza.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#pessoa2').append('<img src="img/casorio/pessoa2.png" class="backface" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#pessoa2').append('<img src="img/casorio/pessoa2_white.png" class="backface overingimage" style="position:absolute;opacity:1;display:block;top:0px;left:0px;z-index:2;transition: opacity 0.2s ease-in-out;-webkit-transition: opacity 0.2s ease-in-out;-moz-transition: opacity 0.2s ease-in-out;-ms-transition: opacity 0.2s ease-in-out;-o-transition: opacity 0.2s ease-in-out;" />');
		$('#pessoa2').css({ transformOrigin: '50% 286px' }); 
		$("#pessoa2").css({
			perspective: '1100px',
			rotateX: '-105deg'
		});    
		  
		
		
		/* background*/
		$('#pessoa2back').css({display:"block", position: "absolute", top:"180px",left: "50px", width: "195px", height: "286px"});
		$('#pessoa2back').append('<img src="img/casorio/pessoa2_back.png" style="position:absolute;display:block;top:0px;left:0px;" />');
		$('#pessoa2back').css({ transformOrigin: '50% 286px' });
		$("#pessoa2back").css({
			perspective: '1100px',
			rotateX: '-105deg'
		}); 
		
		
		
		
		
		$('#folhas2').css({display:"block", opacity:"0", position: "absolute", 'z-index':'5', top:"0px",left: "0px", width: "100%", height: "100%", overflow:"hidden", "background-image":"url(img/casorio/folhas_blur.png)", "background-repeat":"repeat-x"});
		
		
	
	/*----------------*/
	
		
		var p = $("#pessoa1")
		var offset = p.offset();
		
		var p2 = $("#pessoa2")
		var offset2 = p2.offset();
		
		var c2 = $("#casal")
		var offsetC = c2.offset();
		
		
		
		var casalboo = false;
		
		
		document.onmousemove = getMouseXY;
		
		function getMouseXY(e)
		{
			mousePosition.x = (window.Event) ? e.pageX : event.clientX;
			mousePosition.y = (window.Event) ? e.pageY - $("#fullscreenImg").offset().top : event.clientY - $("#fullscreenImg").offset().top;
		} 
				
		fullScreenImageInt = setInterval(folhasMove,(1000/30));
		
		
		
			var espX1 = 30;
			var espY1 = 5;
			
			var espX1folhasp = 100;
			var espY1folhasp = 30;
			
			
			var espX2 = 200;
			var espY2 = 45;
		
		
		function folhasMove()
		{
			var easing = 5;
			var relationX = ($(window).width() - $("#fullIMG").width()) / $(window).width();
			var relationY = ($(window).height() - $("#fullIMG").height()) / $(window).height();
			//console.log("relationY:", relationY);
			
			var ll = $("#folhas1").css("background-position-x");
			var tt = $("#folhas1").css("background-position-y");
			alert("tt-"+tt);
			
			
			ll = Math.floor(ll.replace("px",""));
			tt = Math.floor(tt.replace("px",""));
			
			console.log("TT :", tt);
			console.log("relationY: ", relationY);
			console.log("mousePosition: ", mousePosition);
			console.log("easing: ", easing)
			console.log("AQUI: ",-parseInt((tt - (relationY * mousePosition.y)) / easing));
			
			
			
			tt = tt -parseInt((tt - (relationY * mousePosition.y)) / easing);
			ll = ll -parseInt((ll - (relationX * mousePosition.x)) / easing);
			
			
			
			$("#fullIMG").css("top" , tt);
			$("#fullIMG").css("left",  ll);
			/*
			*/
			
			
			var relationX = parseInt((mousePosition.x * 100) / $(window).width());
			var relationY = parseInt((mousePosition.y * 100) / $(window).height());
			
			
			
		}
		
		
		
		
		/*--FF --*/
		
		/*
		$("body").mousemove(function(event) {
			
			if(event.pageX-20 > offset.left && event.pageX-20 <offset.left +$("#pessoa1").width() ){
				
				
				$("#pessoa1 > .overingimage").css("opacity","0");
				
			}else{
				$("#pessoa1 > .overingimage").css("opacity","1");
			}
			
			
			
			if(event.pageX-20 > offset2.left && event.pageX-20 <offset2.left +$("#pessoa2").width() ){
				
				
				$("#pessoa2 > .overingimage").css("opacity","0");
				
			}else{
				$("#pessoa2 > .overingimage").css("opacity","1");
			}
			
			console.log("mouse "+event.pageX+" / "+event.pageY, "div"+offsetC.left+" / "+offsetC.top )
			
			if(event.pageX-20 > offsetC.left && event.pageX-20 <offsetC.left +$("#casal").width() ){
				if(casalboo == false){
					seqSetInterval = setInterval(casorioSequence,(1000/3));
					casalboo= true;
				}
			}else{
				clearInterval(seqSetInterval);
				seqSetInterval = null;
				casalboo= false;
			}




			var windowW= $(window).width();
			var windowH= $(window).height();
			
			var espX1 = 30;
			var espY1 = 5;
			
			var espX1folhasp = 100;
			var espY1folhasp = 30;
			
			
			var espX2 = 200;
			var espY2 = 45;
			var bckH = 768;
			
			var posX = (event.pageX*100)/windowW;
			var posY = (event.pageY*100)/windowH;
			
			
			var tmp = 0;
			var tmpfolhas= 0;
			
			var tmp2 = 0;
			
			var tmpY = 0;
			var tmpYfolhas= 0;
			var tmpY2 = 0;
			
			if(posX < 50){
				var posX2 = ((event.pageX*100)/(windowW/2)) - 100;
			}else if(posX > 50){
				var posX2 = (((event.pageX-(windowW/2))*100)/(windowW/2));	
			}
			tmp = (posX2 / 100) * espX1;
			tmp2 = (posX2 / 100) * espX2;
			
			tmpfolhas = (posX2 / 100) * espX1folhasp;
			
			
			if(posY < 50){
				var posY2 = ((event.pageY*100)/(windowH/2)) - 100;
			}else if(posY > 50){
				var posY2 = (((event.pageY-(windowH/2))*100)/(windowH/2));	
			}
			var tmp3 = $(window).height() - bckH;
			tmp3 = tmp3 + (((posY / 100) - 1) * espY2);
			
			tmpY = (posY2 / 100) * espY1;
			tmpYfolhas =tmp3 + (((posY / 100) - 1) * espY1folhasp);
			
			tmpY2 = (posY2 / 100) * espY2;
			
			$("#folhas1").css({"background-position": tmp+'px '+tmp3+'px' });
			
			$("#folhas1p").css({"background-position": tmpfolhas+'px '+tmpYfolhas+'px' });
			
			$("#folhas2").css({"background-position": tmp2+'px '+tmpY2+'px' });
			
		});
	*/
	/*----*/
	
		TweenMax.to($("#episode3"),0.5,{css:{opacity: 1},ease: Expo.easeInOut}); 
		$('#pessoa1').transition({ rotateX: '0deg', delay: 500}, 700, 'in-out');
		
		
		$('#arvoreG').transition({opacity:1, delay:800},700,'in-out');
		$('#casal').transition({opacity:1, delay:1200},700,'in-out');
		$('#pessoa2').transition({ rotateX: '0deg', delay: 1500}, 700, 'in-out');
		
		$('#folhas1').transition({opacity:1, delay:800},700,'in-out');
		$('#folhas1p').transition({opacity:1, delay:800},700,'in-out');
		$('#folhas2').transition({opacity:1, delay:900},700,'in-out');
	
	monthsToShow[currentSelectedMonth].openDays();
	
	
}


var soma = 0;
function casorioSequence(){
	console.log("soma- "+soma)
				if(soma<6){
					console.log("entra")
					soma= soma+1;
				}else{
					soma=1;
				}
				
				$('#casal > img').attr('src', 'img/casorio/casalSeq'+soma+'.png');
				
				
			
}












/*////////////////////////////// END BUILD ///////////////////////////////////////////*/

/*////////////////// PLAY VIDEO //////////////////*/
function playVideoJanFeb()
{
	//console.log("PLAY: JanFeb");
	
	
	
	
	
		$('#image3').transition({ rotateX: '-105deg' }, 700, 'in-out', function(){ $("#image3").css("display","none"); $("#image3back").css("display","none"); });
		$('#image2').transition({ rotateX: '-105deg' , delay: 600}, 700, 'in-out', function(){ $("#image2").css("display","none"); $("#image2back").css("display","none"); });
		$('#image1').transition({ rotateX: '-105deg' , delay: 1200}, 700, 'in-out', function(){ 
				
				$("#image1").css("display","none"); 
				$("#image1back").css("display","none");
				$('#episodeVideoWindow').css("display","block"); 
				$('#episodeVideoWindowBack').css("display","block"); 
				$('#episodeVideoWindow').transition({ rotateX: '0deg' }, 700, 'in-out',function(){ 
					//console.log("ROTATE ANIM END");
					//$("#episodeVideoFrame").remove(); 
					$("#episodeVideo").css("display","inline-block");  
				
				}); 
				
				
		});
		
		$("#playVideoJanFavBTN").css("display", "block");
		
		
		$("#playVideoBtn").off("click",monthsToShow[currentSelectedMonth].playVideo);
		//console.log("Video Off",$("#playVideoBtn"));
		
		TweenMax.to($("#playVideoBtn"),0.5,{css:{opacity: 0}, ease: Expo.easeInOut, onComplete: function(){
			$("#playVideoBtn").css("display","none");
		}});
		$("#closeVideoBtn").css("opacity","0").css("display","block");
		
		
		$("#closeVideoBtn").on("click",monthsToShow[currentSelectedMonth].reverseVideo);
		
		TweenMax.to($("#closeVideoBtn"),0.5,{css:{opacity: 1}, delay: 0.5, ease: Expo.easeInOut});
		
		monthsToShow[currentSelectedMonth].videoStatus = true;
		
}


function playVideoMarcApr()
{
	//console.log("PLAY: MarcApr");
	
		$("#image1back2").transition({ opacity: 0, delay: 1800}, 700, 'in-out', function(){ 
			$("#image1back2").find("#img_9").css("display","none");
			$("#image1back2").find("#img_0").css("display","block");
			
			$("#image1back2").css("display","none");
			
			});
		$('#image52').transition({ rotateX: '-105deg' }, 700, 'in-out', function(){ $("#image52").css("display","none"); $("#image3back2").css("display","none"); });
		$('#image42').transition({ rotateX: '-105deg' , delay: 500}, 700, 'in-out', function(){ $("#image42").css("display","none"); $("#image2back2").css("display","none"); });
		$('#image32').transition({ opacity: 0, delay: 1000}, 700, 'in-out', function(){ $("#image32").css("display","none");});
		$('#image22').transition({ opacity: 0, delay: 1500}, 700, 'in-out', function(){ $("#image22").css("display","none"); });
		$('#image12').transition({ rotateX: '-105deg' , delay: 2000}, 700, 'in-out', function(){ 
				
				$("#image12").css("display","none"); 
				//$("#image1back").css("display","none");
				
				 //$("#image4back2").css("display","none");
				
				
				$('#episodeVideoWindow2').css("display","block"); 
				$('#episodeVideoWindowBack2').css("display","block"); 
				$('#episodeVideoWindow2').transition({ rotateX: '0deg' }, 700, 'in-out',function(){ 
					//console.log("ROTATE ANIM END");
					//$("#episodeVideoFrame2").css("display","none")
					$("#episodeVideo2").css("display","inline-block");  
				
				}); 
				
				
		});
		
		$("#playVideoJanFavBTN2").css("display", "block");
		
		
		$("#playVideoBtn").off("click",monthsToShow[currentSelectedMonth].playVideo);
		//console.log("Video Off",$("#playVideoBtn"));
		
		
		TweenMax.to($("#playVideoBtn"),0.5,{css:{opacity: 0}, ease: Expo.easeInOut, onComplete: function(){
			$("#playVideoBtn").css("display","none");
		}});
		$("#closeVideoBtn").css("opacity","0").css("display","block");
		
		
		$("#closeVideoBtn").on("click",monthsToShow[currentSelectedMonth].reverseVideo);
		
		TweenMax.to($("#closeVideoBtn"),0.5,{css:{opacity: 1}, delay: 0.5, ease: Expo.easeInOut});
		
		monthsToShow[currentSelectedMonth].videoStatus = true;
		
		
}



function playVideoMayJun()
{
	
}


/*//////////////////////////////*/

function reverseVideoJanFeb(evt)
{
	//console.log("REVERSE JAN FEB");
		evt.preventDefault();
	
	$("#closeVideoBtn").off("click",monthsToShow[currentSelectedMonth].reverseVideo);
	
	
	TweenMax.to($("#closeVideoBtn"),0.5,{css:{opacity: 0}, ease: Expo.easeInOut, onComplete: function(){
		$("#closeVideoBtn").css("display","none");
	}});
	
	document.getElementById('episodeVideo').pause();
	$("#playVideoBtn").css("opacity","0").css("display","block");
	
	
	$("#playVideoBtn").on("click",monthsToShow[currentSelectedMonth].playVideo);
	
	
	TweenMax.to($("#playVideoBtn"),0.5,{css:{opacity: 1}, delay: 0.5, ease: Expo.easeInOut});
	
		
	$('#episodeVideoWindow').transition({ rotateX: '-105deg' }, 700, 'in-out', function () { 
		
		$('#episodeVideoWindow').css("display","none"); 
		$('#episodeVideoWindowBack').css("display","none");
		$('#episodeVideoFrame').css("display","inline-block"); 
	
		 
		 $("#image3").css("display","block"); $("#image3back").css("display","block");
		 $("#image2").css("display","block"); $("#image2back").css("display","block");
		 $("#image1").css("display","block"); $("#image1back").css("display","block");

		 $('#image3').transition({ rotateX: '0deg' , delay: 500}, 700, 'in-out');
		 $('#image2').transition({ rotateX: '0deg' , delay: 1100}, 700, 'in-out');
		 $('#image1').transition({ rotateX: '0deg' , delay: 1700}, 700, 'in-out');
		
	
	});
	monthsToShow[currentSelectedMonth].videoStatus = false;
	return false;
}


function reverseVideoMarcApr(evt)
{
	evt.preventDefault();
	//console.log("REVERSE MAR APR");
	
	$("#closeVideoBtn").off("click",monthsToShow[currentSelectedMonth].reverseVideo);
	
	
	TweenMax.to($("#closeVideoBtn"),0.5,{css:{opacity: 0}, ease: Expo.easeInOut, onComplete: function(){
		$("#closeVideoBtn").css("display","none");
	}});
	
	document.getElementById('episodeVideo2').pause();
	 
	document.getElementById('episodeVideo2').currentTime = 0.1;
	
	$("#playVideoBtn").css("opacity","0").css("display","block");
	
	
	$("#playVideoBtn").on("click",monthsToShow[currentSelectedMonth].playVideo);
	
	
	TweenMax.to($("#playVideoBtn"),0.5,{css:{opacity: 1}, delay: 0.5, ease: Expo.easeInOut});
	
		
	$('#episodeVideoWindow2').transition({ rotateX: '-105deg' }, 700, 'in-out', function () { 
		
		$('#episodeVideoWindow2').css("display","none"); 
		$('#episodeVideoWindowBack2').css("display","none");
		$('#episodeVideoFrame2').css("display","block");
		
			
			$("#image1back2").find("#img_9").css("display","none");
			$("#image1back2").find("#img_0").css("display","block");
			
			
		$("#image1back2").css("display","block");
		$("#image1back2").css("opacity",1);
		
		
		
			
		$("#image52").css("display","block"); $("#image3back2").css("display","block");
		 $("#image42").css("display","block"); $("#image2back2").css("display","block");	
		 $("#image32").css("display","block");
		 $("#image22").css("display","block");
		 $("#image12").css("display","block");//$("#image4back2").css("display","block");
		
		 $('#image12').transition({ rotateX: '0deg' , delay: 0}, 700, 'in-out');
		 idSequence=0;
		// alert("ole1")
		seqSetInterval = setInterval(imageSequencia,(1000/5));
		
	
	});
	monthsToShow[currentSelectedMonth].videoStatus = false;
	return false;
}

function reverseVideoMayJun(evt)
{
	
}







function closeJanFebCalendar(callback)
{
	$("#closeVideoBtn").off("click",monthsToShow[currentSelectedMonth].reverseVideo);
	
	$("#playVideoBtn").off("click",monthsToShow[currentSelectedMonth].playVideo);
	
	
	monthsToShow[currentSelectedMonth].closeDays();
	if(monthsToShow[currentSelectedMonth].videoStatus)
	{
		document.getElementById('episodeVideo').pause();
		
		
		$("#playVideoJanFavBTN").off("click");
		$("#playVideoJanFavBTN").remove();
		
		
		
		TweenMax.to($("#closeVideoBtn"),0.5,{css:{opacity: 0}, delay: 0.6, ease: Expo.easeInOut, onComplete: function(){
			$("#closeVideoBtn").css("display","none");
		}});
		
		TweenMax.to($("#navigationMenu"),0.5,{css:{opacity: 0}, delay: 1, ease: Expo.easeInOut, onComplete: function(){
			$("#navigationMenu").css("display","none"); 
			rebuildMainStage();
		}});
		TweenMax.to(episodeBackground, 1, {alpha: 0, delay: 1.4, ease: Expo.easeInOut, onComplete:function(){
			episodeBackground = null;
			stage.removeChild(episodeBackground);
		}});
		
		$('#episodeVideoWindow').transition({ rotateX: '-105deg' }, 700, 'in-out', function () { 
			$('#episodeVideoWindow').css("display","none"); 
			$('#episodeVideoWindowBack').css("display","none");
			$("#episode1").css("opacity","0").css("display","none"); 
			$("#episode1").empty();
		});	
		
	}
	else
	{
		$('#image3').transition({ rotateX: '-105deg' }, 700, 'in-out', function(){ $("#image3").css("display","none"); $("#image3back").css("display","none"); });
		$('#image2').transition({ rotateX: '-105deg' , delay: 600}, 700, 'in-out', function(){ $("#image2").css("display","none"); $("#image2back").css("display","none"); });
		$('#image1').transition({ rotateX: '-105deg' , delay: 1200}, 700, 'in-out', function(){ $("#image1").css("display","none"); $("#image1back").css("display","none"); 
			
				$("#episode1").css("opacity","0").css("display","none"); 
				$("#episode1").empty();
				
	
		});
		TweenMax.to($("#playVideoBtn"),0.5,{css:{opacity: 0}, delay: 1.8, ease: Expo.easeInOut, onComplete: function(){
			$("#playVideoBtn").css("display","none");
		
		}});
		
		TweenMax.to($("#navigationMenu"),0.5,{css:{opacity: 0}, delay: 2.2, ease: Expo.easeInOut, onComplete: function(){
			$("#navigationMenu").css("display","none"); destroyNavigation(); rebuildMainStage(); 
		}});
		TweenMax.to(episodeBackground, 1, {alpha: 0, delay: 2.6, ease: Expo.easeInOut, onComplete:function(){
			episodeBackground = null;
			stage.removeChild(episodeBackground);
		}});
	}
	TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[0]);
	TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[1]); 
	
	TweenMax.to(monthsToShow[currentSelectedMonth].objects[0], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
		stage.removeChild(monthsToShow[currentSelectedMonth].objects[0]);
	}});
	
	TweenMax.to(monthsToShow[currentSelectedMonth].objects[1], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
		stage.removeChild(monthsToShow[currentSelectedMonth].objects[1]);
	}});
	

	
}


function closeMarcAprCalendar(callback)
{
	/*TODO*/
	$("#closeVideoBtn").off("click",monthsToShow[currentSelectedMonth].reverseVideo);
	$("#playVideoBtn").off("click",monthsToShow[currentSelectedMonth].playVideo);
		
	//console.log("PHASE 1");
	monthsToShow[currentSelectedMonth].closeDays();
	//console.log("PHASE 2");	
	
	if(monthsToShow[currentSelectedMonth].videoStatus)
	{
		document.getElementById('episodeVideo2').pause();
		document.getElementById('episodeVideo2').currentTime = 0.1;
			//console.log("VIDEO ON");	
	
		
		$("#playVideoJanFavBTN").off("click");
		$("#playVideoJanFavBTN").remove();
		TweenMax.to($("#closeVideoBtn"),0.5,{css:{opacity: 0}, delay: 0.6, ease: Expo.easeInOut, onComplete: function(){
			$("#closeVideoBtn").css("display","none");
		}});
		
		TweenMax.to($("#navigationMenu"),0.5,{css:{opacity: 0}, delay: 1, ease: Expo.easeInOut, onComplete: function(){
			$("#navigationMenu").css("display","none"); rebuildMainStage();
		}});
		TweenMax.to(episodeBackground, 1, {alpha: 0, delay: 1.4, ease: Expo.easeInOut, onComplete:function(){
			episodeBackground = null;
			stage.removeChild(episodeBackground);
		}});
		
		$('#episodeVideoWindow2').transition({ rotateX: '-105deg' }, 700, 'in-out', function () { 
			
			$('#episodeVideoWindow2').css("display","none"); 
			$('#episodeVideoWindowBack2').css("display","none");
			
			$("#episode2").css("opacity","0").css("display","none"); 
			$("#episode2").empty();
			
			
		});	
	}
	else
	{
			//console.log("VIDEO OFF");	
			
			$("#image1back2").transition({ opacity: 0, delay: 1800}, 700, 'in-out', function(){ 
				$("#image1back2").find("#img_9").css("display","none");
				$("#image1back2").find("#img_0").css("display","block");
				
				$("#image1back2").css("display","none");
			});
			
		$('#image52').transition({ rotateX: '-105deg' }, 700, 'in-out', function(){ $("#image52").css("display","none"); $("#image3back2").css("display","none"); });
		$('#image42').transition({ rotateX: '-105deg' , delay: 500}, 700, 'in-out', function(){ $("#image42").css("display","none"); $("#image2back2").css("display","none"); });
		$('#image32').transition({ opacity: 0, delay: 1000}, 700, 'in-out', function(){ $("#image32").css("display","none");});
		$('#image22').transition({ opacity: 0, delay: 1500}, 700, 'in-out', function(){ $("#image22").css("display","none"); });
		$('#image12').transition({ rotateX: '-105deg' , delay: 2000}, 700, 'in-out', function(){ 
				
				$("#image12").css("display","none"); 
				//$("#image4back2").css("display","none");
				
				$("#episode2").css("opacity","0").css("display","none"); 
				$("#episode2").empty();
				
				
		});
	//console.log("PHASE 3");
		TweenMax.to($("#playVideoBtn"),0.5,{css:{opacity: 0}, delay: 1.8, ease: Expo.easeInOut, onComplete: function(){
			$("#playVideoBtn").css("display","none");
		}});
	//console.log("PHASE 4");
	
		TweenMax.to($("#navigationMenu"),0.5,{css:{opacity: 0}, delay: 2.2, ease: Expo.easeInOut, onComplete: function(){
			$("#navigationMenu").css("display","none"); rebuildMainStage();
		}});
	//console.log("PHASE 5");

		TweenMax.to(episodeBackground, 1, {alpha: 0, delay: 2.6, ease: Expo.easeInOut, onComplete:function(){
			episodeBackground = null;
			stage.removeChild(episodeBackground);
		}});
	//console.log("PHASE 6");
	}
//	TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[0]);
//	TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[1]); 
	
//	TweenMax.to(monthsToShow[currentSelectedMonth].objects[0], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
//		stage.removeChild(monthsToShow[currentSelectedMonth].objects[0]);
//	}});
	
//	TweenMax.to(monthsToShow[currentSelectedMonth].objects[1], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
//		stage.removeChild(monthsToShow[currentSelectedMonth].objects[1]);
//	}});
	
	
}

function closeMayJunCalendar(callback)
{
	
	/*TODO*/
	
	
	console.log("aqui "+ currentSelectedMonth);
	
	//monthsToShow[currentSelectedMonth].closeDays();
	
	
		monthsToShow[currentSelectedMonth].closeDays();
		
		//TweenMax.to($("#episode3"),0.5,{css:{opacity: 0},ease: Expo.easeInOut}); 
		
		TweenMax.to(episodeBackground, 1, {alpha: 0, delay: 1.4, ease: Expo.easeInOut, onComplete:function(){
			episodeBackground = null;
			stage.removeChild(episodeBackground);
		}});
		
		$('#pessoa2').transition({ rotateX: '-115deg', delay: 100}, 700, 'in-out');
		$('#pessoa2back').transition({opacity:0, delay:100},700,'in-out');
		$('#casal').transition({opacity:0, delay:500},700,'in-out');
		
		$('#pessoa1').transition({ rotateX: '-115deg', delay: 900}, 700, 'in-out');
		$('#pessoa1back').transition({opacity:0, delay:900},700,'in-out');
		
		$('#arvoreG').transition({opacity:0, delay:900},700,'in-out');
		
		$('#folhas1').transition({opacity:0, delay:1200},700,'in-out');
		$('#folhas1p').transition({opacity:0, delay:1200},700,'in-out');
		$('#folhas2').transition({opacity:0, delay:1300},700,'in-out');
		
			
		TweenMax.to($("#navigationMenu"),0.5,{css:{opacity: 0}, delay: 2, ease: Expo.easeInOut, onComplete: function(){
			$("#navigationMenu").css("display","none"); 
			$(".contentEpisode3").empty();
			$("#folhas1").remove(); 
			$("#folhas1p").remove(); 
			$("#folhas2").remove(); 
			//destroyNavigation(); 
			
			//TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[0]);
			//TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[1]); 
			
			$("#episode3").css({display:"none"});
			
			rebuildMainStage();
			
		}});
			
}





function fechaVideo(){
	monthsToShow[currentSelectedMonth].closeDays();
			
			document.getElementById('episodeVideo').pause();
			
			
			$("#playVideoJanFavBTN").off("click");
			
			$("#playVideoJanFavBTN").remove();
			
			TweenMax.to($("#closeVideoBtn"),0.5,{css:{opacity: 0}, delay: 0.6, ease: Expo.easeInOut, onComplete: function(){
				$("#closeVideoBtn").css("display","none");
			}});
			
			TweenMax.to($("#navigationMenu"),0.5,{css:{opacity: 0}, delay: 1, ease: Expo.easeInOut, onComplete: function(){
				$("#navigationMenu").css("display","none");
			}});
			
			TweenMax.to(episodeBackground, 1, {alpha: 0, delay: 1.4, ease: Expo.easeInOut, onComplete:function(){
				episodeBackground = null;
				stage.removeChild(episodeBackground);
			}});
			
			$('#episodeVideoWindow').transition({ rotateX: '-105deg' }, 700, 'in-out', function () { 
				
				$('#episodeVideoWindow').css("display","none"); 
				$('#episodeVideoWindowBack').css("display","none");
				
				$("#episode1").css("opacity","0").css("display","none"); 
				
				
				
				
			});	
	
}

function closePageCalendarJanFev(){
	
		if(currentSelectedMonth !=1){
			
			fechaVideo();
			
			
			
					$('#image3').transition({ rotateX: '-105deg' }, 700, 'in-out', function(){ $("#image3").css("display","none"); $("#image3back").css("display","none"); });
					$('#image2').transition({ rotateX: '-105deg' , delay: 600}, 700, 'in-out', function(){ $("#image2").css("display","none"); $("#image2back").css("display","none"); });
					$('#image1').transition({ rotateX: '-105deg' , delay: 1200}, 700, 'in-out', function(){ 
								$("#image1").css("display","none"); 
								$("#image1back").css("display","none"); 
								
								$("#episode1").css("opacity","0").css("display","none"); 
								
								stage.removeChild(episodeBackground);
								TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[0]);
								TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[1]); 
								
								TweenMax.to(monthsToShow[currentSelectedMonth].objects[0], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
									stage.removeChild(monthsToShow[currentSelectedMonth].objects[0]);
								}});
								
								TweenMax.to(monthsToShow[currentSelectedMonth].objects[1], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
									stage.removeChild(monthsToShow[currentSelectedMonth].objects[1]);
									
									
									
									//$("#episode1").empty();
								buildDesiredCalendar();
								}});
									
								
								
								
								
								
			});
				
		//currentSelectedMonth = currentSelectedMonth-1;
	
	}
	
}


function closePageCalendarMarcApr(){
	
	if(currentSelectedMonth !=2){
		
		fechaVideo();
		
		$("#image1back").transition({ opacity: 0, delay: 1800}, 700, 'in-out', function(){ 
			$("#image1back").find("#img_9").css("display","none");
			$("#image1back").find("#img_0").css("display","block");
			
			$("#image1back").css("display","none");
			
			});
		$('#image5').transition({ rotateX: '-105deg' }, 700, 'in-out', function(){ $("#image5").css("display","none"); $("#image3back").css("display","none"); });
		$('#image4').transition({ rotateX: '-105deg' , delay: 500}, 700, 'in-out', function(){ $("#image4").css("display","none"); $("#image2back").css("display","none"); });
		$('#image3').transition({ opacity: 0, delay: 1000}, 700, 'in-out', function(){ $("#image3").css("display","none");});
		$('#image2').transition({ opacity: 0, delay: 1500}, 700, 'in-out', function(){ $("#image2").css("display","none"); });
		$('#image1').transition({ rotateX: '-105deg' , delay: 2000}, 700, 'in-out', function(){ 
				
				$("#image1").css("display","none"); 
				$("#image4back").css("display","none");
				
				
				stage.removeChild(episodeBackground);
								TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[0]);
								TweenMax.killTweensOf(monthsToShow[currentSelectedMonth].objects[1]); 
								
								TweenMax.to(monthsToShow[currentSelectedMonth].objects[0], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
									stage.removeChild(monthsToShow[currentSelectedMonth].objects[0]);
								}});
								
								TweenMax.to(monthsToShow[currentSelectedMonth].objects[1], 0.5, {alpha: 0, ease: Expo.easeInOut, onComplete:function(){
									stage.removeChild(monthsToShow[currentSelectedMonth].objects[1]);
									
									
									
									//$("#episode1").empty();
								buildDesiredCalendar();
								}});
				
				
		});
		
		
	}
	
}

function closePageCalendarMayJun(){
	
	
	
}



function animateLeftBaloon()
{
	var Values = [];
	var finalValue = (Math.floor(Math.random() * (15 - 10 + 1)) + 10);
	var normalPosition = (stageWidth/4) - (monthsToShow[currentSelectedMonth].objects[0].image.width/2);
	
	monthsToShow[currentSelectedMonth].objects[0].y = stageHeight;
	var factor = stageHeight / finalValue;
	var decrement = stageHeight-factor;
	var variationFactorMax = 150;
	var variationFactorMin = 100;
	var controlVal = 1;
	
	for(var i=0; i<finalValue; i++)
	{
		
		if((i+1)==finalValue)
			decrement = -monthsToShow[currentSelectedMonth].objects[0].image.height;
		
		Values.push({x: (normalPosition + (controlVal  * (Math.floor(Math.random() * (variationFactorMax - variationFactorMin + 1)) + variationFactorMin))), y: decrement});
		controlVal = controlVal * -1;
		decrement = decrement-factor;
	}
	//console.log("animateLeftBaloon",Values, decrement,monthsToShow[currentSelectedMonth].objects[0] )
	TweenMax.to(monthsToShow[currentSelectedMonth].objects[0],(Math.floor(Math.random() * (80 - 50 + 1)) + 50),{bezier:{type: "soft", values:Values}, onComplete: animateLeftBaloon,ease: Power0.easeInOut})

}
function animateRightBaloon()
{
	var Values = [];
	var finalValue = (Math.floor(Math.random() * (15 - 10 + 1)) + 10);
	var normalPosition = ((stageWidth/4) - (monthsToShow[currentSelectedMonth].objects[1].image.width/2)) + (stageWidth/2);
	
	monthsToShow[currentSelectedMonth].objects[1].y = stageHeight;
	var factor = stageHeight / (finalValue-1);
	var decrement = stageHeight-factor;
	var variationFactorMax = 150;
	var variationFactorMin = 100;
	var controlVal = 1;
	
	for(var i=0; i<finalValue; i++)
	{
		
		if((i+1)==finalValue)
			decrement = -monthsToShow[currentSelectedMonth].objects[1].image.height;
		Values.push({x: (normalPosition + (controlVal  * (Math.floor(Math.random() * (variationFactorMax - variationFactorMin + 1)) + variationFactorMin))), y: decrement});
		controlVal = controlVal * -1;
		decrement = decrement-factor;
	}
	//console.log("animateRightBaloon", Values, decrement,monthsToShow[currentSelectedMonth].objects[0] )
	TweenMax.to(monthsToShow[currentSelectedMonth].objects[1],(Math.floor(Math.random() * (80 - 50 + 1)) + 50),{bezier:{type: "soft", values:Values}, onComplete: animateRightBaloon
	,ease: Power0.easeInOut});
	
	
	
}
