import { Container, Table, TableBody, TableRow } from "@mui/material";
import Cell from "./Cell";
import { Interlacing } from "../enum/Interlacing";


export default function Diagram(props: { pattern: Interlacing[][] }) {
    const { pattern } = props;
    const generateCells = (row: Interlacing[]) => {
        return row.map(cell => {
            return <Cell filled={cell === 1} />
        })
    }
    const generateRows = pattern.map(row => {
        return <TableRow>
            {generateCells(row)}
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