This project was developed to practice my docker skills.

Run it with thses commands below:
   * docker build -t todo-node .
   * docker compose up -d

The application will run on port 3000.


**Routes:**
- GET - localhost:3000/todoitem/ -> Get all ToDo items
- GET - localhost:3000/todoitem/[id] -> Get a specific item
- POST - localhost:3000/ -> Add a new ToDo item.
  * Request:
    { "Description": "", "UserId": 1, "Date": "", "Done": false }

- PUT - localhost:3000/todoitem/[id] -> Change a specific ToDo Item to Done.
