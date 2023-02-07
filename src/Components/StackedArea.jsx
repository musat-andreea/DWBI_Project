import * as React from "react";
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    DateTime,
    StackingAreaSeries,
    Legend,
} from "@syncfusion/ej2-react-charts";

export let data1 = [
    { x: new Date(2022, 1, 1), y: 0.87 },
    { x: new Date(2022, 3, 1), y: 1.7 },
    { x: new Date(2022, 4, 1), y: 0 },
    { x: new Date(2022, 5, 1), y: 1 },
    { x: new Date(2022, 6, 1), y: 1.4 },
    { x: new Date(2022, 7, 1), y: 1.9 },
    { x: new Date(2022, 8, 1), y: 0.8 },
    { x: new Date(2022, 9, 1), y: 1.6 },
    { x: new Date(2022, 10, 1), y: 0.87 },
    { x: new Date(2022, 11, 1), y: 1.3 },
    { x: new Date(2022, 12, 1), y: 0.8 },
];
export let data2 = [
    { x: new Date(2022, 1, 1), y: 0.05 },
    { x: new Date(2022, 3, 1), y: 0.18 },
    { x: new Date(2022, 4, 1), y: 0.4 },
    { x: new Date(2022, 5, 1), y: 1 },
    { x: new Date(2022, 6, 1), y: 0.5 },
    { x: new Date(2022, 7, 1), y: 1.1 },
    { x: new Date(2022, 8, 1), y: 0.9 },
    { x: new Date(2022, 9, 1), y: 1.2 },
    { x: new Date(2022, 10, 1), y: 0.3 },
    { x: new Date(2022, 11, 1), y: 1.8 },
    { x: new Date(2022, 12, 1), y: 0.3 },
];
export let data3 = [
    { x: new Date(2022, 1, 1), y: 0.76 },
    { x: new Date(2022, 3, 1), y: 0.54 },
    { x: new Date(2022, 4, 1), y: 0.48 },
    { x: new Date(2022, 5, 1), y: 0.65 },
    { x: new Date(2022, 6, 1), y: 0.98 },
    { x: new Date(2022, 7, 1), y: 0.34 },
    { x: new Date(2022, 8, 1), y: 0.91 },
    { x: new Date(2022, 9, 1), y: 1.2 },
    { x: new Date(2022, 10, 1), y: 0.38 },
    { x: new Date(2022, 11, 1), y: 0.8 },
    { x: new Date(2022, 12, 1), y: 0.3 },
];
export let data4 = [
    { x: new Date(2022, 1, 1), y: 0.4 },
    { x: new Date(2022, 3, 1), y: 0.87 },
    { x: new Date(2022, 4, 1), y: 0.3 },
    { x: new Date(2022, 5, 1), y: 0.7 },
    { x: new Date(2022, 6, 1), y: 0.58 },
    { x: new Date(2022, 7, 1), y: 0.84 },
    { x: new Date(2022, 8, 1), y: 0.91 },
    { x: new Date(2022, 9, 1), y: 1.6 },
    { x: new Date(2022, 10, 1), y: 1.38 },
    { x: new Date(2022, 11, 1), y: 0.6 },
    { x: new Date(2022, 12, 1), y: 1.4 },
];

const StackedArea = () => {
    return (
        <div className="control-pane" style={{position: 'relative'}}>
            <div className="control-section">
                <ChartComponent
                    id="stacked-area-charts"
                    style={{ textAlign: "center" }}
                    primaryXAxis={{
                        valueType: "DateTime",
                        intervalType: "Years",
                        majorGridLines: { width: 0 },
                        labelFormat: "y",
                        edgeLabelPlacement: "Shift",
                    }}
                    //   load={this.load.bind(this)}
                    primaryYAxis={{
                        title: "Spends",
                        minimum: 0,
                        maximum: 3,
                        interval: 1,
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 },
                        minorTickLines: { width: 0 },
                        labelFormat: "{value}B",
                    }}
                    chartArea={{ border: { width: 0 } }}
                    //   width={Browser.isDevice ? "100%" : "60%"}
                    title="Costul consulturilor din 2022 al spitalelor din Bucuresti"
                    //   loaded={this.onChartLoad.bind(this)}

                    height="200px"
                >
                    <Inject services={[StackingAreaSeries, Legend, DateTime]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={data1}
                            xName="x"
                            yName="y"
                            name="MedCare Nr. 19"
                            type="StackingArea"
                            fill="gray"
                        ></SeriesDirective>
                        <SeriesDirective
                            dataSource={data2}
                            xName="x"
                            yName="y"
                            name="MedCare Nr. 3"
                            type="StackingArea"
                            fill="yellow"
                        ></SeriesDirective>
                        <SeriesDirective
                            dataSource={data3}
                            xName="x"
                            yName="y"
                            name="MedCare Nr. 27"
                            type="StackingArea"
                            fill="orange"
                        ></SeriesDirective>
                        <SeriesDirective
                            dataSource={data4}
                            xName="x"
                            yName="y"
                            name="MedCare Nr. 19"
                            type="StackingArea"
                            fill="green"
                        ></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default StackedArea;