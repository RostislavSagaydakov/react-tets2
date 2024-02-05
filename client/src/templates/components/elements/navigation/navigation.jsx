import {NavLink} from 'react-router-dom'
import useCategories from "../../../../hooks/useCategoryList";

function Navigation() {
    const {data} = useCategories();
    const categoriesList = data.map((item, index) => {
        return (
            <li key={item.name + index}><NavLink to={"/shop/" + item.name}>{item.name.replace(/-/g, ' ')}</NavLink></li>
        );
    })
    return (
        <>
            {categoriesList}
        </>
    )
}

export default Navigation;