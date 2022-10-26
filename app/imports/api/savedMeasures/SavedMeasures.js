import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

export const offices = ['BOE', 'OCID', 'OFS', 'OFO', 'OHE', 'OITS', 'OSIP', 'OSSS', 'OTM', 'SUPT'];

/**
 * The SavedMeasuresCollection. It encapsulates state and variable values for stuff.
 */
class SavedMeasuresCollection {
  constructor() {
    // The name of this collection.
    this.name = 'SavedMeasuresCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      office: { type: Array, optional: true },
      'office.$': {
        type: String,
        allowedValues: offices,
      },
      archive: { type: Boolean, optional: true },
      code: { type: String, optional: false },
      measurePdfUrl: { type: String, optional: true },
      measureArchiveUrl: { type: String, optional: true },
      measureTitle: { type: String, optional: true },
      reportTitle: { type: String, optional: true },
      description: { type: String, optional: true },
      statusHorS: { type: String, optional: true },
      statusDescription: { type: String, optional: true },
      statusDate: { type: String, optional: true },
      introducer: { type: String, optional: true },
      currentReferral: { type: String, optional: true },
      companion: { type: String, optional: true },
      doeAction: { type: String, optional: true },
      hearingDate: { type: String, optional: true },
      hearingTime: { type: String, optional: true },
      hearingLocation: { type: String, optional: true },
      doePosition: { type: String, optional: true },
      testifier: { type: String, optional: true },
      doeInternalStatus: { type: String, optional: true },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the SavedMeasuresCollection.
 * @type {SavedMeasuresCollection}
 */
export const SavedMeasures = new SavedMeasuresCollection();
