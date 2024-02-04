import HeaderActionsSearch from "./actions/serach";
import HeaderActionsUser from "./actions/user";
import HeaderActionsWishlist from "./actions/wishlist";
import HeaderActionsCart from "./actions/cart";

export default function HeaderActions() {
    return (
        <div className="header__actions">
            <HeaderActionsSearch/>
            <HeaderActionsUser/>
            <HeaderActionsWishlist/>
            <HeaderActionsCart/>
        </div>
    )
}