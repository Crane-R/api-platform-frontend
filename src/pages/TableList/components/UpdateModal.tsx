import { type ProColumns, ProFormInstance, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import React, { useEffect, useRef } from 'react';
import { Modal } from 'antd';

export type Props = {
  values: API.InterfaceInfoVo;
  columns: ProColumns<API.InterfaceInfoVo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoVo) => Promise<void>;
  visible: boolean;
};
const UpdateModal: React.FC<Props> = (props) => {
  const { values, visible, columns, onSubmit, onCancel } = props;

  // //修改columns
  // const showArr = [2,6];
  // for (let i = 0; i < showArr.length; i++) {
  //   columns[showArr[i]].hideInForm = false;
  //   columns[showArr[i]].disable = true;
  // }

  const formRef = useRef<ProFormInstance>();

  /**
   * 监听，如果变化的话就触发函数
   */
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  }, [values]);

  return (
    <Modal open={visible} onCancel={() => onCancel?.()} footer={null}>
      <ProTable
        type={'form'}
        formRef={formRef}
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      ></ProTable>
    </Modal>
  );
};
export default UpdateModal;
