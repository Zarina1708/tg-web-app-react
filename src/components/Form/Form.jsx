import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {

  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physlical')
  const {tg} = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
        text: "Отправить данные"
    })
  }, [])

  useEffect(() => {
    if (!street || !country) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
  }, [country, street])

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  return (
    <div className={'form'}>
      <h3>Введите ваши данные</h3>
      <input 
        type="text" 
        placeholder={'Страна'} 
        className={'input'} 
        value={country} 
        onChange={onChangeCountry}
      />

      <input 
        type="text" 
        placeholder={'Улица'} 
        className={'input'}
        onChange={onChangeStreet}
      />

      <select className={'select'} onChange={onChangeSubject}>
      <option value = {'physlical'}>Физ. лицо</option>
        <option value = {'legal'}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
