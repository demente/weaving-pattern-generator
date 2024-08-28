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
    while (firstColumn.length < 16) {
        firstColumn = firstColumn.concat(firstColumn)
    }
    firstColumn = firstColumn.splice(0, 16)

    // if needed repeat first column

    for (let i = 0; i < repeat; i++) {
        result.push(firstColumn)
    }

    let previousColumn = firstColumn

    while (result.length < 16) {

        const shiftedColumn: Interlacing[] = generateShiftedColumn(startingPoint, previousColumn, shift, sequence, oppositeSequence)
        for (let i = 0; i < repeat; i++) {
            result.push(shiftedColumn)
        }
        previousColumn = shiftedColumn

    }
    return result
}

function generateShiftedColumn(startingPoint: Interlacing, previousColumn: Interlacing[], shift: number, sequence: number, oppositeSequence: number) {
    const oppositePoint = startingPoint === Interlacing.WEFT_OVER_WARP ? Interlacing.WEFT_UNDER_WARP : Interlacing.WEFT_OVER_WARP
    let shiftedColumn: Interlacing[] = []
    if (shift === 0) { //if shift is 0, it's opposite binding
        for (let i = 0; i < sequence; i++) {
            shiftedColumn.push(oppositePoint)
        }
    } else {
        const pointOldPosition = previousColumn.indexOf(startingPoint)
        const pointNewPosition = pointOldPosition + shift

        if (pointNewPosition < oppositeSequence) {
            for (let i = 0; i < pointNewPosition; i++) {
                shiftedColumn.push(oppositePoint)
            }
        } else {

            for (let i = 0; i < oppositeSequence - pointOldPosition; i++) {
                shiftedColumn.unshift(oppositePoint)
            }
            if (shiftedColumn.length < shift) {
                for (let i = 0; i < sequence; i++) {
                    shiftedColumn.unshift(startingPoint)
                }

                const currentLength = shiftedColumn.length
                for (let i = 0; i < shift - currentLength; i++) {
                    shiftedColumn.unshift(oppositePoint)
                }
            }
        }
    }
    shiftedColumn = shiftedColumn.concat(previousColumn)
    shiftedColumn = shiftedColumn.splice(0, 16)
    return shiftedColumn
}

function transposePattern(pattern: Interlacing[][]) {
    const maxRowLength = Math.max(...pattern.map(row => row.length));

    const result: Interlacing[][] = []

    for (let i = 0; i < maxRowLength; i++) {
        result[i] = [];
    }

    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[i].length; j++) {
            result[j][i] = pattern[i][j];
        }
    }

    return result

}

export { generatePattern, transposePattern }