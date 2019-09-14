var app = require('./config/express')();

require('./config/database')('mongodb+srv://hack4:hack4@cluster0-tcliu.mongodb.net/test?retryWrites=true&w=majority');

app.listen(app.get('port'), function(){
     console.log(`Express on port ${app.get('port')}`);
}); 