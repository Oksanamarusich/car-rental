import { Link, NavigationLinks } from "./Navigation.styled";


export const Navigation = () => {
    return <>
        <NavigationLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
        </NavigationLinks>
        
        
         
        
    </>
}