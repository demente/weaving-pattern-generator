
import InputArea from "./components/InputArea";
import Diagram from "./components/Diagram";
import { Container } from "@mui/material";
import { WeaveType } from "./enum/WeaveType";
import { generatePattern } from "./Generator";

export default function App() {
    const onGeneratePattern = (weaveType: WeaveType, underWarp: number, overWarp: number, repeat: number, shift: 0 | 1) => {
        generatePattern(weaveType, underWarp, overWarp, repeat, shift)
    }

    return <Container maxWidth="lg">
        <InputArea onGeneratePattern={onGeneratePattern} />
        <Diagram />
    </Container>
}