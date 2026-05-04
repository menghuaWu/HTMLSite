/*  
    chart.js
    web site:https://www.chartjs.org/
*/
document.write("<script type='text/javascript' src='/GBLWeb/API/Chart/Chart.js'></script>");
document.write("<script type='text/javascript' src='/GBLWeb/API/Chart/utils.js'></script>");
(function ($) {
    var utils ;
    var defaults = {
        caption: '', //標題
        url: '',
        postData: {},
        type: '',
        xLabel: '', //x軸標籤
        yLabel: '', //Y軸標籤
        LabelColNmae: '',
        datasets: [{
            dataColNmae: ''
        }],
        options:{},
        xy: {
            labels: [], //自定義x軸
            labelAxes: "", //x軸
            point: [] //point(x,y)
        }
    };
    
    function Loading(table) {
        let dig = '<div class="text-center" style="opacity: .20;"><span class="spinner-border "></span><p>Loading...</p></div>';
        $(table).append(dig);
    }
    /**
     *建立Chart
     *
     * @param {*} chartOptions 
     *  chartOptions = {
     *       caption: '', //標題
     *       url: '',     //webapi url
     *       postData: {}, //要傳遞的參數
     *       xLabel:'', //x軸標籤
     *       yLabel:'', //Y軸標籤
     *       xy: {   
     *           labels: [], //自定義標籤
     *           labelAxes:'', //line 標籤
     *           point: [] //pint(x,y)
     *       },
     *   }
     *    
     * 
     */
    $.fn.createCustomChart = function (chartOptions) {
        let cOptions = $.extend(false, defaults, chartOptions);
        let chartType = cOptions.type;
        let options = {};
        utils = Samples.utils;
		utils.srand(110);
        if (chartType == undefined || chartType == "" || "doghnut;bar;line;pie;horizontalBar;polarArea".indexOf(chartType) < 0) {
            cOptions.type = "doughnut";
        }


        options = getCustomOption(cOptions);


        var myChart = new Chart(this.attr('id'), options);

    };
    /**
     *建立Chart
     *
     * @param {*} chartOptions 
     *  chartOptions = {
     *       caption: '', //標題
     *       url: '',     //webapi url
     *       postData: {}, //要傳遞的參數
     *       xLabel:'', //x軸標籤
     *       yLabel:'', //Y軸標籤
     *       xy: {   
     *           labels: [], //自定義標籤
     *           labelAxes:'', //line 標籤
     *           point: [] //pint(x,y)
     *       },
     *   }
     *    
     * 
     */
    $.fn.createChart = function (chartOptions) {
        let cOptions = $.extend(false, defaults, chartOptions);
        let chartType = cOptions.type;
        let options = {};
        if (chartType == undefined || chartType == "" || "doghnut;bar;line;pie;horizontalBar;polarArea".indexOf(chartType) < 0) {
            cOptions.type = "doughnut";
        }
        // Loading(this);
        // console.log(cOptions.xy.point.length);
        if (cOptions.xy.point.length > 0) {
            options = lineData(cOptions);
        } else {
            options = getData(cOptions);
        }

        var myChart = new Chart(this.attr('id'), options);
        // myChart.resize();

        // new Chart( ctx,options);
        // var ctx = document.getElementById('myChart'); 

        //ctx.style.height = "95vh";
        //alert(ctx.parentNode.style.height);
    };
    /**
     *讀取Chart Data
     *
     * @param {*} cOptions->參數格式等於defaults
     * @returns option;
     * options={
            type: charttype, // bar, line , pie, doughnut, horizontalBar
            data: {
                labels: [],
                datasets: []
            },
            options: {}
        };
     */
    $.fn.createRMAChart = function (chartOptions) {
        let cOptions = $.extend(false, defaults, chartOptions);
        let chartType = cOptions.type;
        let options = {};
        if (chartType == undefined || chartType == "" || "doghnut;bar;line;pie;horizontalBar;polarArea".indexOf(chartType) < 0) {
            cOptions.type = "doughnut";
        }
        // Loading(this);
        // console.log(cOptions.xy.point.length);
        if (cOptions.xy.point.length > 0) {
            options = lineData(cOptions);
        } else {
            options = getRMAData(cOptions);
        }

        var myChart = new Chart(this.attr('id'), options);
        // myChart.resize();

        // new Chart( ctx,options);
        // var ctx = document.getElementById('myChart'); 

        //ctx.style.height = "95vh";
        //alert(ctx.parentNode.style.height);
    };
    /**
     *讀取Chart Data
        *
        * @param {*} cOptions->參數格式等於defaults
        * @returns option;
        * options={
            type: charttype, // bar, line , pie, doughnut, horizontalBar
            data: {
                labels: [],
                datasets: []
            },
            options: {}
        };
        */

    function getRMAData(cOptions) {
        let valuearray1 = [];
        let valuearray2 = [];
        let valuearray3 = [];
        let labelarray = [];
        let colorarray = [];
        let label1 = "";
        let label2 = "";
        let label3 = "";
        let chart_dataset = [];
        let charttype = cOptions.type;
        let options = {
            type: charttype, // bar, line , pie, doughnut, horizontalBar
            data: {
                labels: [],
                datasets: []
            },
            options: {}
        };
        let chart_options = {
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: cOptions.caption,
            },
            legend: {
                display: true
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            hover: {
                animationDuration: 0  // 防止滑鼠移上去，數字閃爍
            },
            // animation: {           // 這部分是數值顯示的功能實現
            //     onComplete: function () {
            //         var chartInstance = this.chart,
            //             ctx = chartInstance.ctx;
            //         // 以下屬於canvas的屬性（font、fillStyle、textAlign...）
            //         ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            //         ctx.fillStyle = "black";
            //         ctx.textAlign = 'center';
            //         ctx.textBaseline = 'bottom';
    
            //         this.data.datasets.forEach(function (dataset, i) {
            //             var meta = chartInstance.controller.getDatasetMeta(i);
            //             meta.data.forEach(function (bar, index) {
            //                 var data = dataset.data[index];
            //                 ctx.fillText(Math.round(data), bar._model.x, bar._model.y - 5);
            //             });
            //         });
            //     }
            // }
        };
        let scale_options = {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                ticks: {
                    //stepSize: 1, 
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Quantity'
                }
            }]
        };

        $.ajax({
            type: 'POST',
            //url: invokeURL + webapi,
            url: cOptions.url,
            async: false,
            data: JSON.stringify({
                SDATE:SDATE,
                EDATE:EDATE,
                CustomerID:CustomerIDStr
            }),
            success: function (data) {
                // console.log('data',data);
                data.forEach(function (e) {
                    var lbl = e[Object.keys(e)[0]];
                    if (lbl == null) {
                        lbl = "";
                    }
                    labelarray.push(lbl.toString().toUpperCase());
                    if (e[Object.keys(e)[1]] != null) {
                        valuearray1.push(e[Object.keys(e)[1]]);
                        label1 = Object.keys(e)[1];
                    }
                    if (e[Object.keys(e)[2]] != null) {
                        valuearray2.push(e[Object.keys(e)[2]]);
                        label2 = Object.keys(e)[2];
                    }
                    if (e[Object.keys(e)[3]] != null) {
                        valuearray3.push(e[Object.keys(e)[3]]);
                        label3 = Object.keys(e)[3];
                    }
                    colorarray.push(dynamicColors());
                });
                if (charttype.toUpperCase().indexOf("BAR") >= 0 || charttype == "line") {
                    chart_options.legend = {
                        display: false
                    };
                    chart_options.scales = scale_options;
                }

                if (valuearray2.length > 0) { //mixed chart
                    chart_options.legend = {
                        display: true
                    };
                    chart_dataset.push({
                        label: label1,
                        backgroundColor: 'rgba(113, 194, 133, 0.5)', //'#71C285'
                        borderColor: '#71C285',
                        borderWidth: 1,
                        fill: false,
                        data: valuearray1
                    });
                } else { //single chart
                    chart_dataset.push({
                        label: labelarray,
                        backgroundColor: colorarray,
                        backgroundColor: '#4190C6',
                        borderColor: '#121FD8',
                        borderWidth: 1,
                        fill: false,
                        data: valuearray1
                    });
                }
                if (valuearray2.length > 0) {
                    chart_dataset.push({
                        label: label2,
                        type: 'line',
                        backgroundColor: '#4190C6',
                        borderColor: 'rgba(65, 144, 198, 0.5)', //'#4190C6'
                        data: valuearray2,
                        fill: false,
                        lineTension: 0
                    });
                }
                if (valuearray3.length > 0) {
                    chart_dataset.push({
                        label: label3,
                        type: 'line',
                        backgroundColor: '#F0785A',
                        borderColor: 'rgba(240, 120, 90, 0.5)', //'#F0785A'
                        data: valuearray3,
                        fill: false,
                        lineTension: 0
                    });
                }
            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });
        options.data.labels = labelarray;
        options.data.datasets = chart_dataset;
        options.options = chart_options;
        return options;
    }

    function getData(cOptions) {
        let valuearray1 = [];
        let valuearray2 = [];
        let valuearray3 = [];
        let labelarray = [];
        let colorarray = [];
        let label1 = "";
        let label2 = "";
        let label3 = "";
        let chart_dataset = [];
        let charttype = cOptions.type;
        let options = {
            type: charttype, // bar, line , pie, doughnut, horizontalBar
            data: {
                labels: [],
                datasets: []
            },
            options: {}
        };
        let chart_options = {
            LabelColNmae: 'TA003',
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: cOptions.caption,
            },
            legend: {
                display: true
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        };
        let scale_options = {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    //stepSize: 1, 
                    beginAtZero: true
                }
            }]
        };

        $.ajax({
            type: 'POST',
            //url: invokeURL + webapi,
            url: cOptions.url,
            async: false,
            data: JSON.stringify(cOptions.postData),
            success: function (data) {
               // console.log('data',data);
                data.forEach(function (e) {
                    var lbl = e[Object.keys(e)[0]];
                    if (lbl == null) {
                        lbl = "";
                    }
                    labelarray.push(lbl.toString().toUpperCase());
                    if (e[Object.keys(e)[1]] != null) {
                        valuearray1.push(e[Object.keys(e)[1]]);
                        label1 = Object.keys(e)[1];
                    }
                    if (e[Object.keys(e)[2]] != null) {
                        valuearray2.push(e[Object.keys(e)[2]]);
                        label2 = Object.keys(e)[2];
                    }
                    if (e[Object.keys(e)[3]] != null) {
                        valuearray3.push(e[Object.keys(e)[3]]);
                        label3 = Object.keys(e)[3];
                    }
                    colorarray.push(dynamicColors());
                });
                if (charttype.toUpperCase().indexOf("BAR") >= 0 || charttype == "line") {
                    chart_options.legend = {
                        display: false
                    };
                    chart_options.scales = scale_options;
                }

                if (valuearray2.length > 0) { //mixed chart
                    chart_options.legend = {
                        display: true
                    };
                    chart_dataset.push({
                        label: label1,
                        backgroundColor: 'rgba(0,0,255,0.7)', //blue
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        fill: false,
                        data: valuearray1
                    });
                } else { //single chart
                    chart_dataset.push({
                        label: labelarray,
                        backgroundColor: colorarray,
                        backgroundColor: 'rgba(0,0,255,0.5)', //blue
                        borderColor: '#121FD8',
                        borderWidth: 1,
                        fill: false,
                        data: valuearray1
                    });
                }
                if (valuearray2.length > 0) {
                    chart_dataset.push({
                        label: label2,
                        backgroundColor: 'rgba(0,153,0,0.7)', //green
                        borderColor: '#ffffff',
                        data: valuearray2,
                        fill: false,
                    });
                }
                if (valuearray3.length > 0) {
                    chart_dataset.push({
                        label: label3,
                        type: 'line',
                        backgroundColor: 'rgba(255,255,255,0)',
                        borderColor: 'rgba(255,0,0,1)',
                        data: valuearray3,
                        fill: true,
                        lineTension: 0
                    });
                }
            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });
        options.data.labels = labelarray;
        options.data.datasets = chart_dataset;
        options.options = chart_options;
        return options;
    }

    function lineData(cOptions) {
        let chartColors = [
            'rgb(255, 99, 132)', //red
            'rgb(255, 159, 64)', //orange
            'rgb(255, 205, 86)', //yellow
            'rgb(75, 192, 192)', //green
            'rgb(54, 162, 235)', //blue
            'rgb(153, 102, 255)', //purple
            'rgb(201, 203, 207)' //grey
        ];
        let colorsTransparentize = function (color, opacity) {
            let alpha = opacity === undefined ? 0.5 : 1 - opacity;
            return Color(color).alpha(alpha).rgbString();
        };
        let options = {
            type: cOptions.type, // bar, line , pie, doughnut, horizontalBar
            data: {
                labels: [],
                datasets: []
            },
            options: {}
        };
        let chart_options = {


            title: {
                display: true,
                text: cOptions.caption,
            },
            legend: {
                display: true
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        };
        let scale_options = {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: cOptions.xLabel,
                    max: 20,
                    min: 0,
                    stepSize: 1

                },
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: cOptions.yLabel
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        };
        let labelarray = [];
        let chart_dataset = [];
        let xy = cOptions.xy.point;
        $.ajax({
            type: 'POST',
            url: cOptions.url,
            async: false,
            data: JSON.stringify(cOptions.postData),
            success: function (data) {
                
                let lineData = new Array();
                let point = {
                    x: 0,
                    y: 0
                };
                for (let i = 0; i < xy.length; i++) {
                    lineData[i] = new Array();
                }

                data.forEach(function (e) {
                    if (cOptions.xy['labelAxes'] != '' && cOptions.xy['labelAxes'] != null && cOptions.xy['labelAxes'] != undefined) {
                        let lbl = e[Object.keys(e)[cOptions.xy['labelAxes']]];
                        if (lbl == null) {
                            lbl = "";
                        }
                        labelarray.push(lbl.toString().toUpperCase());
                    }
                    for (let i = 0; i < xy.length; i++) {
                        point = {
                            x: 0,
                            y: 0
                        };
                        point.x = e[xy[i].x];
                        point.y = e[xy[i].y];
                        lineData[i].push(point);
                    }

                });


                chart_options.scales = scale_options;


                for (let i = 0; i < lineData.length; i++) {
                    let color = chartColors[i];
                    chart_dataset.push({
                        label: xy[i].y,
                        backgroundColor: color, //blue
                        borderColor: colorsTransparentize(color),
                        borderWidth: 1,
                        fill: false,
                        data: lineData[i]
                    });
                }

            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        });
        if (cOptions.xy['labels'].length > 0) {
            labelarray = cOptions.xy['labels'];
        }
        options.data.labels = labelarray;
        options.data.datasets = chart_dataset;
        options.options = chart_options;


        return options;
    }
    /**
     *讀取Chart option
     *
     * @param {*} cOptions->參數格式等於defaults
     * @returns option;
     * options={
            type: charttype, // bar, line , pie, doughnut, horizontalBar
            data: {
                labels: [],
                datasets: []
            },
            options: {}
        };
     */

    function getCustomOption(cOptions) {
        let options = {
            type: cOptions.type, // bar, line , pie, doughnut, horizontalBar
            data: {
                labels: [],
                datasets: []
            },
            options: {}
        };
        let chart_options = {


            title: {
                display: true,
                text: cOptions.caption,
            },
            legend: {
                display: true
            }
            /*,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }*/
        };
        let scale_options = {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: cOptions.xLabel,
                  //  max: 20,
                   // min: 0,
                    stepSize: 1

                },
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: cOptions.yLabel
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        };
        let result = ajaxGetData(cOptions.url, cOptions.postData);
        if (cOptions.type.toUpperCase().indexOf("BAR") >= 0 || cOptions.type.toUpperCase() == "LINE") {
            chart_options.legend = {
                display: false
            };
            chart_options.scales = scale_options;
        }
      //  console.log(cOptions.options);
        options.options = $.extend(false, chart_options, cOptions.options);
        //.options = ;
        options.data.labels = dataList(result, cOptions.LabelColNmae);     
        options.data.datasets = datasetsList(result,cOptions.datasets);
        options.data['result']=result;
        console.log('options',options);
        return options;
    }
    var dataList = function (result, col) {
        
        let list=$.map(result, function (item, index) {
            return item[col];
        });
        return list;
    };
    var datasetsList = function (result, datasets) {
        let list = new Array();
       
        datasets.forEach(function (e) {
            let tList = {};
            if ('label' in e) {
                tList['label'] = e.label;
            }
            
            if ('borderColor' in e) {
                //tList['borderColor'] = utils.transparentize(e.borderColor, 1 - Math.abs(v / 50));
				tList['borderColor'] = e.backgroundColor;
            }
            if ('backgroundColor' in e) {
                tList['backgroundColor'] = e.backgroundColor;
            }
            if ('borderWidth' in e) {
                tList['borderWidth'] = e.borderWidth;
            }
            if ('fill' in e) {
                tList['fill'] = e.fill;
            }
            if ('dataColNmae' in e) {
                tList['data'] = dataList(result, e.dataColNmae);
            }
            
            list.push(tList);
        });
       console.log(list);
        return list;
    };
    
    var dynamicColors = function () {
        var colorStr = "";
        var randomArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        //產生一個六位的字串
        for (var i = 0; i < 6; i++) {
            //15是範圍上限，0是範圍下限，兩個函式保證產生出來的隨機數是整數
            colorStr += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
        }

        return '#' + colorStr;
        /*var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgba(" + r + "," + g + "," + b + ",0.5)";
        */
    };
})(jQuery);