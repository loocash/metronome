const tempoChart = {
  Larghissimo: [1, 24],
  Grave: [25, 45],
  Largo: [40, 60],
  Lento: [52, 68],
  Adagio: [60, 80],
  Andante: [76, 100],
  Moderato: [88, 112],
  Allegretto: [100, 128],
  Allegro: [112, 160],
  Vivace: [138, 142],
  Presto: [140, 200],
  Prestissimo: [188, 300],
};

export const bpmToTempo = (bpm) => {
  return Object.keys(tempoChart)
    .filter((key) => {
      const [min, max] = tempoChart[key];
      return min <= bpm && bpm <= max;
    })
    .join(" - ");
};
