import { createContext, useReducer, useContext, useEffect } from "react";

export const initialState = {
  contacts: [],
};

export const reducer = (store, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...store, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...store, contacts: [...store.contacts, action.payload] };
    case "UPDATE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return store;
  }
};

// Crear contexto
const StoreContext = createContext();

// Proveedor del contexto
export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

 useEffect(() => {
  const fetchContacts = async () => {
    try {
      const res = await fetch("https://playground.4geeks.com/todo/users/javigarzon");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      dispatch({ type: "SET_CONTACTS", payload: data });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      dispatch({ type: "SET_CONTACTS", payload: [] }); // Opcional, limpia la lista
    }
  };

  fetchContacts();
}, []);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
