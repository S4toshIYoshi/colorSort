import { useState, useEffect, useMemo } from 'react';
import { GameLogic } from '../../../service/game/logic/Game.ts';
import style from './Game.module.scss';
import clsx from 'clsx';
import { TfiReload } from 'react-icons/tfi';
import { Link, Params, useParams } from 'react-router-dom';
import { config } from '../../../data/lvls.ts';
import PopupEndlvl from '../popups/popupEndLvl/PopupEndlvl.tsx';
import { links } from '../../../data/links.ts';

const Game = () => {
	const ParamId: Params<string> = useParams();

	const [select, setSelect] = useState<Array<number>>([]);

	const [popup, setPopup] = useState(false);

	const game = useMemo(() => {
		if (config[ParamId.id ? parseInt(ParamId.id) - 1 : 0]) {
			return new GameLogic(config[ParamId.id ? parseInt(ParamId.id) - 1 : 0]);
		}
		return new GameLogic(config[0]);
	}, [popup]);

	useEffect(() => {
		if (select.length >= 2) {
			game.giveAway(select[0], select[1]);
			setSelect([]);
		}

		if (game.compilteLvl()) {
			setPopup(true);
		}
	}, [select]);

	//setInterval(() => console.log(game.compilteLvl()), 1000);

	return (
		<section className={style.container}>
			<div className={style.game}>
				<div className={style.stats}>
					<div className={style.buttons}>
						<Link to={links[1]} className={style.back}>
							Назад
						</Link>
						<div className={style.rebase} onClick={() => location.reload()}>
							<TfiReload />
						</div>
					</div>

					<div className={style.lvl}>Уровень {game.lvl}</div>
				</div>

				<div className={style.field}>
					{game.bottles.map((el, idx) => (
						<span
							className={clsx(
								style.colb,
								select[0] === idx ? style.select : ''
							)}
							key={idx}
							onClick={() => setSelect([...select, idx])}
						>
							{el.colors.map((el, idx) => (
								<div
									className={clsx(style.color, el ? style[el] : '')}
									key={idx}
								></div>
							))}
						</span>
					))}
				</div>
			</div>

			{popup && <PopupEndlvl id={game.lvl} setPopup={setPopup} />}
		</section>
	);
};

export default Game;
