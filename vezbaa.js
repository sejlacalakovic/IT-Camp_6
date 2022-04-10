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


function pattern(n) {
    let arr = [];
    for (let i = 1; i < n + 1; i++) {
      arr.push("1" + "*".repeat(i - 1) + i);
    }
    return arr.join("\n").replace("1", "");
  }
  
  pattern();
  
  