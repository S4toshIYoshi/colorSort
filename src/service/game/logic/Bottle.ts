export class Bottle {
	private _colors: Array<string | null>;
	public closedBottle: boolean;

	constructor(colors: Array<string | null>) {
		this._colors = [...colors];
		this.closedBottle = false;
	}

	get colors(): Array<string | null> {
		return this._colors;
	}

	lastColor(): string | null {
		return this._colors[0];
	}

	addColor(color: string | null): void {
		if (
			(color === this._colors[0] || this._colors.length < 1) &&
			this._colors.length < 4
		) {
			this._colors.unshift(color);
		}
	}

	popColor(
		colorAnotherBottle: string | null,
		lengthAnotherBottle: number
	): string | null {
		let result: string | undefined | null;
		if (colorAnotherBottle === this._colors[0] || !colorAnotherBottle) {
			if (lengthAnotherBottle < 4) {
				result = this._colors.shift();
			}
		}

		return result ? result : null;
	}

	closeTheBottle(color: string | null): void {
		if (
			this._colors.length === 4 &&
			this._colors.filter(el => el === color).length === 4
		) {
			this.closedBottle = true;
		}
	}
}
