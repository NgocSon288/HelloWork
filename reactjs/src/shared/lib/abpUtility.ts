import AppConsts from './appconst';

declare var abp: any;

export function L(key: string, sourceName?: string): string { //for multi language 
  let localizationSourceName = AppConsts.localization.defaultLocalizationSourceName;
  return abp.localization.localize(key, sourceName ? sourceName : localizationSourceName);
}

export function isGranted(permissionName: string): boolean { //for permission of view (show an element or not)
  return abp.auth.isGranted(permissionName);
}

export function isAnyGranted(permissionList: string[]): boolean {
  if (!permissionList || permissionList.length <= 0) {
    return true;
  }

  for (var i = 0; i < permissionList.length; i++) {
    if (isGranted(permissionList[i])) {
      return true;
    }
  }
  return false;
};


export function isAllGranted(permissionList: string[]): boolean {
  if (!permissionList || permissionList.length <= 0) {
    return true;
  }

  for (var i = 0; i < permissionList.length; i++) {
    if (!isGranted(permissionList[i])) {
      return false;
    }
  }
  return true;
};

