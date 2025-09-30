async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) throw new Error("Failed to fetch todo");
    return await response.json();
  } catch (error) {
    console.error("Error fetching todo:", error.message);
    throw error;
  }
}

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!response.ok) throw new Error("Failed to fetch user");
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error;
  }
}

async function fetchData() {
  try {
    // Аналог Promise.all
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Async/Await Promise.all results:");
    console.log("Todo:", todo);
    console.log("User:", user);

    // Аналог Promise.race
    const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Async/Await Promise.race result:", raceResult);
  } catch (error) {
    console.error("Error in fetchData:", error.message);
  }
}

fetchData();
