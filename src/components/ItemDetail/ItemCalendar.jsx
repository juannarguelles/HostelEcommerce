import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


const ItemCalendar = () => {
  const [date, setData] = useState(new Date());

  const onChange = date =>{
      setData(date);
  };


  return (
    <div>
      <Calendar onChange={onChange} value={date} />
        {console.log(date)}
    </div>
  );
};

export default ItemCalendar
