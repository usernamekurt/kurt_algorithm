function setZeroes(matrix) {
  let isFirstRowZero = false;
  let isFirstColZero = false;

  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      isFirstRowZero = true;
      break;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      isFirstColZero = true;
      break;
    }
  }
  console.log(matrix)

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  console.log(matrix)
  

  for (let col = 1; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < matrix.length; row++) {
        matrix[row][col] = 0;
      }
    }
  }


  for (let row = 1; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < matrix[0].length; col++) {
        matrix[row][col] = 0;
      }
    }
  }


  if (isFirstRowZero) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  if (isFirstColZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
}
