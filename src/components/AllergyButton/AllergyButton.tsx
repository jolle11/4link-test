import { Dispatch, SetStateAction, useEffect, useState } from "react";
// INTERFACES
interface IProps {
	name: string;
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
}

const AllergyButton = ({ name, isShown, setIsShown }: IProps) => {
	const [toggleUseEffect, setToggleUseEffect] = useState<boolean>(false);

	// THIS USEEFFECT IS USED TO AVOID CONFLICTS WHEN RENDERING
	useEffect(() => {
		setIsShown(!isShown);
	}, [toggleUseEffect]);

	return (
		<button className="button__allergy" onClick={() => setToggleUseEffect(!toggleUseEffect)}>
			{name}
		</button>
	);
};

export default AllergyButton;
