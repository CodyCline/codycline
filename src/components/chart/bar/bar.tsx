import * as React from "react";
import * as d3 from "d3";
import "../chart.scss";

export const Bar = ({children, data}: any) => {
    const chartRef = React.useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState<number>(0);
    const [width, setWidth] = React.useState<number>(0);
    const resizeChart = React.useCallback(() => {

    }, [drawChart]);

    const drawChart = () => {
        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .classed("bar__chart", true)

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d: any, i) => height - 10 * d)
            .attr("width", 50)
            .attr("height", (d: any, i) => d * 10)
    }

    React.useEffect(() => {
        const element = chartRef.current
        if (element) {
            const { offsetWidth, offsetHeight } = element; 
            setHeight(offsetHeight);
            setWidth(offsetWidth);
            
        }
        window.addEventListener(`resize`, resizeChart);

        return () => {
            window.removeEventListener(`rezie`, resizeChart);
        }
    }, [resizeChart]);
    return (
        <div className="chart__container">
            <div ref={chartRef}>{children}</div>
        </div>
    )
}

export class BarChart extends React.Component<any, any> {
    chartRef = React.createRef<any>();
    state = {
        height: 800,
        width: 400,
    }
    componentDidMount() {
        //Get current parent container width and height 
        let width:number = this.chartRef.current.parentElement.offsetWidth;
        let height:number = this.chartRef.current.parentElement.offsetHeight;
        console.log(width, height);
        this.setState({ height: 400, width: width }, () => this.drawChart());

    }

    drawChart() {
        const svg = d3.select(this.chartRef.current)
            .append("svg")
            .attr("width", this.state.width)
            .attr("height", this.state.height)
            .classed("bar__chart", true)

        svg.selectAll("rect")
            .data(this.props.data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d: any, i) => this.state.height - 10 * d)
            .attr("width", 50)
            .attr("height", (d: any, i) => d * 10)

    }

    render() {
        return (
            <div className="chart__container">
                <div ref={this.chartRef}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
