import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';


import "../Button/idea.css"
import "./ClientChat.css";  
import { useSelector } from 'react-redux';

const ClientChat = ({ socket, isModalOpen , showChat}) => {
  const { user } = useClerk();
  const userInfo = useSelector((state) => state.users.userInfo);
  const { id } = useParams();
  const [mensaje, setMensaje] = useState('');
  const [mensajesCliente, setMensajesCliente] = useState(JSON.parse(localStorage.getItem('mensajesCliente')) || []);
  const clientId = userInfo?.username ?? user?.firstName ?? "incognito";
  const [welcomeSent, setWelcomeSent] = useState(false);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [contadorMensajes, setContadorMensajes] = useState(0);  // Nuevo estado para contar los mensajes

  useEffect(() => {
    if (showChat && !welcomeSent) {
      console.log("Uniendo al chat");
      const mensajeBienvenida = "Good morning, how can we assist you? Live customer service is available from 11am to 4pm.";
      recibirMensajeServidor(mensajeBienvenida, true);
      setWelcomeSent(true);  
    }
    
    return () => {
      if (showChat) {
        console.log("Desconectando del chat");
        setWelcomeSent(false);  // Esto restablecerá welcomeSent cuando el chat se cierre
      }
    };
  }, [showChat]);
  
  useEffect(() => {
    if (isModalOpen) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  const refrescarMensajes = () => {
    setMensajesCliente([]);
    localStorage.setItem('mensajesCliente', JSON.stringify([]));
  };

  const recibirMensajeServidor = (mensajeTexto, esAutomatico = false) => {
    if (!esAutomatico) {
     
      const mensajeTemporal = {
        tipo: 'administrador',
        clienteId: id,
        mensaje: { mensaje: "escribiendo...", tiempo: new Date() }
      };
      setMensajesCliente(prev => [...prev, mensajeTemporal]);
      scrollToBottom();

    
      setTimeout(() => {
        setMensajesCliente(prev => prev.slice(0, -1)); 
        agregarMensajeReal(mensajeTexto);
      }, 1500);
    } else {
    
      agregarMensajeReal(mensajeTexto);
    }
  };

  const agregarMensajeReal = (mensajeTexto) => {
    const mensajeReal = {
      tipo: 'administrador',
      clienteId: id,
      mensaje: { mensaje: mensajeTexto, tiempo: new Date() }
    };
    setMensajesCliente(prev => [...prev, mensajeReal]);
    scrollToBottom();
  };

  const enviarMensaje = (event) => {
    event.preventDefault();
    if (mensaje.trim() !== '') {
      const mensajeConTiempo = {
        tipo: 'cliente',
        clienteId: id,
        mensaje: { mensaje, tiempo: new Date() }
      };
      setMensajesCliente(prev => [...prev, mensajeConTiempo]);
      setMensaje('');
      scrollToBottom();

      // Incrementar el contador de mensajes
      setContadorMensajes(prev => prev + 1);

      // Simular respuesta del servidor
      setTimeout(() => {
        const respuesta = contadorMensajes + 1 === 3 ? "ya cálmate wey" : "Enseguida lo atendemos.";
        recibirMensajeServidor(respuesta);
      }, 1500);
    }
  };

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-xl shadow">
      <h1 className="RegistrationForm-title bg text-2xl font-bold mb-4 text-center ml-24">Client: {clientId}</h1>
      <div ref={chatContainerRef} className="client-chat-messages rounded-xl">
        {mensajesCliente.map((m, index) => (
          <div key={index} className={`mensaje-container ${m.tipo === 'cliente' ? 'client-container' : 'admin-container'}`}>
            <div className={`mensaje ${m.tipo === 'cliente' ? 'client' : 'admin'}`}>
              {m.mensaje.mensaje}
            </div>
            <div className={`timestamp ${m.tipo === 'cliente' ? 'timestamp-client' : 'timestamp-admin'}`}>
              {new Date(m.mensaje.tiempo).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={enviarMensaje} className="client-chat-form rounded-xl">
        <input
          ref={inputRef}
          required
          placeholder="Type your message here..."
          type="text"
          className="client-chat-input focus:outline-none focus:ring-1 focus:ring-v rounded-lg"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button type="submit" className="client-chat-submit ">Send</button>
      </form>
      <div className="mt-4 flex justify-center">
        <button onClick={refrescarMensajes} className="w-40 bg-amber-300 hover:bg-amber-400 transition-colors text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">REFRESH CHAT</button>
      </div>
    </div>
  );
};

export default ClientChat;



// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';

// const ClientChat = ({ socket }) => {
//   const { id } = useParams();
//   const [mensaje, setMensaje] = useState('');
//   const [mensajesCliente, setMensajesCliente] = useState(JSON.parse(localStorage.getItem('mensajesCliente')) || []);

//   const clientId = id;

//   const chatContainerRef = useRef(null);

//       localStorage.setItem('mensajesCliente', JSON.stringify(mensajesCliente));

//       const inputRef = useRef(null);
      
//       useEffect(() => {
//         inputRef.current.focus();
//       }, []);

//   useEffect(() => {
//     if (socket) {
//       socket.emit('joinClientChat', clientId);
//       socket.on('mensaje_cliente', recibirMensajeServidor);

//       return () => {
//       socket.off('mensaje_cliente', recibirMensajeServidor);
//       };
//     }
//   }, [socket, clientId]);

//   const recibirMensajeServidor = (mensaje) => {
//     setMensajesCliente(prevMensajesCliente => [...prevMensajesCliente, { tipo: 'administrador', clienteId: id, mensaje }]);
//     scrollToBottom();
//   };
    
//   const enviarMensaje = (event) => {
//     event.preventDefault();
//     if (socket && mensaje.trim() !== '') {
//       const clienteMensaje = { tipo: 'cliente', clienteId: id, mensaje: { mensaje } };
//       setMensajesCliente((prevMensajesCliente) => [...prevMensajesCliente, clienteMensaje]);
//       socket.emit('cliente_mensaje', {clienteId: clientId, mensaje: mensaje});
//       setMensaje('');
//       scrollToBottom();
//     }
//   };
  
//   const refrescarMensajes = () => {
//     setMensajesCliente([]);
//     localStorage.setItem('mensajesCliente', JSON.stringify([])); 
//   };

//   const scrollToBottom = () => {
//     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
//       <h1 className="text-2xl font-bold mb-4 text-center">Client : {id}</h1>

//       <div ref={chatContainerRef} className="chat-container">
//         {mensajesCliente.map((mensaje, index) => (
//           <div key={index} className={`mensaje ${mensaje.tipo === 'cliente' ? 'bg-d' : 'bg-gray-300'} text-black p-2 rounded mb-2`}>
//            {mensaje.tipo === 'cliente' ? 'Client' : 'admin'}: {mensaje.mensaje.mensaje}
//           </div>
//         ))}
//       </div>

//       <form onSubmit={enviarMensaje} className="flex items-center mt-4">

//         <input
//         ref={inputRef}
//         type="text"
//         value={mensaje}
//         onChange={(e) => setMensaje(e.target.value)}
//         placeholder="Escribe tu mensaje aquí..."
//         className="flex-1 mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
//         />
//         <button type="submit" className="bg-amber-300 hover:bg-amber-400 transition-colors px-4 py-2 rounded focus:outline-none">Send</button>
//       </form>
//       <div className="mt-4 flex justify-center">
//         <button onClick={refrescarMensajes} className="w-40 bg-amber-300 hover:bg-amber-400 transition-colors text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">REFRESH CHAT</button>
//       </div>
//     </div>
//   );
// };

// export default ClientChat;
