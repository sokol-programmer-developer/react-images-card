import React, { useState } from "react";

import "./App.css";

const Tour = ({ name, info, image, price, id, removeTour }) => {
    const [read, setRead] = useState(false);
    return (
        <article className="single-tour">
            <img className="pic-tour" src={image} alt="tour-location" />
            <footer>
                <div className="tour-info">
                    <h4 className="h4-tour">{name}</h4>
                    <h4 className="tour-price">{price}</h4>
                </div>
                <p className="p-tour">
                    {read ? info : info.substring(0, 200)}
                </p>
                <div className="button-tour">
                    <button onClick={() => setRead(!read)}>
                        {read ? "read less" : "...read more"}
                    </button>
                    <button className="delete-btn" onClick={() => removeTour(id)}>
                        Hide
                    </button>
                </div>
            </footer>
        </article>
    );
};
export default Tour;