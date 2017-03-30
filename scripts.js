'use strict';
class Time{
	constructor(){
		this._hours = document.querySelector('.time .hours');
		this._minutes = document.querySelector('.time .minutes');
		this._seconds = document.querySelector('.time .seconds');
		this._date;
	}
	showTime(){
		this._date = new Date();
		this._seconds.innerHTML = (this._date.getSeconds()>=10) ? this._date.getSeconds() : '0'+this._date.getSeconds();
		this._hours.innerHTML = (this._date.getHours()>=10) ? this._date.getHours() : '0'+this._date.getHours();
		this._minutes.innerHTML = (this._date.getMinutes()>=10) ? this._date.getMinutes() : '0'+this._date.getMinutes();
		this.changeColor();
	}
	changeColor(){
		document.body.style.background = "#" + this._hours.innerHTML + this._minutes.innerHTML + this._seconds.innerHTML;
	}
}
const time = new Time();
setInterval(function(){
	time.showTime();
}, 1000);