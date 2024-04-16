import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const ClientChat = ({ socket }) => {
  const { id } = useParams();
  const [mensaje, setMensaje] = useState('');
  const [mensajesCliente, setMensajesCliente] = useState(JSON.parse(localStorage.getItem('mensajesCliente')) || []);

  const clientId = id;

  const chatContainerRef = useRef(null);

      localStorage.setItem('mensajesCliente', JSON.stringify(mensajesCliente));
  
  useEffect(() => {
    if (socket) {
      socket.emit('joinClientChat', clientId);
      socket.on('mensaje_cliente', recibirMensajeServidor);

      return () => {
      socket.off('mensaje_cliente', recibirMensajeServidor);
      };
    }
  }, [socket, clientId]);

  const recibirMensajeServidor = (mensaje) => {
    setMensajesCliente(prevMensajesCliente => [...prevMensajesCliente, { tipo: 'administrador', clienteId: id, mensaje }]);
    scrollToBottom();
  };
    
  const enviarMensaje = (event) => {
    event.preventDefault();
    if (socket && mensaje.trim() !== '') {
      const clienteMensaje = { tipo: 'cliente', clienteId: id, mensaje: { mensaje } };
      setMensajesCliente((prevMensajesCliente) => [...prevMensajesCliente, clienteMensaje]);
      socket.emit('cliente_mensaje', {clienteId: clientId, mensaje: mensaje});
      setMensaje('');
      scrollToBottom();
    }
  };
  
  const refrescarMensajes = () => {
    setMensajesCliente([]);
    localStorage.setItem('mensajesCliente', JSON.stringify([])); 
  };

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Client : {id}</h1>

      <div ref={chatContainerRef} className="chat-container">
        {mensajesCliente.map((mensaje, index) => (
          <div key={index} className={`mensaje ${mensaje.tipo === 'cliente' ? 'bg-d' : 'bg-gray-300'} text-black p-2 rounded mb-2`}>
           {mensaje.tipo === 'cliente' ? 'Client' : 'admin'}: {mensaje.mensaje.mensaje}
          </div>
        ))}
      </div>

      <form onSubmit={enviarMensaje} className="flex items-center mt-4">
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          className="flex-1 mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
        />
        <button type="submit" className="bg-amber-300 hover:bg-amber-400 transition-colors px-4 py-2 rounded focus:outline-none">Send</button>
      </form>
      <div className="mt-4 flex justify-center">
        <button onClick={refrescarMensajes} className="w-40 bg-amber-300 hover:bg-amber-400 transition-colors text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">REFRESH CHAT</button>
      </div>
    </div>
  );
};

export default ClientChat;
