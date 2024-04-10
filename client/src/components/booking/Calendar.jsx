import React, { useState } from "react";
import { addDays, isBefore } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DateRangePickerCustomStyles.css'; 
import { DateRangePicker } from 'react-date-range';
import Swal from 'sweetalert2';

const DateRange = ({ onChangeCheckIn, onChangeCheckOut }) => {
 const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
 ]);

 const handleSelect = (ranges) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    if (isBefore(ranges.selection.startDate, today)) {
      
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'We\'re sorry, but you can\'t reserve dates before today. We want to ensure your stay is perfect from start to finish.',
        confirmButtonColor: '#fcd34d', 
        customClass: {
           confirmButton: 'custom-confirm-button' 
        }
       });
       

      return;
    }

    setState([ranges.selection]);
    onChangeCheckIn(ranges.selection.startDate);
    onChangeCheckOut(ranges.selection.endDate);
 };

 return (
    <div>
      <div className="justify-center items-center ml-28 "> 
        <DateRangePicker
          onChange={handleSelect}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
          localeText={{ start: 'Check-in', end: 'Check-out' }} // Personaliza las etiquetas aquí
          staticRanges={[]} 
          inputRanges={[]} // Oculta los rangos de entrada
          rangeColors={['#1F2F1A']}
        />
      </div>
    </div>
 );
};

export default DateRange;
