import Route from '@ember/routing/route';

let socket = null;
export default Route.extend({
	beforeModel(){
		socket = window.io('http://localhost:3333');
	},
	model(params){
		console.log("params to tweet => ", params);
		return {
			name : params.name,
			tweetData : []
		}
		// let topic = this.get('selectedTopic');
		// console.log("selected topic => ", topic);
	},
	setupController(controller, model){
		console.log("model in setupController => ", model);
		this._super(controller, model);
		controller.set('name', model.name);
		controller.set('tweetData', []);
		socket.on('connection', (socket) => {
			console.log("connected!!");
		})

		let data = {
			name : model.name
		}
		socket.emit('fetch-trending', data);
		socket.on('tweet-stream', (d) => {
			
			let tweetData = controller.get('tweetData');
			let data = [...tweetData, d];
			
			controller.set('name', model.name)
			controller.set('tweetData', data);
			
		})
	},
	actions : {
		willTransition(transition){
			let name = this.get('controller.name');
			if(socket){
				socket.emit('leave-trending', { name : name });
				socket.close();
			}
		}
	}
});
