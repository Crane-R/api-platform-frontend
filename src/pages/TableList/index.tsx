import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import {
  interfaceAdd,
  interfaceDelete, interfaceOffline,
  interfaceOnLine,
  interfacePage,
  interfaceUpdate,
} from '@/services/swagger/interfaceInfoController';
import CreateModal from '@/pages/TableList/components/CreateModal';
import UpdateModal from '@/pages/TableList/components/UpdateModal';

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.InterfaceInfoVo>();
  const [selectedRowsState, setSelectedRows] = useState<API.InterfaceInfoVo[]>([]);

  /**
   * @en-US Add node
   * @zh-CN 添加节点
   * @param fields
   */
  const handleAdd = async (fields: API.InterfaceAddRequest) => {
    const hide = message.loading('正在添加');
    try {
      await interfaceAdd({
        ...fields,
      });
      hide();
      message.success('添加成功');
      handleModalOpen(false);
      return true;
    } catch (error) {
      hide();
      message.error('添加失败' + error);
      return false;
    }
  };

  /**
   * @en-US Update node
   * @zh-CN 更新节点
   *
   * @param fields
   */
  const handleUpdate = async (fields: API.InterfaceInfoVo) => {
    if(!currentRow){
      return
    }
    const hide = message.loading('Configuring');
    try {
      await interfaceUpdate({
        id:currentRow.id,
        ...fields,
      });
      hide();
      message.success('修改成功');
      return true;
    } catch (error) {
      hide();
      message.error('修改失败');
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param record
   */
  const handleRemove = async (record: API.InterfaceInfoVo) => {
    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      await interfaceDelete({
        interfaceId: record.id,
      } as API.interfaceDeleteParams);
      hide();
      message.success('删除成功');
      actionRef.current?.reload();
      return true;
    } catch (error) {
      hide();
      message.error('删除失败');
      return false;
    }
  };

  const handleOnline = async (id: number) => {
    const hide = message.loading('发布中');
    try {
      await interfaceOnLine({
        interfaceId: id,
      });
      hide();
      message.success('操作成功');
      actionRef.current?.reload();
      return true;
    } catch (error) {
      hide();
      message.error('操作失败');
      return false;
    }
  };

  const handleOffline = async (id: number) => {
    const hide = message.loading('下线中');
    try {
      await interfaceOffline({
        interfaceId: id,
      });
      hide();
      message.success('操作成功');
      actionRef.current?.reload();
      return true;
    } catch (error) {
      hide();
      message.error('操作失败');
      return false;
    }
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '接口地址',
      dataIndex: 'url',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'number',
      hideInForm:true
      // renderText: (val: string) => `${val}${'万'}`,
    },
    {
      title: '方式',
      dataIndex: 'method',
      valueEnum: {
        0: {
          text: 'POST',
          status: 'Default',
        },
        1: {
          text: 'GET',
          status: 'Default',
        },
      },
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '请求参数',
      dataIndex: 'requestParams',
      valueType: 'jsonCode',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '请求头',
      dataIndex: 'requestHeader',
      valueType: 'jsonCode',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '响应头',
      dataIndex: 'responseHeader',
      valueType: 'jsonCode',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm:true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '开启',
          status: 'Default',
        },
      },
    },
    {
      title: '创建日期',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInForm:true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        record.status === 0 ? (
          <Button
            type="text"
            color="blue"
            key="online"
            onClick={() => {
              handleOnline(record.id);
            }}
          >
            上线
          </Button>
        ) : null,
        record.status === 1 ? (
          <Button
            key="offline"
            type="text"
            danger={true}
            onClick={() => {
              handleOffline(record.id);
            }}
          >
            下线
          </Button>
        ) : null,

        <Button
          type="text"
          key="update"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </Button>,
        <Button
          danger={true}
          key="delete"
          type="text"
          onClick={() => {
            const res = handleRemove(record);
          }}
        >
          删除
        </Button>,
      ],
    },
  ];
  // @ts-ignore
  // @ts-ignore
  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.interfacePageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (params: API.interfacePageParams, sort) => {
          const res = await interfacePage({
            ...params,
          });
          console.log(res);
          if (res?.data) {
            return {
              data: res.data.records || [],
              success: true,
              total: res.data.total,
            };
          }
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={'新建规则'}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.RuleListItem);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: '规则名称为必填项',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
      <UpdateModal
        columns={columns}
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        visible={updateModalOpen}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
      <CreateModal
        columns={columns}
        onCancel={() => {
          handleModalOpen(false);
        }}
        onSubmit={(values) => {
          return handleAdd(values);
        }}
        visible={createModalOpen}
      />
    </PageContainer>
  );
};
export default TableList;
