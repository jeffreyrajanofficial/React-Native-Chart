/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, processColor} from 'react-native';
import {BarChart, CombinedChart, HorizontalBarChart} from 'react-native-charts-wrapper';

const GREEN = processColor('#71BD6A');
const RED = processColor('#D14B5A');
const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

type Props = {};
export default class App extends Component<Props> {
    /*constructor() {
        super();

        this.state = {
            legend: {
                enabled: false,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5,
            },
            data: {
                // dataSets: [{
                //     values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
                //     label: 'Bar dataSet',
                //     config: {
                //         color: processColor('teal'),
                //         barSpacePercent: 40,
                //         barShadowColor: processColor('lightgrey'),
                //         highlightAlpha: 90,
                //         highlightColor: processColor('red'),
                //     }
                // }],
                dataSets: [{
                    values: [
                        {x: 0, y: 100},
                        {x: 0.10, y: 100},
                        {x: 0.50, y: 100},
                        {x: 0.75, y: 100},
                        {x: 1, y: 100},
                        {x: 1.25, y: 100},
                        {x: 1.50, y: 100},
                        {x: 1.75, y: 100},
                        {x: 2, y: 100},
                        {x: 2.25, y: 100},
                        {x: 2.50, y: 100},
                        {x: 2.75, y: 100},
                        {x: 3, y: 100},
                        {x: 3.25, y: 100},
                        {x: 3.50, y: 100},
                        {x: 3.75, y: 100},
                        {x: 4, y: 100},
                        {x: 4.25, y: 100},
                        {x: 4.50, y: 100},
                        {x: 4.75, y: 100},
                        {x: 5, y: 100},
                        {x: 5.25, y: 100},
                        {x: 5.50, y: 100},
                        {x: 5.75, y: 100},
                        {x: 6, y: 100},
                        {x: 6.25, y: 100},
                        {x: 6.50, y: 100},
                        {x: 6.75, y: 100},
                        {x: 7, y: 100},
                    ],
                    label: 'Bar Chart',
                    config: {
                        colors: [
                            processColor('red'),
                            processColor('green'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('red'),
                            processColor('red'),
                            processColor('green'),
                            processColor('green'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('red'),
                            processColor('green'),
                            processColor('green'),
                            processColor('red'),
                            processColor('green'),
                            processColor('red'),
                            processColor('green'),
                            processColor('red'),
                            processColor('green'),
                            processColor('blue'),
                            processColor('blue'),

                        ],
                        highlightAlpha: 0,
                        highlightColor: processColor('transparent'),
                    }
                }]
            },
            xAxis: {
                valueFormatter: [
            '1 PM',
            '2 PM',
            '3 PM',
            '4 PM',
            '5 PM',
            '6 PM',
            '7 PM',
            '8 PM',
        ],
                position: 'BOTTOM',
                granularityEnabled: true,
                granularity: 1,
                labelCount: 10,
                drawAxisLine: false,
                drawGridLines: false,
            },
            yAxis: {

                // left:{axisMinimum: 0}
                left: {
                    drawLabels: false,
                    drawAxisLine: false,
                    drawGridLines: false,
                    zeroLine: {
                        enabled: true,
                        lineWidth: 1.5
                    }, axisMaximum: 100, axisMinimum: 0


                },
                right: {
                    enabled: false
                },
                axisMaximum: 3
            }
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }

        console.log(event.nativeEvent)
    }


    render() {
        return (
            <View style={{flex: 1}}>

                <View style={{height:80}}>
                    <Text> selected entry</Text>
                    <Text> {this.state.selectedEntry}</Text>
                </View>


                <View style={styles.container}>
                    <HorizontalBarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        scaleXEnabled={false}
                        scaleYEnabled={false}
                        visibleRange={{
                            y: { min: 6, max: 5 },
                            // x: { min: 6, max: 5 }

                        }}
                        chartDescription={{ text: '1' }}
                        // animation={{durationX: 2000}}
                        legend={this.state.legend}
                        // gridBackgroundColor={processColor('#ffffff')}
                        gridBackgroundColor={processColor('transparent')}
                        drawBarShadow={true}
                        autoScaleMinMaxEnabled={false}
                        drawValueAboveBar={false}
                        drawHighlightArrow={false}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={(event) => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }*/
    constructor() {
        super();

        this.state = {
            legend: {
                enabled: false,
                textSize: 14,
                form: "CIRCLE",
                formSize: 8,
                xEntrySpace: 10,
                yEntrySpace: 5,
                wordWrapEnabled: true,
                position: 'TOP',
                maxSizePercent: 0.5,
                custom: {
                    colors: [processColor('red'), processColor('blue'), processColor('green')],
                    labels: ['Sitting', 'Standing', 'Walking']
                }
            },
            data: {
                dataSets: [{
                    values: [
                        {x: 0, y: 100},
                        {x: 0.10, y: 100},
                        {x: 0.50, y: 100},
                        {x: 0.75, y: 100},
                        {x: 1, y: 100},
                        {x: 1.25, y: 100},
                        {x: 1.50, y: 100},
                        {x: 1.75, y: 100},
                        {x: 2, y: 100},
                        {x: 2.25, y: 100},
                        {x: 2.50, y: 100},
                        {x: 2.75, y: 100},
                        {x: 3, y: 100},
                        {x: 3.25, y: 100},
                        {x: 3.50, y: 100},
                        {x: 3.75, y: 100},
                        {x: 4, y: 100},
                        {x: 4.25, y: 100},
                        {x: 4.50, y: 100},
                        {x: 4.75, y: 100},
                        {x: 5, y: 100},
                        {x: 5.25, y: 100},
                        {x: 5.50, y: 100},
                        {x: 5.75, y: 100},
                        {x: 6, y: 100},
                        {x: 6.25, y: 100},
                        {x: 6.50, y: 100},
                        {x: 6.75, y: 100},
                        {x: 7, y: 100},
                    ],
                    label: 'Bar Chart',
                    config: {
                        colors: [
                            processColor('red'),
                            processColor('green'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('red'),
                            processColor('red'),
                            processColor('green'),
                            processColor('green'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('red'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('blue'),
                            processColor('red'),
                            processColor('green'),
                            processColor('green'),
                            processColor('red'),
                            processColor('green'),
                            processColor('red'),
                            processColor('green'),
                            processColor('red'),
                            processColor('green'),
                            processColor('blue'),
                            processColor('blue'),

                        ],
                        highlightAlpha: 0,
                        highlightColor: processColor('transparent'),
                    }
                }],
                config: {

                    drawValues: false,

                    barWidth: 1,

                    /*group: {
                        fromX: 0,
                        groupSpace: 0.4,
                        barSpace: 0,
                    },*/
                }
            },
            xAxis: {
                // enabled: false,
                position: 'BOTTOM',
                drawAxisLine: false,
                drawGridLines: false,
                centerAxisLabels: false,
                valueFormatter: [
                    '1 PM',
                    '2 PM',
                    '3 PM',
                    '4 PM',
                    '5 PM',
                    '6 PM',
                    '7 PM',
                    '8 PM',
                ],

                granularityEnabled: true,
                granularity: 1,
                labelCount: 7,
            },
            yAxis: {
                drawLabels: false,
                left: {
                    drawLabels: false,
                    drawAxisLine: false,
                    drawGridLines: false,
                    zeroLine: {
                        enabled: true,
                        lineWidth: 1.5
                    }, axisMaximum: 100,
                    //axisMinimum: 0
                },
                right: {
                    enabled: false
                }
            },
            progressXAxis: {
                // enabled: false,
                position: 'BOTTOM',
                drawAxisLine: false,
                drawGridLines: false,
                centerAxisLabels: true,
                valueFormatter: [
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                ],


                granularityEnabled: true,
                granularity: 1,
                labelCount: 7,
            },

            progressLegend: {
                enabled: false
            },

            progressData: {
                dataSets: [{
                    values: [
                        {x: 0, y: 60},
                        {x: 1, y: 80},
                        {x: 2, y: 70},
                        {x: 3, y: 50},
                        {x: 4, y: 10},
                        {x: 5, y: 100},
                        {x: 6, y: 60},
                        {x: 7, y: 90},


                    ],
                    label: 'Bar Chart',
                    config: {
                        fillGradient: {
                            colors: [processColor('red'), processColor('blue')],
                            // iOS
                            positions: [0, 0.5],
                            angle: 90,
                            // Android
                            orientation: 'TOP_BOTTOM',

                        },
                        fillAlpha: 1000,
                        highlightAlpha: 0,
                        highlightColor: processColor('transparent'),
                    }
                }],
                config: {
                    drawValues: false,
                    barWidth: 0.2
                }
            }


        };
    }

    handleSelect(event) {
        /*let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }

        console.log(event.nativeEvent)*/
    }

    render() {
        return (

            <View style={{flex: 1}}>

                <View style={{height: 80}}>
                    <Text> selected entry</Text>
                    <Text> {this.state.selectedEntry}</Text>
                </View>

                <View style={styles.container}>
                    <HorizontalBarChart
                        style={{flex: 1}}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        chartDescription={{text: ''}}
                        legend={{enabled: false}}
                        drawValueAboveBar={false}
                        // legend={this.state.legend}
                        doubleTapToZoomEnabled={false}
                        pinchZoom={false}
                        scaleEnabled={false}
                        // onSelect={this.handleSelect.bind(this)}
                        //onChange={(event) => console.log(event.nativeEvent)}
                    />
                    <HorizontalBarChart
                        style={{flex: 1}}
                        data={this.state.progressData}
                        xAxis={this.state.progressXAxis}
                        yAxis={this.state.yAxis}
                        marker={{
                            enabled: true,
                            markerColor: processColor('transparent'),
                            textSize: 10,
                            textColor: processColor("black")
                        }}
                        // drawValues={true}
                        chartDescription={{text: ''}}
                        legend={this.state.progressLegend}
                        doubleTapToZoomEnabled={false}
                        drawBarShadow={true}
                        pinchZoom={false}
                        //scaleEnabled={false}

                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'row'
    },
    chart: {
        flex: 1
    }
});
