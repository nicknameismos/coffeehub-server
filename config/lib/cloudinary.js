'use strict';
var cloudinary = require('cloudinary');

// cloudinary purchasetest
cloudinary.config({
    cloud_name: 'ha7s6qhcg',
    api_key: '979335999988114',
    api_secret: 'nbgYN7gcr0PnbBPjkAFPYqGA7yU'
});

module.exports.cloudinary = cloudinary;
