import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav>
			<ul>
				<li><NavLink activeClassName="selected" to="/" exact={true}>Home</NavLink></li>
				{props.submodules.map((submodule, index) => {
					return (
						<li key={index}>
							<NavLink activeClassName="selected" to={submodule.idCode}>{submodule.title}</NavLink></li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav;