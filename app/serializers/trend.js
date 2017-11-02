import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType){
		console.log('payload => ', payload);
		payload = {
			trend : payload.trends	
		}
		payload.trend = payload.trend.map( (t, i) => {
			return Object.assign({}, t, {id : i})
		})

		return this._super(store, primaryModelClass, payload, id, requestType)
	}
});
