/* =========================================================
   CONFIGURACIÓN Y CATÁLOGO — El Taller de Macla
   Para agregar o editar productos, solo modifica esta lista.
   ========================================================= */

const CONFIG = {
  whatsapp: "51951212073",            // código de país (51 = Perú) + celular, sin espacios ni "+"
  telefonoVisible: "951 212 073",
  instagram: "https://www.instagram.com/eltallerdemacla/",
  instagramUsuario: "@eltallerdemacla",
  tiktok: "https://www.tiktok.com/@eltallerdemacla", // verificar que sea la cuenta correcta
  moneda: "S/",

  // Datos legales (aparecen en Libro de Reclamaciones y Política de Privacidad).
  // COMPLETAR con los datos reales del negocio:
  nombreComercial: "El Taller de Macla",
  razonSocial: "[Nombre completo o razón social]",
  ruc: "[N.° de RUC]",
  direccion: "[Dirección del negocio]",
  correo: "[correo@ejemplo.com]"
};

/* ---------------------------------------------------------
   COLECCIONES
   Para crear una colección nueva, copia un bloque y cambia la clave
   (ej. "medallon"). Aparecerá sola en el Inicio, en las pestañas de
   Productos y en el pie de página.
   --------------------------------------------------------- */
const COLECCIONES = {
  virgen: {
    nombre: "Virgen Madre",
    portada: "img/productos/virgen-melek.jpg",
    // Recorte de la portada para que no se vea el nombre escrito en la foto
    encuadre: { zoom: 1.32, origen: "50% 0%", pos: "50% 20%" },
    lema: "Figuras llenas de fe y ternura",
    descripcion:
      "Virgencitas hechas a mano con telas delicadas, resina y pan de oro. Cada una transmite el amor y la protección de la maternidad.",
    medidas: "33 cm de alto × 23 cm de ancho"
  },
  angelito: {
    nombre: "Cruz Angelito",
    portada: "img/productos/angelito-rosa.jpg",
    lema: "Pequeños ángeles, grandes bendiciones",
    descripcion:
      "Un angelito lleno de ternura, elaborado artesanalmente para acompañar y proteger a los más pequeños. Disponible en diferentes colores para niños y niñas.",
    medidas: "Madera: 26 cm de diámetro · Cruz: 18.5 cm de alto × 14.5 cm de ancho"
  }
};

/* ---------------------------------------------------------
   PRODUCTOS
   Campos obligatorios: id (único, sin espacios), coleccion (clave de
   COLECCIONES), nombre, precio, img, descripcion.
   Opcionales:
     tono:      color del puntito (ej. "#e8a5b8")
     medidas:   si esta pieza mide distinto al resto de su colección
     destacado: true  -> aparece en "Favoritas del taller" del Inicio
     nuevo:     true  -> muestra la etiqueta "Nuevo"
     agotado:   true  -> muestra "Agotado" y el mensaje pide reservar
   --------------------------------------------------------- */
const PRODUCTOS = [
  // ---------------- VIRGEN MADRE ----------------
  { id: "zehra", destacado: true, coleccion: "virgen", nombre: "Virgen Madre Zehra", precio: 100, tono: "#e8a5b8", img: "img/productos/virgen-zehra.jpg",
    descripcion: "Inspirada en la belleza de las flores y la delicadeza de los pequeños detalles. Una virgencita que transmite amor, dulzura y luz, como una flor que florece desde el corazón." },
  { id: "melek", coleccion: "virgen", nombre: "Virgen Madre Melek", precio: 100, tono: "#e7a6bd", img: "img/productos/virgen-melek.jpg",
    descripcion: "Inspirada en la pureza y la luz de lo celestial. Una virgencita que transmite paz, protección y amor infinito, como una dulce bendición que acompaña cada paso." },
  { id: "laila", coleccion: "virgen", nombre: "Virgen Madre Laila", precio: 100, tono: "#b9a0d2", img: "img/productos/virgen-laila.jpg",
    descripcion: "Inspirada en la belleza de lo sutil y lo delicado. Una virgencita que transmite paz, dulzura y elegancia, envolviendo cada rincón con su encanto maternal." },
  { id: "mimosa", coleccion: "virgen", nombre: "Virgen Madre Mimosa", precio: 100, tono: "#eab0c0", img: "img/productos/virgen-mimosa.jpg",
    descripcion: "Inspirada en la delicadeza de las pequeñas flores y la alegría de los detalles sencillos. Transmite dulzura, luz y ternura, como una caricia llena de amor maternal." },
  { id: "baby-blue", coleccion: "virgen", nombre: "Virgen Madre Baby Blue", precio: 100, tono: "#a9cbe4", img: "img/productos/virgen-baby-blue.jpg",
    descripcion: "Inspirada en la dulzura del cielo y la tranquilidad del azul. Transmite paz, pureza y ternura, como ese abrazo maternal que siempre nos brinda protección y amor." },
  { id: "siena", coleccion: "virgen", nombre: "Virgen Madre Siena", precio: 100, tono: "#b38867", img: "img/productos/virgen-siena.jpg",
    descripcion: "Inspirada en la calidez y la dulzura de los tonos tierra. Una virgencita que transmite serenidad, amor maternal y esa belleza sencilla que reconforta el corazón." },
  { id: "lua", coleccion: "virgen", nombre: "Virgen Madre Lua", precio: 100, tono: "#b6a2d6", img: "img/productos/virgen-lua.jpg",
    descripcion: "Inspirada en la magia y la serenidad de la luna. Una virgencita que transmite paz, dulzura y luz, con una belleza sutil que invita a soñar y llenar el corazón de esperanza." },
  { id: "nisa", destacado: true, coleccion: "virgen", nombre: "Virgen Madre Nisa", precio: 100, tono: "#a6cfe3", img: "img/productos/virgen-nisa.jpg",
    descripcion: "Inspirada en la frescura y la serenidad de los tonos celestes. Una virgencita que transmite paz, dulzura y esperanza, con una luz especial que acaricia el alma." },
  { id: "megan", coleccion: "virgen", nombre: "Virgen Madre Megan", precio: 100, tono: "#d47a7a", img: "img/productos/virgen-megan.jpg",
    descripcion: "Inspirada en la fuerza del amor y la calidez del corazón. Una virgencita que transmite pasión, protección y ternura, recordándonos que el amor de una madre es infinito e incondicional." },
  { id: "florentina", coleccion: "virgen", nombre: "Virgen Madre Florentina", precio: 100, tono: "#e6aab9", img: "img/productos/virgen-florentina.jpg",
    descripcion: "Inspirada en la delicadeza de las flores y la belleza de lo clásico. Una virgencita que transmite dulzura, elegancia y amor maternal, con un encanto especial que enamora a primera vista." },
  { id: "janna", coleccion: "virgen", nombre: "Virgen Madre Janna", precio: 100, tono: "#e7a26f", img: "img/productos/virgen-janna.jpg",
    descripcion: "Inspirada en la calidez de los tonos cálidos y la belleza de los pequeños detalles. Una virgencita que transmite alegría, amor y dulzura, llenando cada espacio de luz y encanto." },
  { id: "hazel", coleccion: "virgen", nombre: "Virgen Madre Hazel", precio: 100, tono: "#e4b0b6", img: "img/productos/virgen-hazel.jpg",
    descripcion: "Inspirada en la calidez de los tonos suaves y la belleza de lo natural. Una virgencita que transmite dulzura, armonía y amor maternal, con una delicadeza que conquista el corazón." },
  { id: "alaia", coleccion: "virgen", nombre: "Virgen Madre Alaia", precio: 100, tono: "#bba3d8", img: "img/productos/virgen-alaia.jpg",
    descripcion: "Inspirada en la belleza y la dulzura de lo delicado. Una virgencita que transmite alegría, serenidad y amor, con un encanto sutil que ilumina cualquier espacio." },
  { id: "lavanda", coleccion: "virgen", nombre: "Virgen Madre Lavanda", precio: 100, tono: "#b8a6db", img: "img/productos/virgen-lavanda.jpg",
    descripcion: "Una expresión de amor maternal y ternura. Sus delicados tonos lavanda transmiten serenidad, dulzura y paz, convirtiéndola en un símbolo de amor que abraza y protege." },
  { id: "narin", coleccion: "virgen", nombre: "Virgen Madre Narin", precio: 100, tono: "#e8aec0", img: "img/productos/virgen-narin.jpg",
    descripcion: "Una virgencita que evoca delicadeza y armonía. Su esencia transmite paz, dulzura y ternura, envolviéndonos en esa luz especial del amor maternal." },
  { id: "lea", coleccion: "virgen", nombre: "Virgen Madre Lea", precio: 100, tono: "#eab3c3", img: "img/productos/virgen-lea.jpg",
    descripcion: "Inspirada en la dulzura y la delicadeza del amor maternal. Una virgencita que transmite ternura, sensibilidad y calidez, como un abrazo lleno de amor que siempre acompaña." },
  { id: "cira", coleccion: "virgen", nombre: "Virgen Madre Cira", precio: 100, tono: "#9fc6e6", img: "img/productos/virgen-cira.jpg",
    descripcion: "Inspirada en la serenidad de los tonos celestes. Una virgencita que transmite calma, dulzura y esperanza, como un abrazo maternal que llena el corazón de paz." },

  // ---------------- CRUZ ANGELITO ----------------
  { id: "angelito-rosa", destacado: true, coleccion: "angelito", nombre: "Angelito Rosa", precio: 85, tono: "#e7a9bb", img: "img/productos/angelito-rosa.jpg",
    descripcion: "Un angelito en tono rosa lleno de ternura, elaborado artesanalmente para acompañar y proteger a los más pequeños." },
  { id: "angelito-baby-blue", destacado: true, coleccion: "angelito", nombre: "Angelito Baby Blue", precio: 85, tono: "#a9cbe4", img: "img/productos/angelito-baby-blue.jpg",
    descripcion: "Un angelito en suave celeste, elaborado artesanalmente para acompañar y proteger a los más pequeños." },
  { id: "angelito-blue", coleccion: "angelito", nombre: "Angelito Blue", precio: 85, tono: "#7fa9d1", img: "img/productos/angelito-blue.jpg",
    descripcion: "Un angelito en tono azul lleno de ternura, elaborado artesanalmente para acompañar y proteger a los más pequeños." },
  { id: "angelito-green", coleccion: "angelito", nombre: "Angelito Green", precio: 85, tono: "#9cc29a", img: "img/productos/angelito-green.jpg",
    descripcion: "Un angelito en tono verde lleno de ternura, elaborado artesanalmente para acompañar y proteger a los más pequeños." },
  { id: "angelito-ambar", coleccion: "angelito", nombre: "Angelito Ámbar", precio: 85, tono: "#e8c36a", img: "img/productos/angelito-ambar.jpg",
    descripcion: "Un angelito en cálido tono ámbar, elaborado artesanalmente para acompañar y proteger a los más pequeños." },
  { id: "angelito-pastel", coleccion: "angelito", nombre: "Angelito Pastel", precio: 85, tono: "#efc0cc", img: "img/productos/angelito-pastel.jpg",
    descripcion: "Un angelito en delicados tonos pastel, elaborado artesanalmente para acompañar y proteger a los más pequeños." },
  { id: "angelito-baby-rosa", coleccion: "angelito", nombre: "Angelito Baby Rosa", precio: 85, tono: "#f1bfcc", img: "img/productos/angelito-baby-rosa.jpg",
    descripcion: "Un angelito en suave rosa bebé, elaborado artesanalmente para acompañar y proteger a los más pequeños." },
  { id: "angelito-baby-green", coleccion: "angelito", nombre: "Angelito Baby Green", precio: 85, tono: "#bcd8b4", img: "img/productos/angelito-baby-green.jpg",
    descripcion: "Un angelito en suave verde menta, elaborado artesanalmente para acompañar y proteger a los más pequeños." }
];
