alert("กดดี ๆ นะคั้บบบ");
alert("กดคำตอบเสร็จแล้วแคปให้ดูด้วยนะคั้บ");
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "เบิ้บบู้ว!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  noBtn.remove();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  console.log(noBtnRect);
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
