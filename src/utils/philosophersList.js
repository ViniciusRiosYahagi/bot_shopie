import data from "../../data.json";

export const philosophersList = (input, state) => {
  if (input.toLowerCase() === "list") {
    const philosophers = data.philosophers.map(philosopher => {
      return ` ${philosopher.name} ${philosopher.last_name}.`
    });
    return state({ type: "bot", text: philosophers });
  }
};




