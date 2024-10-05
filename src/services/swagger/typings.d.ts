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
    createTime?: string;
  };
}
