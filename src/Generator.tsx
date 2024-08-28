import { Interlacing } from "./enum/Interlacing";
import { LIFTED_START, WeaveType } from "./enum/WeaveType";



function generatePattern(weaveType: WeaveType, underWarp: number, overWarp: number, repeat: number, shift: number) {
    const result: Interlacing[][] = []
    let firstColumn: Interlacing[] = []

    const startingPoint: Interlacing = LIFTED_START.includes(weaveType) ? Interlacing.WEFT_UNDER_WARP : Interlacing.WEFT_OVER_WARP
    const oppositeStartingPoint: Interlacing = LIFTED_START.includes(weaveType) ? Interlacing.WEFT_OVER_WARP : Interlacing.WEFT_UNDER_WARP
    const sequence = LIFTED_START.includes(weaveType) ? underWarp : overWarp
    const oppositeSequence = LIFTED_START.includes(weaveType) ? overWarp : underWarp

    // generate first column by starting with either weft under or over warp (based on weave type)
    for (let i = 0; i < sequence; i++) {
        firstColumn.push(startingPoint)
    }
    for (let i = 0; i < oppositeSequence; i++) {
        firstColumn.push(oppositeStartingPoint)
    }
    while (firstColumn.length < 16 + shift * 16) {
        firstColumn = firstColumn.concat(firstColumn)
    }
    let previousColumn = [...firstColumn]

    firstColumn = firstColumn.slice(0, 16)

    // if needed repeat first column

    for (let i = 0; i < repeat; i++) {
        result.push(firstColumn)
    }


    while (result.length < 16) {
        const shiftedColumn: Interlacing[] = previousColumn.slice(shift, previousColumn.length)
        previousColumn = [...shiftedColumn]
        const shiftedShort = [...shiftedColumn].slice(0, 16)
        for (let i = 0; i < repeat; i++) {
            result.push(shiftedShort)
        }
    }
    return result
}

function transposePattern(pattern: Interlacing[][]) {
    const maxRowLength = Math.max(...pattern.map(row => row.length));

    const result: Interlacing[][] = []

    for (let i = 0; i < maxRowLength; i++) {
        result[i] = [];
    }

    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[i].length; j++) {
            result[j][i] = pattern[i][pattern.length - j - 1];
        }
    }


    return result

}

export { generatePattern, transposePattern }