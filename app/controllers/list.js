import Controller from '@ember/controller';

export default Controller.extend({
	actions : {
		goToStream(name){
			this.transitionToRoute('tweet-stream', name);
		}
	}
});
