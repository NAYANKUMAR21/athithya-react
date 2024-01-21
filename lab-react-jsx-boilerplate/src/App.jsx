import './App.css';

function App(props) {
  //{imageData:21}
  let dataArray = props.imageDataProp();

  // code here
  return (
    <>
      <h1 className="h1">kalvium Gallery</h1>
      <div className="grid">
        {dataArray.map(function (element, index) {
          return <img src={element.img} alt={index} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
