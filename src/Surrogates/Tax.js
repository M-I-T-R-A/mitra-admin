import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function Tax({ data }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders" width="100%">
                {data.map(
                    tax => <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>
                         <b>FY     {tax.date.substr(0,4)}-{parseInt(tax.date.substr(0,4))+1}</b>
                         <span style={{color: "white"}}>___________</span>
                         <span style={{textAlign: "right", leftPadding: "50px"}} ><a href={tax.itrDocumentUrl} target="_blank">Document</a></span>
                        </ListItemText>
                        <Divider />
                    </ListItem>
                )}
            </List>
        </div>
    );
}