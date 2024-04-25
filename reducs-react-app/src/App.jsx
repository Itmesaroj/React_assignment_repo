import React, { useReducer, useState } from 'react';
import './App.css';

function App() {
  const[flag,setFlag]=useState(false);
  const [cours,setCourse]=useState('');
  const initialState = {
    name: '',
    establishment_year: '',
    address: {
      building: '',
      street: '',
      city: '',
      state: '',
      pincode: '',
      landmark: ''
    },
    courses_offered: [],
    newCourse: ''
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_NAME":
      case "SET_ESTABLISHMENT_YEAR":
        return {
          ...state,
          ...action.payload
        };
      case "UPDATE_ADDRESS_BUILDING_NAME":
        return {
          ...state,
          address: {
            ...state.address,
            ...action.payload
          }
        };
      case "ADD_COURSE":
        return {
          ...state,
          courses_offered: [...state.courses_offered, action.payload]
        };
      case "RESET":
        return initialState;
      default:
        throw new Error(`action type is invalid`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleReset() {
    setCourse('');
    dispatch({ type: "RESET" });
    setFlag(false);
    setError('');
 
  }
function handleSubmit(e){
  e.preventDefault();
  setFlag(true);
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>College Name:</label>
        <input
          type="text"
          name="name"
          id='name'
          value={state.name}
          placeholder='College Name'
          onChange={(e) => {
            dispatch({
              type: "SET_NAME",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
      </div>
      <div>
        <label>Establishment Year:</label>
        <input
          type="text"
          name="establishment_year"
          id='establishment_year'
          value={state.establishment_year}
          placeholder='Establishment_year'
          onChange={(e) => {
            dispatch({
              type: "SET_ESTABLISHMENT_YEAR",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
      </div>
      <div>
        <label>Address Details:</label>
        <input
          type="text"
          name="building"
          placeholder="Building"
          value={state.address.building}
          id='building'
          onChange={(e) => {
            dispatch({
              type: "UPDATE_ADDRESS_BUILDING_NAME",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={state.address.street}
          id="street"
          onChange={(e) => {
            dispatch({
              type: "UPDATE_ADDRESS_BUILDING_NAME",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={state.address.city}
          id="city"
          onChange={(e) => {
            dispatch({
              type: "UPDATE_ADDRESS_BUILDING_NAME",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={state.address.state}
          id='state'
          onChange={(e) => {
            dispatch({
              type: "UPDATE_ADDRESS_BUILDING_NAME",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={state.address.pincode}
          id='pincode'
          onChange={(e) => {
            dispatch({
              type: "UPDATE_ADDRESS_BUILDING_NAME",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
        <input
          type="text"
          name="landmark"
          placeholder="Landmark"
          value={state.address.landmark}
          id='landmark'
          onChange={(e) => {
            dispatch({
              type: "UPDATE_ADDRESS_BUILDING_NAME",
              payload: { [e.target.id]: e.target.value }
            });
          }}
        />
      </div>
      <div>
        <label>Courses Offered:</label>
        <ul>
          {state.courses_offered.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <input
          type="text"
          name="course"
          placeholder="Add Course"
          value={cours}
          onChange={(e)=>setCourse(e.target.value)}
          />
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "ADD_COURSE",
              payload: cours
            })
          }
        >
          Add Course
        </button>
      </div>
      <button
        type="submit"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>

    {flag && (
        <div>
          {/* Display college details */}
          <h2>Entered College Details:</h2>
          <p>College Name: {state.name}</p>
          <p>Establishment Year: {state.establishment_year}</p>
          {/* Display address details */}
          <h3>Address:</h3>
          <p>Building: {state.address.building}</p>
          <p>Street: {state.address.street}</p>
          <p>City: {state.address.city}</p>
          <p>State: {state.address.state}</p>
          <p>Pincode: {state.address.pincode}</p>
          <p>Landmark: {state.address.landmark}</p>
          {/* Display courses offered */}
          <h3>Courses Offered:</h3>
          <ul>
            {state.courses_offered.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}

    </>
  );
}

export default App;
