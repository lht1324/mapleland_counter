import { memo } from "react"

const TableRow = ({ className, children }) => {
    return <tr className={className}>
        {children}
    </tr>
}

TableRow.defaultProps = {
    className: "default",
    children: <td></td>
}

export default memo(TableRow);