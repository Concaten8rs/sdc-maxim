const fs = require('fs');

const cleanFile = (file) => {
  if (typeof file === 'string') {
    let fileArr = file.split(' ');
    fileArr = fileArr.map((word) => (
      word.replace(/[\W_]/, '').toLowerCase()
    ));

    return fileArr;
  }
  return '';
};

const buildModel = (file, callback) => {
  const markovChain = {};

  const makeChain = (text) => {
    for (let i = 0; i < text.length - 6; i += 1) {
      const wdArr = text.slice(i, i + 5);
      if (wdArr.length === 5) {
        const word = wdArr.join(' ');
        if (!markovChain[word]) {
          markovChain[word] = [];
        }
        markovChain[word].push(text[i + 5]);
      }
    }
  };

  fs.readFile(file, (err, text) => {
    if (err) {
      callback(err);
    } else {
      let parsedText = text.toString().split('}\n');
      parsedText = parsedText.map((review) => {
        if (review[0] === '{' && review[review.length - 1] === '}') {
          return JSON.parse(review);
        }

        if (review[0] === '{' && review[review.length - 1] !== '}') {
          return JSON.parse(`${review}}`);
        }

        return {};
      });

      parsedText.slice(0, 10000).forEach((snippet) => {
        if (typeof snippet.reviewText === 'string' && snippet.reviewText.length > 5) {
          const cleaned = cleanFile(snippet.reviewText);
          if (cleaned.length > 5) {
            makeChain(cleaned);
          }
        }
      });

      callback(null, markovChain);
    }
  });
};

const generate = (model, len) => {
  const markovChain = model;
  const words = Object.keys(markovChain);
  let sentence = [];
  let first = words[Math.floor(Math.random() * words.length)];

  for (let i = 0; i < len; i += 1) {
    if (!markovChain[first]) {
      break;
    }

    const addWord = markovChain[first][Math.floor(Math.random() * markovChain[first].length)];
    sentence.push(addWord);

    const next = first.split(' ').slice(1, 5).concat(addWord).join(' ');
    first = next;
  }

  sentence = sentence.join(' ');
  return sentence;
};

module.exports.generate = generate;
module.exports.buildModel = buildModel;
