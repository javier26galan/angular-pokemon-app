export function getRandomNumber(): number {
  return Math.floor(Math.random() * 151) + 1;
}

export function shuffleArray<T>(array: T[]): T[] {
  // La función shuffleArray toma un array como argumento y devuelve un array barajado.
  // El tipo genérico <T> permite que la función funcione con diferentes tipos de elementos.

  const shuffledArray = [...array];
  // Creamos una copia del array original utilizando el operador de propagación (...).
  // Esto es importante para no modificar el array original durante el proceso de barajado.

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Iniciamos un ciclo que recorre el array desde el último elemento hasta el primero.
    // Comenzamos desde el último índice para asegurarnos de que todos los elementos se barajen.

    const j = Math.floor(Math.random() * (i + 1));
    // Generamos un índice aleatorio 'j' entre 0 y 'i' (inclusive).
    // 'i' representa el índice actual en el ciclo y se reduce en cada iteración,
    // lo que garantiza que los elementos restantes tengan la misma probabilidad de ser seleccionados.

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    // Intercambiamos los elementos en las posiciones 'i' y 'j' del array.
    // Utilizamos destructuring para intercambiar los valores de las posiciones.

    // En resumen, estamos tomando dos elementos aleatorios y los estamos intercambiando.

    // Repetimos este proceso en cada iteración del ciclo, lo que garantiza que todos los elementos
    // tengan la oportunidad de moverse a una posición aleatoria.

    // Después de que el ciclo se complete, el array estará completamente barajado.
  }

  return shuffledArray;
  // Devolvemos el array barajado.
}
