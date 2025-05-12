export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
  };
} ;

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload;

    return {
      ...store,
      todos: store.todos.map((todo) =>
        todo.id === id ? { ...todo, background: color } : todo
      ),
    };
  case 'add_new_task':
      return {
        ...store,
        todos: [...store.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            background: null,
          },
        ],
  };
  case 'set_todos': 
  const response = fetch("https://playground.4geeks.com/contact/docs");
if (response.ok) {
  throw new Error('Network response was not ok');
}
  const data = response.json();
  return {
    ...store,
    todos: data.todos,
  };

default:
  return store;
  }
  
}