const sentence = "hello there from lighthouse labs";
const delay = 1000;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, delay + i * 50);
}

setTimeout(() => {
  console.log('\n');
}, delay + sentence.length * 50);