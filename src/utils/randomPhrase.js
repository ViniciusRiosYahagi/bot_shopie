import data from "../../data.json";

export const randomPhrase = (input, state) => {
  if (input.toLowerCase() === "random") {
    const philosopher = data.philosophers[Math.floor(Math.random() * data.philosophers.length)];
    const randomPhrase = philosopher.phrases[Math.floor(Math.random() * philosopher.phrases.length)];
    const phrase = `${philosopher.name} ${philosopher.last_name}: ${randomPhrase}`
    return state({ type: "bot", text: phrase });
  }
}

