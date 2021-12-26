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
        width: "100%",
        overflowY: "scroll",
        // alignItems: "center",
    },
    boxtabCon: {
        margin: "10px 0",
        height: "60px",
        width: "100%",
        borderBottom: "1px solid #aaa",
    },
    boxCon: {
        margin: "10px 0",
        width: "100%",
        borderBottom: "1px solid #aaa",
        display: "flex",
        flexDirection: 'column',
    },
    box: {
        margin: "10px auto",
        height: "260px",
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    boxtext: {
        fontSize: "24px",
    },
    dateSt: {
        fontSize: "20px",
        margin: "10px",
        alignSelf: "end",
    },
  }));

const BoxScreen = () => {
  const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.screen}>
                <div className={classes.boxtabCon}>

                </div>
                <div className={classes.boxCon}>
                    <div className={classes.box}>
                        <div className={classes.boxtext}>箱内画像2</div>
                    </div>
                    <div className={classes.dateSt}>2021/12/25 15:22</div>
                </div>
                <div className={classes.boxCon}>
                    <div className={classes.box}>
                        <div className={classes.boxtext}>箱内画像2</div>
                    </div>
                    <div className={classes.dateSt}>2021/12/25 15:15</div>
                </div>
            </div>
        </div>
    )
}

export default BoxScreen;