var dataset = [
    [5, 10],  [200, 20], [400, 100],
[5, 20], [4, 90], [250, 50], [100, 33], [330, 95],
[410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [50, 50]
];

var dates = [
    {
        timestamp: 1599410699034,
        sales: 100
    },
    {
        timestamp: 1594411591034,
        sales: 500
    },
    {
        timestamp: 1591415539034,
        sales: 450
    },
    {
        timestamp: 1596400559034,
        sales: 200
    },
    {
        timestamp: 1595403509034,
        sales: 105
    },
]

const dateDataset = dates.map(d => ({
    date: new Date(d.timestamp),
    sales: d.sales
}))

const formatTime = d3.timeFormat("%b %e")

const svg = d3.select("div").append("svg")
const w = 500
const h = 200
const padding = 50

const tScale = d3.scaleTime()
    .domain([
        d3.min(dateDataset, d => d.date),
        d3.max(dateDataset, d => d.date)
    ])
    .range([padding, w + padding])


const salesScale = d3.scaleLinear()
    .domain([0, d3.max(dateDataset, d => d.sales)])
    .range([padding, h - padding])


svg.attr("width", w + 100)
    .attr("height", h + 100)

svg.selectAll("circle")
    .data(dateDataset)
    .enter()
    .append("circle")
    .attr("cx", d => tScale(d.date))
    .attr("cy", d => salesScale(d.sales))
    .attr("r", 7)
    .attr("fill", "red")

svg.selectAll("text")
    .data(dateDataset)
    .enter()
    .append("text")
    .text(d => d.sales + ", " + formatTime(d.date))
    .attr("x", d => tScale(d.date))
    .attr("y", d => salesScale(d.sales))

   
const xAxis = d3.axisBottom()
    .scale(tScale)
    .ticks(5)
   
svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${h - padding})`)
    .call(xAxis)


const yAxis = d3.axisLeft()
    .scale(salesScale)
    .ticks(5)

svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${padding},0)`)
    .call(yAxis)

const format = d3.format(".0%")
console.log(format(123.22))
console.log(format(0.2364))

