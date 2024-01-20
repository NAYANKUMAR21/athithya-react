import './App.css';
import elephant from './images/elephant.jpeg';

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function App() {
  // code here
  let array = imageData();
  console.log(array);
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>kalvium gallery</h3>

      <div className="grid-div">

        {
        array.map(function (elemnt, index) {
          return (
            <div>
              <img src={elemnt.img} alt={elemnt.id} />
            </div>
          );
        })
        
        }

      </div>



    </div>
  );
}

export default App;
