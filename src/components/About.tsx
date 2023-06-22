import { useState } from "react";
import download from '../assest/download.png';

const About = () => {
            const [selectedImage, setSelectedImage] = useState(null);

return (
  <div>
    <h1>Upload and Display Image usign React Hook's</h1>
    {selectedImage && (
      <div>
      <img alt="not fount" width={"30%"} height={'500px'}src={URL.createObjectURL(selectedImage)} />
      <br />
      <button onClick={()=>setSelectedImage(null)}>Remove</button>
      </div>
    )}
    <br />
   
    <br /> 
    <input
      type="file"
      name="myImage"
      onChange={(event) => {
          // @ts-ignore: Object is possibly 'null'.
        setSelectedImage(event.target.files[0]);
      }}
    />
  </div>
);
};

    

export default About;