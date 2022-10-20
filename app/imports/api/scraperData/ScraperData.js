import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The ScraperDataCollection. It encapsulates state and variable values for ScraperData.
 */
class ScraperDataCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ScraperDataCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      code: { type: String, optional: true },
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
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ScraperDataCollection.
 * @type {ScraperDataCollection}
 */
export const ScraperData = new ScraperDataCollection();
