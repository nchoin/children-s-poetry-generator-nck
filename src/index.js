function generatePoem(event){
    event.preventDefault();
    console.log("get poem");
    let poemElement = document.querySelector("#ai-poem");

    new Typewriter("#ai-poem", {
      strings: "Nicole Choiniere-Kroeker",
      autoStart: true,
      delay: 40,
      cursor: null,
    });
}


let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);