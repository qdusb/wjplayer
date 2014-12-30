package com.utils
{

	public class WJUtils
	{

		public function WJUtils()
		{
			// constructor code
		}
		public static function intToTime(time:int):String
		{
			var m:int=Math.floor(time/60);
			var s:int=Math.floor(time%60);
			var ms = m < 10 ? "0" + m.toString():m.toString();
			var ss = s < 10 ? "0" + s.toString():s.toString();
			return ms+":"+ss;
		}

	}

}