import Ember from 'ember';
import copy from '../models/biography'

export default Ember.Route.extend({
  model() {
    return copy;
  }
});
