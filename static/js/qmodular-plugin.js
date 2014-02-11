seajs.on('fetch', function(emitData){
	console.log('I will fetch');
    var idDelimiter = ':'; 

    var uri = emitData.uri;
    // uri = $fileurl:$id
    // do for change `version`
    var parts = uri.split(idDelimiter);
    parts.pop();
    emitData.requestUri = parts.join(idDelimiter);
});

