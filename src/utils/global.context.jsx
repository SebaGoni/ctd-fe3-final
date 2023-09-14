import React, { createContext, useReducer, useEffect } from "react";

export const initialState = {
  theme: "light",
  dentistas: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || {},
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return new Error()
  }
};

const dentistasReducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTAS":
      return action.payload;
    default:
      return new Error()
  }
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const dentistId = action.payload.id;
      if (state[dentistId]) {
        const { [dentistId]: removed, ...newFavorites } = state;
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      } else {
        const updatedFavorites = {
          ...state,
          [dentistId]: {
            name: action.payload.name,
            username: action.payload.username,
          },
        };
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      }
      case "CLEAR_FAVORITES":
        localStorage.removeItem("favorites");
        return {}; 
    default:
      return new Error()
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState.theme);
  const [dentistas, dispatchDentistas] = useReducer(dentistasReducer, initialState.dentistas);
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, initialState.favorites);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const toggleFavorite = (dentist) => {
    dispatchFavorites({
      type: "TOGGLE_FAVORITE",
      payload: {
        id: dentist.id,
        name: dentist.name,
        username: dentist.username,
      },
    });
  };
  const clearFavorites = () => {
    dispatchFavorites({ type: "CLEAR_FAVORITES" });
  };

  const fetchDentistas = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatchDentistas({ type: "SET_DENTISTAS", payload: data });
    } catch (error) {
      console.error("Error al cargar los dentistas", error);
    }
  };

  useEffect(() => {
    fetchDentistas();
  }, []);

  const contextValue = {
    theme: state,
    toggleTheme,
    dentistas,
    favorites,
    toggleFavorite,
    clearFavorites,
  };

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};


