import * as React from "react";
import * as d3 from "d3";
import { useResize } from "../../../utils/use-resize";
import "../chart.scss";

export const BarChart = ({ children, data }: any) => {
    const chartRef = React.useRef<any>(null);
    const size = useResize(chartRef);
    // console.log(`size~~!!!`, size);
    // const resizeChart = React.useCallback(() => {

    // }, [drawChart]);

    //Test data
    const datas: any = [
        { label: "Rust", value: 95.6 },
        { label: "Golang", value: 83.3 },
        { label: "C++", value: 95.9 },
        { label: "JavaScript", value: 77.2 },
        { label: "Python", value: 65.6 },
        { label: "PHP", value: 22.9 },
    ]


    const drawChart = () => {
        // const { width, height } = size;
        //create base container
        let margin = { top: 20, right: 30, bottom: 40, left: 90 };
        let width = size.width - margin.left - margin.right;
        let height = size.height - margin.top - margin.bottom;
        // append the svg object to the body of the page
        let svg:any = d3.select(chartRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        // Add X axis
        let x = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr('class', 'axis x')
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");
        // Add Y axis
        let y = d3.scaleBand()
            .range([0, height])
            .domain(datas.map((d) => d[`label`]))
            .padding(.1);
        svg.append("g")
            .attr('class', 'axis y')
            .call(d3.axisLeft(y))
            .selectAll("text")
            .attr("dy", null)
        // Add Bars
        svg.selectAll("rect")
            .data(datas)
            .enter()
            .append("rect")
            .attr("x", x(0))
            .attr("y", (d) => y(d[`label`]))
            .attr("width", 0)
            .attr("height", y.bandwidth() - 10)
            .attr("fill", "#DF337D")
            .transition(d3.transition().duration(1000))
            .attr("width", (d) => x(d[`value`]))

    }
    React.useEffect(() => {
        if (!size || !data) {
            return;
        }
        drawChart()
    }, [size, data]);

    return (
        <div className="chart__container">
            <div ref={chartRef}>{children}</div>
        </div>
    )
}

