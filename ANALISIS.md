Actividad 1
---------------------------------------------------------------------------------------
Componente:
Utilizo componentes para dividir la aplicación en diferentes partes, como `RecetaCard`, 
`ListaRecetas`, `FiltroCategoria` y `App`.
Es el adecuado, porque permite organizar mejor el proyecto, reutilizar código y hacer que
cada componente tenga una función específica.
----------------------------------------------------------------------------------------
JSX:
Se utiliza en todos los componentes para construir la interfaz de la aplicación, mostrando
los títulos, las tarjetas de recetas, los botones de filtro, el buscador y la información
de cada receta.
es adecuado, debido que permite escribir una estructura similar a HTML dentro de JavaScript,
haciendo más sencilla la creación de la interfaz.
----------------------------------------------------------------------------------------
Props:
Los props se utilizan para enviar la información de cada receta desde `recetas` hacia 
`RecetaCard` y `ListaRecetas`, como el nombre, el origen, la categoría, la descripción, los
ingredientes y si la receta es vegetariana.
Son los adecuados, ya que permiten compartir información entre componentes sin duplicar datos
y mantienen una organizado el código.
----------------------------------------------------------------------------------------
Estado(useState):
SE utilizo `useState` en `App.jsx` para guardar la categoría seleccionada por el usuario y
el texto que escribe en el buscador.
Es adecuado, porque el estado permite que la aplicación actualice automáticamente las recetas 
mostradas cuando el usuario cambia el filtro o realiza una búsqueda.
----------------------------------------------------------------------------------------
Renderizado de listas (.map + key):
Se utiliza en `ListaRecetas.jsx` para recorrer el arreglo de recetas mediante `.map()` y mostrar 
una tarjeta por cada receta utilizando `key={receta.id}`.
Es el adecuado, debido que permite generar los componentes de forma dinámica y la propiedad
`key` ayuda a React a identificar correctamente cada elemento de la lista.
----------------------------------------------------------------------------------------
Renderizado condicional
Utilizo renderizado condicional para mostrar el mensaje "No hay recetas que conicidan"
cuando no aparecen resultados y para mostrar la etiqueta "VEG" únicamente en las recetas
vegetarianas.
es el adecuado, gracias a que permite mostrar distintos elementos dependiendo de una condición,
esto mejora de gran manera la experiencia del usuario y haciendo la interfaz más dinámica.
----------------------------------------------------------------------------------------

Actividad 2
1. ¿Qué ventaja tiene dividir el recetario en componentes en lugar de escribir todo en un solo archivo?

    Al dividir la aplicación en componentes nos permite mantener el código más ordenado y fácil de entender, 
    facilitando el reutilizar componentes, corregir errores y agregar nuevas funcionalidades sin modificar 
    toda la aplicación.

2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno.

    Los props son datos que un componente padre envía a un componente hijo y se no deben modificar desde 
    el componente que las recibe. En esta aplicación, `recetas` envía a `RecetaCard` y a `ListaRecetas`
    datos como el nombre, la categoría y los ingredientes de cada receta.

    por otro lado, el estado (`useState`) permite almacenar información que puede cambiar mientras la
    aplicación está en uso. En `App.jsx` se utiliza para guardar la categoría seleccionada y el texto
    ingresado en el buscador, permitiendo actualizar automáticamente las recetas que se muestran.