const admin = require("firebase-admin");
require("dotenv").config()
const serviceAccount = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URL,
    token_uri: process.env.TOKEN_URL,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;



// "type": "service_account",
//     "project_id": "online-65376",
//     "private_key_id": "202f5a0ab71c07f4eb49e119545c496475802649",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKZX3hrgdLqDgM\nwUEKg9pVFfEgLVMeSaFNS1WfliYdSfIU2l6mP4MdDNt1KniUhbtFmoj1ICs+WJdm\n6VF0TLTg8p867/ltnKsKPNOHCJKQ8pHxexC4cffQeHHseGw3EbALtNC3yQ7520mP\nGcX/pCtfolLbzYJ2BdpCVKHYmwGhK849TezCtTiQvJn+3eem7CGY5IqO92HZ9jHg\ntYFrDh3GAMmxcohuYYBtSWWypegJKDorjb8Gajn3SIJt4XNiE5iXzai5R8h6/N9v\n9b72Xh6k+4pwfSJnuM2taMUQ4tKBs0rV8LK0wJw9L+/0mHbeucpy1a023PPgAiVI\nDl5TcFfNAgMBAAECggEAA3MqQOHw7Q92Ox4X1Xh3Yiq6/t0plPMqLRwwXrAWFhA4\nBeEjVV/w7xppwDbD3OY6/F38tnmV+xyn91YD8IChNvyzuEhgXvJZcQB7QN/lcv6L\nfHX9oY3hweYtAkaa3kUZKYNAvoKOaeBcwd7C2E9sT4I/uXroiHSjlSyw9d/4gw5+\nwBBMZSQSywdrOPXLq020lsTlxY8xCUoJ71K/u3AovcNd0cTEcWyB916VOKM2vfyy\nJWQZpn+5K+Z86uGU5Nuouj/1Nh7gzMmIUm2qaRx4E15fBdWMEFpo933VEd8/hUgc\npEB/9mNxMHo4TGY/JGqMpgRPxKeIoqmCnUtmlprCmQKBgQDl7SoePkBumKqS8x5Q\niALOQ1dEd0xJc8ohyhuIa5hxPc/SEpo0zH9plHM6OO8hgAEjJ2lmqTLCqeGiJKXS\nLFbS8DF8tTYDrkfVvqPokKDGZFZglATIy53hmBNxHbHz2THSgbPzmw5NRj6A5A+R\nJ+TL4G3e2Ey6A3ndxWeBpD3/6QKBgQDhWR+iQ36GTYBo7a9dusZJlM4tJGBiNvwF\nFOXaUqdOGCQ6wUH2gg8lXrxn4xun/cGYXJoNQCkL8meWFauXe+1WDTQjcTp7wKgt\n7eY4/arkXmk5BAE0t6sq5eJd7eKnCjcy7Bru6FUnIHtFyXaSy1sekFokvEMe8lPG\nTeHhcDquRQKBgQC/jHNYOrhm6tzAC7anlIfx2nwrV8/AKayttbh2UFzxinNGKaU6\nc1t6U+gjCyd9GyzXYpAWrMLTFcAZ2roifDnhBaXUpQrYyiqiUW4v471tSk4Dq4zI\n04k2VgFsbTbBVaKCIvgN7JFfozOTIWwum7OqfdBKpJxXI2o1ba2rfW8BcQKBgQDb\nxx04FxWWDI45R97pzhhHeS6gDkNGZpPirOADzurHGnpzJzqbHXuCGeQsee3mKHGg\nlGfWloWx1ie608W3hzEQ5O29x1efjGU57jTDznrWIVIEPmiirqLswqnErBaKjUcK\njgUyjjtGXsJ7bKINRvHGXEjeXRIlY3fbBuhPAzLn9QKBgF/qjI9/7Vs33iung/dZ\n+Hcr6w02jhXBiI8QMTMbNvWo6uxGyeIoXFyAUyhZQhzbPWIDdzQLnI72HjdCVglF\nGNmEpRbevP0Yq3TEMkmZpF1nQrx0JQrNbRWMtG5b/l0B0LsEQl60iyLurxrepW5P\n6HqvTYee+xhZJ6ms3477DCFi\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-i36fd@online-65376.iam.gserviceaccount.com",
//     "client_id": "100904635496048922826",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i36fd%40online-65376.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"



// "type":
//   "project_id":
//   "private_key_id":
//   "private_key":
//   "client_email":
//   "client_id":
//   "auth_uri":
//   "token_uri":
//   "auth_provider_x509_cert_url":
//   "client_x509_cert_url":
//   "universe_domain": 
