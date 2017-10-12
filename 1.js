
var box = document.getElementsByTagName('div');
box.addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - this.offsetLeft;
	var disY = ev.clientY - this.offsetTop;
}
