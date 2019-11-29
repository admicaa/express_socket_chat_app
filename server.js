/** import express */
const express = require('express');

/** body-parser */

const bodyParser = require('body-parser');

/**ejs */

const ejs = require('ejs');

/** http */
const http = require('http');

/** container */

const container = require('./container');

container.resolve(function (users) {

    const app = setupExpress();

    // set up the server

    function setupExpress() {

        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function () {
            console.log('Listening or port 3000');
        });
        const router = require('express-promise-router')();

        users.setRouting(router);

        app.use(router);

        configureExpress(app);
    }

    /** set up the router */



    function configureExpress(app) {
        /** use anything in public as a file for ex: public/images/logo.png */
        app.use(express.static('public'));
        /**view engine ejs */
        app.set('view engine', 'ejs');
        /**body parser */
        app.use(bodyParser.json());

        app.use(bodyParser.urlencoded({ extended: true }));


    }

});






