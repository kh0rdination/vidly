const winston = require('winston');
//require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
    process.on('uncaughtException', (ex) => {
        console.log('we got an uncaught exception!');
        winston.error(ex.message, ex);
        process.exit(1);
    });
    
    process.on('unhandledRejection', (ex) => {
        console.log('we got an unhandled Promise Rejection!');
        winston.error(ex.message, ex);
        process.exit(1);
    });
    
    winston.add(winston.transports.File, { filename: './logfile.log' });
    // winston.add(winston.transports.MongoDB, { 
    //     db: 'mongodb://localhost/vidly', 
    //     level: 'info'
    //});
}