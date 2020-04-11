const expressJwt = require('express-jwt');
const config = require('config.json');

module.exports = jwt;

function jwt(){    
	const port = process.env.secret || config.secret;
	const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [            
            '/users/authenticate'
        ]
    });
}