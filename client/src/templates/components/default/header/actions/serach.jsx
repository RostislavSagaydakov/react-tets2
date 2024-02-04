import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTimes} from '@fortawesome/free-solid-svg-icons'

export default function HeaderActionsSearch() {
    return (
        <div className="header__search-container">
            <button className="header__actions-action">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </button>
            <div className="header__search">
                <input type="text"/>
                <button className="header__actions-action">
                    <FontAwesomeIcon icon={faTimes} className="icon" />
                </button>
            </div>
        </div>
    )
}