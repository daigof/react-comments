var CommentBox = require( './CommentBox' );
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

// var data = [
//   {id: 1, author: 'Pete Hut', text: 'This is one comment'},
//   {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
// ];

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById( 'content' )
);
