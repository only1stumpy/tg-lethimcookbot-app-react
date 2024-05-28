import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState("");
  const [desc, setDesc] = useState('');
  const { user, tg } = useTelegram();
  const [username, setUsername] = useState(user?.username);

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
  const onChangeUsername  =  (e)  =>  {
    setUsername(e.target.value);
  }


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
      <input
        className={'input'}
        type="text"
        placeholder={'Тег телеграма'}
        value={username}
        onChange={onChangeUsername}
      />
    </div>
  );
};

export default Form;
