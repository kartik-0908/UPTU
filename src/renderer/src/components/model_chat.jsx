import React from "react";
import Card from './chat_card';

// let temp2 = "wehreijverojv rj"

let temp2= [
    "1st message",
    "2st message",
    "51st message",
    "51st message",
]


function Chat() {
    return (
        <div className="mc">
            <div className="mc__box">
                {temp2.map(function(item, index){
                    return (
                        <Card title={item}></Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Chat;