import { Bottle } from './Bottle';
import { IConfig } from './types/config.inteface';

export class GameLogic {
	public complite: boolean;
	public xp: number;
	public coins: number;
	public lvl: number;

	private _config: IConfig;
	private _bottles: Array<Bottle>;

	constructor(config: IConfig) {
		this._config = config;

		this.complite = this._config.compite;
		this.xp = this._config.xp;
		this.coins = this._config.coins;

		this.lvl = this._config.lvl;

		this._bottles = this._config.bottles.map(item => new Bottle(item));
	}

	get bottles(): Array<Bottle> {
		return this._bottles;
	}

	set bottles(bottle: Array<Bottle>) {
		this._bottles = bottle;
	}

	giveAway(givingId: number, hostId: number) {
		if (
			(this._bottles[hostId].colors.length > 3 &&
				this._bottles[hostId].colors[0] !==
					this._bottles[givingId].colors[0]) ||
			givingId === hostId
		) {
			console.log('nope');
			return 0;
		}

		let counter = 0;

		do {
			this._bottles[hostId].addColor(
				this._bottles[givingId].popColor(
					this._bottles[hostId].lastColor(),
					this._bottles[hostId].colors.length
				)
			);

			counter++;

			this._bottles[hostId].closeTheBottle(this._bottles[hostId].lastColor());
		} while (
			this._bottles[givingId].lastColor() ===
				this._bottles[hostId].lastColor() &&
			this._bottles[hostId].colors.length < 4 &&
			counter < 4
		);
	}

	clearBottle(): number {
		let counter: number = 0;

		this._bottles.forEach(item => {
			if (!item.lastColor()) {
				counter++;
			}
		});

		return counter;
	}

	compilteLvl(): boolean {
		if (
			this._bottles.length - this.clearBottle() ===
			this._bottles.filter(item => item.closedBottle).length
		) {
			this.complite = true;

			return true;
		}

		return false;
	}

	reload() {
		this._bottles = this._config.bottles.map(item => new Bottle(item));
	}
}
