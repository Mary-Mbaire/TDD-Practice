import { solveSudoku, isSafe, N } from "../src/index.js";

describe("Sudoku Solver", () => {
	test("isSafe should return false for unsafe placement in row", () => {
		const grid = [
			[3, 0, 6, 5, 0, 8, 4, 0, 0],
			[5, 2, 0, 0, 0, 0, 0, 0, 0],
			[0, 8, 7, 0, 0, 0, 0, 3, 1],
			[0, 0, 3, 0, 1, 0, 0, 8, 0],
			[9, 0, 0, 8, 6, 3, 0, 0, 5],
			[0, 5, 0, 0, 9, 0, 6, 0, 0],
			[1, 3, 0, 0, 0, 0, 2, 5, 0],
			[0, 0, 0, 0, 0, 0, 0, 7, 4],
			[0, 0, 5, 2, 0, 6, 3, 0, 0],
		];
		expect(isSafe(grid, 0, 1, 3)).toBe(false);
	});

	test("isSafe should return true for safe placement", () => {
		const grid = [
			[3, 0, 6, 5, 0, 8, 4, 0, 0],
			[5, 2, 0, 0, 0, 0, 0, 0, 0],
			[0, 8, 7, 0, 0, 0, 0, 3, 1],
			[0, 0, 3, 0, 1, 0, 0, 8, 0],
			[9, 0, 0, 8, 6, 3, 0, 0, 5],
			[0, 5, 0, 0, 9, 0, 6, 0, 0],
			[1, 3, 0, 0, 0, 0, 2, 5, 0],
			[0, 0, 0, 0, 0, 0, 0, 7, 4],
			[0, 0, 5, 2, 0, 6, 3, 0, 0],
		];
		expect(isSafe(grid, 0, 1, 4)).toBe(false);
	});

	test("solveSudoku should solve the puzzle", () => {
		const grid = [
			[3, 0, 6, 5, 0, 8, 4, 0, 0],
			[5, 2, 0, 0, 0, 0, 0, 0, 0],
			[0, 8, 7, 0, 0, 0, 0, 3, 1],
			[0, 0, 3, 0, 1, 0, 0, 8, 0],
			[9, 0, 0, 8, 6, 3, 0, 0, 5],
			[0, 5, 0, 0, 9, 0, 6, 0, 0],
			[1, 3, 0, 0, 0, 0, 2, 5, 0],
			[0, 0, 0, 0, 0, 0, 0, 7, 4],
			[0, 0, 5, 2, 0, 6, 3, 0, 0],
		];
		const solution = [
			[3, 1, 6, 5, 7, 8, 4, 9, 2],
			[5, 2, 9, 1, 3, 4, 7, 6, 8],
			[4, 8, 7, 6, 2, 9, 5, 3, 1],
			[2, 6, 3, 4, 1, 5, 9, 8, 7],
			[9, 7, 4, 8, 6, 3, 1, 2, 5],
			[8, 5, 1, 7, 9, 2, 6, 4, 3],
			[1, 3, 8, 9, 4, 7, 2, 5, 6],
			[6, 9, 2, 3, 5, 1, 8, 7, 4],
			[7, 4, 5, 2, 8, 6, 3, 1, 9],
		];

		expect(solveSudoku(grid)).toBe(true);
		expect(grid).toEqual(solution);

		for (let i = 0; i < N; i++) {
			const row = new Set();
			const col = new Set();
			const box = new Set();

			for (let j = 0; j < N; j++) {
				row.add(grid[i][j]);
				col.add(grid[j][i]);
				box.add(
					grid[3 * Math.floor(i / 3) + Math.floor(j / 3)][
					3 * (i % 3) + (j % 3)
					],
				);
			}

			expect(row.size).toBe(N);
			expect(col.size).toBe(N);
			expect(box.size).toBe(N);
		}
	});

	test("solveSudoku should return false for an unsolvable puzzle", () => {
		const grid = [
			[1, 1, 6, 5, 0, 8, 4, 0, 0],
			[5, 2, 0, 0, 0, 0, 0, 0, 0],
			[0, 8, 7, 0, 0, 0, 0, 3, 1],
			[0, 0, 3, 0, 1, 0, 0, 8, 0],
			[9, 0, 0, 8, 6, 3, 0, 0, 5],
			[0, 5, 0, 0, 9, 0, 6, 0, 0],
			[1, 3, 0, 0, 0, 0, 2, 5, 0],
			[0, 0, 0, 0, 0, 0, 0, 7, 4],
			[0, 0, 5, 2, 0, 6, 3, 0, 0],
		];

		expect(solveSudoku(grid)).toBe(true);
	});
});
``;