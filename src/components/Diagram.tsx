import { Container, Table, TableBody, TableRow } from "@mui/material";
import Cell from "./Cell";
import { Interlacing } from "../enum/Interlacing";


export default function Diagram(props: { pattern: Interlacing[][] }) {
    const { pattern } = props;
    const generateCells = (row: Interlacing[], rowNumber: number) => {
        return row.map((cell, i) => {
            return <Cell key={`${rowNumber}_${i}`} filled={cell === 1} />
        })
    }
    const generateRows = pattern.map((row, index) => {
        return <TableRow key={`row_${index}`}>
            {generateCells(row, index)}
        </TableRow>
    })

    return <Container>
        <Table>
            <TableBody>
                {generateRows}
            </TableBody>
        </Table>
    </Container>
}