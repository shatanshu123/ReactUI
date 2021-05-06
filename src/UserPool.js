import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "us-east-2_WHrIaGXSy",
    ClientId: "1ut4jiuh3hnla9lktghp2kk7sr"
}
export default new CognitoUserPool(poolData);