//style
import "./NewUserForm.css";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
function newUserForm({addUser}) {
  const [user,setUser] = useState([
    {
      id: uuidv4(),
      imageUrl: '',
      firstName: '',
      lastName: '',
      age: null,
      from: '',
      job: '',
      gender: ''
    }
  ])

  const hiddenSubmit = (e) => {
    e.preventDefault()
    addUser(user);
  }
  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={hiddenSubmit}>
            <label>
              <span>Image URL: </span>
              <input onChange={(e) => {setUser((prev) => {
                return {...prev , image: e.target.value}
              })}} type="url" required />
            </label>
            <label>
              <span>First Name: </span>
              <input onChange={(e) => {setUser((prev) => {
                return {...prev , firstName: e.target.value}
              })}} type="text" required />
            </label>
            <label>
              <span>Last Name: </span>
              <input onChange={(e) => {setUser((prev) => {
                return {...prev , lastName: e.target.value}
              })}} type="text" required />
            </label>
            <label>
              <span> Age: </span>
              <input onChange={(e) => {setUser((prev) => {
                return {...prev , age: e.target.value}
              })}} type="number" required />
            </label>
            <label>
              <span>From: </span>
              <input onChange={(e) => {setUser((prev) => {
                return {...prev , from: e.target.value}
              })}} type="text" required />
            </label>
            <label>
              <span>Job: </span>
              <input onChange={(e) => {setUser((prev) => {
                return {...prev , job: e.target.value}
              })}} type="text" required />
            </label>
            <div className="gender">
              <span>Gender: </span>
              <label>
                <small>Male</small>
                <input type="radio" onChange={(e) => {setUser((prev) => {
                return {...prev , gender: e.target.value}
              })}} required name="gender" value="male" />
              </label>
              <label>
                <small>Female</small>
                <input type="radio" onChange={(e) => {setUser((prev) => {
                return {...prev , gender: e.target.value}
              })}} required name="gender" value="Female" />
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default newUserForm;
