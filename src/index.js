function displayPoem(response) {
  // respsonse.data.answer
  new Typewriter("#ai-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();
  console.log("get poem");
  let poemTopic = document.querySelector("#poem-topic");
  let apiKey = "6bccfefa354f0f4do4245dc0a56fata0";
  let prompt = `User instructions: generate a poem about ${poemTopic.value}`;
  let context =
    "You are an AI master poet. You create poems for people ages five to eleven years old. Sometimes your poems are funny. Most of the time your poems rhyme. Your mission is to generate a poem that is 4 to 8 lines long formatted in basic HTML. Add a </br> between lines. Make sure to follow the user's instructions. Do not include a title. Sign the poem with 'by SheCodes AI' inside a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("getting the API");
  console.log(`${prompt}`);
  console.log(`${context}`);

  let poemElement = document.querySelector("#ai-poem");
  poemElement.innerHTML = `The SheCodes AI is getting inspired to write a poem for you about ${poemTopic.value}...`;
  // call the api and send response to new function called displayPoem
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
