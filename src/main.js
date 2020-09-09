import BarChart from "./BarChart.svelte";

const players = ["Johanna", "Laura", "Max", "Peter"];

const getRandom = (max = 375, min = 0) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.round(Math.random() * (max - min)) + min;
};

const updateData = (chart, people, time) => {
  setTimeout(() => {
    const index = getRandom(people.length - 1);
    const name = people[index];
    const value = getRandom();

    chart.update(name, value);

    updateData(chart, people, time);
  }, time);
};

const chart = new BarChart({
  target: document.body,
  props: {
    title: "Spielstand",
  },
});

players.forEach((name) => chart.addPerson(name));
updateData(chart, players, 2000);
