export default {
    port : 1337,
    dbURI: "mongodb://localhost:27017/notes-rest-api",
    saltworkfactor : 10,
    accessTokenTtl : "60m", //Access token valid for 60mins
    refreshTokenTtl : "1y", //Refresh token valid for 1 Year
    host : "localhost",
    accessPublicKey : `INSERT YOUR ACCESS PUBLIC KEY HERE`,
    accessPrivateKey : `INSERT YOUR ACCESS PRIVATE KEY HERE`,
    refreshPrivateKey : `INSERT YOUR REFRESH PRIVATE KEY HERE`,
    refreshPublicKey : `INSERT YOUR REFRESH PUBLIC KEY HERE`
}