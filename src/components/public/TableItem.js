import { memo } from "react"

const TableItem = ({ rowspan, type, text, style }) => {
    if (type === "header") {
        if (rowspan !== '0') {
            return <th rowSpan={rowspan} style={style}>{text}</th>
        } else {
            return <th style={style}>{text}</th>
        }
    } else {
        return <td style={style}>{text}</td>
    }
}

TableItem.defaultProps = {
    type: "",
    text: "",
    rowspan: '0',
    style: {}
}

export default memo(TableItem);