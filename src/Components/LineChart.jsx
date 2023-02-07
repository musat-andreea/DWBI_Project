import * as React from "react";

import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Tooltip,
    DateTime,
    MultiColoredLineSeries,
} from "@syncfusion/ej2-react-charts";

const rainFallData = [
    6.279319488350383, 6.44063341316797, 6.2369215935932125, 5.502712120699334, 8.36727387645628,
    6.8763936909119145, 7.539107641248687, 7.168106790298325, 5.088973211088473, 7.3611443626521975,
    6.262482500009694, 7.066946128264099,

];

let dataValues = [];
let colors = [
    "navy",
    "green",
    "#ff0097",
    "crimson",
    "blue",
    "darkorange",
    "deepskyblue",
    "mediumvioletred",
    "violet",
    "peru",
    "gray",
    "deeppink",
    "red",
];
rainFallData.map((value, index) => {
    dataValues.push({
        x: new Date(2022, -index, 1),
        y: value.toFixed(2),
        color: colors[Math.floor(index / 16)],
    });
});

const LineChart = () => {
    return (
        <div className="control-pane" style={{ padding: "10px", position: 'relative' }}>
            <div className="control-section">
                <ChartComponent
                    id="line-charts"
                    style={{ textAlign: "center" }}
                    primaryXAxis={{
                        valueType: "DateTime",
                        labelFormat: "y",
                        intervalType: "Years",
                        edgeLabelPlacement: "Shift",
                        majorGridLines: { width: 0 },
                    }}
                    primaryYAxis={{
                        rangePadding: "None",
                        minimum: 4,
                        maximum: 9,
                        title: "Cost (100 X Euro)",
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 },
                        minorTickLines: { width: 0 },
                    }}
                    tooltip={{ enable: true, shared: true, enableAnimation: false }}
                    legendSettings={{ visible: false }}
                    chartArea={{ border: { width: 0 } }}
                    load={() => {}}
                    title="Evolutia costurilor pentru tratamentul de cancer - anul 2022"
                    loaded={() => {}}
                    width="100%"
                    height="180"
                >
                    <Inject services={[MultiColoredLineSeries, DateTime, Tooltip]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={dataValues}
                            width={1.4}
                            xName="x"
                            yName="y"
                            name="Rainfall"
                            type="MultiColoredLine"
                            pointColorMapping="color"
                        ></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default LineChart;