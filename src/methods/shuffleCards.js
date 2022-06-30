const myCards = [
  { name: "glasses" },
  { name: "glasses" },
  { name: "baby" },
  { name: "baby" },
  { name: "detactor" },
  { name: "detactor" },
  { name: "bicycle" },
  { name: "bicycle" },
  { name: "dog" },
  { name: "dog" },
  { name: "mortarboard" },
  { name: "mortarboard" },
  { name: "policeStation" },
  { name: "policeStation" },
  { name: "prisoner" },
  { name: "prisoner" },
  { name: "robot" },
  { name: "robot" },
];

function shuffle() {
  let firstShuffle = myCards.sort(() => Math.random() - 0.5);
  let secondShuffle = firstShuffle.sort(() => Math.random() - 0.5);
  let thridShuffle = secondShuffle.sort(() => Math.random() - 0.5);

  return thridShuffle;
}

export default shuffle;
