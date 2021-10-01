import React from "react";
import ImgTvPicTop from "../assets/img/tv pic top.svg";
import ImgSony256 from "../assets/img/sony-256.png"
import ImgSonytv from "../assets/img/sony tv.png"
import Img234479 from "../assets/img/234479_2_mzgwn4-removebg-preview.jpg"
import Img234527 from "../assets/img/234257_ydifvx-removebg-preview-2.jpg"
import Img89412900 from "../assets/img/8941290029086-removebg-preview.jpg"

const Index = () => {
    return (
        <div>
            <section class="main-visual">
          <img class="top" src={ImgTvPicTop} />
          <img id="sony" src={ImgSony256} />



          <div class="ad">
            <p class = "one">A NEW TV EXPERIENCE AWAKENS</p>
            <p class = "two">BRAVIA</p>
            <p class = "three">OLED</p>
          </div>



        </section>

        
        <section class="content">


          <ul class="items">
            <li>
              <img src={ImgSonytv} class="item-image" />
              <div class="info">
                <div class="name">Sony BROVIA X80J series 164cm (65 inch)
                  Ultra HD 4k google smart
                </div>

                <div class="info-bottom">
                  <div class="price">$380</div>
                  <div class="add">Add +</div>
                </div>
              </div>
            </li>

            <li>
              <img src={Img234479} class="item-image" alt="" />
              <div class="info">
                <div class="name">Samsung 579 Litres frost free digital
                  inverter French door refrigerator
                </div>

                <div class="info-bottom">
                  <div class="price">$1000</div>
                  <div class="add">Add +</div>
                </div>
              </div>
            </li>

            <li>
              <img src={Img234527} class="item-image" alt="" />
              <div class="info">
                <div class="name">Apple iPhone 12 mini (256GB ROM, 4GB
                  RAM, Purple
                </div>
                <div class="info-bottom">
                  <div class="price">$1000</div>
                  <div class="number">
                    <span class="minus">－</span>
                    <span class="count">1</span>
                    <span class="plus">+</span>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <img src={Img89412900} class="item-image" alt="" />
              <div class="info">
                <div class="name">Samsung 28 Litres convection microwave
                  Oven, black
                </div>

                <div class="info-bottom">
                  <div class="price">$300</div>
                  <div class="add">Add +</div>
                </div>
              </div>
            </li>

          </ul>
        </section>
        </div>
        

    );
};

export default Index;