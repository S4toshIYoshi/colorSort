import { useState, useEffect, useMemo } from 'react';
import { GameLogic } from '../../../service/game/logic/Game.ts';
import style from './Game.module.scss';
import clsx from 'clsx';
import { TfiReload } from 'react-icons/tfi';
import { Link, Params, useParams } from 'react-router-dom';
import { config } from '../../../data/lvls.ts';

const Game = () => {
	const ParamId: Params<string> = useParams();

	const [select, setSelect] = useState<Array<number>>([]);

	const [popup, setPopup] = useState(false);

	const [loadNewLvl, setLoadNewlvl] = useState<Array<string>>(['1']);

	const game = useMemo(() => {
		return new GameLogic(config[ParamId.id ? ParamId.id - 1 : 0]);
	}, [loadNewLvl]);

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
						<Link to='/' className={style.back}>
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

			{popup && (
				<div className={style.popup}>
					<div className={style.menu}>
						<div className={style.popuptitle}>Уровень {game.lvl} пройден!</div>
						<div className={style.popupButtons}>
							<Link
								to={`/game/${parseInt(ParamId.id) + 1}`}
								onClick={() => {
									setPopup(false);
									setLoadNewlvl([...loadNewLvl, ParamId.id]);
								}}
							>
								Далее
							</Link>
							<Link to='/'>В меню</Link>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Game;
