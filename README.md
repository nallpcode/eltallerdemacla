# El Taller de Macla — Página web

Sitio estático (HTML, CSS y JavaScript). No necesita instalar nada: abre `index.html` en el navegador.

## Estructura

```
index.html                 Inicio
productos.html             Catálogo con pestañas y buscador
quienes-somos.html         Quiénes somos (historia + foto de la creadora: img/creadora.jpg)
libro-reclamaciones.html   Libro de Reclamaciones virtual
politica-privacidad.html   Política de privacidad
css/styles.css             Estilos (colores en :root, arriba del archivo)
js/data.js                 ★ Productos, colecciones y datos del negocio
js/main.js                 Funcionamiento (WhatsApp, filtros, Mi selección…)
img/productos/             Fotos de los productos
img/patron-floral.svg      Estampado floral de fondo
```

## Lo único que necesitas editar: `js/data.js`

### Agregar un producto
1. Copia la foto en `img/productos/` (cuadrada, ~800 px, formato .jpg).
2. En `PRODUCTOS`, copia una línea y cambia sus datos:

```js
{ id: "aurora", coleccion: "virgen", nombre: "Virgen Madre Aurora", precio: 100,
  tono: "#e8a5b8", img: "img/productos/virgen-aurora.jpg", nuevo: true,
  descripcion: "Inspirada en..." },
```

Opciones: `destacado: true` (sale en el Inicio), `nuevo: true` (etiqueta “Nuevo”),
`agotado: true` (etiqueta “Agotado”; el mensaje de WhatsApp pide que la vuelvan a hacer),
`medidas: "..."` (si mide distinto al resto de su colección).

### Agregar una colección nueva (ej. Medallones de Cuna)
En `COLECCIONES` agrega:

```js
medallon: {
  nombre: "Medallones de Cuna",
  portada: "img/productos/medallon-luna.jpg",
  lema: "Dulces sueños bajo su protección",
  descripcion: "Medallones hechos a mano para acompañar la cuna de tu bebé.",
  medidas: "15 cm de diámetro"
},
```

Luego crea productos con `coleccion: "medallon"`. La colección aparecerá sola en el
Inicio, en las pestañas de Productos y en el pie de página.

### Datos del negocio
En `CONFIG`: número de WhatsApp, redes sociales, razón social, RUC, dirección y correo
(estos últimos se muestran en el Libro de Reclamaciones y la Política de Privacidad).

## Publicar
Sube la carpeta completa a cualquier hosting estático (Netlify, Vercel, GitHub Pages
o tu propio hosting).
