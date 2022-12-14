import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { SavedMeasures } from '../../api/savedMeasures/SavedMeasures.js';
import { Testimonies } from '../../api/testimony/Testimony.js';

/* eslint-disable no-console */
// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

const addMeasures = (measure) => {
  console.log(`  Adding: ${measure.code}`);
  SavedMeasures.collection.insert(measure);
};

// Initialize the database with a default testimonies.
const addTestimoniesData = (testimony) => {
  console.log(`  Adding: ${testimony.committeeName}`);
  Testimonies.collection.insert(testimony);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialization of test SavedMeasures
if (SavedMeasures.collection.find().count() === 0) {
  if (Meteor.settings.defaultSavedMeasures) {
    console.log('Creating measures database');
    Meteor.settings.defaultSavedMeasures.forEach(measure => addMeasures(measure));
  }
}

// Initialize the TestimoniesCollection if empty.
if (Testimonies.collection.find().count() === 0) {
  if (Meteor.settings.testimonies) {
    console.log('Creating default testimony data.');
    Meteor.settings.testimonies.forEach(data => addTestimoniesData(data));
  }
}
