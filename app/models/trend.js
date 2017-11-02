import DS from 'ember-data';

export default DS.Model.extend({
	name : DS.attr('string'),
	url : DS.attr('string'),
	promoted_content : DS.attr('string'),
	query : DS.attr('string'),
	tweet_volume : DS.attr('number')
});
