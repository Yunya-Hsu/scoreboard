let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
];

const dataPanel = document.querySelector("#data-panel");

// write your code here
function displayPlayerList(players) {
  let htmlContent = "";
  for (let player of players) {
    htmlContent += `<tr>`;
    for (let prop in player) {
      if (prop === 'name'){
        htmlContent += `<td><span>${player[prop]}</span></td>`
      } else {
        htmlContent += `<td>
        <span>${player[prop]}</span>
        <i class='fa fa-plus-circle up'></i>
        <i class='fa fa-minus-circle down'></i>
        </td>`
      }
    }
    htmlContent += `</tr>`;
  }
  // console.log(htmlContent);
  dataPanel.innerHTML = htmlContent;
}

displayPlayerList(players);


dataPanel.addEventListener('click', function(event) {
  const target = event.target;
  console.log(target)
  if (target.classList.contains('up')) {
    let point = target.parentElement.firstElementChild
    point.innerText = parseInt(point.innerText) + 1
  } else if (target.classList.contains('down')) {
    let point = target.parentElement.firstElementChild
      if (point.innerText <= 0) {
        alert("不可以是負分唷~")
    } else {
      point.innerText = parseInt(point.innerText) - 1
    } 
  }
})