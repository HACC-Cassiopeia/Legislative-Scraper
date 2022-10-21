import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';
import { SavedMeasures } from '../../api/savedMeasures/SavedMeasures';

// SavedMeasures publication
Meteor.publish(SavedMeasures.userPublicationName, function () {
  return SavedMeasures.collection.find();
});
