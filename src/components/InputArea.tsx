import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { WeaveType } from "../enum/WeaveType";

export default function InputArea(props: { onGeneratePattern: (weaveType: WeaveType, underWarp: number, overWarp: number, repeat: number, shift: number) => void }) {
    const { onGeneratePattern } = props;

    const [weaveType, setWeaveType] = useState('')
    const [underWarp, setUnderWarp] = useState('')
    const [overWarp, setOverWarp] = useState('')
    const [repeat, setRepeat] = useState('')
    const [shift, setShift] = useState('')
    const [isValid, setIsValid] = useState(true)


    const generatePattern = () => {
        validateValues()
        if (isValid) {
            onGeneratePattern(weaveType as unknown as WeaveType,
                Number.parseInt(underWarp),
                Number.parseInt(overWarp),
                Number.parseInt(repeat),
                Number.parseInt(shift))
        }
    }


    const validateValues = () => {
        setIsValid(weaveType in WeaveType
            && !isNaN(Number.parseInt(underWarp))
            && !isNaN(Number.parseInt(overWarp))
            && !isNaN(Number.parseInt(repeat))
            && !isNaN(Number.parseInt(shift)))
    }

    return <Container>
        <Box component="center" sx={{ p: 2 }}>
            <TextField id="weave-type" label="Weave Type" variant="standard" onChange={(event) => setWeaveType(event.target.value)} />
            <TextField id="lfiting" label="Under warp" variant="standard" onChange={(event) => setUnderWarp(event.target.value)} />
            <TextField id="lowering" label="Over warp" variant="standard" onChange={(event) => setOverWarp(event.target.value)} />
            <TextField id="repeat" label="Repeat" variant="standard" onChange={(event) => setRepeat(event.target.value)} />
            <TextField id="shift" label="Shift" variant="standard" onChange={(event) => setShift(event.target.value)} />
        </Box>
        <Box component="center" alignItems="center">
            <Button variant="contained" onClick={generatePattern}>Generate</Button>
        </Box>
        {!isValid && <Box component="center" sx={{ color: "red" }} >
            Some values are not correct!
        </Box>}

    </Container >
}