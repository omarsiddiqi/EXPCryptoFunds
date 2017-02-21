var CommentBox = React.createClass({
    render: function () {
        return (
          <div className="commentBox">
            <h1>Comments are great</h1>
            <CommentList />
            <CommentForm />
          </div>
      );
    }
});
var CommentList = React.createClass({
    render: function () {
        return (
          <div className="commentList">
                <Comment author="Daniel Lo Nigro">Hello ReactJS.NET World!</Comment>
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
          </div>
      );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
          <div className="commentForm">
              Hello, world! I am a CommentForm.
          </div>
      );
    }
});
var Comment = React.createClass({

    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return {
            __html: rawMarkup
        };
    },

    render: function () {
        var md = new Remarkable();
        return (
            <div className="comment">
                <h2 className="commentsAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);