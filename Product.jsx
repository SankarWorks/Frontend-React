import React from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom"; 
import './Product.css';

export default function Product() {
    const { addToCart } = useCart();
    const { searchTerm } = useOutletContext(); 

    const products = [
        { id: 1, name: "SoundLink Flex", price: 599, quantity: 0, img: "https://t4.ftcdn.net/jpg/03/46/10/29/360_F_346102982_aa7sykIusFxbNA91jEDZoaKwYxLO12LS.jpg" },
        { id: 2, name: "BassBlaster Pro", price: 999, quantity: 0, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mfx2nSv3ZRYTbYS8o2m4TPPJNJbO8SKfPA&s" },
        { id: 3, name: "ClaritySound Mini", price: 699, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNOZhhotzXpXC-nQxvvLRtuDudr5s4DjM5A&s" },
        { id: 4, name: "MaxVolume X1", price: 945, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wI1j6y2rt5bsbMKgE30orDj0dwGCuyTbSA&s" },
        { id: 5, name: "PureAudio Elite", price: 545, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9pFh2leZOsyW5XNwZYQvaNbMJ0_fkR7LWA&s" },
        { id: 6, name: "PortaTune Plus", price: 699, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7g_zE915gDZ5njp4nfZuC9VvYNsSj5TLaA&s" },
        { id: 7, name: "SoundWave 5.0", price: 899, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS2ldqjF8Rv0VfyVDCtKt-k2U-oyZJDumr6w_wqXLtCt1BcEAB1HPCVEzGoY0lAjbHJI&usqp=CAU" },
        { id: 8, name: "RockSpeaker 7", price: 799, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Btx6iq6s6ZiXswyE3aZ5gkntlB6yVI5I9A&s" },
        { id: 9, name: "StudioBeats 400", price: 999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuZJNkG5afrF3fl73E1GoKiooN4JDUxvpKg&s" },
        { id: 10, name: "VibeWave Classic", price: 1299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp67gKwyvf32XT_Ysm3wrYEZ2odiOoos4zMQ&s" },
        { id: 11, name: "StreamMaster 500", price: 1100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmZJdStQRPIYNvOCk7UB9kLOCrPKku3OUmQ&s" },
        { id: 12, name: "AudioBlast Xtreme", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Fbg8h88inH_nfnm4tUav3HDAEdO4AklNZw&s" }
    ];

    const AddToCartClick = (event, product) => {
        event.stopPropagation();
        addToCart(product);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 className="header">
                Speakers
                <marquee>
                    Buy 2 products to get <span style={{ color: "violet" }}>5%</span> discount
                </marquee>
            </h1>
            <div className="Display-Cart">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-item">
                           
                            <Link to={`/product/${product.id}`}>
                                <img src={product.img} alt={product.name} />
                                <h1>{product.name}</h1>
                                <h2>Rs {product.price}</h2>
                            </Link>

                            
                            <button onClick={(event) => AddToCartClick(event, product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </>
    );
}
