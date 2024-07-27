import { listTopInvokeInterfaceUsingGet } from '@/services/jacksonapi-backend/analysisController';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { message } from 'antd';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

/**
 * 接口分析
 */
const InterfaceAnalysis: React.FC = () => {
  const [data, setData] = useState<API.InterfaceInfoVO>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      listTopInvokeInterfaceUsingGet().then((res) => {
        if (res.data) {
          setData(res.data);
        }
      });
    } catch (error: any) {
      message.error('请求失败，', +error.message);
    }
  }, []);

  // 映射
  const chartData = data.map((item) => {
    return {
      value: item.totalNum,
      name: item.name,
    };
  });

  const option = {
    title: {
      text: '调用最多的接口 TOP3',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <PageContainer>
      <ReactECharts
        loadingOption={{
          showLoading: loading,
        }}
        option={option}
      />
    </PageContainer>
  );
};

export default InterfaceAnalysis;
