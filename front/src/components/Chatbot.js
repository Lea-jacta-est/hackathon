import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

class EscalationBot extends Component {
  render() {
    return (
      <div>
        <ChatBot
          botAvatar="https://mm3.vistoenpantalla.com/imagenes-productos/alfombra-spiderman-mod3-large2.jpg"
          userAvatar="https://nsa40.casimages.com/img/2019/07/22/mini_190722073721470177.png"
          // speechSynthesis={{ enable: true, lang: "en" }}
          headerTitle="Spiderman"
          floating
          steps={[
            {
              id: "1",
              user: true,
              trigger: "2"
            },
            {
              id: "2",
              message: "Do you want see my big web?",
              trigger: "3"
            },
            {
              id: "3",
              options: [
                { value: 1, label: "Yes", trigger: "6" },
                { value: 2, label: "No", trigger: "4" }
              ]
            },
            {
              id: "4",
              message: "oh no :(, sure ?",
              trigger: "5"
            },
            {
              id: "5",
              options: [
                { value: 1, label: "Yes, sure", trigger: "6" },
                { value: 2, label: "Ok, let see", trigger: "6" }
              ]
            },
            {
              id: "6",
              component: (
                <div>
                  <img src="https://nsa40.casimages.com/img/2019/07/22//190722082106434293.png" />
                </div>
              )
            }
          ]}
        />
      </div>
    );
  }
}

export default EscalationBot;
