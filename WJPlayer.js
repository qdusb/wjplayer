(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.WJPlayer = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.模板LOGO右角131025 = function() {
	this.initialize(img.模板LOGO右角131025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,384);


(lib.btn_left_over = function() {
	this.initialize(img.btn_left_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,36);


(lib.btn_left_up = function() {
	this.initialize(img.btn_left_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,36);


(lib.btn_replay_up = function() {
	this.initialize(img.btn_replay_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,39);


(lib.show_bg = function() {
	this.initialize(img.show_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,153);


(lib.播放器图标 = function() {
	this.initialize(img.播放器图标);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.暂停按钮 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("AheBpIAAjRIC9AAIAADRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-10.4,19,21);


(lib.播放按钮大 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("Ak2E1IAAppIJtAAIAAJpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,-30.9,62.3,62);


(lib.播放按钮 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("AhoBwIAAjfIDRAAIAADfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-11.2,21,22.5);


(lib.提示框 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("AjCCBIAAkBIGFAAIAAEBg");
	this.shape.setTransform(-0.7,0,1.089,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-12.9,42.5,26);


(lib.静音按钮 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("Ah5BpIAAjRIDzAAIAADRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,-10.4,24.5,21);


(lib.Logo图标 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("AmKBfIAAi9IMVAAIAAC9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-9.4,79,19);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEGAxQAegHAMgJQANgLgBgWIAAgLIAKAAIAAAMQAAALgDAKQAeAMAYAOIgHAJQgWgOgcgOQgFAIgHAFQgNAKgaAGIgHgJgAAGAzQAUgJAMgNIgEAAIAAggIAIAAIAAAcIADgEIAJgPIAIAFQgHANgKALQgOAOgTAJIgGgHgAhYAyQAXgIAKgSQAFgMABgNIABggIAJAAQAAAhgCAHIAIAAIAAAgQAAAHAHAAIAGAAQAHAAABgGIABgRIAJAEIgCAQQgBALgNAAIgKAAQgOAAAAgOIAAgZQgEAOgJALQgLALgPAHIgHgIgAAzAyQATgHAJgKQAHgKAAgTIAAgPIAJAAIAAAQQAAANgEAKQATALAOAKIgGAIQgOgLgQgKIgBACQgJAMgWAIIgFgIgADjA5IAAgHIhEAAIAAAHIgJAAIAAhMIAhAAIADgMIgyAAIAAgJIAjAAIgJgNIAIgEIALAOIgFADIAbAAIAMgRIAJAFIgKAMIAkAAIAAAJIg3AAIgDAMIAsAAIAABMgACfAqIBEAAIAAgNIhEAAgACfAVIBEAAIAAgNIhEAAgACfAAIBEAAIAAgLIhEAAgAhoA5IAAgzIgNANIgDgKQASgOALgSIgcAAIAAgJIAmAAIAAAJQgGAKgIAKIAAAEIAGgCIAPANIgHAGIgOgPIAAA2gAiUA4IAAgIIhTAAIAAAIIgKAAIAAhqIBnAAIAABqgAjnAoIBTAAIAAhRIhTAAgAl4AuIAPgPIAAglIgOAAIAAgJIAXAAIAAAwIACADQAHAJAQAAIBDgBIgCAKIhDgBQgOAAgHgGQgEgDgDgEIgOAPgAlMAhQATgIAOgMIgYgQIAGgGIAYAQQAKgJAFgNIguAAQgBAfgQATIgHgHQAOgQABgcIAAggQAlgBAdgEIAEAJQgeADgfABIAAAQIA4AAIAAAJQgGAPgMAMIAXATIgHAIIgXgUQgNAMgUAJIgGgHgAAFAeQAHgLAFgRIAJADQgHARgGAMIgIgEgABsAgIAAgyIgjAAIAAAyIgJAAIAAg6IARAAIADgQIgYAAIAAgIIA/AAIAAAIIgcAAIgEAQIAaAAIAAA6gAEWAcIAAg2IAhAAIAEgQIgzAAIAAgJIBxAAIAAAJIg0AAIgEAQIAsAAIAAA2IgKAAIAAguIhEAAIAAAugAitAaIAAgGIggAAIAAAGIgKAAIAAgxIAzAAIAAAxgAjNAMIAgAAIAAgbIggAAgAgXAVIAAg+IgoAAIAAA+IgJAAIAAhHIA6AAIAABHgAAHgGIAAgIIAIAAIAAgfIAIAAIAAAfIAMAAIAAgqIAIAAIAAATIARAAIAAAIIgRAAIAAAPIASAAIAAAIgAlxgxIAIgFIALAOIAFAIIgIAGIgQgXgAhsg0IAJgEIAJAQIgJAFQgEgKgFgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.7,-5.8,75.5,11.8);


(lib.播放器窗口 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.LoadingBar = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EglfAAPIAAgdMBK+AAAIAAAdg");
	this.shape.setTransform(320,0,1.333,1.333);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.9,640,4);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F06000").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape.setTransform(0.7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.9,1.3,4);


(lib.元件1_1 = function() {
	this.initialize();

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Egx/AATIAAglMBj+AAAIAAAlg");
	this.shape_1.setTransform(320,0);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.9,640,4);


(lib.链接按钮 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("AmPCRIAAkhIMfAAIAAEhg");
	this.shape.setTransform(-39.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(214,214,214,0)").s().p("EhxeBGTMAAAiMmMDi9AAAMAAACMmg");
	this.shape_1.setTransform(-726.2,-383.5,1,0.969);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1452.6,-819.5,1452.7,872);


(lib.音量滑块 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMAMQgNANgRAAQgQAAgNgNg");
	this.shape.setTransform(0.1,0.1);

	// 图层 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,0,0,0)").s().p("AhMBsIAAjXICaAAIAADXg");
	this.shape_1.setTransform(-0.2,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-10.7,15.6,21.6);


(lib.声音进度条 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F06000").s().p("AkrAJIAAgRIJXAAIAAARg");
	this.shape.setTransform(30,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.9,60,2);


(lib.WaterPrint = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.模板LOGO右角131025();
	this.instance.setTransform(-479.9,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-479.9,0,480,384);


(lib.元件10 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#777777").s().p("AkrAJIAAgRIJXAAIAAARg");
	this.shape.setTransform(30,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.9,60,2);


(lib.元件7 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChAyQAOgMADgOIgZAAQgDARgLAQIgHgIQAPgRAAghIAAgyIBhAAIAAAgIgJAAIAAgDIgPAAIAHADIgJANIAZAAIAAAGIgUAAIAAAQIAbAAIAAAIIgbAAIAAAgIgJAAIAAggIgaAAQgDATgSAOIgGgHgAC8AQIAaAAIAAgQIgZAAIgBAQgACbgKIgBAaIAaAAIAAgQIgUAAIAAgGIAZAAIgKgNIAGgDIgaAAgADBgKIgGAEIAVAAIAKgQIgjAAIAKAMgACbgeIBQAAIAAgNIhQAAgAj5AtIAPgOIAAgmIgOAAIAAgIIAXAAIAAAwQAHALARAAIBFAAIgDAJIhDAAQgUAAgIgNQgFADgJAMgAgXA2IAAgDIhYAAIAAgrIAKAAIAAAiIAhAAIAAgsIgoAAIAAgrIAKAAIAAAiIAeAAIAAgsIALAAIAAAsIAeAAIAAgiIAKAAIAAAtIgKAAIAAgCIgeAAIAAAsIAiAAIAAgiIAKAAIAAAugAALAzIAAgIIAwAAIAAgVIgmAAIAAgIIAmAAIAAgQIgiAAIAAgJIBOAAIAAAJIgiAAIAAAQIAmAAIAAAIIgmAAIAAAVIAwAAIAAAIgAjRAgQAEgDAAgFIAAhMIA7AAIAAA0IgJAAIAAgBIgpAAIAAAcIAXgKIAAAKQgLAEgLAFIgHAFgAjEgKIApAAIAAgMIgpAAgAjEgeIApAAIAAgOIgpAAgAi8AHIAFgHIARAMIAYgMIAGAHIgWAJIAVAOIgGAHIgtgegAAFgMQAkgSATgZIAMAAIgCACQAUAaAgANIgGAKQgfgQgVgaQgSAYgjATIgGgJgAjygxIAIgGIAQAWIgIAGIgQgWg");
	this.shape.setTransform(-1.3,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.播放器图标).s().p("AAiB3IhjAAIgIAAIAAjtIAIAAIBjAAIAoAAIAADtg");
	this.shape_1.setTransform(-15.9,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.播放器图标).s().p("AgkCBIAAkBIBJAAIAAACIgIAAIAADsIAIAAIAAATg");
	this.shape_2.setTransform(-26.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.播放器图标).s().p("AicCBIAAgTIAoAAIAAjsIgoAAIAAgCICPAAIAADyIBsAAIAAAKIA+AAIAAAFg");
	this.shape_3.setTransform(3.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.播放器图标).s().p("AgxB6IAAjyIBjAAIAADyg");
	this.shape_4.setTransform(17.9,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.播放器图标).s().p("AgjB6IAAjyIBHAAIAADyg");
	this.shape_5.setTransform(26.5,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.播放器图标).s().p("Ag2B6IAAjyIBsAAIAADyg");
	this.shape_6.setTransform(7.3,-0.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.1,-12.9,60.3,26);


(lib.元件6 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("Ah7BwIAAjfID3AAIAADfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-11.2,25,22.5);


(lib.元件5 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("Ah2BtIAAjZIDtAAIAADZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-10.9,24,22);


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjFAyIAAAHIgJAAIAAgZIgpAGIgBgIIAKgCIAAhGIgIAAIAAgIIA5AAIAAAEIAzAAIAAAHQgHAqgNAUQALAQAQAIIgHAJQgNgJgMgRQgMAQgQALIgGgHgAi4AcIgNACIAAATQAQgJANgRQgOgWgEgnIgEAAIAAgEIgHAAIAABBIANgDIAAAIgAjlAbIAXgDIAAgRIgXAAgAijAPQAKgPAGgmIgeAAQADAjALASgAjlAAIAXAAIAAgQIgXAAgAjlgYIAXAAIAAgSIgXAAgADiA5IAAgGIhEAAIAAAGIgJAAIAAg5IBVAAIAAA5gACeAqIBEAAIAAgOIhEAAgACeAUIBEAAIAAgMIhEAAgAANA5IAAg6IAoAAIAAAuQAAALgLAAIgKAAIgCgIIAJAAQAGABAAgGIAAgIIgYAAIAAAWgAAVAcIAYAAIAAgJIgYAAgAAVAMIAYAAIAAgIIgYAAgAhUA5IAAhQIAgAAIAAghIAKAAIAAAhIAfAAIAABCQAAANgNAAIgUAAIgCgKIATABQAHAAAAgGIAAgLIg3AAIAAAbgAhLAVIA3AAIAAgOIg3AAgAhLAAIA3AAIAAgOIg3AAgAh1A2QAGgVAFgZIAKADIgLAtgABAA3IgBgJIAMABQAHAAAAgIIAAgOIgVAAIAAgIIAVAAIAAgOIgZAAIAAgFIAZAAIAAgOIgVAAIAAgIIAYAAIAKgNIgUAAQgFAIgGAFIgHgFQANgMAHgQIAJACIgGALIAZAAIAAAHIgKANIATAAIAAAWIAIAAIAAAFIgIAAIAAAbIgIAAIAAgFIgPAAIAAARQAAANgOAAIgNAAgABbARIAPAAIAAgOIgPAAgABbgCIAPAAIAAgOIgPAAgAh4gRIAGgHIAUAQIgGAIIgUgRgAAHgHIAAgIIAWAAIAAgIIgRAAIAAgHIARAAIAAgGIgUAAIAAgHIAUAAIAAgMIAIAAIAAAMIAUAAIAAAHIgUAAIAAAGIASAAIAAAHIgSAAIAAAIIAWAAIAAAIgACHgJIAAgJIAiAAIgHgKIAHgGIAKANIgFADIAfAAIAKgQIhKAAIAAgJIAxAAIgGgJIAJgFIAHAMIgFACIAxAAIAAAJIgdAAIAJAGIgJAKIAiAAIAAAJgAghghQAJgJAIgKIAJAGIgTAUgAhWgwIAHgEQAGAEAMAOIgIAHIgRgVgAh0gwIAGgGIAUARIgHAHIgTgSg");
	this.shape.setTransform(-1.4,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.播放器图标).s().p("AAiB3IhjAAIgIAAIAAjtIAIAAIBjAAIAoAAIAADtg");
	this.shape_1.setTransform(-15.9,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.播放器图标).s().p("AgkCBIAAkBIBJAAIAAACIgIAAIAADsIAIAAIAAATg");
	this.shape_2.setTransform(-26.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.播放器图标).s().p("AicCBIAAgTIAoAAIAAjsIgoAAIAAgCICPAAIAADyIBsAAIAAAKIA+AAIAAAFg");
	this.shape_3.setTransform(3.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.播放器图标).s().p("AgxB6IAAjyIBjAAIAADyg");
	this.shape_4.setTransform(17.9,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.播放器图标).s().p("AgjB6IAAjyIBHAAIAADyg");
	this.shape_5.setTransform(26.5,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.播放器图标).s().p("Ag2B6IAAjyIBsAAIAADyg");
	this.shape_6.setTransform(7.3,-0.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.1,-12.9,60.3,26);


(lib.元件1_2 = function() {
	this.initialize();

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.播放器图标).s().p("AiABwIAAjfIEBAAIAADfg");

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-11.2,26,22.5);


(lib.ADTimer = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBDIAAhCQgIAYgLAQIgFgMQANgTAIgbIgTAAIAAgJIAWAAIAAgWIgSACIgDgJQAYgCAZgGIACAKIgUAEIAAAXIATAAIAAAJIgTAAIAAASIAGgEIAQAQIgIAHIgOgRIAABAgAgZA4QA1gNAagrIAJAEQgcAwg3AOIgFgKgAASAUIAAhWIALAAIAABWgAgPABQAKgWAFgXIAIADQgGAYgHAVIgKgDgAAngpIAJgEQALARAKATIgKAFQgJgTgLgSg");
	this.shape.setTransform(-14.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AF7BEIgCgLIAWAAQAKAAAAgKIAAheIhFAAIAAgKIBRAAIAABrQAAASgVAAIgVAAgAEpBEIAAhrIAKAAIAABrgAheBEIAAgsQgMATgUARIgIgIQAbgUANgaIAAgfIgnAAIAAgKIAnAAIAAgNIgfAAIgCgJIBOgEIACAKIglACIAAAOIApAAIAAAKIgpAAIAAAmIAmAgIgIAHIgegbIAAArgAAtBEIgCgMIARABQAKAAAAgJIAAgfIg8AAIAAgLIA8AAIAAgRIgiAAIAAgHIgYAOIgHgKQArgVAWgeIAOAAIgDADQAYAeAnAQIgIAKQgMgGgMgHIAAAIIgfAAIAAARIA5AAIAAALIg5AAIAAAgQAAATgTAAIgRAAgAAogVIBEAAQgSgOgQgSQgNARgVAPgAmkA7QAVgWAAgmIAAgsIA3AAIgKgQIAKgGIAMARIgIAFIA5AAIAAALIhnAAIAAAiQgBAqgWAaIgLgJgAipBDIAAgHIhMAAIAAAHIgLAAIAAg3IBiAAIAAA3gAj1AyIBMAAIAAgdIhMAAgAgkBCIgCgLIAQABQAJAAAAgLIAAhuIAKAAIAAByQAAARgPABIgSgBgADgBBIgCgLIAWABQAKAAAAgKIAAhGIgxAAIAAgLIAxAAIAAgeIALAAIAAAeIAVAAIAAALIgVAAIAABIQABATgTAAIgXgBgAAJA3QARgOANgTIALAHQgRAUgPAOIgJgIgABfAeIAHgIIAmAfIgJAJQgRgRgTgPgACZA8IAAhxIAvAAIAABvIgLAAIAAgMIgaAAIAAAOgACjAkIAaAAIAAgkIgaAAgACjgIIAaAAIAAgjIgaAAgAFIAuIAAhLIA7AAIAABCIgwAAIAAAJgAFTAcIAmAAIAAgUIgmAAgAFTAAIAmAAIAAgTIgmAAgAgjAkIAAhYIAJAAIAABYgADTgHIAJgFIARAeIgLAGIgPgfgAhxAUIAAgHIgUAEIgCgIIAWgEIAAgIIgUAAIAAgJIAUAAIAAgHIAJAAIAAAngAg+ATQgMAAAAgOIAAgYIAKAAIAAAIIASgFIADAIIgVAGIAAAGQAAAFADAAIADAAQAFAAABgEIACgJIAJAEIgCAIQgDALgKAAgAkTgBIAAgLIBCAAIAAgXIgmAAQgFALgHAKIgKgHQAPgUAHgXIAMADIgGAQIAgAAIAAgWIAMAAIAAAWIAvAAIAAAKIgvAAIAAAXIA5AAIAAALgAEwg7IAIgHIATATIgJAIIgSgUg");
	this.shape_1.setTransform(-97.2,-1.5);

	this.txt = new cjs.Text("99", "14px Microsoft YaHei", "#F06000");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 16;
	this.txt.lineWidth = 28;
	this.txt.setTransform(-40.3,-12.9);

	// 图层 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AskCgIAAk/IZIAAIAAE/g");
	this.shape_2.setTransform(-68.7,1.1);

	this.addChild(this.shape_2,this.txt,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.2,-14.8,161,32);


(lib.时间面板 = function() {
	this.initialize();

	// 图层 1
	this.txt = new cjs.Text(" 00:00 / 00:00", "12px Microsoft YaHei", "#CCCCCC");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 14;
	this.txt.lineWidth = 99;
	this.txt.setTransform(1.3,-9.9);

	this.addChild(this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.9,-9.9,102.5,19.6);


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


(lib.StartMc = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ReplayButton = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.btn_replay_up();
	this.instance.setTransform(-84.4,-19.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.4,-19.9,169,39);


(lib.退出全屏按钮 = function() {
	this.initialize();

	// 图层 1
	this.tipMc = new lib.元件7();
	this.tipMc.setTransform(1.4,-24.7);

	this.mc = new lib.元件6();

	this.addChild(this.mc,this.tipMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.7,-37.7,60.3,49);


(lib.提示 = function() {
	this.initialize();

	// 图层 1
	this.txt = new cjs.Text("100%", "12px Microsoft YaHei", "#FFFFFF");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 18;
	this.txt.lineWidth = 40;
	this.txt.setTransform(-3.2,-10.5);

	this.instance = new lib.提示框();

	this.addChild(this.instance,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-12.9,43.6,26);


(lib.TipMc = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABhA5IAAgGIhDAAIAAAGIgJAAIAAg5IBVAAIAAA5gAAeAqIBDAAIAAgNIhDAAgAAeAVIBDAAIAAgNIhDAAgAhxA5IAAg6IAoAAIAAAuQAAALgMAAIgKAAIgCgIIAKABQAFAAAAgGIAAgIIgXAAIAAAWgAhpAcIAXAAIAAgJIgXAAgAhpANIAXAAIAAgJIgXAAgAg+A4IgCgJIANAAQAHAAAAgHIAAgPIgWAAIAAgIIAWAAIAAgNIgZAAIAAgGIAZAAIAAgOIgVAAIAAgHIAXAAIAKgOIgTAAQgFAIgGAFIgHgFQAMgMAHgPIAJABIgFALIAZAAIAAAHIgLAOIAUAAIAAAVIAIAAIAAAGIgIAAIAAAaIgJAAIAAgFIgPAAIAAARQAAAOgNAAIgNAAgAgkARIAPAAIAAgNIgPAAgAgkgCIAPAAIAAgOIgPAAgAh4gHIAAgHIAWAAIAAgIIgRAAIAAgHIARAAIAAgHIgUAAIAAgHIAUAAIAAgMIAJAAIAAAMIAUAAIAAAHIgUAAIAAAHIARAAIAAAHIgRAAIAAAIIAWAAIAAAHgAAGgJIAAgJIAjAAIgHgKIAHgFIAJAMIgFADIAfAAIAKgQIhKAAIAAgIIAyAAIgGgKIAJgEIAHALIgGADIAxAAIAAAIIgdAAIAJAGIgIAKIAiAAIAAAJg");
	this.shape.setTransform(-21.3,11.4);

	this.instance = new lib.提示框();
	this.instance.setTransform(-20.4,13);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.4,0,42.5,26);


(lib.元件9 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.setTransform(-1.1,-1.6);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,4);

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.播放器图标).s().p("AgsAPIAAgOIAvAAIAVAAIAAgPIAJAAIAAAPIAMAAIAAAOg");
	this.shape.setTransform(-38.2,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.播放器图标).s().p("AgNB6IgVAAIAAjzIBFAAIAADjIAAAQg");
	this.shape_1.setTransform(-41.4,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.播放器图标).s().p("AgbByIgJAAIgVAAIAAjjIBzAAIAADjg");
	this.shape_2.setTransform(-32,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.播放器图标).s().p("ABhB6IjjAAIgLAAIAAgQIBWAAIAAjjIDFAAIAADzg");
	this.shape_3.setTransform(-20.6,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.播放器图标).s().p("AilCCIAAgPIAtAAIAAjzICHAAIAADmIAtAAIAAABIBQAAIAAgBIAaAAIAAAcg");
	this.shape_4.setTransform(5.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.播放器图标).s().p("AgDAAIAAAAIAHAAIAAAAg");
	this.shape_5.setTransform(33.7,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.播放器图标).s().p("AgbB0IAAgBIASAAIAAjmIAlAAIAADng");
	this.shape_6.setTransform(38.9,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.播放器图标).s().p("AApB0IgTAAIgJAAIhHAAIAAjmIB1AAIAADmg");
	this.shape_7.setTransform(31.9,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.播放器图标).s().p("AA6B0IgaAAIhOAAIgtAAIAAjmIC3AAIAADmg");
	this.shape_8.setTransform(16.7,-1.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-13.1,86.7,26);


(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Logo图标();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-9.4,79,19);


(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhAyQAOgMADgOIgZAAQgDARgLAQIgHgJQAPgPAAgiIAAgxIBhAAIAAAfIgJAAIAAgDIgPAAIAHADIgJAOIAZAAIAAAGIgUAAIAAAPIAbAAIAAAIIgbAAIAAAgIgJAAIAAggIgaAAQgDATgSAOIgGgHgAA8AQIAaAAIAAgPIgZAAIgBAPgAAbgKIgBAaIAaAAIAAgPIgUAAIAAgGIAZAAIgKgOIAGgDIgaAAgABBgLIgGAGIAVAAIAKgRIgjAAIAKALgAAbgfIBQAAIAAgLIhQAAgAhzAzIAAgJIAwAAIAAgUIgmAAIAAgJIAmAAIAAgQIgiAAIAAgIIBOAAIAAAIIgiAAIAAAQIAmAAIAAAJIgmAAIAAAUIAwAAIAAAJgAh5gMQAkgSATgaIAMAAIgCAEQAUAZAgANIgGAKQgfgQgVgaQgSAYgjATIgGgJg");
	this.shape.setTransform(-0.6,-1.7);

	this.instance = new lib.提示框();
	this.instance.setTransform(0.8,0);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.2,-12.9,42.5,26);


(lib.元件2_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.静音按钮("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,-10.4,24.5,21);


(lib.comuiFilmInfoBar = function() {
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


(lib.滑动块 = function() {
	this.initialize();

	// 图层 1
	this.dragMc = new lib.音量滑块();
	this.dragMc.setTransform(2.2,0);

	this.addChild(this.dragMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-10.8,15.6,21.6);


(lib.暂停按钮_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.暂停按钮("synched",0);
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-10.4,19,21);


(lib.播放按钮2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.播放按钮大("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-30.9,62.3,62);


(lib.声音喇叭 = function() {
	this.initialize();

	// 图层 2
	this.tipMc = new lib.TipMc();
	this.tipMc.setTransform(1.1,-25.9,1,1,0,0,0,-21.2,13);
	this.tipMc.cache(-44,-1,47,30);

	// 图层 1
	this.mc = new lib.元件1_2();

	this.addChild(this.mc,this.tipMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-38.9,42.5,50.3);


(lib.静音按钮_1 = function() {
	this.initialize();

	// 图层 1
	this.mc = new lib.元件2_1();

	this.tipMc = new lib.元件3();
	this.tipMc.setTransform(-0.8,-25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.播放器图标).s().p("AgsAFIAAgIIBZAAIAAAIg");
	this.shape_1.setTransform(16.5,-11.5);

	this.addChild(this.shape_1,this.tipMc,this.mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-38.4,60.3,49);


(lib.comuiVolumBar = function() {
	this.initialize();

	// 图层 1
	this.tipMc = new lib.提示();
	this.tipMc.setTransform(60.6,-19.3);

	this.dragMc = new lib.音量滑块();
	this.dragMc.setTransform(60,0);

	this.sliderBar = new lib.声音进度条();

	this.backMc = new lib.元件10();
	this.backMc.setTransform(30,0,1,1,0,0,0,30,0);

	this.addChild(this.backMc,this.sliderBar,this.dragMc,this.tipMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-32.3,81.1,43.2);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.播放按钮("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-11.2,21,22.5);


(lib.Logo = function() {
	this.initialize();

	// 图层 1
	this.tipMc = new lib.元件9();
	this.tipMc.setTransform(-1.1,-24.7);

	this.mc = new lib.元件8();

	this.addChild(this.mc,this.tipMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.1,-37.9,86.7,47.5);


(lib.全屏按钮 = function() {
	this.initialize();

	// 图层 1
	this.mc = new lib.元件5();

	this.tipMc = new lib.元件4();
	this.tipMc.setTransform(0.9,-24.9);

	this.addChild(this.tipMc,this.mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-37.9,42.5,49);


(lib.btnFullScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.全屏按钮();

	this.instance_1 = new lib.退出全屏按钮();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-37.9,42.5,49);


(lib.comvideoWJPlayerUI = function() {
	this.initialize();

	// 图层 4
	this.detailBtn = new lib.链接按钮();
	this.detailBtn.setTransform(440.1,309.6,1,1,0,0,0,-39.9,0);
	new cjs.ButtonHelper(this.detailBtn, 0, 1, 1);

	// 图层 3
	this._replayBtn = new lib.ReplayButton();
	this._replayBtn.setTransform(240,250.6,1,1,0,0,0,0,-19.4);
	new cjs.ButtonHelper(this._replayBtn, 0, 1, 1);

	this.showBg = new lib.comuiFilmInfoBar();
	this.showBg.setTransform(240,200);

	// 图层 6
	this._soundBtn = new lib.声音喇叭();
	this._soundBtn.setTransform(227.2,377.2);

	this._muteBtn = new lib.静音按钮_1();
	this._muteBtn.setTransform(255.5,376.4);

	this.waterPrint = new lib.WaterPrint();
	this.waterPrint.setTransform(520,192,1,1,0,0,0,40,192);

	// 图层 2
	this.text = new cjs.Text("0123456789/:", "12px Microsoft YaHei", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 99;
	this.text.setTransform(221.6,-855.9);

	this.adTimer = new lib.ADTimer();
	this.adTimer.setTransform(460,20);

	this.tipMc = new lib.提示();
	this.tipMc.setTransform(3.8,340);

	this._playBtn2 = new lib.播放按钮2();
	this._playBtn2.setTransform(240,200);
	new cjs.ButtonHelper(this._playBtn2, 0, 1, 1);

	this._volumBar = new lib.comuiVolumBar();
	this._volumBar.setTransform(274.9,376);

	this._timeTxtBar = new lib.时间面板();
	this._timeTxtBar.setTransform(80.4,380);

	this._playButton = new lib.PlayButton();
	this._playButton.setTransform(-1.3,379.6);
	new cjs.ButtonHelper(this._playButton, 0, 1, 1);

	this._logo = new lib.Logo();
	this._logo.setTransform(435,380);

	this._sliderButton = new lib.滑动块();
	this._sliderButton.setTransform(0.2,360,1,1,0,0,0,0.1,0);

	this._fullscreenButton = new lib.btnFullScreen();
	this._fullscreenButton.setTransform(380,380);

	this._timeBar = new lib.元件2();
	this._timeBar.setTransform(0.1,360,0.726,1,0,0,0,0.1,0);

	this._pauseButton = new lib.暂停按钮_1();
	this._pauseButton.setTransform(20.8,378.9);
	new cjs.ButtonHelper(this._pauseButton, 0, 1, 1);

	this.loadBar = new lib.LoadingBar();
	this.loadBar.setTransform(60,360,1,1,0,0,0,60,0);

	this._timeBarMask = new lib.元件1_1();
	this._timeBarMask.setTransform(60,360,1,1,0,0,0,60,0);

	this.addChild(this._timeBarMask,this.loadBar,this._pauseButton,this._timeBar,this._fullscreenButton,this._sliderButton,this._logo,this._playButton,this._timeTxtBar,this._volumBar,this._playBtn2,this.tipMc,this.adTimer,this.text,this.waterPrint,this._muteBtn,this._soundBtn,this.showBg,this._replayBtn,this.detailBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-972.6,-855.9,2172.7,1568);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;