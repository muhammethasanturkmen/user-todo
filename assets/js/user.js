async function getPosts() {
  const {users} = await fetch('https://dummyjson.com/users').then(res => res.json());
  return users;
}

async function getPostsComments(userId) {
  const {todos} = await fetch(`https://dummyjson.com/users/${userId}/todos`).then(res => res.json());
  return todos;
}

async function renderPost() {
  const users = await getPosts();

  for(let i = 0; i <= 30; i++) {
    const user = await getPostsComments(users[i].id);
    container.innerHTML += ` <div class="todo">
    <h1 class="baslık" id="baslık"> ${users[i].firstName} ${users[i].lastName} </h1>
                            <p class="baslık" id="baslık"><strong>Age:</strong> ${users[i].age}</p>
                            <p class="baslık" id="baslık"><strong>Gender:</strong> ${users[i].gender}</p>
                            <p class="baslık" id="baslık"><strong>Email:</strong> ${users[i].email}</p>
                            <p class="baslık" id="baslık"><strong>Phone:</strong> ${users[i].phone}</p>
                            <p class="baslık" id="baslık"><strong>Adres:</strong> ${users[i].address.address} ${users[i].address.city} ${users[i].address.state} ${users[i].address.country}</p>
    ${user.map( x => `<p class="icerikListe" id="icerikListe"><strong>Todo:</strong> ${x.todo} </p>
                     <p class="icerikListe" id="icerikListe"><strong>Completed:</strong> ${x.completed} </p>`).join('')}
    </div>
    `;
  }
  }
renderPost();

