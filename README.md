## Patients-Dashboard

### About

This app has two parts.

1. patients-api: A simple Node.js server that send data to the front end in Json format on https://localhost:9090/.
2. patients-dashboard-fe: The front-end that uses React.js, Bootstrap and Axios to to fetch and displays the data works on https://localhost:3000/.

### Clone and install

Make sure you have Node.js installed and do the following.

```
$ git clone https://github.com/FaisalFehad/patients-dashboard
$ cd patients-dashboard/patients-api/ && npm install && node app.js
$ cd patients-dashboard/patients-dashboard-fe/ && npm install && npm start
```

### Use

After starting the App. You should be able to access the back-end data on https://localhost:9090/ and view the front-end on https://localhost:3000/.
