import { Interlacing } from "./enum/Interlacing";
import { WeaveType } from "./enum/WeaveType";



function generatePattern(weaveType: WeaveType, underWarp: number, overWarp: number, repeat: number, shift: number) {
    const result: Interlacing[][] = []

    const startingPoint: Interlacing = weaveType.toString().endsWith("0") ? Interlacing.WEFT_UNDER_WARP : Interlacing.WEFT_OVER_WARP
    const oppositeStartingPoint: Interlacing = weaveType.toString().endsWith("0") ? Interlacing.WEFT_OVER_WARP : Interlacing.WEFT_UNDER_WARP
    const sequence = weaveType.toString().endsWith("0") ? underWarp : overWarp
    const oppositeSequence = weaveType.toString().endsWith("0") ? overWarp : underWarp

    let pattern = generateRepeatingPattern(sequence, startingPoint, oppositeSequence, oppositeStartingPoint);
    const firstColumn = generateFirstColumn(pattern)
    // if needed repeat first column
    for (let i = 0; i < repeat; i++) {
        result.push(firstColumn);
    }

    while (pattern.length < shift) {
        pattern.concat(pattern)
    }

    let previousColumn = [...firstColumn]

    while (result.length < 16) {
        //generate shifted column
        const shiftedColumn = generateShiftedColumn(previousColumn, pattern, shift)
        // if needed repeat
        for (let i = 0; i < repeat; i++) {
            result.push(shiftedColumn);
        }
        previousColumn = [...shiftedColumn]
        pattern = shiftPattern(pattern, shift)
    }


    return result
}

function shiftPattern(pattern: Interlacing[], shift: number) {
    for (let i = 0; i < shift; i++) {
        const lastElement = pattern.pop()
        pattern.unshift(lastElement ?? 0)
    }
    return pattern
}

function generateFirstColumn(pattern: Interlacing[]) {
    let column: Interlacing[] = []
    while (column.length < 16) {
        column = column.concat(pattern)
    }
    return column.splice(0, 16)
}

function generateShiftedColumn(previousColumn: Interlacing[], pattern: Interlacing[], shift: number) {
    const shiftedColumn: Interlacing[] = [...previousColumn]
    for (let i = 0; i < shift; i++) {
        shiftedColumn.unshift(pattern[pattern.length - i - 1])
    }

    return shiftedColumn.slice(0, 16)
}

function generateRepeatingPattern(sequence: number, startingPoint: Interlacing, oppositeSequence: number, oppositeStartingPoint: Interlacing) {
    const pattern: Interlacing[] = []
    for (let i = 0; i < sequence; i++) {
        pattern.push(startingPoint);
    }
    for (let i = 0; i < oppositeSequence; i++) {
        pattern.push(oppositeStartingPoint);
    }

    return pattern;
}

function transposePattern(pattern: Interlacing[][]) {
    const maxRowLength = Math.max(...pattern.map(row => row.length));

    const result: Interlacing[][] = []

    for (let i = 0; i < maxRowLength; i++) {
        result[i] = [];
    }

    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[i].length; j++) {
            result[j][i] = pattern[i][pattern.length - j];
        }
    }


    return result

}

export { generatePattern, transposePattern }