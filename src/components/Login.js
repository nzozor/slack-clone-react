import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png" alt="" />
        <h1> Sign up to Nick Slack</h1>
        <p>nico.slack.com</p>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color:gray;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  > img {
    object-fit: contain;height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform:inherit !important;
    background-color: #0a8d48;
    color: white;
    font-weight: bold;
  }
`;
