function transpose(matrix) {
    let arr = [];
    for (let i = 0; i < matrix[0].slice().length; i++) {
      let tempArr = [];
      for (let j = 0; j < matrix.slice().length; j++) {
        tempArr.push(matrix[j][i]);
      }
      arr.push(tempArr);
    }
    return arr;
  }
  transpose();
