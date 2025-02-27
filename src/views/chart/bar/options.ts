import * as echarts from 'echarts'

export const getOptions: any = () => {
  const option = {
    backgroundColor: '#323a5e',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '14%',
      top: '16%',
      containLabel: true,
    },
    legend: {
      data: ['1', '2', '3'],
      right: 10,
      top: 12,
      textStyle: {
        color: '#fff',
      },
      itemWidth: 12,
      itemHeight: 10,
      // itemGap: 35
    },
    xAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      axisLine: {
        lineStyle: {
          color: 'white',
        },
      },
      axisLabel: {
        // interval: 0,
        // rotate: 40,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
        },
      },
    },

    yAxis: {
      type: 'value',
      max: '1200',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'white',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
        },
      },
      axisLabel: {},
    },
    dataZoom: [
      {
        show: true,
        height: 12,
        xAxisIndex: [0],
        bottom: '8%',
        start: 10,
        end: 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
          color: '#d3dee5',
        },
        textStyle: {
          color: '#fff',
        },
        borderColor: '#90979c',
      },
      {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: '1',
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#fccb05',
              },
              {
                offset: 1,
                color: '#f5804d',
              },
            ]),
            barBorderRadius: 12,
          },
        },
        data: [400, 400, 300, 300, 300, 400, 400, 400, 300],
      },
      {
        name: '2',
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#8bd46e',
              },
              {
                offset: 1,
                color: '#09bcb7',
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: [400, 500, 500, 500, 500, 400, 400, 500, 500],
      },
    ],
  }
  return option
}
