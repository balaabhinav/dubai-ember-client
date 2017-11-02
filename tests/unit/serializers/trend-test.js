import { moduleForModel, test } from 'ember-qunit';

moduleForModel('trend', 'Unit | Serializer | trend', {
  // Specify the other units that are required for this test.
  needs: ['serializer:trend']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
