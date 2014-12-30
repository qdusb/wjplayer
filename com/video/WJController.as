package com.video
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.FullScreenEvent;
	import flash.events.MouseEvent;
	import flash.display.StageDisplayState;
	import flash.geom.Rectangle;
	import flash.media.SoundTransform;
	import flash.system.Capabilities;
	import flash.events.KeyboardEvent;
	import flash.net.navigateToURL;
	import flash.net.URLRequest;
	import com.utils.WJUtils;


	public class WJController
	{
		private var ui:WJPlayerUI;
		private var vm:WJVideoLoader;
		public var status:String = "play";
		public static var instance:WJController;
		public function WJController(ui:WJPlayerUI,vm:WJVideoLoader)
		{
			this.ui = ui;
			this.vm = vm;
			vm.control=this;
			vm.ui=ui;
			ui.vm=vm;
			addUIListener();
			instance=this;
		}

		public function addUIListener():void
		{
			for each (var elemt in WJPlayerUI.Elemts)
			{
				if (elemt)
				{
					elemt.addEventListener(MouseEvent.MOUSE_DOWN, uiMouseDown);
				}
			}
			ui.addEventListener(Event.ENTER_FRAME, enterFrameEvt);
			ui.buttonMode = true;
			ui.useHandCursor = true;
			ui.volumBar.vm = vm;

			if (ui.stage)
			{
				initStage();
			}
			else
			{
				ui.stage.addEventListener(Event.ADDED_TO_STAGE,initStage);
			}
		}
		public function initStage(e:Event=null)
		{
			ui.stage.addEventListener(KeyboardEvent.KEY_DOWN,keyDownEvt);
		}
		public function playADAndFilm(ad:String=null,video:String=null,isWater:int=1):void
		{
			vm.adURL = ad;
			vm.videoURL = video;
			vm.isWater = isWater;
			if (vm.adURL == "" || vm.adURL == "undefined"||vm.adURL == "0")
			{
				vm.playFilm();
			}
			else
			{
				vm.playAD();
			}
		}
		public function toggleVideo()
		{
			if (status=="play")
			{
				pauseVideo();
			}
			else
			{
				playVideo();
			}
		}
		public function keyDownEvt(e:KeyboardEvent)
		{
			if (vm.videoType == "video" && e.keyCode == 32)
			{
				toggleVideo();
			}
		}
		/////滑块随时间按移动
		private function enterFrameEvt(e:Event):void
		{
			/*if (WJPlayer.getInstance().filmTime>0)
			{
				ui.timeTxtBar.txt.text = WJUtils.intToTime(0) + " / " + WJUtils.intToTime(WJPlayer.getInstance().filmTime);
				return;
			}*/
			if (vm.videoType == "video")
			{
				ui.timeBar.width = ui.progressBarWidth * vm.videoProgress();
				ui.sliderButton.x = ui.timeBar.x + ui.timeBar.width;
				ui.timeTxtBar.txt.text = vm.videoProgressTime();
			}

			if (ui.rollFlag == false)
			{
				ui.tipMc.txt.text = WJUtils.intToTime(vm.ns.time);
			}

			if (vm.videoProgress() == 1)
			{
				ui.removeEventListener(Event.ENTER_FRAME, enterFrameEvt);
			}
		}
		public function playVideo()
		{
			status = "play";
			ui.showStatus(status);
			vm.ns.togglePause();
			WJPlayer.getInstance().call_js_function("call_flash_play");
		}
		public function pauseVideo()
		{
			if (status=="pause")
			{
				return;
			}
			status = "pause";
			ui.showStatus(status);
			vm.ns.togglePause();
			WJPlayer.getInstance().call_js_function("call_flash_pause");
		}

		private function uiMouseDown(e:MouseEvent):void
		{
			switch (e.currentTarget.name)
			{
				case "_replayBtn" :
					ui.showBg.visible = false;
					ui.replayBtn.visible = false;
					vm.playFilm();
					break;
				case "_playButton" :
				case "_playBtn2" :
					playVideo();
					break;
				case "_pauseButton" :
					pauseVideo();
					break;
				case "_videoMc" :
					toggleVideo();
					break;
				case "_timeBarMask" :
					ui.removeEventListener(Event.ENTER_FRAME, enterFrameEvt);
					ui.sliderButton.x = ui.stage.mouseX;
					vm.ns.pause();
					sliderButtonMouseMove(null);
					playVideo();
					ui.showStatus(status);
					ui.addEventListener(Event.ENTER_FRAME, enterFrameEvt);
					break;
				case "_sliderButton" :
					vm.ns.pause();
					ui.removeEventListener(Event.ENTER_FRAME, enterFrameEvt);
					ui.stage.addEventListener(MouseEvent.MOUSE_MOVE, sliderButtonMouseMove);
					ui.stage.addEventListener(MouseEvent.MOUSE_UP, sliderButtonMouseUp);
					ui.sliderButton.startDrag(false,new Rectangle(ui.timeBar.x,ui.timeBar.y, ui.progressBarWidth, 0));
					break;
				case "_logo" :
					navigateToURL(new URLRequest("http://365jia.cn/video"),"_blank");
					WJPlayer.getInstance().call_js_function("call_flash_logo");
					break;
				case "_soundBtn" :
					ui.muteBtn.visible = true;
					ui.soundBtn.visible = false;
					ui.volumBar.setMute();
					break;
				case "_muteBtn" :
					ui.muteBtn.visible = false;
					ui.soundBtn.visible = true;
					ui.volumBar.recoverSound();
					break;
				case "detailBtn" :
					WJPlayer.getInstance().call_js_function("call_flash_videoLink");
					break;
			}
		}

		private function sliderButtonMouseUp(e:MouseEvent):void
		{
			ui.stage.removeEventListener(MouseEvent.MOUSE_UP, sliderButtonMouseUp);
			ui.stage.removeEventListener(MouseEvent.MOUSE_MOVE, sliderButtonMouseMove);
			ui.addEventListener(Event.ENTER_FRAME, enterFrameEvt);
			ui.sliderButton.stopDrag();
			vm.ns.pause();
			playVideo();
			ui.showStatus(status);
			sliderButtonMouseMove(null);
		}

		private function sliderButtonMouseMove(e:MouseEvent):void
		{
			var pos:Number=vm.timeTotal * (ui.sliderButton.x / ui.progressBarWidth);
			pos = Math.min(vm.timeTotal,pos);
			ui.timeBar.width = ui.sliderButton.x;
			vm.ns.seek(pos);
			ui.timeTxtBar.txt.text = WJUtils.intToTime(int(pos)) + " / " + WJUtils.intToTime(vm.timeTotal);
			ui.tipMc.txt.text = WJUtils.intToTime(int(pos));
			ui.tipMc.x = ui.sliderButton.x;
		}
	}

}