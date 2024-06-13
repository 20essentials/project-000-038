console.log("3D Button", "https://youtu.be/wX7tvfsLYps?si=WwFb7uwDyAVV8jIp");

const d = document;

const colors = [
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "mintcream",
  "magenta",
];

let contador = 0;

d.addEventListener("click", (e) => {
  if (e.target.matches(".am-button")) {
    e.target.classList.toggle("achicar");
    let miniArray = [],
      valor = null,
      nombreDeClase = null,
      nombreDeDireccion = null;
    for (let i = 0; i < 2; i++) {
      do {
        valor = Math.floor(Math.random() * colors.length);
      } while (miniArray.includes(valor));

      miniArray.push(valor);
    }

    contador++;
    if (contador === 1)
      (nombreDeClase = ".bg-ft"), (nombreDeDireccion = "bg-from-top");
    if (contador === 2)
      (nombreDeClase = ".bg-fr"), (nombreDeDireccion = "bg-from-right");
    if (contador === 3)
      (nombreDeClase = ".bg-fb"), (nombreDeDireccion = "bg-from-bottom");
    if (contador === 4)
      (nombreDeClase = ".bg-fl"), (nombreDeDireccion = "bg-from-left");
    if (contador === 5) {
      location.reload();
    }

    let $bg = d.querySelector(nombreDeClase);

    if ($bg.previousElementSibling.classList.contains("bg")) {
      $bg.previousElementSibling.classList.toggle("desaparecer");
      console.log($bg.previousElementSibling);
    }
    $bg.style.setProperty(
      "--lg",
      `linear-gradient(45deg, ${colors[miniArray[0]]}, ${colors[miniArray[1]]})`
    );
    $bg.classList.toggle(nombreDeDireccion);
  }
});
