import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './ProductPage.css'; 

const products = [
    {id:1, name:"SoundLink Flex", price:599, img:"https://t4.ftcdn.net/jpg/03/46/10/29/360_F_346102982_aa7sykIusFxbNA91jEDZoaKwYxLO12LS.jpg", rating:4.5, reviews: ["Excellent sound quality!", "Worth every penny."], description:"A high-quality speaker with excellent sound clarity."},
    {id:2, name:"BassBlaster Pro", price:999, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mfx2nSv3ZRYTbYS8o2m4TPPJNJbO8SKfPA&s", rating:3.5, reviews: ["Good for the price.", "Could use more bass."], description:"An affordable speaker that delivers decent performance."},
    {id:3, name:"ClaritySound Mini", price:699, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNOZhhotzXpXC-nQxvvLRtuDudr5s4DjM5A&s", rating:4.0, reviews: ["Great value for money.", "Clear sound but lacks depth."], description:"Compact and portable, offers a good balance of sound quality."},
    {id:4, name:"MaxVolume X1", price:945, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wI1j6y2rt5bsbMKgE30orDj0dwGCuyTbSA&s", rating:4.8, reviews: ["Excellent audio performance.", "Very durable and stylish."], description:"Premium speaker with rich bass and clear highs."},
    {id:5, name:"PureAudio Elite", price:545, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9pFh2leZOsyW5XNwZYQvaNbMJ0_fkR7LWA&s", rating:4.2, reviews: ["Great sound for the price.", "Sleek design and easy to use."], description:"Versatile speaker with high-quality audio and a modern design."},
    {id:6, name:"PortaTune Plus", price:699, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7g_zE915gDZ5njp4nfZuC9VvYNsSj5TLaA&s", rating:3.9, reviews: ["Good sound but battery life could be better.", "A bit bulky but worth it."], description:"Robust speaker with decent sound quality."},
    {id:7, name:"SoundWave 5.0", price:799, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS2ldqjF8Rv0VfyVDCtKt-k2U-oyZJDumr6w_wqXLtCt1BcEAB1HPCVEzGoY0lAjbHJI&usqp=CAU", rating:4.6, reviews: ["Fantastic sound quality.", "Great for parties and gatherings."], description:"Powerful speaker with exceptional sound quality."},
    {id:8, name:"RockSpeaker 7", price:899, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Btx6iq6s6ZiXswyE3aZ5gkntlB6yVI5I9A&s", rating:4.1, reviews: ["Good overall performance.", "Slightly expensive but worth it."], description:"High-performance speaker with excellent audio fidelity."},
    {id:9, name:"StudioBeats 400", price:999, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuZJNkG5afrF3fl73E1GoKiooN4JDUxvpKg&s", rating:4.3, reviews: ["Excellent sound and build quality.", "A bit heavy but excellent performance."], description:"Durable and powerful speaker with great sound quality."},
    {id:10, name:"VibeWave Classic", price:1299, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp67gKwyvf32XT_Ysm3wrYEZ2odiOoos4zMQ&s", rating:4.7, reviews: ["Top-notch sound quality.", "Perfect for audiophiles."], description:"Top-of-the-line speaker with exceptional sound clarity."},
    {id:11, name:"StreamMaster 500", price:1100, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmZJdStQRPIYNvOCk7UB9kLOCrPKku3OUmQ&s", rating:4.4, reviews: ["Great sound and build.", "Excellent for both indoor and outdoor use."], description:"Versatile speaker with powerful sound and rugged build."},
    {id:12, name:"AudioBlast Xtreme", price:1200, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Fbg8h88inH_nfnm4tUav3HDAEdO4AklNZw&s", rating:4.0, reviews: ["Good quality but a bit pricey.", "Great sound for the size."], description:"Compact yet powerful speaker with clear audio."}
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found!</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />
      <h1>{product.name}</h1>
      <h2>Rs {product.price}</h2>
      <div className="rating">Rating: {product.rating} / 5</div>
      <p className="description">{product.description}</p>
      <div className="reviews">
        <h3>Reviews:</h3>
        {product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      
     
      <button onClick={() => navigate("/product")}>Back to Products</button>
    </div>
  );
}
