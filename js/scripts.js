var answers={};//dataset atual, em exibição
var githubAnswers={};
var githubAnswers2={};
var listAnswers={};
var Type = "All";
//var platform = "Both";
//var professionally = "Both";


function createBoxesCharts(id){
	c=document.getElementById("container");
	
	//first - colocar um for para os demais gráficos
	var divRow = document.createElement("div");
	divRow.class="row"
	var divChart=document.createElement("div");
	divChart.id=id;
	linne=document.createElement("hr");
	c.appendChild(linne)
	divRow.appendChild(divChart)
	c.appendChild(divRow)
	
}

function alterMinHeight(id,h){
	var div=document.getElementById(id);
	div.style.minHeight = h;
}

function alterHeight(id,w){
	var div=document.getElementById(id);
	div.style.height = w;
}

function alterW(id,w){
	var div=document.getElementById(id);
	div.style.width = w;
}

function clearBox(elementID){    	
	document.getElementById(elementID).innerHTML = "";
	
	}
	
function share(name){
	if(name=="facebook"){
		window.open('http://www.facebook.com/sharer.php?u=https://mobile--survey.herokuapp.com/', '_blank','toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=500,height=500');
	}else if(name=="twitter"){
		window.open('https://twitter.com/share?url=https://mobile--survey.herokuapp.com/', '_blank','toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=500,height=500');
	}else if(name=="google+"){
		window.open('http://plus.google.com/share?url=https://mobile--survey.herokuapp.com/', '_blank','toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=500,height=500');
	}else if(name=="linked"){
		window.open('http://www.linkedin.com/shareArticle?mini=true&url=https://mobile--survey.herokuapp.com/', '_blank','toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=500,height=500');
	}
}
	

function Semi_Pie(id, t,Series){
	if(id=="#10"){
		//console.log(Series);
		if(Series.length!=5){
			if(Series[0]["name"]!="1"){
				Series.unshift({name: "1", y: 0});
			}
			if(Series[1]["name"]!="2"){
				Series.splice(1, 0, "2");
			}
			if(Series[2]["name"]!="3"){
				Series.splice(2, 0, "3");
			}
			if(Series[3]["name"]!="4"){
				Series.splice(3, 0, "4");
			}
			if(Series[4]["name"]!="5"){
				Series.push({name: "5", y: 0});
			}
			Series[0]["name"]="0 - Definitely not";
			Series[4]["name"]="5 - Definitely yes";
		}
		else{
			delete Series[4]["sliced"];
			delete Series[4]["selected"];
			Series[0]["name"]="0 - Definitely not";
			Series[4]["name"]="5 - Definitely yes";
		}
		
	}
	$(function () {
	            $(id).highcharts({
				    chart: {
				        plotBackgroundColor: null,
				        plotBorderWidth: null,
				        plotShadow: false
				    },
				    title: {
		                align:"left",
	                    text: t
	                },
				    tooltip: {
				        pointFormat: '{point.y} (<b>{point.percentage:.1f}%</b>)'
				    },
				    plotOptions: {
				        pie: {
				            dataLabels: {
				                enabled: true,
				                format: '{point.percentage:.1f} %',
				                style: {
				                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				                }
				            },
				            showInLegend: true,
				            startAngle: -90,
				            endAngle: 90,
				            center: ['50%', '75%']
				        }
				    },
				    series: [{
				        type: 'pie',
				        innerSize: '50%',
				        data: Series
				    }]
		});
	});


}

function PieChartSubTitle(id){
	if(id=="#3"){
		return "In years. <b> Note:</b> This was an open-ended question with numeric answer. However, we plotted below the chart using age range."
	}
	return "";
}

function pieChart(id, t,Series){
	$(function () {
	            $(id).highcharts({
	                chart: {
		                //shadow: true,
	                    plotBackgroundColor: null,
	                    plotBorderWidth: null,
	                    plotShadow: false,
	                    type:"pie"
	                },
	                title: {
		                align:"left",
	                    text: t
	                },
	                subtitle:{
		                align:"left",
	                    text: PieChartSubTitle(id)
	                },
	                tooltip: {
	                    pointFormat: '{series.name}: {point.y} (<b>{point.percentage:.1f}%</b>)'
	                },
	                plotOptions: {
	                     pie: {
						 	allowPointSelect: true,
						 	cursor: 'pointer',
						 	dataLabels: {
				                enabled: true,
				                format: '{point.percentage:.1f} %',
				                style: {
				                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				                }
				            },
							showInLegend: true
                		}
	                },
	                credits: {
			            enabled: false
			        },
	                series: [{
					         name: 'Amount',
					         colorByPoint: true,
					         data: Series
					        }]
	            });
	        });
}

function pieChartWithDrill(id, t,Series, SeriesDrill){
	$(function () {
	            $(id).highcharts({
	                chart: {
		                //shadow: true,
	                    plotBackgroundColor: null,
	                    plotBorderWidth: null,
	                    plotShadow: false,
	                    type:"pie"
	                },
	                title: {
		                align:"left",
	                    text: t
	                },
	                subtitle: {
		                align:"left",
	                    text:"Click in 'Yes' slice to view the platforms"
	                },
	                //subtitle:{
	                //    text: 'mipagina.com'
	                //},
	                tooltip: {
	                    pointFormat: '{point.y} (<b>{point.percentage:.1f}%</b>)'
	                    
	                },
	                plotOptions: {
	                     pie: {
						 	allowPointSelect: true,
						 	cursor: 'pointer',
						 	dataLabels: {
						 		enabled: true,
						 		format: '{point.percentage:.1f} %',
			                    distance: -30,
			                    style: {
			                        fontWeight: 'bold',
			                        color: 'white'
			                    }
			                },
							showInLegend: true
                		}
	                },
	                credits: {
			            enabled: false
			        },
	                series: [{
					         name: 'Experiences',
					         colorByPoint: true,
					         data: Series
					        }],
					drilldown:{
						
						series:[{
							name: 'Platforms',
			                id: 'Yes',
			                data: SeriesDrill
						
						}]
					}
	            });
	        });
}

function barChart(id,t,Series){
	
	$(function () {
    	$(id).highcharts({

	        title: {
		        align:"left",
	            text: t
	        },
	        chart: {
	                inverted: true,
	                //shadow: true,
	                polar: false
	            },
	        xAxis: {
	            categories: Series["x"]
	        },
	        yAxis: {
	            title: {
	                text: 'Amount'
	            }
	        },
	        tooltip: {
	            pointFormat: 'Amount: <b>{point.y} answers</b>'
	        },
	        credits: {
	            enabled: false
	        },
	
	        series: [{
	            type: 'column',
	            colorByPoint: false,
	            data: Series["y"],
	            showInLegend: false,
	            dataLabels: {
	                enabled: true,
	                color: '#FFFFFF',
	                align: 'right',
	                format: '{point.y}', 
	                //y: 10, // 10 pixels down from the top
	                style: {
	                    fontSize: '12px',
	                    fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        }]

    });
	});
}

function getSeriesTo8(Series,id, type){
	//Coloquei 13, mas podeia ser Object.keys(Series).length caso tenham tam diferentes
	id=id.replace("#", "");
	id+=".";//Pega o id e transforma no formato da question na planilha, ex: #9->9. e depois no for fica 9.1 até 9.13
	listResul=[];
	for(i=1;i<=Object.keys(Series).length; i++){
		listResul.push(Series[id+i][type]);
	}
	//console.log(listResul);
	return listResul;
}

function getSeriesToGroupColumnChart(id, Series){
	if(id=="#5" || id=="#11") {
		return [{
		            name: "Not at all influential",
		            data: [Series["Technical_Aspects"]["Not at all influential"],Series["Business_Aspects"]["Not at all influential"],Series["Social_Aspects"]["Not at all influential"], Series["Individual_Aspects"]["Not at all influential"]]
		        }, {
		            name: 'Not influential',
		            data: [Series["Technical_Aspects"]["Not influential"],Series["Business_Aspects"]["Not influential"],Series["Social_Aspects"]["Not influential"], Series["Individual_Aspects"]["Not influential"]]
		
		        }, {
		            name: 'Somewhat influential',
		            data: [Series["Technical_Aspects"]["Somewhat influential"],Series["Business_Aspects"]["Somewhat influential"],Series["Social_Aspects"]["Somewhat influential"], Series["Individual_Aspects"]["Somewhat influential"]]
		
		        }, {
		            name: 'Influential',
		            data: [Series["Technical_Aspects"]["Influential"],Series["Business_Aspects"]["Influential"],Series["Social_Aspects"]["Influential"], Series["Individual_Aspects"]["Influential"]]
		
		        }, {
		            name: 'Very influential',
		            data: [Series["Technical_Aspects"]["Very influential"],Series["Business_Aspects"]["Very influential"],Series["Social_Aspects"]["Very influential"], Series["Individual_Aspects"]["Very influential"]]
		
		        }];
		}else if(id=="#7"){
				return [{
				            name: "Defined",
				            data: [Series["I had already an idea"]["Defined"],Series["I had already a team"]["Defined"],Series["I had already a technology"]["Defined"]]
				        }, {
				            name: 'Partially defined',
				            data: [Series["I had already an idea"]["Partially defined"],Series["I had already a team"]["Partially defined"],Series["I had already a technology"]["Partially defined"]]
				
				        }, {
				            name: 'Undefined',
				            data: [Series["I had already an idea"]["Undefined"],Series["I had already a team"]["Undefined"],Series["I had already a technology"]["Undefined"]]
				
				        }];
				
		
	}else if(id=="#8"){
		return [{	name: "Never",
					data: getSeriesTo8(Series, id,"Never")
				}, {
					name:"Rarely",
					data:getSeriesTo8(Series, id,"Rarely")
				}, {
					name:"Occasionally",
					data:getSeriesTo8(Series, id,"Occasionally")
				}, {
					name:"Frequently",
					data:getSeriesTo8(Series,id,"Frequently")
				}, {
					name:"Very Frequently",
					data:getSeriesTo8(Series, id,"Very Frequently")
				}];
		
	}
		
}
function getCategoriesTogroupColumnChart(id){
	
	if(id=="#8"){
		return ['(1) I got help from other GGJ jammers', '(2) I helped other jammers in GGJ', '(3) I got help from GGJ mentors/organizers'];
		}
	
}

function getSubTitleToGroupColumnChart(id){
	if(id=="#8"){
		return "(1) I got help from other GGJ jammers (e.g. ideas and games from other groups). <br />(2) I helped other jammers in GGJ (e.g. ideas, games and technical support from other groups).<br />(3) I got help from GGJ mentors/organizers (e.g. ideas, games and technical support from other groups).";
	}
}

function groupColumnChart(id,t,Series){
	//console.log(Series);
	
	$(function () {
		$(id).highcharts({
	        chart: {
		        //shadow: true,
	            type: 'column'
	        },
	        title: {
		        align:"left",
	            text: t
	        },
	        xAxis: {
	            categories: getCategoriesTogroupColumnChart(id),
	            crosshair: true
	        },
	        subtitle: {
		        align:"left",
	            text: getSubTitleToGroupColumnChart(id)           
        	},
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Amount'
	            }
	        },
	        tooltip: {
	            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	                '<td style="padding:0"><b>{point.y} </b></td></tr>',
	            footerFormat: '</table>',
	            shared: true,
	            useHTML: true
	        },
	        plotOptions: {
	            column: {
	                pointPadding: 0.1,
	                borderWidth: 0
	            }
	        },
	        credits: {
			            enabled: false
			        },
	        series: getSeriesToGroupColumnChart(id, Series)
	        
	    });
	});	
}
function getSeriesToBarStacked(Series, id, type){
	
	//Coloquei 13, mas podeia ser Object.keys(Series).length caso tenham tam diferentes
	id=id.replace("#", "");
	id+=".";//Pega o id e transforma no formato da question na planilha, ex: #9->9. e depois no for fica 9.1 até 9.13
	listResul=[];
	for(i=1;i<=14; i++){
		listResul.push(Series[id+i][type]);
	}
	return listResul;
	
}



function columnChart(id, t, Series){
	$(function () {
	    $(id).highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
		        align:"left",
	            text: t
	        },
	        xAxis: {
	            type: 'category',
	            labels: {
	                rotation: -45,
	                style: {
	                    fontSize: '13px',
	                    fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Amount'
	            }
	        },
	        legend: {
	            enabled: false
	        },
	        tooltip: {
	            pointFormat: 'Amount: <b>{point.y} answers</b>'
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: 'Population',
	            data:Series,
	            dataLabels: {
	                enabled: true,
	                rotation: -90,
	                color: '#FFFFFF',
	                align: 'right',
	                format: '{point.y}', // one decimal
	                y: 10, // 10 pixels down from the top
	                style: {
	                    fontSize: '13px',
	                    fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        }]
	    });
	});
}


function ColumnWithRotatedLabels(id, t){
	$(function () {
		$(id).highcharts({
		    chart: {
		        type: 'column'
		    },
		    title: {
			    align:"left",
		        text: t
		    },
		    subtitle: {
		       align:"left",
		        text: 'City, country. <b>Note</b>: This was an open-ended question. Then, we use Nominatim Geocoding service to specify the country in the open responses. It was possible to identify, in 1716 open responses, the country that the respondent participated in the event. As a result, we identified 101 different countries. See below the countries most mentioned by the respondents.'
		    },
		    xAxis: {
		        type: 'category',
		        labels: {
		            rotation: -45,
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Amount'
		        }
		    },
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		        pointFormat: 'Answers: <b>{point.y} </b>'
		    },
		    series: [{
		        name: 'Population',
		        data: [
		            ['USA', 398],
		            ['Brazil', 122],
		            ['United Kingdom', 105],
		            ['France', 81],
		            ['Canada', 69],
		            ['Spain', 59],
		            ['Mexico', 50],
		            ['Argentina', 47],
		            ['Turkey', 44],
		            ['Italy', 44],
		            ['The Netherlands', 38],
		            ['Germany', 38],
		            ['India', 27],
		            ['Colombia', 25],
		            ['Philippines', 21],
		            ['Australia', 20],
		            ['Poland', 20],
		            ['Russia', 20],
		            ['Ukraine', 18],
		            ['Israel', 18]
		        ],
		         dataLabels: {
		            enabled: true,
		            rotation: -90,
		            color: '#000000',
		            align: 'right',
		            format: '{point.y}', 
		            y: -30, // 10 pixels down from the top
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    }]
		});
	});
}


function filters(linha){
	if(Type != "All"){
		
		if(answers[linha]["7."]==null || answers[linha]["7."]=="" ||answers[linha]["7."]!=Type){//repetido
			return false;
		}
	}
	/*
	if(platform != "Both"){
		if(answers[linha]["4."]==null || answers[linha]["4."]=="" || answers[linha]["4."]!=platform){
			return false;
		}
	}
	
	if(professionally != "Both"){
		if(answers[linha]["2."]==null || answers[linha]["2."]=="" || answers[linha]["2."].indexOf(professionally) == -1){
			return false;
		}
	}*/
	
	return true;
}

function outros(question,key){
	
	if (question=="1." && key!="Male" && key!="Female" && key!= "Prefer not to say"){
			return true;
		}
	
	if (question=="7." && key!="No, I haven't" && key!="Yes,  professionally (employed)" && key!= "Yes, as an indie developer (Independent/Self-employed, small commercial or other small development units)" && key!= "Yes, as a hobbyist" && key !="Yes, as a student"){
			return true;
		}
	if (question=="10." && key!="Mentors/organizers" && key!="Other jammers in the same location" && key!= "People not participating in the jam" && key!= "People participating in the jam, but in other location" && key !="Online sources (websites, online documentation, etc.)"){
			return true;
		}	
	return false;
	}

function countQuestion3(column){
	
	data={"Less than 18 years":0, "18-21":0, "22-25":0, "26-30":0, "31-35":0, "36-40":0, "41-45": 0, "46-50":0, "More than 50 years": 0};
	
	for (var i = 0; i < answers.length; i++){
			if(answers[i][column]!=null && answers[i][column]!=""){
				if(filters(i)){
					if(answers[i][column]>150);//algumas pessoas informaram o ano de nascimento, essas respostas serão descartadas.
					else if(answers[i][column]<18){
						data["Less than 18 years"]+=1;
					}
					else if(answers[i][column]>=18 &&  answers[i][column]<=21){
						data["18-21"]+=1;
					}else if(answers[i][column]>=22 &&  answers[i][column]<=25){
						data["22-25"]+=1;
					}else if(answers[i][column]>=26 &&  answers[i][column]<=30){
						data["26-30"]+=1;
					}else if(answers[i][column]>=31 &&  answers[i][column]<=35){
						data["31-35"]+=1;
					}else if(answers[i][column]>=36 &&  answers[i][column]<=40){
						data["36-40"]+=1;
					}else if(answers[i][column]>=41 &&  answers[i][column]<=45){
						data["41-45"]+=1;
					}else if(answers[i][column]>=46 &&  answers[i][column]<=50){
						data["46-50"]+=1;
					}else if(answers[i][column]>=51){
						data["More than 50 years"]+=1;
					}
				}
					
			}
	
	}
	return data;
	
} 

function getData(column,type){
	var data={};
	if(type=="Pie"){
		for (var i = 0; i < answers.length; i++){
			if(answers[i][column]!=null && answers[i][column]!=""){
				if(filters(i)){
					if((column=="1.") && outros(column,answers[i][column])){
						if(data.hasOwnProperty("Others (Non-binary, Transgender, etc.)")){//opção outras
						data["Others (Non-binary, Transgender, etc.)"]+=1;
						}else{
							data["Others (Non-binary, Transgender, etc.)"]=1;
						}
					}
					else if((column=="7.") && outros(column,answers[i][column])){
						if(data.hasOwnProperty("Others")){//opção outras
						data["Others"]+=1;
						}else{
							data["Others"]=1;
						}
					}else if((column=="10.") && outros(column,answers[i][column])){
						if(data.hasOwnProperty("Others(e.g. No one, etc.)")){//opção outras
						data["Others(e.g. No one, etc.)"]+=1;
						}else{
							data["Others(e.g. No one, etc.)"]=1;
						}
					}
					else if(column=="3."){
						data=countQuestion3(column);//contagem dos intervalos de idade
					}
					else if(data.hasOwnProperty(answers[i][column])){
						data[answers[i][column]]+=1;
					}else{
						data[answers[i][column]]=1;
					}
				}
			}
	    }
	}else if(type=="Column" || type=="Bar"){
		for (var i = 0; i < answers.length; i++){
			if(answers[i][column]!=null && answers[i][column]!=""){
				if(filters(i)){
					Splits=answers[i][column].split(",");
					for(var j=0;j<Splits.length;j++){
						if(Splits[j].charAt(0)==" "){
							Splits[j] = Splits[j].substr(1);
						}
						if(data.hasOwnProperty(Splits[j])){
						data[Splits[j]]+=1;
						}else{
							data[Splits[j]]=1;
						}
					}
				}
				
			}
			
		}
		var others=0;//melhorar depois
		for (var key in data) {
			if(data[key]==1){
				others++;
				delete data[key];
			}
		}
		if (others!=0){
			data["Others"]=others;
		}
		
		
	}else if(type=="groupColumnChart"){
		var dataTemp, columnName;
		if(column=="8."){
			aspects=["8.1","8.2", "8.3"];
			for(var i=0;i<aspects.length;i++){
				columnName=aspects[i];
				//console.log(columnName);
				dataTemp={"Never": 0, "Rarely":0, "Occasionally": 0, "Frequently":0, "Very Frequently": 0};
				
				for (var j = 0; j < answers.length; j++){
					if(answers[j][columnName]!=null && answers[j][columnName]!=""){
						if(filters(j)){
							dataTemp[answers[j][columnName]]+=1;
						}
					}
				}
				//console.log(dataTemp);
				data[aspects[i]]=dataTemp;
			}
		
			//console.log(data);
		}
		
	}
	
	return data;
}

	
function loadData(column, type){
	var Data=getData(column,type);//Retorna a contagem
	var Series=[];
	if(type=="Pie"){//preparar dados para grafico pizza
		var nameKeySliced="";
		var aux=0;
		/**if(column=="5.1"){
			Data=question_5(Data);
		}
		if(column=="6.1"){
			Data=question_6(Data);
		}*/
		for (var key in Data){//guarda a key de maior valor
			if (Data[key]>aux){
				aux=Data[key];
				nameKeySliced=key;
			}
		} 
		
		for (var key in Data){//cria os dados do grafico
			//if outros(key){
			//	Series.push({"name":"Outros", "y":Data[key]});
			//}
		    if(key==nameKeySliced){
			   Series.push({
				   name:key,
				   y:Data[key],
				   sliced: true,
		           selected: true
			   });
		   }
		   else{
				Series.push({"name":key, "y":Data[key]});
			   	}
		   	}
	} else if(type=="Column"){//prepara o grafico de coluna
		Series=[];
		for(var key in Data){
			Series.push([key,Data[key]]);
		}
		
	}else if(type=="Bar"){
		
		var Series={"x":[],"y":[]};
		for(var key in Data){
			Series["x"].push(key);
			Series["y"].push(Data[key]);
		}
	}else if(type=="groupColumnChart"){
		Series=Data;
	}
	return Series;
}

function readCsv(check){
	var url = window.location.protocol+"//"+window.location.hostname+window.location.pathname.toString().replace("index.html", "");
	url=url+"GGJ_2020_Survey.csv";
	
	Papa.parse(url, {//read github csv
					download: true,
					header: true,
					dynamicTyping: true,
					delimiter:"|",
					complete: function(results) {
						if(check){
							answers = results.data;
							//console.log("Finished:", answers);
							All();
						}
						//console.log("Finished:", results);
				        githubAnswers=results.data;
				      	}	
		    		});
	
}




function makeVisibleDatasetOptions(){
	document.getElementById("dataset").style.visibility="visible";
	document.getElementById("formDataset").style.visibility="visible";
}

function start(){
	readCsv(true);
}

function createTable(id, t){
	 // Create table.
	 
	 
	c=document.getElementById("container");
	linne=document.createElement("hr");
	c.appendChild(linne)
	
	
	var title = document.createElement('h4');
	title.innerHTML = t;
	c.appendChild(title);
	
	if(id=="9"){
		var subtitle = document.createElement('h6');
		subtitle.innerHTML = "How did you get help (e.g. from local organizers/mentors or other jammers)? Also, how did you help other people (e.g. ideas/ features or technical solutions)? How did they support you or your teammates to colaborate during the jam? Please, give us examples.";
		c.appendChild(subtitle);
	
	} 
	
	var divRow = document.createElement("div");
	divRow.class="row"
	var divChart=document.createElement("div");
	divChart.id=id;
	divChart.style.width="100%";
    divChart.style.height="300px";
    divChart.style.overflow= "auto"
	
	divRow.appendChild(divChart)
	c.appendChild(divRow) 
	 
	 
	
	
    var table = document.createElement('table');
    table.style.width="100%";
    empty=0;
    // Insert New Row for table at index 'i'.
    for (i=0;i<Object.keys(answers).length;i++){
		    if(answers[i][id+"."]!=null && answers[i][id+"."]!="" && answers[i][id+"."]!=" " && filters(i)){
			    var row = table.insertRow(i-empty);
			    
			    if (((i+1-empty)%2)===0){
			    	row.bgColor="#DCDCDC";
			    }
			    else{
				    row.bgColor="#F5F5F5";
			    }
			    
				var rowcol1 = row.insertCell(0);
				rowcol1.style.paddingTop="6px";
				rowcol1.style.paddingBottom="6px";
				rowcol1.innerHTML = answers[i][id+"."];
			}else{
				empty++;
			}
		
    }
    
    divChart.appendChild(table);
}


function setSelect(id, valor){
	if(id=="type"){
		//console.log(valor);
		if(valor=="None"){
			Type="No, I haven't";
		}else if(valor=="Yes,  professionally"){
			Type="Yes,  professionally (employed)";
		}else if(valor=="Yes,  as an indie developer"){
			Type="Yes, as an indie developer (Independent/Self-employed, small commercial or other small development units)";
		}else if(valor=="Yes, as a hobbyist"){
			Type="Yes, as a hobbyist";
		}else if(valor=="Yes, as a student"){
			Type="Yes, as a student";
		}else{
			Type="All";
		}
		//console.log(Type);
	}// se tiver mais filtro adicionar condições aqui e em filters(?)
	All();
		
}


function All(){
	//primeiro ler os dados todos
	var Series;// Series_drilldown;
	
	
	clearBox("container");
	
	createBoxesCharts("1");
	alterHeight("1","350px")
	Series=loadData("1.", "Pie");
	Semi_Pie("#1", "1 - Gender?", Series);
	
	
	createBoxesCharts("2");
	alterHeight("2","500px");
	ColumnWithRotatedLabels("#2",  "2 - Where did you attend GGJ 2020?");//não tem loadData pq os valores foram fixos e não processados da planilha
	//createTable("3",  "3 - Age?");//o . do 2 adicionei depois
	
	createBoxesCharts("3");
	alterHeight("3","350px")
	Series=loadData("3.", "Pie");
	pieChart("#3", "3 - Age?", Series);

	
	createBoxesCharts("4");
	alterHeight("4","350px")
	Series=loadData("4.", "Pie");//carrega os dados necessarios para grafico de pizza da questao 4. 
	pieChart("#4", "4 - What is the highest degree or level of school you have completed?", Series);//plot o grafico na div id 4 com titulo 
	
	createBoxesCharts("5");
	alterHeight("5","350px")
	Series=loadData("5.", "Pie"); 
	pieChart("#5", "5 - How long have you been involved with game development?", Series);
	
	createBoxesCharts("6");
	alterHeight("6","300px")
	Series=loadData("6.", "Pie"); 
	pieChart("#6", "6. Have you ever participated in a game jam before? If so, how many?", Series);

	createBoxesCharts("7");
	alterHeight("7","350px")
	Series=loadData("7.", "Pie");//carrega os dados necessarios para grafico de pizza da questao 3. 
	pieChart("#7", "7 - Have you ever been involved with game development before the Global Game Jam 2018?", Series);
	
	createBoxesCharts("8");
	alterMinHeight("8","500px");
	Series=loadData("8.", "groupColumnChart");
	groupColumnChart("#8","8 - How did you seek/provide help during the event? ", Series);


	createTable("9",  "9 - Can you give us more details about your previous answer?");
	
	
	createBoxesCharts("10");
	alterHeight("10","300px")
	Series=loadData("10.", "Pie"); 
	pieChart("#10", "10 -Besides your teammates, where or with whom did you interact the most to get help?", Series);


	
	
	}