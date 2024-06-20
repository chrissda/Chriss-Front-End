const convertDateToLocal = (fechaYHora, zonaHoraria = "es-Es") => {
  const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
  };
  
  const fecha = new Date(fechaYHora);
  return fecha.toLocaleDateString(zonaHoraria, options);
  //viernes, 31 de mayo de 2014
}

export default convertDateToLocal