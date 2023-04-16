import React from "react";

import { UserAuth } from "../Firebase/Context";

const MessageBox = ({ message }) => {
    const { User } = UserAuth();

  return (

      <div className="chat-bubble__right">
        <p className="user-message">{ message }</p>
      </div>

  );
};

export default MessageBox;