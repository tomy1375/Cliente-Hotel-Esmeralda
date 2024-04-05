import React, { useState } from "react";
import { addDays } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DateRangePickerCustomStyles.css'; 
import { DateRangePicker } from 'react-date-range';

const DateRange = ({ onChangeCheckIn, onChangeCheckOut }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setState([ranges.selection]);
    onChangeCheckIn(ranges.selection.startDate);
    onChangeCheckOut(ranges.selection.endDate);
  };

  return (
    <div>
      <div className="justify-center items-center ml-28 "> {/* Utiliza Tailwind para ocultar el contenedor */}
        <DateRangePicker
          onChange={handleSelect}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
          localeText={{ start: 'Check-in', end: 'Check-out' }} // Personaliza las etiquetas aquí
          staticRanges={[]} // Oculta los botones predefinidos
          inputRanges={[]} // Oculta los rangos de entrada
          rangeColors={['#1F2F1A']}
        />
      </div>
    </div>
  );
};

export default DateRange;
