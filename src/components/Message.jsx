import React from "react";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/19321435/pexels-photo-19321435/free-photo-of-a-christmas-tree-with-a-candle-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />
                <span>just now</span>
            </div>

            <div className="messageContent">
                <p>hello</p>
                <img src="https://images.pexels.com/photos/19321435/pexels-photo-19321435/free-photo-of-a-christmas-tree-with-a-candle-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />
            </div>
        </div>
    );
}

export default Message;