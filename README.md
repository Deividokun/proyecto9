Este proyecto es una aplicación de web scraping que extrae información de juegos (título, precio, imagen) del sitio web Instant Gaming, específicamente de la sección de juegos de PC disponibles en la plataforma de Steam. El objetivo del proyecto es recopilar datos de los productos de cada página y navegar automáticamente a través de todas las páginas hasta obtener toda la información disponible.

Características principales:
Extrae los títulos, precios e imágenes de los juegos de cada página.
Si un juego no tiene precio visible (agotado o fuera de stock), lo marca como fuera de stock (stock: false).
Navega automáticamente a la siguiente página hasta llegar al final.
Escribe los datos obtenidos en un archivo games.json para su posterior procesamiento o análisis.

scrapper_ig/
│
├── src/
│   └── UTILS/
│       └── scrapper.js       # Script que realiza el scraping y guarda los datos
│
├── games.json                # Archivo donde se almacenan los datos obtenidos
├── package.json              # Configuración del proyecto y dependencias
├── README.md                 # Archivo README que estás leyendo
└── node_modules/             # Dependencias instaladas (al ejecutar npm install)


Memory updated
README para el Proyecto "Scrapper IG"
Scrapper IG
Este proyecto es una aplicación de web scraping que extrae información de juegos (título, precio, imagen) del sitio web Instant Gaming, específicamente de la sección de juegos de PC disponibles en la plataforma de Steam. El objetivo del proyecto es recopilar datos de los productos de cada página y navegar automáticamente a través de todas las páginas hasta obtener toda la información disponible.

Características principales:
Extrae los títulos, precios e imágenes de los juegos de cada página.
Si un juego no tiene precio visible (agotado o fuera de stock), lo marca como fuera de stock (stock: false).
Navega automáticamente a la siguiente página hasta llegar al final.
Escribe los datos obtenidos en un archivo games.json para su posterior procesamiento o análisis.
Requisitos
Para ejecutar este proyecto, necesitarás tener instalado lo siguiente:

Node.js (versión 14 o superior)
npm (viene incluido con Node.js)
Instalación
Clona este repositorio:
bash
Copy code
git clone https://github.com/tu-usuario/scrapper_ig.git
Navega al directorio del proyecto:
bash
Copy code
cd scrapper_ig
Instala las dependencias necesarias:
bash
Copy code
npm install
Uso
Puedes ejecutar el proyecto en modo de desarrollo o en modo de producción.

1. Modo Desarrollo:
Para ejecutar el proyecto en modo de desarrollo con Nodemon (para recargar automáticamente en caso de cambios):

bash
Copy code
npm run dev
2. Ejecutar el Scraper:
Para iniciar el proceso de web scraping y extraer los datos de los juegos:

bash
Copy code
npm run scrap
Este comando ejecutará el script ubicado en ./src/UTILS/scrapper.js, el cual se encargará de hacer el scraping de todas las páginas disponibles en la URL proporcionada.

Estructura del Proyecto
bash
Copy code
scrapper_ig/
│
├── src/
│   └── UTILS/
│       └── scrapper.js       # Script que realiza el scraping y guarda los datos
│
├── games.json                # Archivo donde se almacenan los datos obtenidos
├── package.json              # Configuración del proyecto y dependencias
├── README.md                 # Archivo README que estás leyendo
└── node_modules/             # Dependencias instaladas (al ejecutar npm install)

Tecnologías Utilizadas
1. Node.js
Plataforma para ejecutar JavaScript en el servidor.
2. Puppeteer
Librería que proporciona una API de alto nivel para controlar Chromium o Chrome mediante el protocolo DevTools. Se utiliza para la automatización del navegador y hacer scraping.
3. Express
Framework web minimalista para Node.js. Aunque en este proyecto no se utiliza directamente en el scraping, está disponible en el entorno para futuras integraciones si deseas crear una API o un servidor web.
4. Mongoose
ODM (Object Data Modeling) para MongoDB, permitiendo modelar la base de datos. Este proyecto lo incluye en sus dependencias, aunque no se está usando en este momento.
5. Nodemon
Herramienta para desarrollo que reinicia automáticamente la aplicación cuando detecta cambios en el código.
