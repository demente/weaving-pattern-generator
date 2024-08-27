import { Interlacing } from "./enum/Interlacing";
import { LIFTED_START, WeaveType } from "./enum/WeaveType";



function generatePattern(weaveType: WeaveType, underWarp: number, overWarp: number, repeat: number, shift: 0 | 1) {
    const shiftedResult: Interlacing[][] = []
    let resultColumn: Interlacing[] = []
    const startingPoint: Interlacing = LIFTED_START.includes(weaveType) ? Interlacing.WEFT_UNDER_WARP : Interlacing.WEFT_OVER_WARP
    const reverseStartingPoint: Interlacing = LIFTED_START.includes(weaveType) ? Interlacing.WEFT_OVER_WARP : Interlacing.WEFT_UNDER_WARP
    const sequence = LIFTED_START.includes(weaveType) ? underWarp : overWarp
    const reverseSequence = LIFTED_START.includes(weaveType) ? overWarp : underWarp

    for (let i = 0; i < sequence; i++) {
        resultColumn.push(startingPoint)
    }

    for (let i = 0; i < reverseSequence; i++) {
        resultColumn.push(reverseStartingPoint)
    }
    while (resultColumn.length < 16) {
        resultColumn = resultColumn.concat(resultColumn)
    }

    resultColumn = resultColumn.splice(0, 16)

    for (let i = 0; i < repeat; i++) {
        shiftedResult.push(resultColumn)
    }


    let shiftedColumn: Interlacing[] = []
    if (shift === 0) {
        for (let i = 0; i < sequence; i++) {
            shiftedColumn.push(reverseStartingPoint)
        }
    } else {
        shiftedColumn.push(startingPoint)
    }
    shiftedColumn = shiftedColumn.concat(resultColumn)

    shiftedColumn = shiftedColumn.splice(0, 16)

    for (let i = 0; i < repeat; i++) {
        shiftedResult.push(shiftedColumn)
    }

    let result: Interlacing[][] = []
    while (result.length < 16) {
        result = result.concat(shiftedResult)
    }



    return result
}

export { generatePattern }