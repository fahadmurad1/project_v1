import React from 'react'
import "../Styles/CSS/Slider.css";



const Slider = () => {
  return (
     <section>
            <div id="containerSlider">
                <div id="slidingImage"> <img src="https://www.pappcoindia.com/cdn/shop/files/All_New_Snapit_Series_Home_Page_Banner_6072x.png?v=1733467208" alt="image1"/> </div>
                <div id="slidingImage"> <img src="src/assets/img/img2.png" alt="image2"/> </div>
                <div id="slidingImage"> <img src="src/assets/img/img3.png" alt="image3"/> </div>
                <div id="slidingImage"> <img src="src/assets/img/img4.png" alt="image4"/> </div>
            </div>
    </section>
  )
}

export default Slider