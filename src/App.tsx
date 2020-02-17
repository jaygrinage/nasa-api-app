import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

// const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const App = () => {

  const [RoverImages, setRoverImages] = useState<any>([])
  const [ImageError, setImageError] = useState("")


    const getRoverImages = async (date) => {
      const API =
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=DEMO_KEY`;

      try {
        
      const response = await axios.get(API);

      console.log(response.data.photos);

      setRoverImages(response.data.photos);
      setImageError("");
      } catch (error) {
        console.log('OOPS Invalid Data', error)
        setImageError("WHOA!! Something Went Wrong  - " + error);
        setRoverImages([]);
      }
    };

    const handleDownload = async (imageURL) => {
    const response = await fetch(
      imageURL
    );
    if (response.status === 200) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "image";
      document.body.appendChild(link);
      link.click();
      link.remove();
      return { success: true };
    }
  };
    


  return (
    <div data-testid="App">
      <div className="header">
        <h1>MARS Rover Photos</h1>
        <p>Click on a date to check out some photos from the MARS Rover.</p>
        <p>Click on any photo to download!</p>
      </div>
      <div className="content">
        <section className="dates">
          <button
            onClick={() => getRoverImages("2017-02-27")}
            className="ui inverted primary button"
          >
            02/27/17
          </button>
          <button
            onClick={() => getRoverImages("2018-06-02")}
            className="ui inverted primary button"
          >
            June 2, 2018
          </button>
          <button
            onClick={() => getRoverImages("2016-07-13")}
            className="ui inverted primary button"
          >
            Jul-13-2016
          </button>
          <button
            onClick={() => getRoverImages("2018-04-31")}
            className="ui inverted primary button"
          >
            April 31, 2018
          </button>
        </section>
        <section className="items" data-testid="section">
          <h1 className="errorM">{ImageError}</h1>
          {RoverImages.map(image => (
            <div key={image.id} onClick={() => handleDownload(image.img_src)}>
              <img data-testid="section-images" src={image.img_src} alt="Rover View" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
