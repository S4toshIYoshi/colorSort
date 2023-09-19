import style from './Start.module.scss';
import { clsx } from 'clsx';

import { Link } from 'react-router-dom';

const Start = () => {
	return (
		<section className={style.container}>
			<div className={style.menu}>
				<h2 className='title'>Sort bottle</h2>
				<div className={style.buttonsContainer}>
					<div className={clsx('heading', 'disable')}>Продолжить игру</div>
					<Link to='game/1' className={clsx('heading')}>
						Начать игру
					</Link>
					<Link to='levels' className={clsx('heading')}>
						Выбрать уровень
					</Link>
					<Link to='end' className={clsx('heading')}>
						Статистика
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Start;
