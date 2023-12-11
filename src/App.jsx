import './App.css';
import elephant from "./images/elephant.jpeg";


const imageData= ()=>{
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

function App() {
  const imageArray = imageData();

  return (
    <>
   

    <div className="images">

      {imageArray.map((image) => (

        <div key={image.id}>

          <img src={image.img} alt="" />

        </div>

      ))}

    </div>
    </>
  );
}

export default App;
