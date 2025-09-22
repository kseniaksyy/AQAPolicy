const axios = require("axios").default;

test("Test all users and verify numbers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const responseBody = response.data;
  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody).toHaveLength(10);
  expect(responseBody.username).not.toBeNull();
});

test("Test the first todo and verify properties", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const responseBody = response.data;
  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody[0]).toHaveProperty("userId");
  expect(responseBody[0]).toHaveProperty("id");
  expect(responseBody[0]).toHaveProperty("title");
  expect(responseBody[0]).toHaveProperty("completed");
});

test("Test the first post userId and id", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const responseBody = response.data;
  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).not.toBe(true);
  expect(responseBody.userId).toBe(1);
  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toMatch(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  );
  expect(responseBody.body).toMatch(
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  );
});

test("Test create new post", async () => {
  const newPost = {
    title: "remittit gustus",
    body: "Puella per viam ambulabat et crustulum dulcium sugebat",
    userId: 1,
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  const responseBody = response.data;
  expect(response.status).toBe(201);
  expect(responseBody.id).toBe(101);
  expect(responseBody.userId).toBe(newPost.userId);
  expect(responseBody.title).toBe(newPost.title);
  expect(responseBody.body).toBe(newPost.body);
});

test("Test create new comment", async () => {
  const newComment = {
    name: "remittit gustus",
    email: "Joko_Boko@ex.com",
    body: "Puella per viam ambulabat et crustulum dulcium sugebat",
    postId: 1,
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/comments",
    newComment
  );
  const responseBody = response.data;
  expect(response.status).toBe(201);
  expect(responseBody.id).toBe(501);
  expect(responseBody).toMatchObject(newComment);
  expect(responseBody).toHaveProperty("id");
});
