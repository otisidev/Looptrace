function onNavigate(id, parentId) {
  ResetActive();
  document
    .getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: "start" });
  console.log(parentId);

  // make the navigation active
  document.getElementById(parentId).className = "active";
  return false;
}

function ResetActive() {
  let ul = document.querySelector(".menu");
  for (let i = 1; i < ul.children.length - 1; i++) {
    ul.children.item(i).className = "";
  }
}
