import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import './customStyle.css';



class CryptoTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => response.json())
            .then(data => {
                this.processData(data);
            });
    }

    processData(jsonResponse) {
        var data = []
        var top10 = jsonResponse.sort(function (first, second) {
            return second.percent_change_24h - first.percent_change_24h;
        }).slice(0, 10)
        for (var i = 0; i < 10; i++) {
            data.push({ 'name': top10[i].name, 'percentage': top10[i].percent_change_24h })
        }
        this.setState({ data: data });
    }

    render() {
        const data = this.state.data;
        const TableData = ({ data }) => (
            <>
                {data.map((data) => (
                    <Grid className="Grid" container spacing={1}>
                        <Grid align="left" item xs={10}>
                            <Typography>{data.name}</Typography>
                        </Grid>
                        <Grid  item xs={2}>
                            <Typography>{data.percentage}%</Typography>
                        </Grid>
                    </Grid>
                ))}
            </>
        );
        return (
            <div className="main">
                <Container className="top" maxWidth="sm">
                    <Typography align="center" className="add_padding" variant="h5" component="h2">
                        Top Crypto Gainers (24h)
                    </Typography>
                </Container>
                {data ? <TableData data={data} /> : <CircularProgress className="move_center" />}
            </div>
        );
    }
}

export default CryptoTable;