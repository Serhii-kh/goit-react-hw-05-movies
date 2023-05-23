import { Navigation } from "components/Navigation/Navigation"
import { Wrapper } from "components/Wrapper/Wrapper"
import { Outlet } from "react-router-dom"

export const Layout = () => {
	return (
		<>
			<Wrapper>
				<Navigation />
				<Outlet />
			</Wrapper>
		</>
	)
}