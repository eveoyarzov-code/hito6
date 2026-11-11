# 🍕 Pizzería Mamma Mía - Hito 6

Este hito marca la centralización del estado de nuestra aplicación mediante la implementación de **Context API**, eliminando por completo el *prop drilling* y permitiendo una gestión global y sincronizada del carrito de compras y el catálogo de productos.

## 🚀 Cambios e Implementaciones

### 1. Creación del Contexto Global (`CartContext.jsx`)
- Se creó la carpeta `src/context/` y el archivo `CartContext.jsx`.
- Implementación de `createContext` y un `CartProvider` para unificar los estados de la aplicación.
- Migración de la lógica de consumo de la API (`fetch`) de todas las pizzas desde el componente local hacia el contexto global (cumpliendo el requerimiento opcional nº 6).
- Definición de las funciones globales para interactuar con el carrito:
  - `addToCart(pizza)`: Añade un producto al carrito o incrementa su cantidad si ya existe.
  - `increaseCount(id)`: Incrementa en 1 la cantidad de una pizza específica.
  - `decreaseCount(id)`: Decrementa la cantidad y, si llega a 0, elimina el elemento del carrito de forma automática.
  - `totalCart`: Propiedad computada que calcula en tiempo real el costo total acumulado del carrito.

### 2. Consumo Centralizado en Componentes y Páginas
- **`main.jsx`**: Se envolvió la aplicación global dentro de `<CartProvider>` para disponibilizar el estado en todo el árbol de componentes.
- **`Navbar.jsx`**: Ahora consume directamente `totalCart` mediante el hook `useContext`, reflejando el monto en la barra superior al instante.
- **`Home.jsx`**: Se limpió por completo de estados locales y llamadas fetch; ahora consume el array de `pizzas` y la función `addToCart` provistas por el contexto.
- **`CardPizza.jsx`**: El botón "Añadir 🛒" ejecuta el método global traspasado desde la página principal.
- **`Cart.jsx`**: Se adaptó para consumir el estado global `cart`, enlazando los botones `+` y `-` con las funciones del contexto, logrando una sincronización total con el Navbar.

### 3. Manejo de Errores Visuales (Fallback de Imágenes)
- Se implementó la propiedad `onError` en las etiquetas de imagen de las tarjetas y del carrito. Esto asegura que si el servidor de la API experimenta problemas para servir las imágenes de forma local, el sistema cargue automáticamente un recurso visual de respaldo.

---

## 💻 Ejecución y Pruebas del Proyecto

1. Levanta tu servidor backend en el puerto `5000`.
2. En la terminal del proyecto frontend, instala las dependencias de estilos e inicia el entorno:
   ```bash
   npm install
   npm run dev
   ```
3. Añade productos desde la pantalla de inicio y comprueba la sincronización en tiempo real del total general en todas las secciones de la plataforma.

