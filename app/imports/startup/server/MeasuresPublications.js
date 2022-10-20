import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';
import { Measures } from '../../api/measures/Measures';

// Measures publication
Meteor.publish(Measures.userPublicationName, function () {
  if (this.userId) {
    return Measures.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});