import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { FakeData } from '../../api/fakeData/FakeData.js';
import { Measures } from '../../api/measures/Measures.js';
import { Testimonies } from '../../api/testimony/Testimony';

/* eslint-disable no-console */
// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// copied add fake data
const addFakeData = (data) => {
  console.log('Added fake data');
  FakeData.collection.insert(data);
};

const addMeasures = (measure) => {
  console.log(`Adding: ${measure.code}`);
  Measures.collection.insert(measure);
};

// Initialize the database with a default testimonies.
const addTestimoniesData = (testimony) => {
  // console.log(`Adding: ${testimony.}`);
  Testimonies.collection.insert(testimony);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialization of FakeDataCollection
if (Meteor.settings.fakeData) {
  console.log('Creating fake data database');
  Meteor.settings.fakeData.forEach(data => addFakeData(data));
}

// Initialization of test Measures
if (Measures.collection.find().count() === 0) {
  if (Meteor.settings.measures) {
    console.log('Creating measures database');
    Meteor.settings.measures.forEach(measure => addMeasures(measure));
  }
}

// Initialize the TestimoniesCollection if empty.
if (Testimonies.collection.find().count() === 0) {
  if (Meteor.settings.testimoniest) {
    console.log('Creating default testimony data.');
    Meteor.settings.testimonies.forEach(data => addTestimoniesData(data));
  }
}
