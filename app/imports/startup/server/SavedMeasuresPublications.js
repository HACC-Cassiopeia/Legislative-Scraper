import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';
import { SavedMeasures } from '../../api/savedMeasures/SavedMeasures';

// SavedMeasures publication
Meteor.publish(SavedMeasures.userPublicationName, function () {
  return SavedMeasures.collection.find();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
