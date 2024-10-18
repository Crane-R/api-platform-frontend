import { type ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import { Modal } from 'antd';

export type Props = {
  columns: ProColumns<API.RuleListItem>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoVo) => Promise<void>;
  visible: boolean;
};
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onSubmit, onCancel } = props;
  return (
    <Modal open={visible} onCancel={() => onCancel?.()} footer={null}>
      <ProTable
        type={'form'}
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      ></ProTable>
    </Modal>
  );
};
export default CreateModal;
