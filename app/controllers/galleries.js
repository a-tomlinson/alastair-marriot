import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    open() {
      this.toggleProperty('isOpen', true);
    },
    gallery() {
      this.toggleProperty('isGallery');
    }
  }
});
