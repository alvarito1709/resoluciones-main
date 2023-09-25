

$(function () {
    $('#box1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'Gráfica de resoluciones por tipo de oferta'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                        events: {
                            click: function(){
                                
                            },

                            mouseOver: function(e) {
                                
                                $(this.dataLabel).stop(true,true);
                                this.slice(true, true, true);

                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                }
                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX + translation.translateX,
                                    translateY: this.dataLabel.translateY + translation.translateY,
                                };
                                console.log(dlTranslation);
                                this.dataLabel.animate(dlTranslation);
                                this.connector.animate(translation);

                            },
                            mouseOut: function() {
                                $(this.dataLabel).stop(true,true);
                                this.slice(false, true, true);
                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                };
                            
                                


                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX - translation.translateX,
                                    translateY: this.dataLabel.translateY - translation.translateY
                                };
                                console.log(dlTranslation);
                                translation = {
                                    translateX: 0,
                                    translateY: 0
                                }
                               this.dataLabel.animate(dlTranslation);
                                
                                this.connector.animate(translation);
                            }
                        }
                    }
            }
        },
        series: [{
            type: 'pie',
            name: 'Resolucion',
            data: [
                ['EDUCACIÓN TECNICA PROFESIONAL',   45.0],
               
                {
                    name: 'SOCIO HUMANISTICA',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['ARTISTICA ESPECIFICA',    8.5],
                ['CAPACITACIÓN LABORAL',     6.2],
               
            ]
        }]
    });
});






$(function () {
    $('#ETPGRAF').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'ED. TEC. PROFESIONAL'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                        events: {
                            click: function(){
                                
                            },

                            mouseOver: function(e) {
                                
                                $(this.dataLabel).stop(true,true);
                                this.slice(true, true, true);

                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                }
                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX + translation.translateX,
                                    translateY: this.dataLabel.translateY + translation.translateY,
                                };
                                console.log(dlTranslation);
                                this.dataLabel.animate(dlTranslation);
                                this.connector.animate(translation);

                            },
                            mouseOut: function() {
                                $(this.dataLabel).stop(true,true);
                                this.slice(false, true, true);
                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                };
                            
                                


                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX - translation.translateX,
                                    translateY: this.dataLabel.translateY - translation.translateY
                                };
                                console.log(dlTranslation);
                                translation = {
                                    translateX: 0,
                                    translateY: 0
                                }
                               this.dataLabel.animate(dlTranslation);
                                
                                this.connector.animate(translation);
                            }
                        }
                    }
            }
        },
        series: [{
            type: 'pie',
            name: 'Resolucion',
            
            data: [
                {  name: 'POR VENCER',
                y: 5,
              
                sliced: false,
                selected: false,
                color:"yellow"},

                {  name: 'CON TIEMPO',
                y: 65,
                sliced: true,
                selected: true,
                color:"green"},
               
                {
                    name: 'VENCIDAS',
                    y: 2,
                    sliced: false,
                    selected: false,
                    color:"red"
                },
                
               
            ]
        }]
    });
});
$(function () {
    $('#CPGRAF').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'CAPACITACIÓN LABORAL'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                        events: {
                            click: function(){
                                
                            },

                            mouseOver: function(e) {
                                
                                $(this.dataLabel).stop(true,true);
                                this.slice(true, true, true);

                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                }
                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX + translation.translateX,
                                    translateY: this.dataLabel.translateY + translation.translateY,
                                };
                                console.log(dlTranslation);
                                this.dataLabel.animate(dlTranslation);
                                this.connector.animate(translation);

                            },
                            mouseOut: function() {
                                $(this.dataLabel).stop(true,true);
                                this.slice(false, true, true);
                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                };
                            
                                


                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX - translation.translateX,
                                    translateY: this.dataLabel.translateY - translation.translateY
                                };
                                console.log(dlTranslation);
                                translation = {
                                    translateX: 0,
                                    translateY: 0
                                }
                               this.dataLabel.animate(dlTranslation);
                                
                                this.connector.animate(translation);
                            }
                        }
                    }
            }
        },
        series: [{
            type: 'pie',
            name: 'Resolucion',
            
            data: [
                {  name: 'POR VENCER',
                y: 30,
              
                sliced: false,
                selected: false,
                color:"yellow"},

                {  name: 'CON TIEMPO',
                y: 50,
                sliced: true,
                selected: true,
                color:"green"},
               
                {
                    name: 'VENCIDAS',
                    y: 12.8,
                    sliced: false,
                    selected: false,
                    color:"red"
                },
                
               
            ]
        }]
    });
});
$(function () {
    $('#ARGRAF').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'ARTISTICA ESPECIFICA'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                        events: {
                            click: function(){
                                
                            },

                            mouseOver: function(e) {
                                
                                $(this.dataLabel).stop(true,true);
                                this.slice(true, true, true);

                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                }
                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX + translation.translateX,
                                    translateY: this.dataLabel.translateY + translation.translateY,
                                };
                                console.log(dlTranslation);
                                this.dataLabel.animate(dlTranslation);
                                this.connector.animate(translation);

                            },
                            mouseOut: function() {
                                $(this.dataLabel).stop(true,true);
                                this.slice(false, true, true);
                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                };
                            
                                


                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX - translation.translateX,
                                    translateY: this.dataLabel.translateY - translation.translateY
                                };
                                console.log(dlTranslation);
                                translation = {
                                    translateX: 0,
                                    translateY: 0
                                }
                               this.dataLabel.animate(dlTranslation);
                                
                                this.connector.animate(translation);
                            }
                        }
                    }
            }
        },
        series: [{
            type: 'pie',
            name: 'Resolucion',
            
            data: [
                {  name: 'POR VENCER',
                y: 12.8,
              
                sliced: false,
                selected: false,
                color:"yellow"},

                {  name: 'CON TIEMPO',
                y: 50,
                sliced: true,
                selected: true,
                color:"green"},
               
                {
                    name: 'VENCIDAS',
                    y: 35,
                    sliced: false,
                    selected: false,
                    color:"red"
                },
                
               
            ]
        }]
    });
});
$(function () {
    $('#SHGRAF').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'SOCIO HUMANISTICA'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                        events: {
                            click: function(){
                                
                            },

                            mouseOver: function(e) {
                                
                                $(this.dataLabel).stop(true,true);
                                this.slice(true, true, true);

                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                }
                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX + translation.translateX,
                                    translateY: this.dataLabel.translateY + translation.translateY,
                                };
                                console.log(dlTranslation);
                                this.dataLabel.animate(dlTranslation);
                                this.connector.animate(translation);

                            },
                            mouseOut: function() {
                                $(this.dataLabel).stop(true,true);
                                this.slice(false, true, true);
                                var translation = this.slicedTranslation||{
                                    translateX: 0,
                                    translateY: 0
                                };
                            
                                


                                var dlTranslation = {
                                    translateX: this.dataLabel.translateX - translation.translateX,
                                    translateY: this.dataLabel.translateY - translation.translateY
                                };
                                console.log(dlTranslation);
                                translation = {
                                    translateX: 0,
                                    translateY: 0
                                }
                               this.dataLabel.animate(dlTranslation);
                                
                                this.connector.animate(translation);
                            }
                        }
                    }
            }
        },
        series: [{
            type: 'pie',
            name: 'Resolucion',
            
            data: [
                {  name: 'POR VENCER',
                y: 12.8,
              
                sliced: false,
                selected: false,
                color:"yellow"},

                {  name: 'CON TIEMPO',
                y: 50,
                sliced: true,
                selected: true,
                color:"green"},
               
                {
                    name: 'VENCIDAS',
                    y: 12.8,
                    sliced: false,
                    selected: false,
                    color:"red"
                },
                
               
            ]
        }]
    });
});
