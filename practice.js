function replaceImages(event) {
	console.log(event);
	let images = document.getElementsByTagName("img");
	console.log(images);
	for (let image in images) {
		//console.log(image.alt);   this isn't working
		if (image.alt) {
			let text = document.createTextNode(image.alt);
			image.parentNode.replaceChild(text, image);
		}
	}
}
