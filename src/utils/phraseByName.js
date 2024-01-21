import data from "../../data.json";

export const phraseByName = (input, state) => {
  if (input !== "") {
    const philosopher = data.philosophers.find((philosopher) => {
      const name = philosopher.name.toLowerCase();
      const lastName = philosopher.last_name.toLowerCase();
      const fullName = lastName.toLowerCase() ? `${name} ${lastName}` : name.toLowerCase()
      return name === input.toLowerCase() || 
      lastName === input.toLowerCase() || 
      fullName === input.toLowerCase();
    });

    if (philosopher) {
      const phrases = philosopher.phrases;
      let randomIndex = Math.floor(Math.random() * phrases.length);
      let randomPhrase = phrases[randomIndex];

      const message = philosopher.last_name === "" ? 
            `${philosopher.name}: ${randomPhrase}`:
            `${philosopher.name} ${philosopher.last_name}: ${randomPhrase}`;

      return state({ type: "bot", text: message });
    } else {
      state("Sorry, I don't know this philosopher");
    }
  }
};
