import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        // margin: 0,
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
        overflowX: "hidden",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    line: {
        width: "100%",
        height: "5px",
        marginBottom: "5px",
        borderBottom: "solid 1px #aaa",
    },
    accountCon: {
        width: "90%",
        padding: "10px",
    },
    Atitle: {
        // alignSelf: "flex-start",
        fontSize: "16px",
        color: "#666",
        marginLeft: "10px",
    },
    Acontents: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "80px",
    },
    Aimg: {
        width: "50px",
    },
    Aname: {
        fontSize: "24px",
        fontWeight: "600",
    },
    Aedit: {
        color: "#fff",
        fontSize: "20px",
        backgroundColor: "#C5462B",
        borderRadius: "5px",
        padding: "8px 25px"
    },
    settingCon: {
        width: "100%",
    },
    Stext: {
        margin: "12px 20px 6px 20px",
        fontWeight: "600",
    },
  }));

const MyPageScreen = () => {
  const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.screen}>
                <div className={classes.accountCon}>
                    <div className={classes.Atitle}>ユーザーアカウント</div>
                    <div className={classes.Acontents}>
                        <div className={classes.Aimg}></div>
                        <div className={classes.Aname}>山田太郎</div>
                        <div className={classes.Aedit}>編集</div>
                    </div>
                </div>
                <div className={classes.line}></div>
                <div className={classes.accountCon}>
                    <div className={classes.Atitle}>ルームアカウント</div>
                    <div className={classes.Acontents}>
                        <div className={classes.Aimg}></div>
                        <div className={classes.Aname}>山田家</div>
                        <div className={classes.Aedit}>編集</div>
                    </div>
                    <div className={classes.line}></div>
                    <div className={classes.Stext}>ログイン中のユーザー</div>
                    <div className={classes.line}></div>
                    <div className={classes.Stext}>スマコの設定</div>
                    <div className={classes.line}></div> 
                    <div className={classes.Stext}>スマコの登録</div>
                </div>
                <div className={classes.line}></div>
                <div className={classes.settingCon}>
                    <div className={classes.Stext}>ルームを切り替える</div>
                    <div className={classes.line}></div>
                    <div className={classes.Stext}>ルームの追加</div>
                    <div className={classes.line}></div>
                    <div className={classes.Stext}>その他の設定</div>
                    <div className={classes.line}></div>
                    <div className={classes.Stext}>ヘルプ</div>
                    <div className={classes.line}></div>
                    <div className={classes.Stext}>ログアウト</div>
                    <div className={classes.line}></div>
                </div>
            </div>
        </div>
    )
}

export default MyPageScreen;