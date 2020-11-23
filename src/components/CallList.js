import React, {useEffect, useState} from 'react';
import {getCallList, resetList} from '../services/api';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CallIcon from '@material-ui/icons/Call';
import CallMadeRoundedIcon from '@material-ui/icons/CallMadeRounded';
import CallReceivedRoundedIcon from '@material-ui/icons/CallReceivedRounded';
import Badge from "@material-ui/core/Badge";
import {makeStyles} from "@material-ui/core/styles";
import '../css/CallList.css'
import Typography from "@material-ui/core/Typography";

const CallList = ({history}) => {
  const [callList, setCallList] = useState([]);
  const [filter, setFilter] = useState('calls');
  const [reset, setReset] = useState(false)

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline'
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const getData = async() => {

      const calls = await getCallList();
      if (calls && calls.length) {
        if (filter === 'calls') {
          const filteredCalls = calls.filter((call) => call.is_archived === false);
          return setCallList(filteredCalls);
        }
        if (filter === 'archived') {
          const filteredCalls = calls.filter((call) => call.is_archived === true);
          return setCallList(filteredCalls);
        }
      }
      return [];
    };
    getData();
  }, [filter, reset]);

  const redirect = (id) => history.push({pathname: `/${id}`, callId: id});

  const toggleFilter = (filter) => {
    setFilter(filter);
  };

  const handleReset = () => {
    return resetList().then(() => setReset(!reset))
  };
  return (
    <div className="listContainer">
      <ButtonGroup className="buttons">
        <Button color={filter === 'calls' ? 'primary' : 'default'} onClick={() => toggleFilter('calls')}>Activity</Button>
        <Button color={filter === 'archived' ? 'primary' : 'default'} onClick={() => toggleFilter('archived')}>Archived</Button>
      </ButtonGroup>

      <div className="callList">
        {!callList || callList.length === 0 && (
          <div>No Calls</div>
        )}
        <List className={classes.root}>
          {
            callList && callList.length > 0 && callList.map((call, index) => {
              const date = new Date(call.created_at);
              const formattedDate = date.toDateString();
              const formattedTime = date.toLocaleTimeString('fr-FR');
              return (
                <div key={`callItem${index}`}>
                  <Typography color="textSecondary">
                    {formattedDate}
                  </Typography>
                  <ListItem className="item" onClick={() => redirect(call.id)}>
                    <CallIcon />
                    {call.direction === 'outbound' ?
                      <CallMadeRoundedIcon fontSize="small" style={call.call_type === 'answered' ? {color: 'green'} : {color: 'red'}} /> :
                      <CallReceivedRoundedIcon fontSize="small" style={call.call_type === 'answered' ? {color: 'green'} : {color: 'red'}} />
                    }
                    <div className="itemSection">
                      <Typography variant="body1" >
                        {call.from}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {call.to ? `To: ${call.to}` : `To: unknown`}
                      </Typography>
                    </div>
                    <div className="itemSection">
                      {formattedTime}
                    </div>

                  </ListItem>
                </div>

              )
            }).sort((call1, call2) => {
              const call1Date = new Date(call1.created_at);
              const formattedDate1 = call1Date.toDateString();
              const call2Date = new Date(call2.created_at);
              const formattedDate2 = call2Date.toDateString();
              return formattedDate1.localeCompare(formattedDate2)
            })
          }
        </List>

      </div>
        {callList.length >= 1 && (
          <div className="footer">
            <Badge badgeContent={callList.length} color="error">
              <CallIcon />
            </Badge>
            <Button onClick={() => handleReset()}>
              Reset
            </Button>
          </div>
        )}
      </div>
  )
};
export default CallList;
