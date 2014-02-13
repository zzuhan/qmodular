define(function (require, exports, module) {
	require('./common');

	log('I am the docs page');

    require('common/affix');
    $('#qm-docs-nav').affix({
        offset: {
        	top: 100,
            bottom: function () {
                return $('#footer').outerHeight() + $('#ds-thread').outerHeight();
            }
        }   
    });

    require('common/scrollspy');
    $('body').scrollspy({target: '#qm-docs-nav', offset: 20});

    require('common/pretty-code');
    prettyPrint();
});