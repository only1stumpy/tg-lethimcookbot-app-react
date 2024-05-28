import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState("");
    const [desc, setDesc] = useState('');
    const [photo, setPhoto] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            nickname,
            age,
            desc,
            photo
        }
        tg.sendData(JSON.stringify(data));
    }, [nickname, age, desc, photo])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!nickname || !age || !desc) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [nickname, age, desc])

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeDesc = (e) => {
        setDesc(e.target.value)
    }
    const onChangePhoto  =  (e)  =>  {
        setPhoto(e.target.files[0])
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
                type="file"
                placeholder={'Скриншот вашего аккаунта'}
                value={photo}
                onChange={onChangePhoto}
            />
        </div>
    );
};

export default Form;