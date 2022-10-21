import { Meteor } from 'meteor/meteor';
import { ScraperData } from '../../api/scraperData/ScraperData';

// ScraperData publication
Meteor.publish(ScraperData.userPublicationName, function () {
  return ScraperData.collection.find();
});
