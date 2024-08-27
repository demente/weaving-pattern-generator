import { TableCell } from "@mui/material";

export default function Cell({ filled = false }) {

    return <TableCell className={filled ? "warpOverWeft" : 'weftOverWarp'} />
}