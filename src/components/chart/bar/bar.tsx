import * as React from "react";
import * as d3 from "d3";
import { useResize } from "../../../utils/use-resize";
import "../chart.scss";

export const Bar = ({ children, data }: any) => {
    const chartRef = React.useRef<HTMLDivElement>(null);
    const size = useResize(chartRef);
    // console.log(`size~~!!!`, size);
    // const resizeChart = React.useCallback(() => {

    // }, [drawChart]);


    const drawChart = () => {
        const { width, height } = size;
        //create base container
        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .classed("bar__chart", true)

        

        //Add bars            
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d: any, i) => height - 10 * d)
            .attr("width", (d: any) => width / d)
            .attr("height", (d: any, i) => d * 10)
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

export const DebuggableChart = ({data}) => {
    console.log(data);
    return (
        <div>{data.toString()}</div>
    )
}


