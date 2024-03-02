import { memo } from "react"

const TableItem = ({ type, text }) => {
    if (type === "header") {
        return <th>{text}</th>
    } else {
        return <td>{text}</td>
    }
}

export default memo(TableItem);