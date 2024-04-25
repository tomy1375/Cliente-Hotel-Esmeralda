const APP_ENV = "LOCAL"; //PRODUCTION O LOCAL

let API_URL = "https://backend-hotelesmeralda.onrender.com/";

if (APP_ENV === "PRODUCTION") {
  API_URL = "https://backend-pf-web16pt.onrender.com/";
} else if (APP_ENV === "LOCAL") {
  API_URL = "http://localhost:4000/";
}

export { APP_ENV, API_URL };
