Estructura de carpetas propuesta para el CRM:

# pages/:  contenedores de ruta (páginas completas)

    /home/: La página de aterrizaje pública  => homeComponent
    /login/: El formulario de acceso => loginFormComponent
    /dashboard/: El contenedor de la parte privada
        /empleados   
        /empleado/:id
        /empleado/new
        /empleado/update/:id

    **errorComponent

# shared/:componentes compartidos por toda la aplicación 
    /navDashboard

# components/: Destinada a piezas atómicas y reutilizables que no tienen ruta 
    employ-card/
    
# services/: Donde reside la lógica de datos y las peticiones HTTP 
    service.ts 
    employee.service.ts 

# interfaces/: la estructura de los objetos 
    iuser.interface.ts   User/login
    iemploy.interface.ts Employee

# guards/:  Para las cláusulas de guarda que protegen las rutas privadas

