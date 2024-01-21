import ImageData from './DataComponent';
function FourImages() {
  let arrayData = ImageData();
  return (
    <div>
      {arrayData.map((image) => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        );
      })}
    </div>
  );
}

export default FourImages;
