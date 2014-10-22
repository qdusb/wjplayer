package 
{
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.*;
	import flash.display.StageDisplayState;
	import flash.system.Security;
	import flash.external.ExternalInterface;
	import ibw.com.xml.XMLFile;
	import flash.media.SoundMixer;
	import flash.filters.BlurFilter;
	import ibw.com.ui.ImageContainer;
	import com.video.WJPlayerUI;
	import com.video.WJVideoLoader;
	import com.video.WJController;
	import com.adobe.serialization.json.JSON2;
	import flash.ui.ContextMenu;
	import flash.ui.ContextMenuItem;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import com.video.WJVideo;
	import flash.system.System;
	import flash.system.fscommand;

	//采用MVC 程序结构 M-WJVideoLoader,V-WJPlayerUI C-WJController
	public class WJPlayer extends MovieClip
	{
		private var ui:WJPlayerUI;
		private var vm:WJVideoLoader;
		private var vc:WJController;
		public var filmTime:int=0;
		private static var instance:WJPlayer;
		private var ad:String = String(stage.loaderInfo.parameters["ad"]);
		private var video:String = String(stage.loaderInfo.parameters["video"]);
		private var isWater:int = int(stage.loaderInfo.parameters["isWater"]);

		public function WJPlayer():void
		{
			System.useCodePage = true;
			Security.allowDomain("*");
			Security.allowInsecureDomain("*");
			
			if (this.stage)
			{
				initStage();
			}
			else
			{
				this.addEventListener(Event.ADDED_TO_STAGE,initStage);
			}
		}
		private function initStage():void
		{
			removeEventListener(Event.ADDED_TO_STAGE, initStage);
			this.stage.align = "TL";
			this.stage.scaleMode = "noScale";
			if (stage.stageWidth == 0 || stage.stageHeight == 0)
			{
				stage.addEventListener(Event.RESIZE, waitForStage);
			}
			else
			{
				init();
			}
		}

		private function waitForStage(e:Event):void
		{
			if (stage.stageHeight > 0 && stage.stageWidth > 0)
			{
				init();
				stage.removeEventListener(Event.RESIZE, waitForStage);
			}
		}
		
		public static function getInstance():WJPlayer
		{
			return instance;
		}
		private function init(e:Event = null):void
		{
			instance = this;
			startVideo();
			addWJSupport();
			ExternalInterface.addCallback("call_js_remove_ad",call_js_remove_ad);
			ExternalInterface.addCallback("call_js_play",call_js_play);
		}
		public function startVideo()
		{
			vm=new WJVideoLoader();
			ui = new WJPlayerUI();
			this.addChild(ui);
			vc = new WJController(ui,vm);
		//	ad="flv/2.flv";
			video="http://365jia.cn/uploads/special/video/qw/538/gd.flv";
			vc.playADAndFilm(ad,video,isWater);
			
			var wjVideo:WJVideo=new WJVideo();
			wjVideo.loadVideo(video);
			wjVideo.addEventListener(WJVideo.LOAD_INFO_COMPLETEL,loadInfoCompelte);
		}

		private function loadInfoCompelte(e:Event)
		{
			var video:WJVideo=e.currentTarget as WJVideo;
			video.removeEventListener(WJVideo.LOAD_INFO_COMPLETEL,loadInfoCompelte);
			filmTime=Math.floor(video.info.time);
		}
		
		public function addWJSupport():void
		{
			var _contexMenu:ContextMenu = new ContextMenu();
			var menu:ContextMenuItem = new ContextMenuItem("版权所有:万家热线",false,true);
			menu.addEventListener("menuItemSelect",itemHandler);

			_contexMenu.customItems.push(menu);
			_contexMenu.hideBuiltInItems();
			this.contextMenu = _contexMenu;
		}
		private function itemHandler(e:Event=null):void
		{
			//vm.removeAD();
			navigateToURL(new URLRequest("http://365jia.cn"),"_blank");
		}
		public function call_flash_video_over()
		{
			var jsonString:String = ExternalInterface.call("call_flash_video_over");
			var jsonObj=JSON2.decode("["+jsonString+"]");
			if (jsonObj!=null)
			{
				ui.addLinkBar(jsonObj);
			}
		}
		public function call_js_remove_ad()
		{
			vm.removeAD();
		}
		public function call_js_play()
		{
			vc.playVideo();
		}
		public function call_js_function(funName:String,params:*=null)
		{
			ExternalInterface.call(funName,params);
		}
	}

}