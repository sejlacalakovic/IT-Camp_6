
function pattern(n) {
    let arr = [];
    for (let i = 1; i < n + 1; i++) {
      arr.push("1" + "*".repeat(i - 1) + i);
    }
    return arr.join("\n").replace("1", "");
  }
  
  pattern();
  
  