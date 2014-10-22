package com.video
{
	import flash.display.Sprite;
	import flash.events.*;
	import flash.media.Video;
	import flash.net.NetConnection;
	import flash.net.NetStream;
	import flash.display.MovieClip;
	import flash.system.Capabilities;
	import flash.media.SoundTransform;
	import com.fiCharts.ui.text.Label;
	import com.utils.WJUtils;
	import flash.utils.Timer;
	

	public class WJVideoLoader extends EventDispatcher
	{
		private var nc:NetConnection;
		public var ns:NetStream;
		public var vid:Video;
		public var timeTotal:Number = 0;
		public var vidWidth:Number;
		public var vidHeight:Number;
		public var flvURL:String;
		public var volum:Number = 1;

		public static var READY:String = "READY";
		public var adURL:String = "";
		public var videoURL:String;
		
		public var ui:WJPlayerUI;
		public var videoType:String = "";
		public var timer:Timer;
		public var isWater:int;
		public var control:WJController;

		public function WJVideoLoader()
		{
		}
		
		public function playAD()
		{
			videoType = "ad";
			ui.disableControll();
			loadVideo(adURL);
		}
		public function playFilm()
		{
			
			videoType = "video";
			loadVideo(videoURL);
			ui.showControl();

		}
		public function removeAD()
		{
			removeVideo();
			playFilm();
		}
		public function playNsVideo()
		{
			if (videoType=="ad")
			{
				WJPlayer.getInstance().call_js_function("call_flash_ad_over");
				timer.removeEventListener(TimerEvent.TIMER,timerEvt);
				removeVideo();
				playFilm();
				return;
			}
			if (videoType=="video")
			{
				removeVideo();
				WJPlayer.getInstance().call_flash_video_over();
				return;
			}
		}
		//回调信息获取成功，获取视频时长,视频宽高
		private function call_video_start()
		{
			if (videoType=="ad")
			{
				WJPlayer.getInstance().call_js_function("call_flash_ad_start",timeTotal);
				ui.adTimer.visible = true;
				ui.adTimer.txt.text = Math.round(timeTotal).toString();
				timer = new Timer(1000,Math.round(timeTotal));
				timer.addEventListener(TimerEvent.TIMER,timerEvt);
				timer.start();
			}
			else
			{
				if (isWater==1)
				{
					ui.waterPrint.visible = true;
				}
				ui.detailBtn.visible = false;
				ui.adTimer.visible = false;
				WJPlayer.getInstance().filmTime=0;
				WJPlayer.getInstance().call_js_function("call_flash_video_start");
				ui.resizeEvt();
			}
		}
		private function timerEvt(e:TimerEvent):void
		{
			var restTime:int=Math.floor(timeTotal)-timer.currentCount;
			if(restTime==0)
			{
				ui.adTimer.visible=false;
			}
			ui.adTimer.txt.text=(Math.floor(timeTotal)-timer.currentCount).toString();
		}
		private function loadVideo(url:String):void
		{
			flvURL = url;
			netConnnection();
		}
		private function netConnnection():void
		{
			nc = new NetConnection();
			nc.addEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);
			nc.connect(null);
		}
		private function connentVideo():void
		{
			ns = new NetStream(nc);
			ns.client = {};
			ns.client.onMetaData = onMetaData;
			ns.client.onSeekPoint = onSeekPoint;
			ns.client.onImageData = onImageDataHandler;
			ns.play(flvURL);
			ns.addEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);
			
			ui.loadBar.width = 0;
			ui.addEventListener(Event.ENTER_FRAME,updateEvt);
		}
		
		private function startPlayVideo()
		{
			vid = new Video();
			vid.attachNetStream(ns);
			vid.smoothing = true;

			vid.x = vid.y = 0;
			ui.videoMc.addChild(vid);
			setVideoSize();
		}
		
		private function updateEvt(e:Event)
		{
			var per:Number = ns.bytesLoaded / ns.bytesTotal;
			ui.loadBar.per=per;
			ui.loadBar.width = per * ui.progressBarWidth;
			if (per==1)
			{
				ui.removeEventListener(Event.ENTER_FRAME,updateEvt);
			}
		}
		

		public function setVolum(volum:Number=0)
		{
			if (volum!=0)
			{
				this.volum = volum;
			}
			if(ns){
				ns.soundTransform = new SoundTransform(volum);
			}
		}
		public function setVideoSize()
		{
			var w:int = ui.stage.stageWidth;
			var h:int = ui.stage.stageHeight - 40;
			if(vid)
			{
				vid.scaleX = vid.scaleY = 1;
				vid.scaleX = w / vid.width;
				vid.scaleY = h / vid.height;
			}
			
		}
		public function videoProgress():Number
		{
			return ns.time / timeTotal;
		}
		public function videoProgressTime():String
		{
			return WJUtils.intToTime(ns.time)+" / "+WJUtils.intToTime(timeTotal);
		}
		public function videoResume()
		{
			ns.resume();
		}
		public function removeVideo():void
		{
			while (ui.videoMc.numChildren>0)
			{
				ui.videoMc.removeChildAt(0);
			}
			ns.close();
			nc.removeEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);
			ns.removeEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);
		}
		private function netStatusHandler(e:NetStatusEvent):void
		{
			switch (e.info.code)
			{
				case "NetConnection.Connect.Success" :
					connentVideo();
					break;
				case "NetStream.Play.Start" :
					startPlayVideo();
					break;
				case "NetStream.Buffer.Full" :
					break;
				case "NetStream.Play.StreamNotFound" :
					WJPlayer.getInstance().call_js_function("call_flash_video_notfound",flvURL);
					trace("Stream not found: " + flvURL);
					break;
				case "NetStream.Play.Stop" :
					nc.removeEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);
					ns.removeEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);
					playNsVideo();
					break;
			}
		}
		public function onImageDataHandler(imageData:Object):void
		{
		}
		public function onSeekPoint(info:Object):void
		{
			trace("onSeekPoint");
		}
		public function onMetaData(infoObject:Object):void
		{
			timeTotal= infoObject["duration"];
			vidWidth = infoObject["width"];
			vidHeight= infoObject["height"];
			call_video_start();
		}
	}
}