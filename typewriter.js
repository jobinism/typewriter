const sentence = "will you.................. come upstairs with me";

let delay = 0;

for (const char of sentence) {
  setTimeout (() => {
    process.stdout.write(char);
  }, delay);
  delay += 150;
};
setTimeout  (() => {
  console.log('')
}, delay)