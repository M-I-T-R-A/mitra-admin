import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import DataTable from 'react-data-table-component';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mediaRoot: {
        maxWidth: 345,
    }
}));

export default function Tab4({ data }) {
    const classes = useStyles();
    let text;
    
    const itemData = data.wareHouse.itemsSet;
    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            cell: row => <div><div style={{ fontWeight: 700 }}>{row.name}</div></div>,
        },
        {
            name: 'Unit',
            selector: 'unit',
            sortable: true,
        },
        {
            name: 'Category', 
            selector: 'category',
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: 'quantity',
            sortable: true,
        },
        {
            name: 'Price',
            selector: 'pricePerUnit',
            sortable: true,
            cell: row => <div><div style={{ color: 'red' }}>{row.pricePerUnit}</div></div>,
        },
    ];
    const AnyReactComponent = ({ text }) => <RoomRoundedIcon />

    if (data.haveCurrentLoan) {
        text = <p>having loan</p>;
    } else {
        text = <p>Currently no loan is being sactioned or being applied.</p>;
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <b>Shop Information</b>
                    <br></br><br></br>
                    <b>Name: </b> {data.shopName} <br></br>
                    <b>GSTIN: </b> {data.gstin} <br></br>
                    <b>Phone Number: </b> {data.phoneNumber} <br></br>
                    <b>OwnerShip: </b> {data.ownership} <br></br>
                    <b>Rating: </b> {data.rating != null ? data.rating : 0 } ⭐ <br></br>
                    <b>Type: </b> {data.type} <br></br>
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <b>Shop Locality</b><br></br><br></br>
                    <center>
                        <Card className={classes.mediaRoot}>
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyAgD7EihVjE-0aMM_hHh7khN3KN_Tx_75g" }}
                                defaultCenter={
                                    {
                                        lat: data.shopAddress.latitude,
                                        lng: data.shopAddress.longitude
                                    }
                                }
                                defaultZoom={15}
                            >
                            <AnyReactComponent 
                                lat={data.shopAddress.latitude}
                                lng={data.shopAddress.longitude}
                                text="Shop"
                            />
                            </GoogleMapReact>
                        </div>
                        </Card></center>
                </Paper>

            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <b>Shop Address</b><br></br><br></br>
                    <b>First Line: </b> {data.shopAddress.firstLine} <br></br>
                    <b>Second Line: </b> {data.shopAddress.secondLine} <br></br>
                    <b>City: </b> {data.shopAddress.city} <br></br>
                    <b>State: </b> {data.shopAddress.state} <br></br>
                    <b>Pin Code: </b> {data.shopAddress.pincode} <br></br>
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <b>Electricity Bill</b><br></br><br></br>
                    <b>Electricity Bill Amount: ₹{data.electricityAmount}</b>
                    <br></br><br></br>
                    <center>
                        <Card className={classes.mediaRoot}>
                            <CardMedia
                                className={classes.media}
                                image={data.electricityBillImageUrl}
                                title="Bill"
                            />
                        </Card></center>
                </Paper>
                <Paper className={classes.paper}>
                    <center>
                        <DataTable
                            title="Items"
                            columns={columns}
                            data={itemData}
                        />
                    </center>
                </Paper>
            </Grid>
        </Grid>
    );
}