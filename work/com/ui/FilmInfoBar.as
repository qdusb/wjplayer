package com.ui
{

	import flash.display.MovieClip;
	import ibw.com.ui.ImageContainer;
	import flash.display.Graphics;
	import flash.text.TextField;
	import flash.events.MouseEvent;
	import flash.display.SimpleButton;
	import com.greensock.TweenLite;
	import flash.net.navigateToURL;
	import flash.net.URLRequest;
	import flash.display.BitmapData;
	import flash.display.Bitmap;


	public class FilmInfoBar extends MovieClip
	{

		private var imgMc:MovieClip=new MovieClip();
		private var maskMc:MovieClip=new MovieClip();
		private var imgArr:Array=new Array();
		private var seri:int=0;
		
		public function FilmInfoBar()
		{
			
			imgMc.graphics.beginFill(0x00FFFF,0);
			imgMc.graphics.drawRect(0,0,392,110);
			imgMc.graphics.endFill();
			this.addChild(imgMc);
			
			imgMc.x=-196;
			imgMc.y=-130;
			
			
			maskMc.graphics.beginFill(0x0FF0FF,1);
			maskMc.graphics.drawRect(-2,-2,392,110);
			maskMc.graphics.endFill();
			this.addChild(maskMc);
			
			maskMc.x=-196;
			maskMc.y=-130;
			
			imgMc.mask=maskMc;
			rBtn.addEventListener(MouseEvent.CLICK,turnEvt);
			lBtn.addEventListener(MouseEvent.CLICK,turnEvt);
		}
		public function turnEvt(e:MouseEvent){
			var btn:SimpleButton=e.currentTarget as SimpleButton;
			if(btn==rBtn){
				seri++;
				seri=Math.min(seri,imgArr.length-3);
			}else{
				seri--;
				seri=Math.max(seri,0);
			}
			TweenLite.to(imgMc,0.5,{x:-196-130*seri,onComplete:moveComplete});
		}
		private function moveComplete(){
			lBtn.visible=rBtn.visible=true;
			if(seri==0){
				lBtn.visible=false;
			}else if(seri==imgArr.length-3){
				rBtn.visible=false;
			}
		}
		public function init(jsonArr:Object){
			if(jsonArr=="")
			{
				return;
			}
			imgArr=new Array();
			seri=0;
			rBtn.visible=rBtn.visible=false;
			while(imgMc.numChildren>0){
				imgMc.removeChildAt(0);
			}
			var i:int=0;
			for each(var obj:Object in jsonArr){
				var img:ImageContainer=new ImageContainer(120,80);
				imgMc.addChild(img);
				img.buttonMode=true;
				img.x=130*i+2;
				img.y=2;
				img.loadImage(obj.image);
				i++;
				
				img.graphics.beginFill(0x999999,1);
				img.graphics.drawRect(-2,-2,124,84);
				img.graphics.endFill();
				
				var tit:TextField=new TextField();
				tit.autoSize="left";
				tit.wordWrap=false;
				tit.textColor=0xFFFFFF;
				tit.text=obj.name;
			
				
				var titdata:BitmapData=new BitmapData(tit.width,tit.height,true,0x00000000);
				titdata.draw(tit);
				var titbmp:Bitmap=new Bitmap(titdata);
				img.addChild(tit);
				
				titbmp.x=tit.x=(120-titbmp.width)/2;
				titbmp.y=tit.y=85;
				
				img.linkURL=obj.link;
				imgArr.push(img);
				
				img.addEventListener(MouseEvent.CLICK,goWebEvt);
			}
			lBtn.visible=false;
			if(i<=3){
				rBtn.visible=false;
			}else{
				rBtn.visible=true;
			}
		}
		private function goWebEvt(e:MouseEvent)
		{
			var img:ImageContainer=e.currentTarget as ImageContainer;
			if(img.linkURL!=""){
				navigateToURL(new  URLRequest(img.linkURL),"_blank");
			}
			
		}
	}

}