import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The FakeDataCollection. It encapsulates state and variable values for stuff.
 */
export const committees = [
  'AEN', 'AGR', 'CAI', 'CMV',
  'CPC', 'CPN', 'ECD', 'EDN',
  'EDU', 'EEP', 'EET', 'FIN',
  'GVO', 'GVR', 'HET', 'HHH',
  'HMS', 'HOU', 'HRE', 'HSG',
  'HTH', 'HWN', 'JDC', 'JHA',
  'LAT', 'LCA', 'LMG', 'PDP',
  'PSM', 'TRN', 'TRS', 'WAL',
  'WAM', 'WTL',
];

export const offices = ['BOE', 'OCID', 'OFS', 'OFO', 'OITS', 'OSIP', 'OSSS', 'OTM'];

class FakeDataCollection {
  constructor() {
    // The name of this collection.
    this.name = 'FakeDataCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      billNumber: String,
      actionNeeded: {
        type: String,
        allowedValues: ['Testimony', 'Monitor'],
      },
      rationale: String,
      reportTitle: String,
      measureTitle: String,
      committee: Array,
      'committee.$': {
        type: String,
        allowedValues: committees,
      },
      office: Array, 'office.$': {
        type: String,
        allowedValues: offices,
      },
      hearingDate: String,
      hearingType: String,
      doePosition: String,
      status: {
        type: String,
        allowedValues: ['Deferred/Inactive', 'Active'],
      },
      measureStatusLink: String,
      youtubeRecordingsLink: Array, 'youtubeRecordingsLink.$': String,
      committeeReportsLink: Array, 'committeeReportsLink.$': String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the FakeDataCollection.
 * @type {FakeDataCollection}
 */
export const FakeData = new FakeDataCollection();
