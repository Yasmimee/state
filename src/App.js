import { render } from '@testing-library/react';
import react from 'react';
import person from './person.js'
import './App.css';

class app extends react.Component{
  state = {
    show: true
  };

  toggle = () => {
    this.setState({
      show: !this.state.person
    });
  };

  render(){
return (
  <>
        {this.state.show && (
          <>
            <h1>{this.state.person.fullName}</h1>
            <h1>{this.state.person.bio}</h1>
            <img src={this.state.person.imgSrc} alt="Me"></img>
            <h1>{this.state.person.profession}</h1>
            
          </>
        )}

        <button onClick={this.toggle}>click here</button>
      </>
    );
  }
}
export default app
