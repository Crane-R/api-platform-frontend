import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { Avatar, List, message, Skeleton } from 'antd';
import { interfacePage } from '@/services/swagger/interfaceInfoController';

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfoVo>([]);
  const [total, setTotal] = useState<number>(0);

  const loadData = async (current: number = 1, pageSize: number = 10) => {
    setLoading(true);
    try {
      const res = await interfacePage({ current: current, pageSize: pageSize });
      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? 0);
    } catch (error: any) {
      message.error('请求失败' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageContainer>
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item: API.InterfaceInfoVo) => {
          const apiPath = `/interface_info/${item.id}`;
          return (
            <List.Item
              actions={[
                <a key={item.id} href={apiPath}>
                  查看
                </a>,
              ]}
            >
              <List.Item.Meta
                title={<a href={apiPath}>{item.url}</a>}
                description={item.description}
              />
            </List.Item>
          );
        }}
        pagination={{
          showTotal(totalCount: number) {
            return '总共' + totalCount + '个接口';
          },
          pageSize: 10,
          total,
          onChange(page, pageSize) {
            loadData(page, pageSize);
          },
        }}
      />
    </PageContainer>
  );
};

export default Index;
