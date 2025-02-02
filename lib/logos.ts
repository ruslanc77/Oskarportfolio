type logoNames =
  | "apollo"
  | "graphql"
  | "java"
  | "kotlin"
  | "livedata"
  | "mobx"
  | "firebase"
  | "flutter"
  | "swift"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "chartjs"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "s3"
  | "socketio"
  | "typescript"
  | "vercel"
  | "ejs"
  | "nodejs"
  | "javascript"
  | "postgresql"
  | "redux"
  | "sass"
  | "bash"
  | "reactSpring"
  | "framerMotion"
  | "trpc"
  | "cypress"
  | "reactQuery"
  | "uiux"
  | "restapi"
  | "teamlead"
  ;

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/assets/icons/apollo.svg",
    spin: false,
    invert: true,
  },
  graphql: {
    label: "GraphQl",
    logo: "/assets/icons/graphql.svg",
    spin: false,
  },
  java: {
    label: "java",
    logo: "/assets/icons/java.png",
    spin: false,
  },
  kotlin: {
    label: "kotlin",
    logo: "/assets/icons/kotlin.png",
    spin: false,
  },
  uiux: {
    label: "uiux",
    logo: "/assets/icons/uiux.png",
    spin: false,
  },
  restapi: {
    label: "restapi",
    logo: "/assets/icons/restapi.png",
    spin: false,
  },
  teamlead: {
    label: "teamlead",
    logo: "/assets/icons/teamlead.png",
    spin: false,
  },
  mobx: {
    label: "mobx",
    logo: "/assets/icons/mobx.svg",
    spin: false,
  },
  livedata: {
    label: "livedata",
    logo: "/assets/icons/livedata.png",
    spin: false,
  },
  firebase: {
    label: "firebase",
    logo: "/assets/icons/firebase.png",
    spin: false,
  },
  flutter: {
    label: "flutter",
    logo: "/assets/icons/flutter.png",
    spin: false,
  },
  swift: {
    label: "swift",
    logo: "/assets/icons/swift.png",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/assets/icons/nestjs.svg",
    spin: false,
  },
  react: {
    label: "React Native",
    logo: "/assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  chartjs: {
    label: "Chart.js",
    logo: "/assets/icons/chartjs.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/assets/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/assets/icons/nextjs.svg",
    invert: true,
  },
  s3: {
    label: "AWS-S3",
    logo: "/assets/icons/s3.svg",
  },
  socketio: {
    label: "Socket.IO",
    logo: "/assets/icons/socketio.svg",
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "/assets/icons/vercel.svg",
    invert: true,
  },
  ejs: {
    label: "EJS",
    logo: "/assets/icons/ejs.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  postgresql: {
    label: "PostgreSQL",
    logo: "/assets/icons/postgresql.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  reactSpring: {
    label: "react-spring",
    logo: "/assets/icons/react-spring.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
  },
  trpc: {
    label: "tRPC",
    logo: "/assets/icons/trpc.svg",
  },
  cypress: {
    label: "Cypress",
    logo: "/assets/icons/cypress.svg",
  },
  reactQuery: {
    label: "React Query",
    logo: "/assets/icons/react-query.svg",
  },
};

export default logos;
