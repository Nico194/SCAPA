const routes = {
    initial: {
        left: [
            {
                route: '/about-us',
                name: 'Acerca de nosotros'
            }
        ],
        right: [
            {
                route: '/sign-in',
                name: 'Iniciar Seción'
            },
            {
                route: '/sign-up',
                name: 'Registrarse'
            }
        ]
    },
    tutor: {
        left: [
            {
                route: '/patients',
                name: 'Pacientes'
            },
            {
                route: '/routines',
                name: 'Rutinas'
            },
            {
                route: '/pending',
                name: 'Solicitudes Pendientes'
            },
        ],
        right: [
            {
                route: '/profile',
                name: 'Mi Perfil'
            },
            {
                route: '/log-out',
                name: 'Cerrar Sesión'
            }
        ]
    },
    admin : {
        left: [
            {
                route: '/categories',
                name: 'Categories'
            },
            {
                route: '/pictograms',
                name: 'Pictogramas'
            }
        ],
        right: [
            {
                route: '/log-out',
                name: 'Cerrar Sesión'
            }
        ]
    }
}

export default routes;