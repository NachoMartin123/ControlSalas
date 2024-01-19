# AppSalasNachoMartin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

![image](https://github.com/NachoMartin123/ControlSalas/assets/25524899/b875ef25-52e8-41db-8a23-059845daa338)

## Arrancar el proyecto

Es necesario tener instalado el instalador de paquetes de node (npm)
Abrir consola en ruta raíz del proyecto y ejecutar el comando 'npm install' 
Abrir un navegador Navigate to `http://localhost:4200/control-salas`. The application will automatically reload if you change any of the source files.


## Descripción del proyecto

'Control de salas' es un proyecto basado en Angular para la gestión de un edicio con X salas por planta.

Cada planta tiene una serie de salas cuya información se puede modificar pulsando el botón 'Modificar' asociado. También se puede eliminar una sala pulsando la 'X' asociada.

Las salas se pueden filtrar por 'Capacidad máxima' y 'Ocupación' estableciendo unos valores mínimos por los que filtrará las salas del piso actual. 

Una sala con valores cambiados, que no se ha pulsado su botón 'Modificar', perderá dichos cambios si se cambia de planta. Para filtrar se tendrá en cuenta los valores anteriores mientras no se pulse 'Modificar'

Se pueden añadir salas a una planta pulsando el botón "Añadir sala", que creará una sala con valores por defecto.

El diseño de la aplicación es responsive con el uso de SCSS.

Se ha utilizado la api gratuita de Font Awesome 5.

Se ha usado la api 'angular-material' para adaptar sus componentes a los de la aplicación 


## Futuras ampliaciones
* Traducción al inglés
* Test
* Uso de cookies para guardar valores en navegador
* Llamadas con API REST a BD 

