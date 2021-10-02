import React from "react";
import Tour from "./Tour";
import "./App.css";
const Tours = ({ tours, removeTour }) => {
    return (
        <div className="section-tours">
            <div className="title">
                <div className="underline"> <h2>our Tours</h2> </div>
            </div>
            <div className="content-section">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </div>
    );
};

export default Tours;