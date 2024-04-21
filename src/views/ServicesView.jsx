import React, { useEffect } from 'react'
import Services from '../components/roomServices/Services'
import { useLocation } from 'react-router-dom';

const ServicesView = () => {
  const location = useLocation();

  useEffect(() => {
    // Desplazamiento automático a la sección del formulario si el hash está presente en la URL
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Dependiendo de la ubicación para reaccionar a cambios
  return (
    <div >
      <Services />
    </div>
  )
}

export default ServicesView