declare namespace API {
  type GeneralResponseBoolean = {
    code?: number;
    data?: boolean;
    msg?: string;
    description?: string;
  };

  type GeneralResponseListInterfaceInfoVo = {
    code?: number;
    data?: InterfaceInfoVo[];
    msg?: string;
    description?: string;
  };

  type GeneralResponseObject = {
    code?: number;
    data?: Record<string, any>;
    msg?: string;
    description?: string;
  };

  type GeneralResponsePageInterfaceInfoVo = {
    code?: number;
    data?: PageInterfaceInfoVo;
    msg?: string;
    description?: string;
  };

  type GeneralResponseUserVo = {
    code?: number;
    data?: UserVo;
    msg?: string;
    description?: string;
  };

  type InterfaceAddRequest = {
    description?: string;
    url?: string;
    method?: number;
    requestHeader?: string;
    responseHeader?: string;
  };

  type interfaceDeleteParams = {
    interfaceId: number;
  };

  type InterfaceInfoVo = {
    id?: number;
    description?: string;
    url?: string;
    method?: number;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    createTime?: string;
  };

  type InterfaceInvokeRequest = {
    url?: string;
  };

  type interfaceOfflineParams = {
    interfaceId: number;
  };

  type interfaceOnLineParams = {
    interfaceId: number;
  };

  type interfacePageParams = {
    pageSize: number;
    pageNum: number;
  };

  type InterfaceSelectRequest = {
    status?: number;
    name?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageInterfaceInfoVo = {
    records?: InterfaceInfoVo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageInterfaceInfoVo;
    searchCount?: PageInterfaceInfoVo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type returnSignParams = {
    ak: string;
    param: string;
  };

  type UserAddRequest = {
    username?: string;
    nickname?: string;
    password?: string;
    checkPassword?: string;
    userRole?: number;
  };

  type userLoginParams = {
    username: string;
    password: string;
  };

  type UserVo = {
    id?: number;
    username?: string;
    nickname?: string;
    avatarUrl?: string;
    gender?: number;
    userStatus?: number;
    userRole?: number;
    accessKey?: string;
    secretKey?: string;
    createTime?: string;
  };
}
