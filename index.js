var defaultAllowedText = 'User-agent: *\nDisallow:\n';
var defaultDisallowedText = 'User-agent: *\nDisallow: /\n';

/**
 * Handles requests for '/robots.txt' according to the current domain
 * @param  {array} allowedDomains  Array of domains (strings) allowed for search engines
 * @param  {string} allowedText    Content of the robots.txt for allowed domains
 * @param  {string} disallowedText Content of the robots.txt for NON allowed domains
 * @return {function} Express middleware
 */
var constructor = function(allowedDomains, allowedText, disallowedText) {

    if (!Array.isArray(allowedDomains)) {
        throw new Error('Please supply param [allowedDomains] in form of an Array');
    }

    // lowercase all domains for easy comparison
    for (var i = 0, l = allowedDomains.length; i < l; i++) {
        allowedDomains[i] = allowedDomains[i].toLowerCase();
    }

    // set allowedText to default if not set 
    if (typeof allowedText !== 'string') {
        allowedText = defaultAllowedText;
    }

    // set disallowedText to default if not set 
    if (typeof disallowedText !== 'string') {
        disallowedText = defaultDisallowedText;
    }

    return function middleware(req, res, next) {

        if (req.url.toLowerCase() !== '/robots.txt') {
            next();
            return;
        }

        var host = req.hostname.toLowerCase();
        var text = allowedDomains.indexOf(host) < 0 ? disallowedText : allowedText;

        res.set('Content-Type', 'text/plain');
        res.send(text);
    }

};

module.exports = constructor;