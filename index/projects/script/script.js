requestUserRepos();

function requestUserRepos() {
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/users/array-in-a-matrix/repos`;
  xhr.open("GET", url, true);

  xhr.onload = function () {
    const data = JSON.parse(this.response);
    let root = document.getElementById("userRepo");
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    let tbody = document.getElementById("userRepo");
    for (let i in data) {
      let tr = document.createElement("tr");
      tr.classList.add("list-group-item");

      function removeNull(disc) {
        if (disc === null) {
          const disc = "-";
          return disc;
        } else {
          return data[i].description;
        }
      }

      tr.innerHTML = `
                <td>${data[i].name}</td>
                <td>${removeNull(data[i].description)}</td>
                <td><a href="${data[i].html_url}">${data[i].html_url}</a></td>
                <td>${data[i].language}</td>
            `;
      tbody.appendChild(tr);
    }
  };
  xhr.send();
}
