import { Container, Table, TableBody, TableRow } from "@mui/material";
import Cell from "./Cell";


export default function Diagram() {
    return <Container>
        <Table>
            <TableBody>
                <TableRow>
                    <Cell filled={true} />
                    <Cell />
                    <Cell />
                    <Cell />
                </TableRow>
                <TableRow>
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </TableRow>
                <TableRow>
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </TableRow>
                <TableRow>
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </TableRow>
            </TableBody>
        </Table>
    </Container>
}