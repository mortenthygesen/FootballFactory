
var MessageFromAuthor = React.createClass({
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },
    render: function(){
        return (
            <h1 class="authorMsg">{ this.state.data.msg }</h1>
        );
    }
})


ReactDOM.render(
    <div>
        <MessageFromAuthor url="/message/" />
        <h3>To go over everything</h3>
    </div>,
    document.getElementById('well')
);