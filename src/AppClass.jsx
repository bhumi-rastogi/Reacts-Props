import React from 'react';
import './App.css';
import elephant from "./images./elephant.jpeg";


export default class AppClass extends React.Component {
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
 

  render() {
    const images = this.imageData();
    return (
      <>
      <div className="image">
        <h1>Kalvium Gallery</h1>
        {images.map((elephant) => (
          <div key={elephant.id}>
            <img src={elephant.img} alt="" />
          </div>
        ))}
      </div>
      </>
    );
  }
}