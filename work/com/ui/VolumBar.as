package com.ui
{

	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;
	import flash.events.Event;
	import com.video.WJVideoLoader;


	public class VolumBar extends MovieClip
	{

		public var vm:WJVideoLoader;
		private var volum:Number;
		public function VolumBar()
		{
			dragMc.addEventListener(MouseEvent.MOUSE_DOWN,dragEvt);
			dragMc.addEventListener(MouseEvent.MOUSE_MOVE,moveEvt);
			dragMc.addEventListener(MouseEvent.MOUSE_UP,dragOutEvt);
			
			dragMc.addEventListener(MouseEvent.ROLL_OUT,rollEvt);
			dragMc.addEventListener(MouseEvent.ROLL_OVER,rollEvt);


			tipMc.visible = false;
			dragMc.x = 30;
			volum = 30;

			sliderBar.mouseEnabled = false;
			sliderBar.mouseChildren = false;

			backMc.addEventListener(MouseEvent.MOUSE_DOWN,downEvt);
			backMc.addEventListener(MouseEvent.ROLL_OVER,rollEvt);
			backMc.addEventListener(MouseEvent.ROLL_OUT,rollEvt);
			
			this.addEventListener(Event.ENTER_FRAME,updateEvt);

		}
		public function downEvt(e:MouseEvent):void
		{
			MovieClip(this.parent).muteBtn.visible = false;
			MovieClip(this.parent).soundBtn.visible = true;
			dragMc.x = backMc.mouseX;
			updateEvt(null);
		}
		public function rollEvt(e:MouseEvent):void
		{
			if (e.type == "rollOver")
			{
				tipMc.x = this.mouseX;
				tipMc.txt.text = Math.ceil(this.mouseX / 3 * 5).toString() + "%";
				tipMc.visible = true;
			}
			else
			{
				tipMc.visible = false;
			}
		}
		public function setMute()
		{
			dragMc.x = 0;
			updateEvt(null);
			MovieClip(this.parent).muteBtn.visible = true;
			MovieClip(this.parent).soundBtn.visible = false;
		}
		public function recoverSound()
		{
			dragMc.x = volum;
			updateEvt(null);
			MovieClip(this.parent).muteBtn.visible = false;
			MovieClip(this.parent).soundBtn.visible = true;
		}
		public function updateEvt(e:Event)
		{
			sliderBar.width = Math.abs(dragMc.x);
			if (vm)
			{
				vm.setVolum(dragMc.x/30);
			}
		}
		public function dragEvt(e:MouseEvent)
		{
			dragMc.startDrag(false,new Rectangle(0,0, 60, 0));
			volum = dragMc.x;
			tipMc.x = dragMc.x;
			MovieClip(this.parent).muteBtn.visible = false;
			MovieClip(this.parent).soundBtn.visible = true;
		}
		public function moveEvt(e:MouseEvent)
		{
			volum = dragMc.x;
			tipMc.x = dragMc.x;
			tipMc.txt.text = Math.ceil(dragMc.x / 3 * 5).toString() + "%";
			if (dragMc.x <= 1)
			{
				setMute();
			}
			else
			{
				recoverSound();
			}
		}
		public function dragOutEvt(e:MouseEvent)
		{
			dragMc.stopDrag();
			volum = dragMc.x;
			tipMc.x = dragMc.x;
		}
	}

}