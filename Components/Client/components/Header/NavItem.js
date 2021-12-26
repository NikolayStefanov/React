import style from './NavItem.module.css';

const NavItem = (props)=>{
    return (
        <li className={style.listItem}>
            <a className={style.navListItem} href="#">{props.children}</a>
        </li>
    )
}

export default NavItem;