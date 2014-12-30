package com.video
{

	import flash.display.MovieClip;
	import flash.display.SimpleButton;
	import flash.geom.Rectangle;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import com.utils.WJUtils;

	public class WJPlayerUI extends MovieClip
	{

		public var timeBar:MovieClip;
		public var timeTxtBar:MovieClip;
		public var timeBarMask:MovieClip;
		public var sliderButton:MovieClip;
		public var timeSlider:MovieClip;
		public var volumeButton:MovieClip;
		public var volumeSlider:MovieClip;
		public var logo:MovieClip;
		public var pauseButton:SimpleButton;
		public var playButton:SimpleButton;
		public var playBtn2:SimpleButton;
		public var soundBtn:MovieClip;
		public var muteBtn:MovieClip;
		public var fullscreenButton:MovieClip;
		public var videoMc:MovieClip;
		public var slide_rect:Rectangle;
		public var replayBtn:SimpleButton;
		public var volumBar:VolumBar;
		public var progressBarWidth:int = 480;
		private var cMcs:Array=new Array();
		public  var vm:WJVideoLoader;
		public static var Elemts:Array=new Array();
		private var hideElemts:Array=new Array();
		private var tipElemts:Array=new Array();
		public var rollFlag:Boolean = false;

		public function WJPlayerUI()
		{
			videoMc = this.getChildByName("_videoMc") as MovieClip;
			timeBar = this.getChildByName("_timeBar") as MovieClip;
			timeTxtBar = this.getChildByName("_timeTxtBar") as MovieClip;
			timeBarMask = this.getChildByName("_timeBarMask") as MovieClip;
			sliderButton = this.getChildByName("_sliderButton") as MovieClip;
			timeSlider = this.getChildByName("_timeSlider") as MovieClip;
			volumeButton = this.getChildByName("_volumeButton") as MovieClip;
			volumeSlider = this.getChildByName("_volumeSlider") as MovieClip;
			soundBtn = this.getChildByName("_soundBtn") as MovieClip;
			muteBtn = this.getChildByName("_muteBtn") as MovieClip;
			replayBtn = this.getChildByName("_replayBtn") as SimpleButton;
			fullscreenButton = this.getChildByName("_fullscreenButton") as MovieClip;
			pauseButton = this.getChildByName("_pauseButton") as SimpleButton;
			playButton = this.getChildByName("_playButton") as SimpleButton;
			playBtn2 = this.getChildByName("_playBtn2") as SimpleButton;
			volumBar = this.getChildByName("_volumBar") as VolumBar;
			logo = this.getChildByName("_logo") as MovieClip;

			Elemts = [replayBtn,playBtn2,playButton,videoMc,pauseButton,timeBarMask,sliderButton,logo,soundBtn,muteBtn,detailBtn,timeBar];
			hideElemts = [muteBtn,playButton,playBtn2,replayBtn,showBg,startMc,tipMc,adTimer,waterPrint];
			cMcs = [playButton,pauseButton,timeTxtBar,muteBtn,soundBtn,fullscreenButton,logo,volumBar];
			tipElemts = [soundBtn,muteBtn,logo];
			for each (var elemt in hideElemts)
			{
				elemt.visible = false;
			}

			loadBar.mouseChildren = false;
			loadBar.mouseEnabled = false;
			waterPrint.mouseEnabled = false;
			waterPrint.mouseChildren = false;


			if (this.stage)
			{
				initStage();
			}
			else
			{
				this.addEventListener(Event.ADDED_TO_STAGE,initStage);
			}
			sliderButton.addEventListener(MouseEvent.ROLL_OVER,rollOverEvt);
			timeBarMask.addEventListener(MouseEvent.ROLL_OVER,rollOverEvt);
			timeBarMask.addEventListener(MouseEvent.MOUSE_MOVE,rollOverEvt);
			
			sliderButton.addEventListener(MouseEvent.ROLL_OUT,rollOutEvt);
			timeBarMask.addEventListener(MouseEvent.ROLL_OUT,rollOutEvt);

			for each (var tipBtn:MovieClip in tipElemts)
			{
				tipBtn.mc.addEventListener(MouseEvent.ROLL_OVER,rollTipEvt);
				tipBtn.mc.addEventListener(MouseEvent.ROLL_OUT,rollTipEvt);
				tipBtn.tipMc.visible = false;
			}
			fullscreenButton.addEventListener(MouseEvent.CLICK,normalOrScreen);
		}
		
		private function rollTipEvt(e:MouseEvent)
		{
			var mc:MovieClip = e.currentTarget.parent as MovieClip;
			
			if (e.type == "rollOver")
			{
				mc.tipMc.visible = true;
			}
			else
			{
				mc.tipMc.visible = false;
			}
		}
		
		private function normalOrScreen(e:MouseEvent)
		{
			if (stage.displayState == "normal")
			{
				stage.displayState = "fullScreen";
				fullscreenButton.gotoAndStop(2);
			}
			else
			{
				stage.displayState = "normal";
				fullscreenButton.gotoAndStop(1);
			}
		}
		
		public function rollOverEvt(e:MouseEvent)
		{
			tipMc.x = stage.mouseX;
			tipMc.visible = true;
			tipMc.x = Math.max(tipMc.x,20);
			tipMc.x = Math.min(tipMc.x,stage.stageWidth - 20);
		   
			if (e.currentTarget == timeBarMask)
			{
				var time:int = vm.timeTotal * stage.mouseX / progressBarWidth;
				 tipMc.txt.text = WJUtils.intToTime(time);
				 rollFlag = true;
			}
		}
		public function rollOutEvt(e:MouseEvent)
		{
			tipMc.visible = false;
			rollFlag = false;
		}
		public function initStage(e:Event=null)
		{
			this.stage.addEventListener(Event.RESIZE,resizeEvt);
			initPos();
			resizeEvt();
		}
		public function resizeEvt(e:Event=null)
		{
			var vw:int = stage.stageWidth;
			var vh:int = stage.stageHeight - 20;
			
			for each (var mc in cMcs)
			{
				mc.y = vh;
			}
			detailBtn.x = waterPrint.x = vw;
			logo.x = vw - 45;
			adTimer.x = vw - 10;
			fullscreenButton.x = vw - 105;
			muteBtn.x = soundBtn.x = vw - 215;
			volumBar.x = soundBtn.x + 20;

			timeBarMask.x = timeBar.x;
			showBg.x = replayBtn.x = vw / 2;

			progressBarWidth = vw;
			timeBarMask.width = vw;

			detailBtn.y = stage.stageHeight - 80;
			showBg.y = stage.stageHeight / 2;
			replayBtn.y = showBg.y + 70;
			timeBar.y = stage.stageHeight - 40;
			tipMc.y = stage.stageHeight - 60;
			sliderButton.y = loadBar.y = timeBarMask.y = timeBar.y;
			playBtn2.y = stage.stageHeight - 100;
			
			showBg.scaleX=vw/480;
			showBg.scaleY=vh/400;
			if (stage.displayState == "fullScreen")
			{
				fullscreenButton.gotoAndStop(2);
			}
			else
			{
				fullscreenButton.gotoAndStop(1);
			}
			if (vm!=null)
			{
				if (vm.videoURL != "undefined")
				{
					vm.setVideoSize();
				}
			}

			if (vw>350)
			{
				logo.visible = true;
				timeTxtBar.visible = true;
				volumBar.visible = true;
			}
			else if (vw<350&&vw>=260)
			{
				logo.visible = true;
				volumBar.visible = true;
				timeTxtBar.visible = false;
			}
			else if (vw<260&&vw>=180)
			{
				volumBar.visible = true;
				logo.visible = false;
				timeTxtBar.visible = false;
				
				fullscreenButton.x = vw - 20;
				muteBtn.x = soundBtn.x = vw - 130;
				volumBar.x = soundBtn.x + 20;
			}
			else if (vw<180)
			{
				fullscreenButton.x = vw - 20;
				muteBtn.x = soundBtn.x = vw - 55;
				
				logo.visible = false;
				timeTxtBar.visible = false;
				volumBar.visible = false;
			}
			loadBar.width =loadBar.per * progressBarWidth;
		}
		public function showControl()
		{
			for each (var mc:* in Elemts)
			{
				mc.mouseEnabled = true;
				if (mc is MovieClip)
				{
					mc.mouseChildren = true;
				}
			}

			muteBtn.visible = false;
			timeBar.mouseChildren = false;
			timeBar.mouseEnabled = false;
			//adTimer.visible=false;
			playButton.visible = false;
			playBtn2.visible = false;
			//resizeEvt();

		}
		public function hideControl()
		{
			for each (var mc in cMcs)
			{
				mc.visible = false;
			}
			this.mouseChildren = false;
			this.mouseEnabled = false;
			
		}
		public function disableControll()
		{
			for each (var mc in Elemts)
			{
				mc.mouseEnabled = false;
				if (mc is MovieClip)
				{
					mc.mouseChildren = false;
				}
			}
			detailBtn.mouseEnabled = true;
			soundBtn.mouseEnabled = true;
			soundBtn.mouseChildren = true;

			muteBtn.mouseEnabled = true;
			muteBtn.mouseChildren = true;

			fullscreenButton.mouseEnabled = true;
			fullscreenButton.mouseChildren = true;

			logo.mouseEnabled = true;
			logo.mouseChildren = true;

		}
		public function addLinkBar(jsonArr:Object)
		{

			this.mouseChildren = true;
			this.mouseEnabled = true;
			showBg.visible = true;
			replayBtn.visible = true;
			showBg.init(jsonArr);
		}
		public function initPos()
		{
			timeBar.x = 0;
			timeTxtBar.x = 80;
			playButton.x = 20;
			playBtn2.x = 45;
			adTimer.y = 20;
			waterPrint.y = 0;
			detailBtn.x = stage.stageWidth;
			timeBar.x = 0;
			timeBarMask.x = timeBar.x;
			sliderButton.y = timeBarMask.y = timeBar.y;
		}
		public function showStatus(status:String="play")
		{
			if (status=="play")
			{
				playButton.visible = false;
				playBtn2.visible = false;
				pauseButton.visible = true;
			}
			else
			{
				playBtn2.visible = true;
				playButton.visible = true;
				pauseButton.visible = false;
			}
		}
	}

}
