var box = document.getElementsByTagName('div');
box.addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - this.offsetLeft;
	var disY = ev.clientY - this.offsetTop;

	document.addEventListener('mousemove',move);
	function move(ev){
		box.style.left = ev.clientX - disX + 'px';
		box.style.top = ev.clientY - disY + 'px';
	}
}
