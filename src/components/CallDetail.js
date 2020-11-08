import React, {useEffect, useState} from 'react';
import {getCallDetail, updateCall} from "../services/api";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CallIcon from "@material-ui/icons/Call";
import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";
import CallReceivedRoundedIcon from "@material-ui/icons/CallReceivedRounded";
import Button from "@material-ui/core/Button";
import '../css/CallDetail.css'

const CallDetail = ({match, history}) => {
  const [callDetail, setCallDetail] = useState([]);
  const [values, setValues] = useState({isArchived: false});

  useEffect(() => {
    const getData = async() => {
      const call = await getCallDetail(match.params.callId);
      if (call.is_archived === true) {
        setValues({isArchived: true})
      }
      return setCallDetail(call);
    };
    getData();
  }, []);

  const handleCheckBoxChange = (event) => {
    const isArchived = event.target.checked;
    const id = match.params.callId;
    setValues({isArchived: isArchived});
    updateCall(id, {is_archived: isArchived}).then(() => history.push({pathname: '/'}))
  };

  const date = new Date(callDetail.created_at);
  const formattedDate = date.toDateString();
  const formattedTime = date.toLocaleTimeString('fr-FR');

  const handleRedirect = () => history.push({pathname: '/'});

  return (
    <div className="detailContainer">
      <Button onClick={() => handleRedirect()} className="button">
        Back to List
      </Button>

      {callDetail && (
        <div className="detail">
          <Card>
            <CardContent>
              <Typography variant="h5">
                {callDetail.from}
              </Typography>
              <Typography variant="h6">
                {callDetail.to ? `To: ${callDetail.to}` : `To: unknown`}
              </Typography>
              <Typography variant="body2">
                {formattedDate}
              </Typography>
              <Typography variant="body1" >
                {formattedTime}
              </Typography>
              <Typography>
                <CallIcon />
                {callDetail.direction === 'outbound' ?
                  <CallMadeRoundedIcon fontSize="small" style={callDetail.call_type === 'answered' ? {color: 'green'} : {color: 'red'}} /> :
                  <CallReceivedRoundedIcon fontSize="small" style={callDetail.call_type === 'answered' ? {color: 'green'} : {color: 'red'}} />
                }
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {`Duration: ${callDetail.duration} seconds`}
              </Typography>
              <Typography variant="body2">
                {`Via: ${callDetail.via}`}
              </Typography>
              <FormControlLabel
                control={<Checkbox checked={values.isArchived} onChange={handleCheckBoxChange} name='isArchived' />}
                label="Archive"
                labelPlacement="start"
              />
            </CardContent>
          </Card>
        </div>

      )}

    </div>
  )
};

export default CallDetail
