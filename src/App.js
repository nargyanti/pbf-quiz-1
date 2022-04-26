import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentList from './containers/StudentList/StudentList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
          <h1>Component from Class App</h1>
          <StudentList/>
        <Footer title='Footer Page' name='JTI' />
      </div>
    );
  }
}
export default App;