var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swaggerUi=require('swagger-ui-express');
var swaggerJsdoc=require('swagger-jsdoc');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var queRouter=require('./routes/questions');
var testRouter=require('./routes/test');
var cors=require('cors');

var app = express();

//swagger
const swaggerOptions={
  swaggerDefinition:
  {
    info:
    {
      title:'MyAPI',
      version:'1.0.0',
      description:'My API using Swagger'
    }
  },
  apis:['./routes/test.js']
}

const swaggerSpec=swaggerJsdoc(swaggerOptions);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/que',queRouter);
app.use('/test',testRouter);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
