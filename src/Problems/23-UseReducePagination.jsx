import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "GO_TO_PAGE":
      return { ...state, currentPage: action.payload };

    case "NEXT_PAGE":
      return {
        ...state,
        currentPage:
          state.currentPage < state.totalPages
            ? state.currentPage + 1
            : state.currentPage,
      };

    case "PREV_PAGE":
      return {
        ...state,
        currentPage:
          state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
      };

    default:
      return state;
  }
};

// COMPONENT
const Pagination = () => {
  const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  const recordsPerPage = 10;

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const initialState = {
    currentPage: 1,
    totalPages: totalPages,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Calculate current records
  const lastIndex = state.currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = data.slice(firstIndex, lastIndex);

  return (
    <div style={styles.container}>
      <h2>Pagination (useReducer)</h2>

      <ul style={styles.list}>
        {currentRecords.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div style={styles.buttons}>
        <button
          disabled={state.currentPage === 1}
          onClick={() => dispatch({ type: "PREV_PAGE" })}
          style={styles.button}
        >
          Prev
        </button>

        {Array.from({ length: state.totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => dispatch({ type: "GO_TO_PAGE", payload: i + 1 })}
            style={{
              ...styles.button,
              background: state.currentPage === i + 1 ? "#000" : "#eee",
              color: state.currentPage === i + 1 ? "#fff" : "#000",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={state.currentPage === state.totalPages}
          onClick={() => dispatch({ type: "NEXT_PAGE" })}
          style={styles.button}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

// Styles
const styles = {
  container: {
    margin: "20px",
    fontFamily: "Arial",
  },
  list: {
    padding: 0,
    listStyle: "none",
  },
  item: {
    padding: "10px",
    background: "#f2f2f2",
    marginBottom: "5px",
    borderRadius: "5px",
  },
  buttons: {
    display: "flex",
    gap: "8px",
    marginTop: "20px",
  },
  button: {
    padding: "8px 14px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #ccc",
    background: "#eee",
  },
};
