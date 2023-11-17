let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #c31ac3;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c31ac3;">Soy estudiante de FIME en la carrera de mecatrónica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
