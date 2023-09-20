const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3030

app.use(cors())
app.get("/api/bar", (req, res) => {
    return res.json({
        data: [
            {name: 'Week 1', guest: 320, user: 390},
            {name: 'Week 2', guest: 210, user: 150},
            {name: 'Week 3', guest: 300, user: 430},
            {name: 'Week 4', guest: 220, user: 180},
        ]
    })
})
app.get("/api/pie", (req, res) => {
    return res.json({
        data: [
            {name: "Group A", value: 31, fill: '#F6DC7D'},
            {name: "Group B", value: 14, fill: '#EE8484'},
            {name: "Group C", value: 55, fill: '#98D89E'},
        ]
    })
})
app.get("/api/card", (req, res) => {
    return res.json({
        data: [
            {name: "Total Revenue", value: "$2,129,430", profit: 2.5},
            {name: "Total Transactions", value: "1,520", profit: 1.7},
            {name: "Total Likes", value: "9,721", profit: 1.4},
            {name: "Total Users", value: "9,721", profit: 4.2}
        ]
    })
})

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`)
})
