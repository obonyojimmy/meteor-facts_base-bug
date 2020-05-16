import { Meteor } from 'meteor/meteor';
import { Facts } from 'meteor/facts-base'

Facts.incrementServerFact('newPackage', 'skyIsBlue', 1);

Meteor.startup(() => {
  Facts.resetServerFacts()
});
