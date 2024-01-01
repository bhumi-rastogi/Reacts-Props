import React from 'react';
import './App.css';


export default class AppClass extends React.Component {

  render() {
    const images = this.props.imageData();
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className='images'>
        {images.map((elephant) => (
          <div key={elephant.id}>
            <img src={elephant.img} alt="" />
          </div>
        ))}
        </div>
      </div>
    );
  }
}