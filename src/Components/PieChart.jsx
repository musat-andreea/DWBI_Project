import * as React from "react";
import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    AccumulationLegend,
    PieSeries,
    AccumulationTooltip,
    AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

export let data1 = [
    { x: "Paracetamol", y: 37, text: "37%" },
    { x: "Diclofenac", y: 17, text: "17%" },
    { x: "No-spa", y: 19, text: "19%" },
    { x: "Voltaren", y: 4, text: "4%" },
];

export let data2 = [
    { x: "Pensionari", y: 37, text: "47%" },
    { x: "Adulti", y: 17, text: "36%" },
    { x: "Copii", y: 19, text: "17%" },
];

const PieChart = () => {
    const pie = React.useRef();

    return (
        <div className="control-pane" style={{position: 'relative'}}>
            <div className="control-section row">
                <div className="col">
                    <AccumulationChartComponent
                        id="pie-chart"
                        ref={pie}
                        title="Procentele medicamentelor vândute"
                        // load={this.load.bind(this)}
                        legendSettings={{ visible: false }}
                        enableSmartLabels={true}
                        enableAnimation={false}
                        center={{ x: "50%", y: "50%" }}
                        tooltip={{ enable: true, format: "${point.x} : <b>${point.y}%</b>" }}
                        // loaded={this.onChartLoad.bind(this)}
                    >
                        <Inject
                            services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}
                        />
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective
                                dataSource={data1}
                                name="Medicament"
                                xName="x"
                                yName="y"
                                explode={true}
                                explodeOffset="10%"
                                explodeIndex={0}
                                dataLabel={{
                                    visible: true,
                                    position: "Inside",
                                    name: "text",
                                    font: {
                                        fontWeight: "600",
                                    },
                                }}
                                radius="70%"
                            ></AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                </div>
            </div>
        </div>
    );
};

export default PieChart;