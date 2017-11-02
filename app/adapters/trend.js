import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host : 'http://localhost:3333',
	pathForType(){
		return 'trends'
	}
});
