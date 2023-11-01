import Highway from '@dogstudio/highway';

class gameGalleryRenderer extends Highway.Renderer {
	onEnter() {
        document.querySelector("#main-nav").classList.add('compact');
        document.body.classList.add("games");
	}

	onLeave() {
        document.body.classList.remove("games");
	}

	onEnterCompleted() {
        document.body.classList.remove("games");
        document.body.classList.remove("music");
        document.body.classList.remove("art");
        document.body.classList.remove("me");
        document.body.classList.add("games");
	}
	
	onLeaveCompleted() {

	}
}

export default gameGalleryRenderer;