import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('assign-ticket', 'Integration | Component | assign ticket', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{assign-ticket}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#assign-ticket}}
      template block text
    {{/assign-ticket}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
