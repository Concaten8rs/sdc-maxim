const fs = require('fs');

const cleanFile = (file) => {
  let fileArr = file.split(' ');
  fileArr = fileArr.map((word) => (
    word.replace(/[\W_]/, '').toLowerCase()
  ));

  return fileArr;
};

const makeChain = (text1) => {
  // currently assume text is cleaned

  const text = text1.slice(0, 100000);

  const markovChain = {};

  for (let i = 0; i < text.length - 6; i += 1) {
    const word = text[i];
    if (!markovChain[word]) {
      markovChain[word] = [];
    }
    markovChain[word].push(text.slice(i + 1, i + 5).join(' '));
  }

  return markovChain;
};

const makeModel = (file, len, callback) => {
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

      let fullText = '';

      parsedText.forEach((review) => {
        fullText += review.reviewText;
      });

      const cleaned = cleanFile(fullText);
      const chain = makeChain(cleaned);
      const words = Object.keys(chain);
      let sentence = [];
      let first = words[Math.floor(Math.random() * words.length)];

      for (let i = 0; i < len; i += 1) {
        if (!chain[first]) {
          break;
        }

        const current = chain[first][Math.floor(Math.random() * chain[first].length)];
        const splitCurrent = current.split(' ');
        const next = splitCurrent[splitCurrent.length - 1];
        sentence.push(current);
        first = next;
      }

      sentence = sentence.join(' ');

      callback(null, sentence);
    }
  });
};

module.exports.makeModel = makeModel;
