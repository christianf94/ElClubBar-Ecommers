import "../../styles/NavItem.css"
import {Link} from "react-router-dom"

const NavItem = ({text,to}) => (
    <div className="itemList">
        <li>
            <Link to={to} className="titleDiv">{text}</Link>
        </li>
    </div>
)
export default NavItem;