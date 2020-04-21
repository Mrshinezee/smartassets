import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { simpleAction } from './actions/simpleAction';
import './App.scss';

function App(props) {
  
  const simpleAction = event => props.simpleAction()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <button onClick={simpleAction}>Test redux action</button>
      <pre>
        {
          JSON.stringify(props)
        }
      </pre>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
