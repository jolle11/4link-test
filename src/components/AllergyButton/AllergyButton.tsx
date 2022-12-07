import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
	name: string;
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
}

const AllergyButton = ({ name, isShown, setIsShown }: IProps) => {
	const [toggleUseEffect, setToggleUseEffect] = useState<boolean>(false);
	useEffect(() => {
		console.log("UseEffect");
		setIsShown(!isShown);
	}, [toggleUseEffect]);
	return (
		<button className="button__allergy" onClick={() => setToggleUseEffect(!toggleUseEffect)}>
			{name}
		</button>
	);
};

export default AllergyButton;
