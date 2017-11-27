export default{
	  //判断是否为空
    isNull(){
        for(let i = 0;i < arguments.length;i++) {
            if(arguments[i] == null || arguments[i] == undefined || arguments[i] === ''){
                return true;//为空
            }else{
                arguments[i] = arguments[i].toString();
                arguments[i] = arguments[i].replace(/(^\s*)|(\s*$)/g,'');
                if(arguments[i] == ''){
                    return true;//为空
                }
            }
        }
        return false;//不为空
    },

    //判断是否为空，并且是否为正整数或浮点数
    isNumber(){
        let pattNum = new RegExp('^(([0-9]+\.[0-9]*[0-9][0-9]*)|([0-9]*[0-9][0-9]*\.[0-9]+)|([0-9]*[0-9][0-9]*))$');
        for(let i = 0;i < arguments.length;i++){
            if(this.isNull(arguments[i]) || !pattNum.test(arguments[i])){
                return false;//不是数字
            }
        }
        return true;//是数字
    },

    //可以为空或者为数值型
    isNum(){
        let numReg = new RegExp("^[0-9]*$");
        for(let i = 0;i < arguments.length;i++){
            if(!this.isNull(arguments[i]) && !numReg.test(arguments[i])){
                return false;
            }
        }
        return true;
    },

    //判断图片格式是否正确
    isImg(){
        if (!this.isNull(arguments[0])) {
          let fileName = arguments[0].name;
          let type = fileName.substr(fileName.lastIndexOf(".")).toLowerCase();
          if (type!='.bmp'&&type!='.png'&&type!='.gif'&&type!='.jpg'&&type!='.jpeg') {
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
    },

    //判断Excel表格是否正确
    isExcel(){
        if (!this.isNull(arguments[0])) {
          let fileName = arguments[0].name;
          let type = fileName.substr(fileName.lastIndexOf(".")).toLowerCase();
          if (type != '.xlsx') {
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
    },

    //可以为空，或者是正整数或浮点数
    isNullOrNumber() {
        let pattNum = new RegExp('^(([0-9]+\.[0-9]*[0-9][0-9]*)|([0-9]*[0-9][0-9]*\.[0-9]+)|([0-9]*[0-9][0-9]*))$');
        for(let i = 0;i < arguments.length;i++){
            if(!this.isNull(arguments[i]) && !pattNum.test(arguments[i])){
                return false;//不是数字
            }
        }
        return true;//是数字
    },

    //将undefined和null转换为'',并给所有参数去除空格
    empty(){
        let args = [];
        for(let i = 0;i < arguments.length; i++) {
             arguments[i] += '';
            if (arguments[i] == 'null' || arguments[i] == 'undefined') {
                arguments[i] = "";
            }
            args.push(arguments[i].replace(/(^\s*)|(\s*$)/g,""));
        }
        return args;
    },

    //可以为空或者是合法的身份证号
    isCard(){
        let pattNum = new RegExp("^\\d{17}(\\d|x|X)$");
        for(let i = 0;i < arguments.length;i++){
            if(!this.isNull(arguments[i]) && !pattNum.test(arguments[i])){
                return false;
            }
        }
        return true;
    },

    //取小数点后两位
    fixTwo(){
        let args = [];
        for(let i = 0;i < arguments.length;i++){
            if(!this.isNumber(arguments[i])){
                return [];
            }else{
                arguments[i] = arguments[i].toFixed(2);
                args.push(arguments[i]);
            }
        };
        if(arguments.length == 1){
            return args[0];
        }else{
            return args;
        }
    },

    //小数点两位之后禁止输入
    saveTwo(money){
        let afterPoint = money.toString().split('.')[1];
        if(afterPoint && afterPoint.length > 2){
            money = money.toString().substring(0,money.length-1);
        }
        return money;
    },

    //钱单位转化为分
    toCent(){
        let args = [];
        for(let i = 0;i < arguments.length;i++){
            if(!this.isNumber(arguments[i])){
                return [];
            }else{
                arguments[i] = Math.round(arguments[i] * 100);
                args.push(arguments[i]);
            }
        }
        if(arguments.length == 1){
            return args[0];
        }else{
            return args;
        }
    },

    //判断是否是银行账号
    isBankAccountNo(){
        // let pattBankAccount = new RegExp('^(\\d{4}(\\s*\\d{4}){3})|(\\d{4}(\\s*\\d{4}){3}(\\s*\\d{3}){1})$');
        let pattBankAccount = /^(\d{16}|\d{19})$/;
        // let pattNum = /^[0-9]*$/;
        for(let i = 0;i < arguments.length;i++){
            if(this.isNull(arguments[i])){
                return false;//不是银行账号
            }else{
                arguments[i] = this.trimAll(arguments[i]);
                if(!pattBankAccount.test(Number(arguments[i]))){
                    return false;//不是银行账号
                }
            }
        }
        return true;//是银行账号
    },

    //判断是否是银行行号
    isBankNo(){
        let pattBankNo = /^[0-9]*$/;
        for(let i = 0;i < arguments.length;i++){
            if(this.isNull(arguments[i])){
                return false;//不是银行行号
            }else{
                arguments[i] = this.trimAll(arguments[i]);
                if(!pattBankNo.test(Number(arguments[i]))){
                    return false;//不是银行行号
                }
            }
        }
        return true;//是银行行号
    },

    //去掉首尾的空格
    trim(){
        let args = [];
        for(let i = 0;i < arguments.length;i++){
            if(this.isNull(arguments[i])){
                args.push('');
            }else{
                args.push(arguments[i].toString().replace(/^(\s*)|(\s*)$/g,''));
            }
        }
        if(arguments.length == 1){
            return args[0];
        }else{
            return args;
        }
    },


    //去掉所有的空格
    trimAll(){
        let args = [];
        for(let i = 0;i < arguments.length;i++){
            if(this.isNull(arguments[i])){
                args.push('');
            }else{
                args.push(arguments[i].toString().replace(/\s/g,''));
            }
        }
        if(arguments.length == 1){
            return args[0];
        }else{
            return args;
        }
    },

    //是否为正整数或浮点数
    isNumberButNull(){
        let pattNum = new RegExp('^\s*|(([0-9]+\.[0-9]*[0-9][0-9]*)|([0-9]*[0-9][0-9]*\.[0-9]+)|([0-9]*[0-9][0-9]*))$');
        for(let i = 0;i < arguments.length;i++){
            if(!pattNum.test(arguments[i])){
                return false;//不是数字
            }
        }
        return true;//是数字
    },

}
