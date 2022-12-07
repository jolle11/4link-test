import { useEffect, useState } from "react";

import axios from "axios";

import { IMenuItem, IAllergen } from "../../ts";

import "./MenuItem.scss";

interface IProps {
	idProduct: string;
	languageName: string;
	sellPrice: number;
	isShown: boolean;
}

const MenuItem = ({ idProduct, languageName, sellPrice, isShown }: IProps) => {
	const url: string = import.meta.env.VITE_API_URL;
	const enterprise_id: number = import.meta.env.VITE_ENTERPRISE_ID;
	const [allergens, setAllergens] = useState<IAllergen[]>([]);

	useEffect(() => {
		async function getMenuItems() {
			try {
				const { data, status } = await axios.get<IMenuItem[]>(
					`${url}/api/Allergenic/GetAllergenic/${enterprise_id}/${idProduct}`,
					{
						headers: {
							Accept: "application/json",
						},
					},
				);

				let items = Object.values(data);

				setAllergens(items[0]);
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
		<div className="item">
			<h3 className="item__title">
				{idProduct}: {languageName}
			</h3>
			{isShown && (
				<div className="item__allergens">
					{allergens.map((allergen) => (
						<p key={allergen.allergenId} className="item__allergen">
							{allergen.name}&nbsp;
						</p>
					))}
				</div>
			)}
			<p className="item__price">
				Preu: <strong>{sellPrice}€</strong>
			</p>
		</div>
	);
};

export default MenuItem;
