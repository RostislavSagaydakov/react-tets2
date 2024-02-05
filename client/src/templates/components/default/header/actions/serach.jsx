import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTimes} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useRef, useState} from "react";

export default function HeaderActionsSearch() {
    const topSearchRef = useRef(null)
    const [showSearchBlock, setShowSearchBlock] = useState(false);
    const handlerSearchToggle = ()=> {
        setShowSearchBlock(showSearchBlock => !showSearchBlock)
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (topSearchRef.current && !topSearchRef.current.contains(event.target)) {
                setShowSearchBlock(false);
            }
        }

        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                setShowSearchBlock(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [topSearchRef]);
    return (
        <div className="header__search-container"
             ref={topSearchRef}
        >
            {!showSearchBlock && <button className="header__actions-action" onClick={handlerSearchToggle}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </button>}
            {showSearchBlock && <div className="header__search">
                <input type="text" autoFocus={true}/>
                <button className="header__actions-action" onClick={handlerSearchToggle}>
                    <FontAwesomeIcon icon={faTimes} className="icon" />
                </button>
            </div>}
        </div>
    )
}