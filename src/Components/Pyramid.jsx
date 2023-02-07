import * as React from "react";

import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    AccumulationLegend,
    AccumulationDataLabel,
    AccumulationTooltip,
    PyramidSeries,
    AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

export let data1 = [
    { x: "Ignored", y: 120, text: "Popescu Vlad" },
    { x: "Missed", y: 435, text: "Dragan Victoria" },
    { x: "Error", y: 470, text: "Nume239 Prenume 239" },
    { x: "Linting Error", y: 475, text: "Nume31 Prenume31" },
    { x: "Warning", y: 520, text: "Ion Simona" },
    { x: "Passed", y: 930, text: "Voicu Mihaela" },
];

const Pyramid = () => {
    const pyramid = React.useRef();

    return (
        <div className="control-pane" style={{position: 'relative'}}>
            <div className="control-section row">
                <div className="col">
                    <AccumulationChartComponent
                        id="pyramid-chart"
                        ref={pyramid}
                        title="Top 6 pacienți (cele mai scumpe consulturi fără discount)"
                        legendSettings={{
                            visible: false,
                        }}
                        //   load={this.load.bind(this)}
                        tooltip={{ enable: true, format: "${point.x} : <b>${point.y} cal</b>" }}
                        //   loaded={this.onChartLoad.bind(this)}
                        //   resized={this.chartResized.bind(this)}
                        width="100%"
                        height="80%"
                    >
                        <Inject
                            services={[
                                AccumulationDataLabel,
                                AccumulationTooltip,
                                PyramidSeries,
                                AccumulationLegend,
                                AccumulationSelection,
                            ]}
                        />
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective
                                name="Cost Consult"
                                dataSource={data1}
                                xName="x"
                                yName="y"
                                type="Pyramid"
                                width="45%"
                                height="80%"
                                neckWidth="15%"
                                gapRatio={0.03}
                                explode={true}
                                emptyPointSettings={{ mode: "Drop", fill: "red" }}
                                dataLabel={{
                                    visible: true,
                                    position: "Inside",
                                    name: "text",
                                }}
                            ></AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                </div>
            </div>
        </div>
    );
};

export default Pyramid;