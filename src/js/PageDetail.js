const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url + argument + "?key=55e1b2a93f3a4ead9645d3c67d42efba";

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description } = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};


// const PageDetail = (argument = "") => {
//   let finalURL = "https://api.rawg.io/api/games/" + argument + "?key=55e1b2a93f3a4ead9645d3c67d42efba"
//   fetch (finalURL)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response)
//       response.forEach((article) => {
//         let arrayPlatforms = ""
//         for (let platform of article.platforms){
//           arrayPlatforms += platform.platform.name + " "
//         }
//         body.innerHTML += `
//           <div>
//             <img class='img-fluid' src="${article.background_image}"
//           </div>
//           <div>
//             <h2>${article.name}</h2>
//             <p>${article.description}</p>
//             <p>${article.released}</p>
//           </div>
//         `;
//       });
//     });
// };

export { PageDetail }