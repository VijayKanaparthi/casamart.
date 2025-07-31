import React, { Component } from "react"
import "./Signup.css"
import { Link } from "react-router-dom"

class Signup extends Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup-card">
          <h2 className="signup-heading">Join CasaMart</h2>
          <form
            className="signup-form"
            onSubmit={alert(
              "Please log in using the credentials provided below. This is for demonstration purposes only."
            )}
          >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <button type="submit" disabled>
              Sign Up
            </button>
            <p className="signup-footer">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              This is for demonstration purposes only.
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
