define(function (require, exports, module) {
    // 测试一段中文
	require('./common');

	log('I am the docs page');

    require('common/affix');
    $('#qm-docs-nav').affix({
        offset: {
        	top: 100,
            bottom: function () {
                return $('#footer').outerHeight() + $('#ds-thread').outerHeight() + 100;
            }
        }   
    });

    require('common/scrollspy');
    $('body').scrollspy({target: '#qm-docs-nav', offset: 20});

    require('common/pretty-code');
    prettyPrint();

    require('common/tooltip');
    $('#other-docs').closest('.qm-docs-section').find('a').tooltip({placement: 'right'});
    $('[data-toggle="tooltip"]').tooltip();
    
});