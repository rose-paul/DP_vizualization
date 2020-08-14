import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function CapacityBar({ width, height, data }) {
    const ref = useRef();

    useEffect(() => {
        console.log(d3.max(data))
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {

        const svg = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);
        var yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([0, height]);

        selection
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => yScale(d))

        selection
            .exit()
            .transition().duration(300)
            .attr("y", (d) => height)
            .attr("height", 0)
            .remove()
    }


    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>

    )

}

export default CapacityBar;