import { Link } from "react-router-dom";
import './logo.css'

export function Logo() {
  return(
    <div>
      <Link to='/'>
        <h1 className="firstNameLogo">
          Dev
          <span className="secondNameLogo">
            Link
          </span>
        </h1>
      </Link>
    </div>
  )
}