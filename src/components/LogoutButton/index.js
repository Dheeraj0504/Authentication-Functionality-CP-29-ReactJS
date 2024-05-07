// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  // console.log(props)
  const {history} = props

  const onClickLogout = () => {
    // console.log("Logout button clicked")
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button className="logout-button" type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
