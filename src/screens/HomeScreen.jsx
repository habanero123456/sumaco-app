import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        margin: "0 auto",
        alignItems: "center",
        height: "100%",
        // height: "700px",
        width: "100%",
        flexDirection: 'column',
        // justifyContent: "space-between",
        
        backgroundColor: "#F0C75A",
        borderTop: "1px solid #aaa",
        borderBottom: "1px solid #aaa",
        overflowY: "hidden",
    },
    screen: {
        height: "100%",
        overflowY: "scroll",
    },
    topImagesCon: {
        margin: "10px",
        height: "340px",
        width: "340px",
        backgroundColor: "#fff",
        borderRadius: "8px",
    }
  }));

const HomeScreen = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            <div className={classes.screen}>
                home!
                <div className={classes.topImagesCon}></div>
                <div className={classes.topImagesCon}></div>
                <div className={classes.topImagesCon}></div>
            </div>
        </div>
    )
}

export default HomeScreen;