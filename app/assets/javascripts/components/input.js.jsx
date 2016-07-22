var Input = React.createClass({

  getInitialState: function(){
    return {
      value: ''
    };
  },

  onChangeInput: function(e){
    // console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  },

  handleSubmit: function(e){
    e.preventDefault()
    if(this.props.onSubmitCallback){
      this.props.onSubmitCallback(this.state.value)
    }
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChangeInput}/>
          <button>send</button>
        </form>
      </div>

    );
  }

});
