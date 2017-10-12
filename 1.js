document.addEventListener('mousemove',move);
function move(ev){
	box.style.left = ev.clientX - disX + 'px';
	box.style.top = ev.clientY - disY + 'px';
}
