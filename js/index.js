const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M"
    },
    diasIngresado: 5,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M"
    },
    diasIngresado: 1,
    dieta: "Sin sal"
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H"
    },
    diasIngresado: 2,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M"
    },
    diasIngresado: 6,
    dieta: "Sin sal"
  }
];
let paciente = {
  nPacientes: 0,
  nMayoresEdad: 0,
  nHombresDiabeticos: 0,
  totalDiasIngreso: 0,
  mediaEdadMujeres: 0
};

const nuevoObjeto = pacientes => {
  paciente.nPacientes = pacientes.length;
  paciente.nMayoresEdad = pacientes.filter(pacienteMayores => pacienteMayores.paciente.edad > 18).length;
  paciente.nHombresDiabeticos = pacientes.filter(hombresConDiabetes => hombresConDiabetes.dieta === "Diabetes" && hombresConDiabetes.paciente.sexo === "H").length;
  // .filter(pacientesHombres => pacientesHombres.paciente.sexo === "H").length;
  paciente.totalDiasIngreso = pacientes.reduce((acc, totalDiasIngreso) => acc + totalDiasIngreso.diasIngresado, 0);
  const pacienteMujeres = pacientes.filter(pacientesMujer => pacientesMujer.paciente.sexo === "M");
  paciente.mediaEdadMujeres = pacienteMujeres.reduce((acc, mediaMujeres) => acc + mediaMujeres.paciente.edad, 0) / pacienteMujeres.length;
  return paciente;
};

paciente = nuevoObjeto(pacientes);
console.log(paciente);
