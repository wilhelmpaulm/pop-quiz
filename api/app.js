// require('dotenv').config();

// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data.sqlite3',
  },
  useNullAsDefault: true,
});

(async () => {
  await knex('users')
    .join('accounts', 'users.id', 'accounts.user_id')
    .select('users.user_name as user', 'accounts.account_name as account');
})();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.listen(process.env.PORT, () =>
//   console.log(`Example app listening at http://localhost:${process.env.PORT}`)
// );
