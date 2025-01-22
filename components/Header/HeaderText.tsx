import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Kosciuk" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Kosciuk Oskar Ryszard" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{" "}<br/>
        <span itemProp="givenName"> Oskar Ryszard</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A Sr, React Native developer
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        {/* I specialize in developing and deploying responsive websites and web
        applications */}
        A React Native Developer with 8 years of dedicated experience, professional well-versed in crafting robust and user-centric mobile applications for both iOS and Android platforms. 
        Experienced React Native Developer with proven record of developing and maintaining cross-platform mobile applications that increased app performance by 25% for many clients. 
        Expert in implementing state management solutions and optimizing app performance, resulting in 40% reduction in load times...
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
