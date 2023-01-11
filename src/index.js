import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import cards from "./card";
import Card from './cardComponent';

function CardList(){
    return (
        <main className="card-list">
            {
                cards.map((card) => {
                    return <Card key={card.id} {...card}/>
                })
            }
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList/>);
