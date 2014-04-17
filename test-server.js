var express = require('express'),
    fs      = require('fs');

module.exports = function(options) {
    app = express();

    app.configure(function() {
        app.use(express.bodyParser());
        app.use('/exams', express.static('./exams'));
        app.use('/tests', express.static('./tests'));
        app.use('/node_modules', express.static('./node_modules'));
        app.use('/lib', express.static('./lib'));
        app.use('/config', express.static('./config'));
    });

    app.get("/", function(req, res) {
        fs.createReadStream('./tests/runner.html').pipe(res);
    });

    app.listen(options.port, function() {
        console.log('Express server listening on port %d in %s mode', options.port, app.settings.env);
    });
};
