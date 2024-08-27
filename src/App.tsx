
import InputArea from "./components/InputArea";
import Diagram from "./components/Diagram";
import { Container } from "@mui/material";
import { WeaveType } from "./enum/WeaveType";
import { generatePattern, transposePattern } from "./Generator";
import { useState } from "react";
import { Interlacing } from "./enum/Interlacing";

export default function App() {
    const [pattern, setPattern] = useState<Interlacing[][]>([])
    const onGeneratePattern = (weaveType: WeaveType, underWarp: number, overWarp: number, repeat: number, shift: 0 | 1) => {
        const generatedPattern = generatePattern(weaveType, underWarp, overWarp, repeat, shift)
        setPattern(transposePattern(generatedPattern))
    }

    return <Container maxWidth="lg">
        <InputArea onGeneratePattern={onGeneratePattern} />
        <Diagram pattern={pattern} />
    </Container>
}