package com.video
{
	import flash.net.NetConnection;
	import flash.net.NetStream;
	import flash.events.NetStatusEvent;
	import flash.media.Video;
	import flash.events.EventDispatcher;
	import flash.events.Event;
	import flash.media.SoundTransform;

	public class WJVideo extends EventDispatcher
	{
		public var videoSrc:String;
		public var videoType:String;
		private var nc:NetConnection;
		private var ns:NetStream;
		public var info:Object=new Object();
		private var vid:Video;
		public var callBack:Function;
		public static var LOAD_INFO_COMPLETEL:String="load_info_complete";

		public function WJVideo()
		{
			
		}
		public function loadVideo(src:String,type:String="video")
		{
			videoSrc = src;
			videoType = type;
			connect();
		}
		private function connect()
		{
			nc = new NetConnection();
			nc.addEventListener(NetStatusEvent.NET_STATUS, netStatusEvt);
			nc.connect(null);

		}
		private function connentSucess()
		{
			ns = new NetStream(nc);
			ns.client = {};
			ns.client.onMetaData = onMetaData;
			ns.play(videoSrc);
			ns.soundTransform = new SoundTransform(0);
			ns.addEventListener(NetStatusEvent.NET_STATUS, netStatusEvt);
		}

		private function netStatusEvt(e:NetStatusEvent):void
		{
			switch (e.info.code)
			{
				case "NetConnection.Connect.Success" :
					connentSucess();
					break;
				case "NetStream.Play.Start" :
					ns.pause();
					break;
				case "NetStream.Buffer.Full" :
					break;
				case "NetStream.Play.StreamNotFound" :
					WJPlayer.getInstance().call_js_function("call_flash_video_notfound");
					break;
				case "NetStream.Play.Stop" :
					nc.removeEventListener(NetStatusEvent.NET_STATUS, netStatusEvt);
					ns.removeEventListener(NetStatusEvent.NET_STATUS, netStatusEvt);
					break;
			}
		}
		public function onMetaData(infoObject:Object):void
		{
			info.time= infoObject["duration"];
			info.width = infoObject["width"];
			info.height= infoObject["height"];
			dispatchEvent(new Event(LOAD_INFO_COMPLETEL));
		}
	}

}