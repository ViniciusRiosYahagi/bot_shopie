import { useState, useEffect } from "react";
import { randomPhrase } from "../utils/randomPhrase";
import { phraseByName } from "../utils/phraseByName";
import { philosophersList } from "../utils/philosophersList";
import styles from "../../styles/Chat.module.scss";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [shopie, setShopie] = useState();

  function takeValue(e) {
    setInputValue(e.target.value);
  }

  function enterKey(e) {
    if (e.key === "Enter") {
      active();
    }
  }

  function active() {
    const newMessages = [];

    if (inputValue) {
      newMessages.push({ type: "user", text: inputValue });

      switch (inputValue.toLowerCase()) {
        case "random":
          randomPhrase(inputValue, setShopie);
          break;
        case "list":
          philosophersList(inputValue, setShopie);
          break;
        default:
          phraseByName(inputValue, setShopie);
      }
      setInputValue("");
    }
    setMessages([...messages, ...newMessages]);
  }

  useEffect(() => {
    if (shopie && shopie.text) {
      setMessages([...messages, shopie]);
    }
  }, [shopie]);

  return (
    <>
      <h2 className={styles.title}>
        Welcome to Sophie, enter the name of a philosopher and receive a
        message.
      </h2>

      <section className={styles.chat_container}>
        <article className={styles.chat_window}>
          {messages.map((message, index) => {
            if (message.type === "bot") {
              return (
                <div className={styles.bot} key={index}>
                  <p className={styles.chatBot_format}>{message.text}</p>
                </div>
              );
            } else if (message.type === "user") {
              return (
                <div className={styles.user} key={index}>
                  <p className={styles.chatUser_format}>{message.text}</p>
                </div>
              );
            }
          })}
        </article>

        <div className={styles.input_container}>
          <input
            type="text"
            value={inputValue}
            onChange={takeValue}
            onKeyDown={enterKey}
          />
          <button onClick={active}>Send</button>
        </div>
      </section>

      <p className={styles.description}>
        commands you can use: name , random , list
      </p>
    </>
  );
}
