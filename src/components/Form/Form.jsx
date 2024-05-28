import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState("");
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState(null);
  const { user, tg } = useTelegram();
  const username = user?.username;

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const onSendData = useCallback(async () => {
    const data = {
      username,
      nickname,
      age,
      desc,
    };
    tg.sendData(JSON.stringify(data));
  }, [username, nickname, age, desc]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    });
  }, [tg.MainButton]);

  useEffect(() => {
    if (!nickname || !age || !desc) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [nickname, age, desc, tg.MainButton]);

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };


  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Игровой ник'}
        value={nickname}
        onChange={onChangeNickname}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Ваш возраст'}
        value={age}
        onChange={onChangeAge}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Почему вы решили вступить к нам?'}
        value={desc}
        onChange={onChangeDesc}
      />
    </div>
  );
};

export default Form;
