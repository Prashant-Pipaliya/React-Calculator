import React, { Component } from "react";

class App extends Component{

  constructor(){
    super();
    this.state = {
      data : ""
    }
  }

  clickButton = (e) => {
    this.setState({ data : this.state.data + e.target.value })
    // + indicate concatination of two string
  }

  clearValue = () => {
    this.setState({ data : "" })
  }

  backSpace = () => {
    this.setState({ data : this.state.data.slice(0, -1) })
    // -1 indicte this.state.data.length -1
  }

  calculateResult = () => {

    try {
      this.setState({ data : eval(this.state.data).toString() })
    }
    catch (error) {
      this.setState({ data : "error" })
      console.log(error);
    }
  }

  render(){
    return(
      <>
          
        <h1 className="text-center mt-3" >The Calculator</h1>

        <div className="calc_main">

          <input type="text" placeholder="0" className="output_scrn" value={this.state.data} />
          <input type="button" value="(" onClick={this.clickButton} />
          <input type="button" value="CE" onClick={this.backSpace} />
          <input type="button" value=")" onClick={this.clickButton} />
          <input type="button" value="C" onClick={this.clearValue} />
          <input type="button" value="9" onClick={this.clickButton} />
          <input type="button" value="8" onClick={this.clickButton} />
          <input type="button" value="7" onClick={this.clickButton} />
          <input type="button" value="+" onClick={this.clickButton} />
          <input type="button" value="6" onClick={this.clickButton} />
          <input type="button" value="5" onClick={this.clickButton} />
          <input type="button" value="4" onClick={this.clickButton} />
          <input type="button" value="-" onClick={this.clickButton} />
          <input type="button" value="3" onClick={this.clickButton} />
          <input type="button" value="2" onClick={this.clickButton} />
          <input type="button" value="1" onClick={this.clickButton} />
          <input type="button" value="*" onClick={this.clickButton} />
          <input type="button" value="." onClick={this.clickButton} />
          <input type="button" value="0" onClick={this.clickButton} />
          <input type="button" value="=" onClick={this.calculateResult} />
          <input type="button" value="/" onClick={this.clickButton} />
        </div>
  
      </>
    )
  }
}

export default App;