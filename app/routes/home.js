import Ember from 'ember';
import copy from '../models/home'

export default Ember.Route.extend({
  model() {
    return copy;
  }
});
