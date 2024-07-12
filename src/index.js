const UNASSIGNED = 0;
const N = 9;

export function isSafe(grid, row, col, num) {
	for (let x = 0; x < N; x++) {
		if (grid[row][x] === num || grid[x][col] === num) {
			return false;
		}
	}

	const startRow = row - (row % 3);
	const startCol = col - (col % 3);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (grid[i + startRow][j + startCol] === num) {
				return false;
			}
		}
	}

	return true;
}

export function solveSudoku(grid) {
	let row = -1;
	let col = -1;
	let isEmpty = true;

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (grid[i][j] === UNASSIGNED) {
				row = i;
				col = j;
				isEmpty = false;
				break;
			}
		}
		if (!isEmpty) {
			break;
		}
	}

	if (isEmpty) {
		return true;
	}

	for (let num = 1; num <= N; num++) {
		if (isSafe(grid, row, col, num)) {
			grid[row][col] = num;
			if (solveSudoku(grid)) {
				return true;
			}
			grid[row][col] = UNASSIGNED;
		}
	}

	return false;
}

export function printGrid(grid) {
	for (let r = 0; r < N; r++) {
		let row = "";
		for (let d = 0; d < N; d++) {
			row += grid[r][d];
			row += " ";
		}
		console.log(row);
	}
}
