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
    topImagesCon: {

    },
    topImages: {
        margin: "20px 10px",
        height: "340px",
        width: "340px",
        backgroundColor: "#fff",
        borderRadius: "8px",
    },
    newsCon: {
        margin: "20px 10px",
    },
    line: {
        width: "100%",
        height: "5px",
        borderBottom: "solid 1px #aaa",
    },
  }));

const HomeScreen = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            <div className={classes.screen}>
                <div className={classes.topImagesCon}>
                <div className={classes.topImages}></div> 
                </div>
                <div className={classes.newsCon}>
                    <h2>お知らせ</h2>
                    <div className={classes.line}></div>
                    <li>
                        <ul>
                            <h3>お知らせ1</h3>
                            <div className={classes.line}></div>
                        </ul>
                        <ul>
                            <h3>お知らせ2</h3>
                            <div className={classes.line}></div>
                        </ul>
                        <ul>
                            <h3>お知らせ3</h3>
                            <div className={classes.line}></div>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;