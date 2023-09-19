import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './PopupEndLvl.module.scss';

type Props = {
	id: number;
	setPopup?: Function;
};

const PopupEndlvl: FC<Props> = ({ id, setPopup }) => {
	return (
		<div className={style.popup}>
			<div className={style.menu}>
				<div className={style.popuptitle}>Уровень {id} пройден!</div>
				<div className={style.popupButtons}>
					<Link
						to={`/colorSort/game/${id + 1}`}
						onClick={() => {
							if (setPopup) setPopup(false);
						}}
					>
						Далее
					</Link>
					<Link to='/colorSort'>В меню</Link>
				</div>
			</div>
		</div>
	);
};

export default PopupEndlvl;
