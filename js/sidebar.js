fetch("../partials/_sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidebar").innerHTML = data;
  });