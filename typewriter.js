
const typeWriter = function (sentence){
let delay = 0;
let sent = sentence + "\n";
for (const char of sent) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  delay += 50;
  
}

}

const sentence = "hello there from lighthouse labs";
typeWriter(sentence);