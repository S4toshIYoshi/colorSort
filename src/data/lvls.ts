import { IConfig } from '../service/game/logic/types/config.inteface';

export const config: Array<IConfig> = [
	{
		lvl: 1,
		bottles: [
			['yellow', 'yellow'],
			['yellow', 'yellow'],
		],
		xp: 200,
		coins: 10,
		compite: false,
	},
	{
		lvl: 2,
		bottles: [
			['orange', 'orange'],
			['blue', 'blue', 'blue'],
			['blue', 'orange', 'orange'],
		],
		xp: 200,
		coins: 10,
		compite: false,
	},
	{
		lvl: 3,
		bottles: [
			['blue', 'blue', 'orange', 'green'],
			['orange', 'orange', 'blue', 'orange'],
			['green', 'green', 'green', 'blue'],
			[],
			[],
		],
		xp: 200,
		coins: 10,
		compite: false,
	},
	{
		lvl: 4,
		bottles: [
			['orange', 'green', 'blue', 'blackgreen'],
			['brown', 'brown', 'blackgreen', 'blackgreen'],
			['green', 'orange', 'green', 'blackgreen'],
			['brown', 'orange', 'brown', 'green'],
			['orange', 'blue', 'blue', 'blue'],
			[],
			[],
		],
		xp: 200,
		coins: 10,
		compite: false,
	},
	{
		lvl: 5,
		bottles: [
			['gray', 'purple', 'green', 'gray'],
			['gray', 'gray', 'orange', 'orange'],
			['green', 'purple', 'yellow', 'orange'],
			['blue', 'orange', 'yellow', 'yellow'],
			['blue', 'blue', 'blue', 'purple'],
			['green', 'purple', 'green', 'yellow'],
			[],
			[],
		],
		xp: 200,
		coins: 10,
		compite: false,
	},
];
