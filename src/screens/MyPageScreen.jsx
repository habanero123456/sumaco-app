import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        margin: "0 auto",
        alignItems: "center",
        height: "100%",
        width: "100%",
        flexDirection: 'column',
        
        backgroundColor: "#F0C75A",
        borderTop: "1px solid #aaa",
        borderBottom: "1px solid #aaa",
        overflowY: "hidden",
    },
    screen: {
        height: "100%",
        overflowY: "scroll",
    },
  }));

const MyPageScreen = () => {
  const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.screen}>
                mypage!
            </div>
        </div>
    )
}

export default MyPageScreen;