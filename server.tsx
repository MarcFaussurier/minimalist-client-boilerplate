import compression from 'compression';
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import configDev from './webpack-dev';

const isProd = process.env.NODE_ENV === 'production';

const app: any = express();

const compiler = webpack(configDev);

app.use(express.static('www'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/asset-list.js', (req, res, next) => {
  res.set('Content-Type', 'text/javascript');
  res.send(`console.log("patate");`);

});

if (!isProd) {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: configDev.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));

} else {
  app.use(compression());
  app.use(express.static('dist/public', {
    setHeaders(res, resPath) {
      // do not set Cache-Control for index page
      const isIndexFile = resPath.endsWith('/index.html');
      if (!isIndexFile) {
        res.setHeader('Cache-Control', '86400');
      }
    }
  }));
}

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Listening at http://localhost:3000/');
});
