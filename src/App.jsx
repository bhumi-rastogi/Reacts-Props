import './App.css';

function App(props) {
  const imageArray = props.imageData();

  return (
    <div>
      {imageArray.map((image) => (
        <div key={image.id} className='images'>
          <img src={image.img} alt="elephant image"/>
        </div>
      ))}
    </div>
  );
}

export default App;
