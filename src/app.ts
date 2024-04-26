///////////ESTUDIANTE//////////////
const estudiante = [{
    ID:1,
    nombre: "Juan",
    identificacion:"1310149023"
},
{
    ID:2,
    nombre: "Bryan",
    identificacion:"1390149043"
},
{
    ID:3,
    nombre: "Luis",
    identificacion:"1359749023"
},
{
    ID:4,
    nombre: "Margarita",
    identificacion:"1380142021"
},
{
    ID:5,
    nombre: "luz",
    identificacion:"1330149024"
}]



//////////////IDIOMA//////////////
const idioma = [{
    ID:1,
    Descripcion: "Ingles"
},
{
    ID:2,
    Descripcion: "Frances"
},
{
    ID:3,
    Descripcion: "Japones"
},
{
    ID:4,
    Descripcion: "Ruso"
},
{
    ID:5,
    Descripcion: "Aleman"
}]

//////CONTROL DE IDIOMA//////////////

const control_idiomas =[
    {
        ID:1,
        estudiante:[{
            ID:1,
            nombre: "Juan",
            identificacion:"1310149023"
        }],
        idioma:[{
            ID:1,
            Descripcion: "Ingles"
        }],
        porcentaje_lectura:"80%",
        porcentaje_escritura:"90%",
        porcentaje_escuchar_hablar:"90%"
    },
    {
        ID:2,
        estudiante:[{
            ID:3,
            nombre: "Luis",
            identificacion:"1359749023"
        }],
        idioma:[{
            ID:3,
            Descripcion: "Japones"
        }],
        porcentaje_lectura:"20%",
        porcentaje_escritura:"50%",
        porcentaje_escuchar_hablar:"50%"
    },
    {
        ID:3,
        estudiante:[{
            ID:4,
            nombre: "Margarita",
            identificacion:"1380142021"
        }],
        idioma:[{
            ID:2,
            Descripcion: "Frances"
        }],
        porcentaje_lectura:"60%",
        porcentaje_escritura:"50%",
        porcentaje_escuchar_hablar:"80%"
    },
    {
        ID:4,
        estudiante:[{
            ID:2,
            nombre: "Bryan",
            identificacion:"1390149043"
        }],
        idioma:[{
            ID:4,
            Descripcion: "Ruso"
        }],
        porcentaje_lectura:"50%",
        porcentaje_escritura:"30%",
        porcentaje_escuchar_hablar:"40%"
    },
    {
        ID:5,
        estudiante:[{
            ID:5,
            nombre: "Luz",
            identificacion:"1330149024"
        }],
        idioma:[{
            ID:5,
            Descripcion: "Aleman"
        }],
        porcentaje_lectura:"10%",
        porcentaje_escritura:"40%",
        porcentaje_escuchar_hablar:"30%"
    },
]


////////////////////////////////////////////////////////////////////

console.log("Estudiantes:");
estudiante.forEach(est => {
    console.log(`ID: ${est.ID}, Nombre: ${est.nombre}, Identificación: ${est.identificacion}`);
});


console.log("Idiomas:");
idioma.forEach(idi => {
    console.log(`ID: ${idi.ID}, Descripción: ${idi.Descripcion}`);
});

console.log("Control de Idiomas:");
control_idiomas.forEach(ctrl => {
    console.log(`ID: ${ctrl.ID}, Estudiante: ${ctrl.estudiante[0].nombre}, Idioma: ${ctrl.idioma[0].Descripcion}, Lectura: ${ctrl.porcentaje_lectura}, Escritura: ${ctrl.porcentaje_escritura}, Escuchar/Hablar: ${ctrl.porcentaje_escuchar_hablar}`);
});


///////////////////////////////////////////////////////////
function idiomaCallback(ID: string, callback: (err: Error | undefined, res: any | undefined) => void) {
    const idiomaEncontrado = idioma.find(idioma => idioma.ID === parseInt(ID));
    callback(undefined, idiomaEncontrado);
}

const ID: string = "2"; // Cambia el ID según necesites
if (parseInt(ID) > 5 || parseInt(ID) < 1) {
    console.log("Idioma no encontrado.");
} else {
    idiomaCallback(ID, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            if (res) {
                console.log("Idioma encontrado:");
                console.log(res);
            } else {
                console.log("Idioma no encontrado.");
            }
        } 
    });
}


/////////////////////////////////////////////////////////////////
async function getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  async function main() {
    try {
      const users = await getUsers();
      console.log('Usuarios obtenidos:', users);
    } catch (error) {
      console.error('Error en la aplicación:', error);
    }
  }
  
  main();
  