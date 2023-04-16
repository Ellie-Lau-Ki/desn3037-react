import { Box } from "@mui/system";
import * as React from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function Sync() {
    const payload = useSelector((state) => state)
    const json = JSON.stringify(payload, null, 4);

    window.localStorage.setItem("payload", json);

    return (

        <Box>
            <pre>
                {json}
            </pre>

        </Box>)

}
