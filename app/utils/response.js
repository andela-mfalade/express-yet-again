'use strict';
var responseUtils = { endRequest: endRequest };
function endRequest( req, res ) {
    res.end();
}

module.exports = responseUtils;
