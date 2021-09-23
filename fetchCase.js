const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer lsnhdfjkshsjhdkjshdkshd",
  },
  body: JSON.stringify({
    name: "nombre",
    website: "ksksks.cpom",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
