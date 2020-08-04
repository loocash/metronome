const tempoChart = {
  Larghissimo: [1, 24],
  Grave: [25, 45],
  Largo: [40, 60],
  Lento: [45, 60],
  Larghetto: [60, 66],
  Adagio: [66, 76],
  Adagietto: [72, 76],
  Andante: [76, 108],
  Andantino: [80, 108],
  "Marcia moderato": [83, 85],
  "Andante moderato": [92, 98],
  Moderato: [98, 114],
  Allegretto: [102, 110],
  "Allegretto moderato": [115, 120],
  Allegro: [120, 156],
  Vivace: [156, 176],
  Presto: [168, 200],
  Prestissimo: [200, 300],
};

export const bpmToTempo = (bpm) => {
  return Object.keys(tempoChart)
    .filter((key) => {
      const [min, max] = tempoChart[key];
      return min <= bpm && bpm <= max;
    })
    .join(" - ");
};
