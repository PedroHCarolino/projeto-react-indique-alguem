import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@material-ui/core";
// import ClearIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function ClientesListagem() {
  const classes = useStyles();
  const [usuario, setUsuario] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    recuperarUsuario();
  }, []);

  const recuperarUsuario = async () => {
    try {
      setLoading(true);
      const resposta = await axios.get("http://localhost:3001/usuarios");
      setUsuario(resposta.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const preencheTabelaUsuario = () => {
    return usuario.map((usuario) => (
      <tr>
        <TableCell component="th" scope="row">
          {usuario.nomeCompleto}
        </TableCell>
        <TableCell align="center">{usuario.cpfOrCnpj}</TableCell>
        <TableCell align="center">{usuario.email}</TableCell>
        <TableCell align="center">{usuario.phone}</TableCell>
        <TableCell align="right">
          <ButtonGroup aria-label="outlined primary button group">
            <Button
              variant="contained"
              color="primary"
              href={"/perfil" + usuario._id}
            >
              <PersonSearchIcon /> Ver perfil{" "}
            </Button>
            {/* <Button variant="contained" color="secondary" onClick={() => handleDelete(row._id)}><ClearIcon /></Button> */}
          </ButtonGroup>
        </TableCell>
      </tr>
    ));
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <Input
                type="text"
                placeholder="Buscar Profissional"
                // value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                onClick={(e) => recuperarUsuario(e)}
              >
                <SearchIcon />
                Buscar
              </Button>
              <Paper className={classes.paper}>
                <h2>Listagem de Profissionais</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">CPF</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Telefone</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>{preencheTabelaUsuario()}</TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}></Box>
        </Container>
      </main>
    </div>
  );
}
