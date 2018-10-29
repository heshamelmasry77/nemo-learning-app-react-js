import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'hesham',
      data:
        [
          {
            "id": 1,
            "name": "Foo",
            "age": "20"
          },
          {
            "id": 2,
            "name": "Bar",
            "age": "0"
          },
          {
            "id": 3,
            "name": "Baz",
            "age": "40"
          }
        ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map((item, i) => <div key={i}>
          <h3>{item.age}</h3>
          <h1 >{item.name}</h1>
        </div>)}
        <h1>{this.state.name}</h1>
        <h2>{this.state.name}</h2>
        <Header name={this.state.name} />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: "bmw...",
      name: "Content from state..."
    }
  }
  render() {
    return (
      <div>
        <h4 className="hamada">{this.props.name}</h4>
            <h1>{this.state.car}</h1>
            <h1>{this.state.name}</h1>
             <p>ana hsham we nemo </p>
         </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
    );
  }
}

export default App;
