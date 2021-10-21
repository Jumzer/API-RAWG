import { PageDetail } from "./PageDetail.js"

const PageList = (argument = "") => {
  const checkForm = () => {
    const form = document.querySelector('#form');
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      let search = document.querySelector('#search').value
      window.location.hash = "#pagelist/" + search
    })
  }
  checkForm();

  const checkSelect = () => {
    let select = document.querySelector('select');
    select.addEventListener('change', (e) => {

    })
  }

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "&search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          for (let article of response.results) {
            //console.log(article)
            //console.log(response.results)
            let arrayPlatforms = ""
            for (let platform of article.platforms){
              arrayPlatforms += platform.platform.name + " "
            }
            let articles = `
              <div class="card m-4 card${article.id}">
                <img class="card-img-top" src="${article.background_image}" alt="card image">
                <div class="card-body">
                  <a href = "#pagedetail/${article.id}" id="link"><h2>${article.name}</h2></a>
                  <h5>${arrayPlatforms}</h5>
                </div>
              </div>
            `;
            document.querySelector(".page-list .articles").innerHTML += `${articles}`;
            //document.querySelector(`.card${article.id}`).addEventListener("click", (event) => {
            //window.location.hash=`#pagedetail/ + ${article.id}`
            //})
          }
        });
    };

    fetchList("https://api.rawg.io/api/games?key=55e1b2a93f3a4ead9645d3c67d42efba", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="container">
          <div class="articles grille"></div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageList }