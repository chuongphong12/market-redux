import {Component} from "react";
import {Link, Route} from "react-router-dom";

class MenuItem extends Component {

    renderMenuItem = (menuItem, match) => {

        if (menuItem.subMenuItems.length === 0) {
            let className = match ? "menu-item active" : "menu-item";
            return (
                <li className={className}>
                    <Link to={menuItem.url} className="menu-link">
                        <i className={menuItem.menuClassIcon}/>
                        <span className="text">{menuItem.title}</span>
                    </Link>
                </li>
            )
        } else {
            let className = match ? "menu-item has-submenu active" : "menu-item has-submenu";
            return (
                <li className={className}>
                    <Link to={menuItem.url} className="menu-link">
                        <i className={menuItem.menuClassIcon}/>
                        <span className="text">{menuItem.title}</span>
                    </Link>
                    <div className="submenu">
                        {
                            menuItem.subMenuItems.map((subMenuItem, index) => {
                                return (
                                    <Route key={index}
                                           path={subMenuItem.url}
                                           exact={subMenuItem.isExact}
                                           children={({match}) => this.renderSubMenuItems(subMenuItem, match)}/>
                                )
                            })
                        }
                    </div>
                </li>
            )
        }

    }

    renderSubMenuItems = (subMenuItem, match) => {
        let className = match ? "active" : "";
        return (
            <Link to={subMenuItem.url} className={className}>
                {subMenuItem.title}
            </Link>
        );
    }

    render() {

        let {menuItem} = this.props;

        return (
            <Route path={menuItem.url}
                   exact={menuItem.isExact}
                   children={({match}) =>  this.renderMenuItem(menuItem, match)}/>
        );
    }



}

export default MenuItem;