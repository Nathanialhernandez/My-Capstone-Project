import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";
// assets


const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          <span className="accent">Keep track of your personal budgets!</span>
        </h1>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Enter your name" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            
          </button>
        </Form>
      </div>
      
    </div>
  )
}
export default Intro