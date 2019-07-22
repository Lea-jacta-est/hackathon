import React from 'react';
import ChatBot from 'react-simple-chatbot';

const Chatbot =( ) => {

return (

   <ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>
) 
}

export default Chatbot;