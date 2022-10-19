import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

export const offices = ['BOE', 'OCID', 'OFS', 'OFO', 'OHE', 'OITS', 'OSIP', 'OSSS', 'OTM', 'SUPT'];

/**
 * The MeasuresCollection. It encapsulates state and variable values for stuff.
 */
class MeasuresCollection {
  constructor() {
    // The name of this collection.
    this.name = 'MeasuresCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      office: { type: Array, optional: true },
      'office.$': {
        type: String,
        allowedValues: offices,
      },
      bitAppropriation: { type: Number, optional: true },
      code: String,
      companion: { type: String, optional: true },
      currentReferral: { type: String, optional: true },
      description: { type: String, optional: true },
      introducer: { type: String, optional: true },
      lastUpdated: { type: Number, optional: true },
      measureArchiveUrl: { type: String, optional: true },
      measureNumber: { type: Number, optional: true },
      measurePdfUrl: { type: String, optional: true },
      measureTitle: { type: String, optional: true },
      measureType: { type: String, optional: true },
      reportTitle: { type: String, optional: true },
      status: { type: String, optional: true },
      year: { type: Number, optional: true },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the MeasuresCollection.
 * @type {MeasuresCollection}
 */
export const Measures = new MeasuresCollection();
