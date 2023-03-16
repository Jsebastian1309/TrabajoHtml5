
const canvas = document.getElementById("reloj");
const ctx = canvas.getContext("2d");

function drawText(time) {
	const text = time.toLocaleTimeString();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillText(text, 50, 50);
}
setInterval(() => {
	const now = new Date();
	drawText(now);
}, 1000);

var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);

function showThisDialog(){
   document.getElementById('this-dialog').show();

}

function hideThisDialog(){
   document.getElementById('this-dialog').close();
}