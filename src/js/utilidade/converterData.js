function formatarDataISO(isoString) {
  const data = new Date(isoString);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
  const ano = String(data.getFullYear()).slice(-2);
  const hora = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${ano} às ${hora}:${minutos}`;
}

export default formatarDataISO