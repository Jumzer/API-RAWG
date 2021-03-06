import '../sass/style.scss';
import dayjs from 'dayjs';

import { routes } from "./routes.js"


let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";
  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
form.addEventListener("submit", routes.pagelist(document.querySelector('#search').value));