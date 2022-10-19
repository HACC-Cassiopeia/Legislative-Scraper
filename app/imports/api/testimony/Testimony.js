import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The TestimonyCollection. It encapsulates state and variable values for testimony.
 */
class TestimonyCollection {
  constructor() {
    // The name of this collection.
    this.name = 'TestimoniesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      committeeChair: String,
      committeeName: String,
      billNumber: String,
      draftNumber: String,
      hearingDate: Date,
      hearingLocation: String,
      position: String,
      introduction: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the TestimonyCollection.
 * @type {TestimonyCollection}
 */
export const Testimonies = new TestimonyCollection();
