export function convert_unix(timestamp) {
  const date = new Date(timestamp * 1000);
  const horarioBrasilia = date.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit"
  });

  return horarioBrasilia;
}

