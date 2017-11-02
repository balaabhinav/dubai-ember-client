import Controller from '@ember/controller';

export default Controller.extend({
	tweetData : [],
	init(){
		console.log("name in controller => ", this.get('name'));
		// console.log('wiondows => ', window);
		// let socket = window.io('http://localhost:3333')
		// // let socket = io('http://localhost:3333');
		// socket.on('connection', (socket) => {
		// 	console.log("connected!!");
		// })
		// let mod = this.get('model');
		// console.log("the model in tweet-stream => ",mod);
		// let data = {
		// 	name : "#UAEFlagDay"
		// }
		// socket.emit('fetch-trending', data);
		// socket.on('tweet-stream', (d) => {
		// 	console.log("tweet-stream data => ", d)
		// })
	}
});
