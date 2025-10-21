const courses = [

  {
    id: 7,
    name: "C Intermedio",
    category: "Frontend",
    available: true,
    description:
      "Domina la programación orientada a objetos con C# y aprende a construir aplicaciones robustas utilizando .NET y principios de arquitectura limpia.",
    price: 18999,
    image:
      "https://disenowebakus.net/imagenes/articulos/lenguaje-de-programacion-c.jpg",
  },
  {
    id: 5,
    name: "Tailwindcss",
    category: "Frontend",
    available: true,
    description:
      "Diseña interfaces modernas y responsivas utilizando Tailwind CSS. Aprende buenas prácticas de diseño y crea componentes reutilizables para tus proyectos web.",
    price: 17999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
  },
  {
    id: 6,
    name: "React",
    category: "Frontend",
    available: true,
    description:
      "Aprende a construir aplicaciones web dinámicas y escalables con React. Domina componentes, estados, hooks y comunicación entre componentes.",
    price: 14999,
    image:
      "https://lh4.googleusercontent.com/rV7j2cc-_2vwsVxR26zKDYwnwLgDk3k8dXkKwm7ZPDQonHc1dyfLe8E0qOgb4lpWRujGY6W-XtkGLROQ6VxGolTsfFSqJFAq8VhxbTDDxMo6cdkIeDsYQ3LPWzk_Tzj4-ZDIS7hMhGeTMIh6bO_s6HV9YtX4ogfgvmfsPwfQCyFR9WAOUacD9ouzjQ",
  },
  {
    id: 9,
    name: "HTML y CSS",
    category: "Frontend",
    available: true,
    description:
      "Perfecciona tus habilidades en diseño web con animaciones CSS, layouts flexibles, grid y responsive design. Ideal para construir sitios profesionales.",
    price: 13999,
    image: "https://i.ytimg.com/vi/rr2H086z16s/maxresdefault.jpg",
  },
  {
    id: 13,
    name: "Next.js",
    category: "Frontend",
    available: false,
    description:
      "Desarrolla aplicaciones web completas utilizando Next.js, integrando backend, rutas dinámicas, autenticación y despliegue.",
    price: 24999,
    image:
      "https://cloudappi.net/wp-content/uploads/2024/08/Diseno-sin-titulo-5.png",
  },

  {
    id: 1,
    name: "Python Básico",
    category: "Backend",
    available: true,
    description:
      "Aprende los fundamentos de Python, desde variables y estructuras de control hasta funciones y manejo de datos. Ideal para comenzar en el desarrollo backend o análisis de datos.",
    price: 9999,
    image:
      "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "JavaScript Básico",
    category: "Backend",
    available: true,
    description:
      "Domina los conceptos esenciales de JavaScript: variables, funciones, eventos y manipulación del DOM. El curso ideal para dar tus primeros pasos en el desarrollo web.",
    price: 15999,
    image:
      "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
  },
  {
    id: 2,
    name: "Node API",
    category: "Backend",
    available: false,
    description:
      "Crea y gestiona APIs RESTful con Node.js y Express. Aprende a manejar rutas, middleware, peticiones HTTP y conexión con bases de datos.",
    price: 15999,
    image:
      "https://static.platzi.com/media/blog/nueva-version-nodejs-npm-41d0c683-dd57-4540-92f2-daff88ec661d.png",
  },
  {
    id: 12,
    name: "Python para Data Science",
    category: "Backend",
    available: true,
    description:
      "Aplica Python en análisis de datos y machine learning. Incluye librerías como Pandas, NumPy y Matplotlib.",
    price: 21999,
    image:
      "https://www.santafe.gob.ar/ms/impulsa/wp-content/uploads/sites/67/2025/03/15-fundamentos_de_python_1.png",
  },

  {
    id: 17,
    name: "FullStack con MERN",
    category: "FullStack",
    available: true,
    description:
      "Crea aplicaciones web completas utilizando MongoDB, Express, React y Node.js. Aprende a conectar frontend y backend de forma eficiente.",
    price: 25999,
    image:
      "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd9v5t8l43z6esk126oqs.png",
  },
  {
    id: 18,
    name: "FullStack con Python y React",
    category: "FullStack",
    available: true,
    description:
      "Desarrolla proyectos integrales combinando Flask en el backend con React en el frontend. Aprende a implementar APIs y autenticación JWT.",
    price: 26999,
    image:
      "https://repository-images.githubusercontent.com/171410703/bd661e6f-9bd3-43b8-8d6c-45a316c4bc11",
  },
  {
    id: 19,
    name: "FullStack con Java y Angular",
    category: "FullStack",
    available: false,
    description:
      "Aprende a crear aplicaciones corporativas utilizando Java Spring Boot y Angular. Enfocado en arquitectura REST y despliegue en la nube.",
    price: 28999,
    image:
      "https://offering.solutions/wp-content/uploads/2024/03/angular-java.jpg",
  },
  {
    id: 20,
    name: "Full Stack con TypeScript",
    category: "FullStack",
    available: true,
    description:
      "Aprende desarrollo full stack con TypeScript, utilizando React en el frontend y Node/Express en el backend, garantizando un código más seguro y mantenible.",
    price: 29999,
    image:
      "https://miro.medium.com/v2/resize:fit:1200/0*cy5S4LnOIInTBXed.png",
  },

  {
    id: 4,
    name: "MySQL Básico",
    category: "Database",
    available: false,
    description:
      "Aprende a crear, consultar y gestionar bases de datos relacionales utilizando SQL. Incluye conceptos de tablas, claves y consultas con SELECT, JOIN y más.",
    price: 10999,
    image: "https://www.elbuild.it/assets/img/techs/mysql.png",
  },
  {
    id: 8,
    name: "MongoDB",
    category: "Database",
    available: true,
    description:
      "Aprende a utilizar MongoDB, una base de datos NoSQL ampliamente usada en aplicaciones modernas. Incluye consultas, índices y modelado de documentos.",
    price: 12999,
    image:
      "https://www.developer-tech.com/wp-content/uploads/2021/02/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg",
  },
  {
    id: 14,
    name: "PostgreSQL",
    category: "Database",
    available: true,
    description:
      "Domina PostgreSQL, una de las bases de datos más potentes. Aprende optimización, procedimientos almacenados y relaciones complejas.",
    price: 16999,
    image:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_251be2af3ae607c45c14e816eaa1cf41/postgresql.png",
  },
  {
    id: 16,
    name: "MySQL Avanzado",
    category: "Database",
    available: true,
    description:
      "Perfecciona tus conocimientos en MySQL aprendiendo sobre procedimientos almacenados, optimización de consultas y replicación de bases de datos.",
    price: 18999,
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQFZk_BOEXMuxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711355118921?e=2147483647&v=beta&t=0dn89z7vhHg_yojXucqZc86hRlZl6fXb2gUTPaCZSNY",
  },
];

export default courses;
