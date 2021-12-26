import style from './AsideItem.module.css';

const AsideItem = ({children}) => {
    return(
        <li className={style.listItem}>
            <a href="#">{children}</a>
        </li>
    )
}

export default AsideItem;