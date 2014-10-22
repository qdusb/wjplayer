(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.WJPlayer = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.btn_big_play_over = function() {
	this.initialize(img.btn_big_play_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.btn_big_play_up = function() {
	this.initialize(img.btn_big_play_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.btn_fullscreen_over = function() {
	this.initialize(img.btn_fullscreen_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.btn_fullscreen_up = function() {
	this.initialize(img.btn_fullscreen_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.btn_left_over = function() {
	this.initialize(img.btn_left_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,36);


(lib.btn_left_up = function() {
	this.initialize(img.btn_left_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,36);


(lib.btn_mute_over = function() {
	this.initialize(img.btn_mute_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,16);


(lib.btn_mute_up = function() {
	this.initialize(img.btn_mute_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,16);


(lib.btn_normal_over = function() {
	this.initialize(img.btn_normal_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.btn_normal_up = function() {
	this.initialize(img.btn_normal_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.btn_play_over = function() {
	this.initialize(img.btn_play_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,24);


(lib.btn_play_up = function() {
	this.initialize(img.btn_play_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,24);


(lib.btn_replay_over = function() {
	this.initialize(img.btn_replay_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,39);


(lib.btn_replay_up = function() {
	this.initialize(img.btn_replay_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,39);


(lib.btn_share_over = function() {
	this.initialize(img.btn_share_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.btn_share_up = function() {
	this.initialize(img.btn_share_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.btn_sound_over = function() {
	this.initialize(img.btn_sound_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,16);


(lib.btn_sound_up = function() {
	this.initialize(img.btn_sound_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,16);


(lib.btn_stop_over = function() {
	this.initialize(img.btn_stop_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,19);


(lib.show_bg = function() {
	this.initialize(img.show_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,153);


(lib.start_image = function() {
	this.initialize(img.start_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,360);


(lib.volumn_bar = function() {
	this.initialize(img.volumn_bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,31);


(lib.volumn_bg = function() {
	this.initialize(img.volumn_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.volumn_btn = function() {
	this.initialize(img.volumn_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.volumn_track = function() {
	this.initialize(img.volumn_track);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,76);


(lib.wj_logo = function() {
	this.initialize(img.wj_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,16);


(lib.播放器窗口 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.DragMc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.volumn_btn();
	this.instance.setTransform(-9.9,-9.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-9.9,20,20);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("AgEAJIAAgSIAIAAIAAASg");
	this.shape.setTransform(0.5,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.3,1,2);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EglfAAPIAAgdMBK+AAAIAAAdg");
	this.shape.setTransform(240,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.4,480,3);


(lib.滑动块 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgOAPIAAgdIAcAAIAAAdg");
	this.shape.setTransform(1.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.4,3,3);


(lib.暂停按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACAAAB").s().p("AgYBaIAAiyIAxAAIAACyg");
	this.shape.setTransform(3.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ACAAAB").s().p("AgYBaIAAiyIAwAAIAACyg");
	this.shape_1.setTransform(-4.7,0.2);

	this.instance = new lib.btn_stop_over();
	this.instance.setTransform(-7.8,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-8.8,13.3,18);


(lib.时间面板 = function() {
	this.initialize();

	// 图层 1
	this.txt = new cjs.Text("00:00:00/00:00:00", "10px Arial", "#CCCCCC");
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 90;
	this.txt.setTransform(-47.9,-8.2);

	this.addChild(this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.9,-8.2,93.8,15.2);


(lib.播放按钮2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_big_play_up();
	this.instance.setTransform(-36.9,-36.9);

	this.instance_1 = new lib.btn_big_play_over();
	this.instance_1.setTransform(-36.9,-36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,74,74);


(lib.正常按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_normal_up();
	this.instance.setTransform(-6.9,-6.9);

	this.instance_1 = new lib.btn_normal_over();
	this.instance_1.setTransform(-7.1,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,14,14);


(lib.左右按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_left_up();
	this.instance.setTransform(-12.9,-17.9);

	this.instance_1 = new lib.btn_left_over();
	this.instance_1.setTransform(-12.7,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-17.9,26,36);


(lib.声音喇叭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_sound_up();
	this.instance.setTransform(-12.4,-7.9);

	this.instance_1 = new lib.btn_sound_over();
	this.instance_1.setTransform(-12.3,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-7.9,25,16);


(lib.静音按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_mute_up();
	this.instance.setTransform(-12.4,-7.9);

	this.instance_1 = new lib.btn_mute_over();
	this.instance_1.setTransform(-12.3,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-7.9,25,16);


(lib.VolumSliderBar = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.volumn_bar();
	this.instance.setTransform(-1.9,-30.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-30.9,4,31);


(lib.StartMc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.start_image();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,360);


(lib.ReplayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_replay_up();
	this.instance.setTransform(-84.4,-19.9);

	this.instance_1 = new lib.btn_replay_over();
	this.instance_1.setTransform(-84.4,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-19.9,169,39);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_play_up();
	this.instance.setTransform(-8.9,-11.9);

	this.instance_1 = new lib.btn_play_over();
	this.instance_1.setTransform(-8.9,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-11.9,18,24);


(lib.Logo = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.wj_logo();
	this.instance.setTransform(-36.9,-7.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.9,-7.9,74,16);


(lib.全屏按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_fullscreen_up();
	this.instance.setTransform(-8.9,-8.9);

	this.instance_1 = new lib.btn_fullscreen_over();
	this.instance_1.setTransform(-8.9,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-8.9,18,18);


(lib.元件1_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.volumn_bg();
	this.instance.setTransform(-42.9,-85.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-85.9,86,86);


(lib.分享按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_share_up();
	this.instance.setTransform(-8.9,-8.9);

	this.instance_1 = new lib.btn_share_over();
	this.instance_1.setTransform(-8.8,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-8.9,18,18);


(lib.btnFullScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this._fullscreenButton = new lib.全屏按钮();
	this._fullscreenButton.setTransform(-0.1,0);
	new cjs.ButtonHelper(this._fullscreenButton, 0, 1, 1);

	this._fullscreenButton_1 = new lib.正常按钮();
	this._fullscreenButton_1.setTransform(0.1,-0.2);
	new cjs.ButtonHelper(this._fullscreenButton_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._fullscreenButton}]}).to({state:[{t:this._fullscreenButton_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-8.9,18,18);


(lib.FilmInfoBar = function() {
	this.initialize();

	// 图层 3
	this.rBtn = new lib.左右按钮();
	this.rBtn.setTransform(224,-79.9,1,1,0,0,180);
	new cjs.ButtonHelper(this.rBtn, 0, 1, 1);

	this.lBtn = new lib.左右按钮();
	this.lBtn.setTransform(-227.9,-79.9);
	new cjs.ButtonHelper(this.lBtn, 0, 1, 1);

	// 图层 1
	this.instance = new lib.show_bg();
	this.instance.setTransform(-239.9,-156.4);

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiV/BQAMAAAif/MEr/AAAMAAACf/g");

	this.addChild(this.shape,this.instance,this.lBtn,this.rBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-959.9,-511.9,1920,1024);


(lib.VolumBar = function() {
	this.initialize();

	// 图层 1
	this.dragMc = new lib.DragMc();
	this.dragMc.setTransform(0,-74.9);

	this.sliderBar = new lib.VolumSliderBar();
	this.sliderBar.setTransform(0,-40.9,1,2.419,0,0,0,0,-15.4);

	this.instance = new lib.volumn_track();
	this.instance.setTransform(-2.9,-78.7);

	this.instance_1 = new lib.元件1_1();
	this.instance_1.setTransform(0,-40.6,1,1,0,0,0,0,-42.9);

	this.addChild(this.instance_1,this.instance,this.sliderBar,this.dragMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-84.9,86,87.3);


(lib.comvideoWJPlayerUI = function() {
	this.initialize();

	// 图层 4
	this.startMc = new lib.StartMc();
	this.startMc.setTransform(240,180,1,1,0,0,0,240,180);

	// 图层 3
	this._replayBtn = new lib.ReplayButton();
	this._replayBtn.setTransform(240,250.6,1,1,0,0,0,0,-19.4);
	new cjs.ButtonHelper(this._replayBtn, 0, 1, 1);

	this.showBg = new lib.FilmInfoBar();
	this.showBg.setTransform(240,200);

	// 图层 2
	this._muteBtn = new lib.静音按钮();
	this._muteBtn.setTransform(330,380);
	new cjs.ButtonHelper(this._muteBtn, 0, 1, 1);

	this._playBtn2 = new lib.播放按钮2();
	this._playBtn2.setTransform(240,163.1,1,1,0,0,0,0,-36.9);
	new cjs.ButtonHelper(this._playBtn2, 0, 1, 1);

	this._volumBar = new lib.VolumBar();
	this._volumBar.setTransform(330,370);

	this._shareBtn = new lib.分享按钮();
	this._shareBtn.setTransform(355,380);
	new cjs.ButtonHelper(this._shareBtn, 0, 1, 1);

	this._soundBtn = new lib.声音喇叭();
	this._soundBtn.setTransform(330,380);
	new cjs.ButtonHelper(this._soundBtn, 0, 1, 1);

	this._timeTxtBar = new lib.时间面板();
	this._timeTxtBar.setTransform(80.4,380);

	this._pauseButton = new lib.暂停按钮();
	this._pauseButton.setTransform(20.8,378.9);
	new cjs.ButtonHelper(this._pauseButton, 0, 1, 1);

	this._playButton = new lib.PlayButton();
	this._playButton.setTransform(18.8,377);
	new cjs.ButtonHelper(this._playButton, 0, 1, 1);

	this._logo = new lib.Logo();
	this._logo.setTransform(435,380);

	this._sliderButton = new lib.滑动块();
	this._sliderButton.setTransform(0.1,360,1,1,0,0,0,0.1,0);

	this._fullscreenButton = new lib.btnFullScreen();
	this._fullscreenButton.setTransform(380,380);

	this._timeBar = new lib.元件2();
	this._timeBar.setTransform(0.1,359.9,0.726,1,0,0,0,0.1,0);

	this._timeBarMask = new lib.元件1();
	this._timeBarMask.setTransform(60,360,1,1,0,0,0,60,0);

	this.addChild(this._timeBarMask,this._timeBar,this._fullscreenButton,this._sliderButton,this._logo,this._playButton,this._pauseButton,this._timeTxtBar,this._soundBtn,this._shareBtn,this._volumBar,this._playBtn2,this._muteBtn,this.showBg,this._replayBtn,this.startMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-719.9,-311.9,1920,1024);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;