function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => {
      if (!response.ok) throw new Error("Failed to fetch todo");
      return response.json();
    }
  );
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => {
      if (!response.ok) throw new Error("Failed to fetch user");
      return response.json();
    }
  );
}

Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log("Promise.all results:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error.message);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("Promise.race result:", result);
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error.message);
  });
