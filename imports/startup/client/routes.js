import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/*
Import Layouts and Pages
 */
import '../../ui/layouts/base';
import '../../ui/pages/landing';

FlowRouter.route('/', {
	action: function() {
	BlazeLayout.render('baseLayout', {main: 'landing'});
	},
	name: 'landing'
});