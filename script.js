function createUser({ name, avatar, id }) {
  document.querySelector(".user-list").innerHTML += `
    <div class="user-content">
      <img src="${avatar}" alt="${name}"/>
      <div>
        <h3 class="user-name">${name}</h3>
        </div>
    </div>`;
}

fetch("https://61ea3e337bc0550017bc664c.mockapi.io/user1")
  .then((data) => data.json())
  .then((userList) => {
    userList.forEach((user) => createUser(user));
  });

