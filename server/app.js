var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var port = 3333;

app.use( express.static( 'public' ) );

app.listen( port, function(){
  console.log( 'listening on:', port );
});

app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end get /
