import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { Button, Card, Descriptions, Divider, Form, message } from 'antd';
import {
  interfaceInvoke,
  interfaceSelectOne,
} from '@/services/swagger/interfaceInfoController';
import { useParams } from '@@/exports';
import TextArea from 'antd/es/input/TextArea';
import { getInitialState } from '@/app';
import { getSign } from '@/services/swagger/userController';



/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfoVo>();
  const [invokeRes, setInvokeRes] = useState<any>([]);
  const [invokeLoading, setInvokeLoading] = useState(false);
  const params = useParams();

  const loadData = async () => {
    if (!params.id) {
      message.error('参数id不存在');
    }
    setLoading(true);
    try {
      const res = await interfaceSelectOne({
        interfaceId: Number(params.id),
      });
      setData(res.data);
    } catch (error: any) {
      message.error('请求失败' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onFinish = async (requestParams: object) => {
    const currentUser = await getInitialState();
    if (!params.id) {
      message.error('参数不存在');
      return;
    }
    setInvokeLoading(true);

    const timestamp = new Date().getTime();
    try {
      const nonce = timestamp + Math.random().toString();
      const body = {
        interfaceId: data?.id,
        url: data?.url,
        //无视这个错误
        requestParams: encodeURIComponent(requestParams.requestParams),
      };

      const sign = await getSign({
        accessKey: currentUser?.loginUser?.accessKey,
        timestamp: timestamp,
        nonce: nonce,
        data: body,
      });

      const res = await interfaceInvoke(
        {
          interfaceId: data?.id,
          url: data?.url,
          //无视这个错误
          requestParams: encodeURIComponent(requestParams.requestParams),
        },
        {},
        currentUser?.loginUser?.accessKey,
        timestamp,
        nonce,
        sign?.data,
      );
      message.success('请求成功，剩余调用次数：'+res.data.remainInvokeCount);
      setInvokeRes(decodeURIComponent(res.data.result));
    } catch (error: any) {
      message.error('操作失败' + error.message);
    }
    setInvokeLoading(false);
  };

  return (
    <PageContainer title="查看接口文档">
      <Card>
        {data ? (
          <Descriptions title={data.url} column={1} extra={<Button>调用</Button>}>
            <Descriptions.Item label="id">{data.id}</Descriptions.Item>
            <Descriptions.Item label="description">{data.description}</Descriptions.Item>
            <Descriptions.Item label="method">
              {data.method === 0 ? 'POST' : 'GET'}
            </Descriptions.Item>
            <Descriptions.Item label="requestParams">{data.requestParams}</Descriptions.Item>
            <Descriptions.Item label="requestHeader">{data.requestHeader}</Descriptions.Item>
            <Descriptions.Item label="responseHeader">{data.responseHeader}</Descriptions.Item>
            <Descriptions.Item label="status">{data.status ? '正常' : '关闭'}</Descriptions.Item>
            <Descriptions.Item label="createTime">{data.createTime}</Descriptions.Item>
          </Descriptions>
        ) : (
          <>接口不存在</>
        )}
      </Card>
      <Divider />
      <Card title="在线测试">
        <Form layout="vertical" name="invoke" onFinish={onFinish}>
          <Form.Item label="请求参数（requestParams）" name="requestParams">
            <TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />
      <Card title="调用结果" loading={invokeLoading}>
        {invokeRes}
      </Card>
    </PageContainer>
  );
};

export default Index;
