import { Box } from "@mui/system";
import * as React from "react";
import { useSelector, useDispatch } from 'react-redux'

import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs, setDoc, doc, query, orderBy, limit } from 'firebase/firestore/lite';
import { Button } from "@mui/material";


const firebaseConfig = {
    apiKey: "AIzaSyAAHKJ2f7SJVr47jQDsCaVWPnmDuA0_nMI",
    authDomain: "react-sample-3ddae.firebaseapp.com",
    projectId: "react-sample-3ddae",
    storageBucket: "react-sample-3ddae.appspot.com",
    messagingSenderId: "45835411269",
    appId: "1:45835411269:web:571c6e4ff390fe6e2ce82c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSnapshots() {

    const col = collection(db, 'database');
    const q = query(col, orderBy("created_time", "desc"), limit(5));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map(doc => doc.data());

    const json = list[0].data;
    window.localStorage.setItem("payload", json);
    alert("Reloading app...");
    window.location.reload();

    return list;
}
async function addSnapshot() {

    const timestamp = String(new Date().getTime());
    const json = window.localStorage.getItem("payload");

    await setDoc(doc(db, "database", timestamp), {
        data: json,
        created_time: timestamp

    });
}
export default function Sync() {
    const payload = useSelector((state) => state)
    const json = JSON.stringify(payload, null, 4);

    window.localStorage.setItem("payload", json);

    return (

        <Box>
            <hr />
            <Button variant="outlined" onClick={(e) => getSnapshots()}>Load</Button>
            &nbsp;
            <Button variant="outlined" onClick={(e) => addSnapshot()}>Save</Button>

            <pre>
                {json}
            </pre>

        </Box>)

}
