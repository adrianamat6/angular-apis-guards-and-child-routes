


1) POST https://crm-empleados.onrender.com/api/usuarios/login
body: 
        {
            "email": 'admin@gmail.com'
            "password": '12345'
        }

2) Nos da token como respuesta.

3) Utilizamos token para: 

   # 3.1) Obtener un empleado
    GET https://crm-empleados.onrender.com/api/empleados/22

   # 3.2) Guardar un empleado
    POST https://crm-empleados.onrender.com/api/empleados

    body: {

            }

    # 3.3) Actualizar un empleado
    PUT https://crm-empleados.onrender.com/api/empleados/22
    body {

         }

    # 3.4) Borar un empleado
    DELETE https://crm-empleados.onrender.com/api/empleados/22



    