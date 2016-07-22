var Input = React.createClass({

  getInitialState: function(){
    return {
      value: ''
    };
  },

  onChangeInput: function(e){
    console.log(e.target.value)
  },

  render: function(){
    return (
      <div>
        <form>
          <input onChange={this.onChangeInput}/>
          <button>send</button>
        </form>
      </div>

    );
  }

});
