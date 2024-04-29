import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
    return (
        <div className="descriptionBox">
          <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">Description</div>
            <div className="descriptionBox-nav-box fade">Reviews (122)</div>
          </div>
          <div className="descriptionBox-description">
            <p> An eCommerce website serves as a virtual marketplace where customers can explore, select, and purchase products or services online. An online platform where customers can browse, select, and purchase products or services, all from the comfort of their devices. eCommerce websites facilitate transactions, provide product information, and offer a seamless shopping experience.</p>
          <p>
          An eCommerce website serves as a digital storefront where goods and services are traded between buyers and sellers over the internet. Unlike a physical store, an eCommerce website can be accessed anytime, from anywhere, as long as there's an internet connection. Users can search for specific products or browse through categories using intuitive navigation menus.
          </p>
          </div>
        </div>
    )
};

export default DescriptionBox;