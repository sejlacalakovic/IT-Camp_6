var src = document.getElementById("moj_div");
src.style.display = "flex";
src.style.justifyContent = "flex-start";
src.style.flexWrap = "wrap";

fetch("https://catfact.ninja/facts")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      src.appendChild(generateCard(res.data[i]));
    }
  })
  .catch((err) => {
    console.log(err);
  });