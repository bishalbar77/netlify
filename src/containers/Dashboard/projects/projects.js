import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Project extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            projects:[],
            isLoading:false,
            isError:false,
        }
    }

    async componentDidMount() {
        this.setState({isLoading:true})
        const response = await fetch("https://inconnectors.com/api/getProjects");
        if(response.ok) {
            const responseData = await response.json();
            const projects = responseData.data;
            this.setState({projects, isLoading:false});
        } else {
            this.setState({isError:true, isLoading:false})
        }
    }

    renderTableHeader = () => {
        return Object.keys(this.state.projects[0]).map(attr => 
        <th key={attr}>
            {attr.toUpperCase()}
        </th>
        )
    }

    renderTableRows = () => {
        return this.state.projects.map(project => {
            return (
                <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.title}</td>
                    <td>{project.price}</td>
                    <td>{project.created_at}</td>
                    <td></td>
                </tr>
            )
        })
    }
    EnhancedTableToolbar = () => {
        return (
          <Toolbar>
              <Typography className="table-heading" variant="h1" id="tableTitle" component="div">
                Nutrition
              </Typography>
          </Toolbar>
        );
      };

    render() {
        const {projects, isLoading, isError} = this.state
        if(isLoading) {
            return <div>Loading ... </div>
        }
        return projects.length > 0 
        ? (
            <TableContainer component={Paper}>
                <Table className="table-root" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Connector</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.id}>
                        <TableCell component="th" scope="row">
                            {project.title}
                        </TableCell>
                        <TableCell align="right">{project.connector != null ? project.connector.name : `Find One` }</TableCell>
                        <TableCell align="right">{project.validation == null ? `In Progress` : `Converted`}</TableCell>
                        <TableCell align="right">{project.created_at.substring(0, 10)}</TableCell>
                        <TableCell align="right"></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        ) : (
            <div></div>
        );
    }
}

export default Project