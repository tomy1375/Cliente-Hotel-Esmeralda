import React, { useState } from 'react';
import Select from 'react-select';

// Opciones de horarios para el selector
const timeOptions = [
 { value: '08:00', label: '08:00 AM' },
 { value: '09:00', label: '09:00 AM' },
 // Agrega más opciones según tus necesidades
];

const TimePicker = () => {
 const [selectedTime, setSelectedTime] = useState(null);

 const handleTimeChange = (option) => {
    setSelectedTime(option);
    // Aquí puedes manejar el cambio de horario, por ejemplo, actualizar el estado del componente padre
 };

 return (
    <Select
      value={selectedTime}
      onChange={handleTimeChange}
      options={timeOptions}
      placeholder="Selecciona un horario"
    />
 );
};

export default TimePicker;
