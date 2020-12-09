import "../../styles/NavItem.css"
const NavItem = ({text,url = "#"}) => (
    <div className="itemList">
        <li>
            <a href={url}>{text}</a>
        </li>
    </div>
)
export default NavItem;