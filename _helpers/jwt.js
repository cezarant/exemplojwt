const expressJwt = require('express-jwt');
const config = require('config.json');

module.exports = jwt;

function jwt(){    
	const port = config.secret || process.env.secret;
	const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [            
            '/users/authenticate'
        ]
    });
}