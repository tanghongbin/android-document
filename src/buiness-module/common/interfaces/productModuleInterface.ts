// 工程依赖接口
export interface ProductModuleInterface {
  getColorByLevel(type:Number): string
  getSizeByLevel(type:Number,moused:boolean):string
}

export class FirstLevelObj implements ProductModuleInterface{
  getColorByLevel(type: Number): string {
    return '#999999';
  }

  getSizeByLevel(type: Number,moused:boolean): string {
    let size = 17
    if (moused){
      size += 1
    }
    return size + 'px'
  }
}
export class SecondLevelObj implements ProductModuleInterface{
  getColorByLevel(type: Number): string {
    return '#666666';
  }

  getSizeByLevel(type: Number,moused:boolean): string {
    let size = 16
    if (moused){
      size += 1
    }
    return size + 'px'  }
}
export class ThirdLevelObj implements ProductModuleInterface{
  getColorByLevel(type: Number): string {
    return '#333333';
  }

  getSizeByLevel(type: Number,moused:boolean): string {
    let size = 14
    if (moused){
      size += 1
    }
    return size + 'px'
  }
}
