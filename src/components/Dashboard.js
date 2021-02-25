import { LineChart, Line } from 'recharts';
import MyLineChart from './MyLineChart'
import MyBarGraph from './MyBarGraph'
import {
    Grid
} from '@material-ui/core'
import { gql, useQuery } from '@apollo/client'



const experienceData = [
    { date: '18/2/2020', Excelent: 40, Good: 240, Fair: 240, Poor: 100 },
    { date: '25/2/2020', Excelent: 30, Good: 40, Fair: 200, Poor: 50 },
    { date: '3/3/2020', Excelent: 70, Good: 24, Fair: 100, Poor: 42 }
];

const purposeData = [
    { name: "E-Registration", count: 10 },
    { name: "Master Data", count: 30 },
    { name: "Cash Limits", count: 40 },
    { name: "Warrants", count: 24 },
    { name: "Other", count: 23 }
]

const Dashboard = (props) => {

    // const { loading, error, data } = useQuery(GET_ITEMS)
    // if(loading) {
    //     return 'Loading'
    // }
    // if(error) {
    //     return `Error. ${error.message}`
    // }
    // if(data) {
    // console.log(data)
    // }

    return (
        <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
        >
            <h3>Purpose of visiting the Treasury Service Center</h3>
            <MyBarGraph data={purposeData} />

            <h3>Experience at Treasury Service Center</h3>
            <MyLineChart data={experienceData} />



        </Grid>
    )
}

const GET_ITEMS = gql`
    query FindAllLists {
        query FindAListByID {
            allLists {
                data {
                _id
                }
            }
        }
    }
`;


export default Dashboard