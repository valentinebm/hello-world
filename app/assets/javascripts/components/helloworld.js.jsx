var Helloworld = React.createClass({


  submitCallback: function(value){
    console.log('hello')
    console.log(value)
  },

  render: function(){
    return (
      <div> First component
        <Counter/>
        <Input onSubmitCallback={this.submitCallback}/>
      </div>
    );
  }
});
