import React, {useState} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {
    Button,
    Container, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField
} from "@mui/material";
import axios from "axios";


function App() {

    const [company, setCompany] = useState({})
    const [inn, setInn] = useState("")

    const search = async () => {
        const apiUrl = 'http://localhost:5000/api/company/?inn=' + inn

        axios.get(apiUrl)
            .then((resp) => {
                const fetchedCompany = resp.data;
                setCompany(fetchedCompany);
            })
            .catch((error) => {
                setCompany({"Ошибка": "Нет информации о компании"})
                console.log(error)
            })
    }

    const handleInn = (e) => {
        setInn(e.target.value)
    }

    return (
        <div className="App">
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid xs={8}>
                        <TextField onChange={handleInn} fullWidth={true} label={'ИНН'}/>
                    </Grid>
                    <Grid xs={4}>
                        <Button
                            fullWidth={true}
                            style={{"height": "100%"}}
                            variant="contained"
                            color="success"
                            onClick={search}
                        >
                            Найти
                        </Button>
                    </Grid>
                    <Grid xs={12}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    {Object.keys(company).map((key, index) => (
                                        <TableRow
                                            key={key}
                                        >
                                            <TableCell component="th" scope="row">{key}</TableCell>
                                            <TableCell>{company[key]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
