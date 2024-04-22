import React, { useState, useEffect, useRef } from "react";
import { useClerk } from "@clerk/clerk-react";
import { useSelector } from "react-redux";
import "./ClientChat.css";
import "../Button/idea.css";

const ClientChat = ({ socket, isModalOpen, showChat }) => {
  const { user } = useClerk();
  const userInfo = useSelector((state) => state.users.userInfo);
  const [id, setId] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajesCliente, setMensajesCliente] = useState(
    JSON.parse(localStorage.getItem("mensajesCliente")) || []
  );
  // const clientId = userInfo?.username ?? user?.firstName ?? `usuario${Date.now()}`;
  const [welcomeSent, setWelcomeSent] = useState(false);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  const[clientId, setClientId] = useState(null)


useEffect(()=>{
  const userNameGuestId = localStorage.getItem('chatId') ?? Date.now().toString().substring(0, 7);

  if(localStorage.getItem('chatId') === null){
      localStorage.setItem('chatId',userNameGuestId)
  }
  setClientId(userInfo?.username ?? user?.firstName ?? userNameGuestId)
},[userInfo, user])

  useEffect(() => {
    if (socket && clientId) {
      socket.emit("joinClientChat", clientId);
      socket.on("mensaje_cliente", recibirMensajeServidor);
      return () => {
        socket.emit("leaveClientChat", clientId);
        socket.off("mensaje_cliente", recibirMensajeServidor);
      };
    }
  }, [socket, clientId]);

  // useEffect(() => {
  //  if (showChat && !welcomeSent) {
  //     const mensajeBienvenida = "Good morning, how can we assist you? Live customer service is available from 11am to 4pm.";
  //     recibirMensajeServidor(mensajeBienvenida, true);
  //     setWelcomeSent(true);
  //  }
  //  return () => {
  //     if (showChat) {
  //       setWelcomeSent(false);
  //     }
  //  };
  // }, [showChat, socket]);

  useEffect(() => {
    if (isModalOpen) {
      setId(clientId);
    }
  }, [isModalOpen, clientId]);

  const recibirMensajeServidor = (mensaje) => {
    setMensajesCliente((prevMensajesCliente) => [
      ...prevMensajesCliente,
      { tipo: "administrador", clienteId: id, mensaje },
    ]);
    scrollToBottom();
  };

  const enviarMensaje = (event) => {
    event.preventDefault();
    if (mensaje.trim() !== "") {
      const clienteMensaje = {
        tipo: "cliente",
        clienteId: id,
        mensaje: { mensaje },
      };
      setMensajesCliente((prevMensajesCliente) => [
        ...prevMensajesCliente,
        clienteMensaje,
      ]);
      if (socket) {
        socket.emit("cliente_mensaje", {
          clienteId: clientId,
          mensaje: mensaje,
        });
      }
      setMensaje("");
      scrollToBottom();
    }
  };

  const refrescarMensajes = () => {
    setMensajesCliente([]);
    localStorage.setItem("mensajesCliente", JSON.stringify([]));
  };

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  // Función para formatear la fecha desde un timestamp
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-xl shadow">
      <h1 className="RegistrationForm-title bg text-2xl font-bold mb-4 text-center ml-24">
        Client: {clientId}
      </h1>
      <div ref={chatContainerRef} className="client-chat-messages rounded-xl">
        {mensajesCliente.map((m, index) => (
          <div
            key={index}
            className={`mensaje-container ${
              m.tipo === "cliente" ? "client-container" : "admin-container"
            }`}
          >
            <div
              className={`mensaje ${m.tipo === "cliente" ? "client" : "admin"}`}
            >
              {m.mensaje.mensaje}
            </div>
            <div
              className={`timestamp ${
                m.tipo === "cliente" ? "timestamp-client" : "timestamp-admin"
              }`}
            >
              {formatDateFromTimestamp(m.mensaje.tiempo)}
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
        <button type="submit" className="client-chat-submit ">
          Send
        </button>
      </form>
      <div className="mt-4 flex justify-center">
        <button
          onClick={refrescarMensajes}
          className="w-40 bg-amber-300 hover:bg-amber-400 transition-colors text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
        >
          REFRESH CHAT
        </button>
      </div>
    </div>
  );
};

export default ClientChat;
