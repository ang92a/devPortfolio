import s from "./Form.module.css";
import { Button } from "../../ui/Button/Button";
import axios from "axios";
// import { useEffect, useState } from "react";

export const Form = (props) => {
  const {
    inputName,
    setInputName,
    inputEmail,
    setInputEmail,
    inputMessage,
    setInputMessage,
    handler,
  } = props;

  // телеграм бот

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    handler();

    axios
      .post(
        "https://api.telegram.org/bot6225911755:AAEYee0xzZWcZdC88IEuv4MDhxOKq1n06QA/sendMessage",
        {
          chat_id: -992063462,
          text: `Имя: ${data.get("name")}, Сообщение: ${data.get(
            "message"
          )}, Почта: ${data.get("email")}`,
        }
      )
      .then((response) => {
        console.log(response.data);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {/* инпут для имени */}

      <label className={s.label} htmlFor="name">
        _name:
      </label>
      <input
        className={s.input}
        type="text"
        id="name"
        name="name"
        value={inputName}
        onChange={(evt) => setInputName(evt.target.value)}
      />

      {/* инпут для майл*/}

      <label className={s.label} htmlFor="email">
        _email:
      </label>
      <input
        className={s.input}
        type="email"
        name="email"
        id="email"
        required
        value={inputEmail}
        onChange={(evt) => setInputEmail(evt.target.value)}
      />

      {/* инпут для сообщения*/}

      <label className={s.label} htmlFor="message">
        _message:
      </label>
      <textarea
        className={s.textarea}
        rows="13"
        cols="30"
        name="message"
        id="message"
        value={inputMessage}
        onChange={(evt) => setInputMessage(evt.target.value)}
      ></textarea>
      {/* <button>click</button> */}
      <Button
        type="submit"
        title="submit-message"
        submitMessage
      />
    </form>
  );
};
