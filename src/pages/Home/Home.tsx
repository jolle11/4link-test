import { useEffect, useState } from "react";
import axios from "axios";

import { IMenuItem } from "../../ts";

import { AllergyButton, MenuItem } from "../../components";
// STYLE
import "./Home.scss";

const Home = () => {
	const url: string = import.meta.env.VITE_API_URL;
	const lang: string = import.meta.env.VITE_LANG_CAT;
	const enterprise_code: number = import.meta.env.VITE_ENTERPRISE_CODE;

	const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
	const [isShown, setIsShown] = useState<boolean>(false);

	useEffect(() => {
		async function getMenuItems() {
			try {
				const { data, status } = await axios.get<IMenuItem[]>(
					`${url}/api/MenuType/GetMenuList/${lang}/${enterprise_code}`,
					{
						headers: {
							Accept: "application/json",
						},
					},
				);

				let items = Object.values(data);

				setMenuItems(items[0]);
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.log("error message: ", error.message);
					return error.message;
				} else {
					console.log("unexpected error: ", error);
					return "An unexpected error occurred";
				}
			}
		}
		getMenuItems();
	}, []);
	return (
		<div className="menu">
			<h1 className="menu__title">MENÚ SUCCULENT</h1>
			<div className="menu__button">
				<AllergyButton
					name={`${isShown ? "OCULTAR AL·LÈRGIES" : "MOSTRAR AL·LÈRGIES"}`}
					isShown={isShown}
					setIsShown={setIsShown}
				/>
			</div>
			<div className="menu__items">
				{menuItems.map((menuItem) => (
					<MenuItem
						key={menuItem.idProduct}
						idProduct={menuItem.idProduct}
						languageName={menuItem.languageName}
						pax={menuItem.pax}
						canGrow={menuItem.canGrow}
						sellPrice={menuItem.sellPrice}
						isShown={isShown}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
