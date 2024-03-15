const icon='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzcxLjA3MjA3IiB2aWV3Qm94PSIwLDAsNjAwLDM3MS4wNzIwNyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsNS41MzYwNCkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNLTYwLDM2NS41MzYwNHYtMzcxLjA3MjA3aDYwMHYzNzEuMDcyMDd6IiBmaWxsPSIjZmY5NDk0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNLTM5LjIxMzc3LDIwNC45NTYwNHYxMTYuMDU1NjdNMTIuMjUzNTEsMzIxLjAxMTcydi0xNjAuNTAwMDFNMzcuOTg3MTQsMzIxLjAxMTcydi0yMDQuOTQ0MzVNLTEzLjQ4MDEzLDMyMS4wMTE3MnYtMTg5LjQzOTQ0TTYzLjcyMjA2LDMyMS4wMTE3MnYtMTM3Ljc2MDI0TTg5LjQ1NDQyLDMyMS4wMTE3MnYtMTIyLjI1NjYxTTExNS4xODkzNCwzMjEuMDExNzJ2LTc3LjgxMjI3TTE0MC45MjI5OCwzMjEuMDExNzJ2LTE2MC41MDAwMU0xNjYuNjU3OSwzMjEuMDExNzJ2LTEyMi4yNTY2MU0xOTIuMzkxNTQsMzIxLjAxMTcydi0yMDQuOTQ0MzVNMjE4LjEyNTE3LDMyMS4wMTE3MnYtMTM3Ljc2MDI0TTI0My44NTg4MSwzMjEuMDExNzJ2LTExNi4wNTQzOU0yOTUuMzI2MDgsMzIxLjAxMTcydi0xNjAuNTAwMDFNMzIxLjA2MTAxLDMyMS4wMTE3MnYtMjA0Ljk0NDM1TTI2OS41OTI0NSwzMjEuMDExNzJ2LTE4OS40Mzk0NE0zNDYuNzk0NjQsMzIxLjAxMTcydi0xMzcuNzYwMjRNMzcyLjUyOTU2LDMyMS4wMTE3MnYtMTIyLjI1NjYxTTM5OC4yNjE5MiwzMjEuMDExNzJ2LTc3LjgxMjI3TTQyMy45OTY4NCwzMjEuMDExNzJ2LTE2MC41MDAwMU00NDkuNzMwNDgsMzIxLjAxMTcydi0xMjIuMjU2NjFNNDc1LjQ2NDExLDMyMS4wMTE3MnYtMjA0Ljk0NDM1TTUwMS4xOTc3NSwzMjEuMDExNzJ2LTEzNy43NjAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEzLjMxMzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxnIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNMjYzLjY0MTk5LDI0Ny44NDYwNGMtMTIuMTcxLC0yMS4zMDcgLTQuNzY2LC00OC40NDggMTYuNTQxLC02MC42MmMyMS4zMDgsLTEyLjE3MSA0OC40NDgsLTQuNzY2IDYwLjYyLDE2LjU0MmMxMi4xNzIsMjEuMzA3IDQuNzY2LDQ4LjQ0NyAtMTYuNTQxLDYwLjYxOWMtMjEuMzA4LDEyLjE3MiAtNDguNDQ4LDQuNzY2IC02MC42MiwtMTYuNTQxeiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGw9IiM1OTU5NTkiIHN0cm9rZT0iIzRlNGU0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTI5My45ODg5OSwxOTguMjY1MDRjMi45OTUsLTMuNDExIDEwLjIsLTMuODU1IDE2Ljg0LC0yLjkwNmM2LjY1MywwLjk1MSAxMy43NTYsOC4zNyAxMS45MzcsMTIuNTRjLTEuMzIzLDMuMDMxIC01Ljc0NSwtMy45NTYgLTEzLjEyLC02LjAxMmMtNi40NjgsLTEuODAyIC0xOC4xOTgsLTAuNzI4IC0xNS42NTcsLTMuNjIyek0yOTYuODM2OTksMjA3LjU2NzA0YzEuODM5LC0yLjA5NCA2LjI2MSwtMi4zNjYgMTAuMzM2LC0xLjc4M2M0LjA4NCwwLjU4MyA4LjQ0NCw1LjEzNyA3LjMyNyw3LjY5NmMtMC44MTEsMS44NiAtMy41MjYsLTIuNDI4IC04LjA1MywtMy42OWMtMy45NywtMS4xMDYgLTExLjE3LC0wLjQ0NyAtOS42MSwtMi4yMjN6IiBmaWxsLW9wYWNpdHk9IjAuNzA1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zODcuOTY2OTksMjk5Ljc0NTA0bC01NS40NTgsLTM5LjMzMWwxMS4xMjYsLTE1LjY4OWw1NS40NTgsMzkuMzMxeiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjNGU0ZTRlIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMzQxLjYxNDk5LDI2NC4wNjkwNGwtNS45MDYsLTQuMTg4bDguNDUsLTExLjkxNWw1LjkwNiw0LjE4OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjMwMC4wMDAwMDAwMDAwMDAxNzoxODUuNTM2MDM2MDM2MDM2MDgtLT4=';
const insetIcon='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAwLC0xNDApIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMCwxODBjMCwtMjIuMDkxMzkgMTcuOTA4NjEsLTQwIDQwLC00MGMyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGMtMjIuMDkxMzksMCAtNDAsLTE3LjkwODYxIC00MCwtNDB6IiBmaWxsPSIjZmY5NDk0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjE1LjU5OTEyLDIwNC4yOTA5N3YtMzguMDQ2NDRNMjIxLjY5OTU3LDIwNC4yOTA5N3YtNDguNTgxOTRNMjI3Ljc5OTcxLDIwNC4yOTA5N3YtMzIuNjU1OTlNMjMzLjkwMDE2LDIwNC4yOTA5N3YtMjguOTgwODZNMjQwLDIwNC4yOTA5N3YtMTguNDQ1MzVNMjQ2LjEwMDQ1LDIwNC4yOTA5N3YtMzguMDQ2NDRNMjUyLjIwMDU5LDIwNC4yOTA5N3YtMjguOTgwODZNMjU4LjMwMDc0LDIwNC4yOTA5N3YtNDguNTgxOTRNMjY0LjQwMDg4LDIwNC4yOTA5N3YtMzIuNjU1OTkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxnIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNMjM2LjMzMDIyLDE3NS4xMDQ0MmMtMy4xMTA4LC01LjQ0NTg4IC0xLjIxODE1LC0xMi4zODI4OCA0LjIyNzczLC0xNS40OTM5M2M1LjQ0NjEzLC0zLjExMDggMTIuMzgyODgsLTEuMjE4MTUgMTUuNDkzOTMsNC4yMjc5OWMzLjExMTA1LDUuNDQ1ODggMS4yMTgxNSwxMi4zODI2MiAtNC4yMjc3MywxNS40OTM2N2MtNS40NDYxMywzLjExMTA1IC0xMi4zODI4OCwxLjIxODE1IC0xNS40OTM5MywtNC4yMjc3M3oiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjNTk1OTU5IiBzdHJva2U9IiM0ZTRlNGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yNDQuMDg2NjQsMTYyLjQzMTk2YzAuNzY1NSwtMC44NzE4MiAyLjYwNzAzLC0wLjk4NTMgNC4zMDQxNSwtMC43NDI3NWMxLjcwMDQ1LDAuMjQzMDcgMy41MTU5MSwyLjEzOTMgMy4wNTA5OSwzLjIwNTExYy0wLjMzODE1LDAuNzc0NyAtMS40NjgzNywtMS4wMTExMiAtMy4zNTMzNSwtMS41MzY2MWMtMS42NTMxNiwtMC40NjA1OCAtNC42NTEyNSwtMC4xODYwNyAtNC4wMDE3OSwtMC45MjU3NXpNMjQ0LjgxNDU3LDE2NC44MDk0N2MwLjQ3MDAzLC0wLjUzNTIxIDEuNjAwMjYsLTAuNjA0NzMgMi42NDE3OSwtMC40NTU3MmMxLjA0MzgzLDAuMTQ5MDEgMi4xNTgyMSwxLjMxMjk3IDEuODcyNzIsMS45NjcwM2MtMC4yMDcyOCwwLjQ3NTQgLTAuOTAxMjEsLTAuNjIwNTggLTIuMDU4MjcsLTAuOTQzMTNjLTEuMDE0NywtMC4yODI2OCAtMi44NTQ5NSwtMC4xMTQyNSAtMi40NTYyMywtMC41NjgxOHoiIGZpbGwtb3BhY2l0eT0iMC43MDUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI2OC4xMDY1OCwxODguMzY5MzRsLTE0LjE3NDU3LC0xMC4wNTI2NWwyLjg0MzcxLC00LjAwOTk3bDE0LjE3NDU3LDEwLjA1MjY1eiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjNGU0ZTRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik0yNTYuMjU5NDIsMTc5LjI1MDg3bC0xLjUwOTUyLC0xLjA3MDQybDIuMTU5NzQsLTMuMDQ1MzdsMS41MDk1MiwxLjA3MDY3eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6NDA6NDAtLT4=';
//感谢Arkos对拓展的帮助
class dataAnalysis {
  constructor(runtime) {
    this.runtime = runtime,
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'qxsckdataanalysis.name': '数据分析',

        'qxsckdataanalysis.value.count': '次数',
        'qxsckdataanalysis.value.fre': '频率',

        'qxsckdataanalysis.tag.average': '平均数',
        'qxsckdataanalysis.tag.maximum': '最大数',
        'qxsckdataanalysis.tag.minimum': '最小数',
        'qxsckdataanalysis.tag.median': '中位数',
        'qxsckdataanalysis.tag.mode': '众数',
        'qxsckdataanalysis.tag.variance': '方差',
        'qxsckdataanalysis.tag.standardDeviation': '标准差',

        'qxsckdataanalysis.tag.union': '并集',
        'qxsckdataanalysis.tag.intersection': '交集',
        'qxsckdataanalysis.tag.complement': '补集',
        'qxsckdataanalysis.tag.symmetricDifference': '对称差',

        'qxsckdataanalysis.unaryOper': '[NUMBERS] 的 [OPER]',
        'qxsckdataanalysis.average': '[NUMBERS] 的平均数',
        'qxsckdataanalysis.maximum': '[NUMBERS] 的最大数',
        'qxsckdataanalysis.minimum': '[NUMBERS] 的最小数',
        'qxsckdataanalysis.median': '[NUMBERS] 的中位数',
        'qxsckdataanalysis.mode': '[NUMBERS] 的众数',
        'qxsckdataanalysis.variance': '[NUMBERS] 的方差',
        'qxsckdataanalysis.standardDeviation': '[NUMBERS] 的标准差',
        'qxsckdataanalysis.countNumebrs':'[NUMBERS] 中每个数据出现的 [TYPE]',
        'qxsckdataanalysis.binaryOper': '[NUMBERS] 与 [NUMBERS2] 的 [OPER]',

        'qxsckdataanalysis.unaryOperList': '列表 [NUMBERS] 里所有数据的 [OPER]',
        'qxsckdataanalysis.averageInList': '列表 [NUMBERS] 里所有数据的平均数',
        'qxsckdataanalysis.maximumInList': '列表 [NUMBERS] 里所有数据的最大数',
        'qxsckdataanalysis.minimumInList': '列表 [NUMBERS] 里所有数据的最小数',
        'qxsckdataanalysis.medianInList': '列表 [NUMBERS] 里所有数据的中位数',
        'qxsckdataanalysis.modeInList': '列表 [NUMBERS] 里所有数据的众数',
        'qxsckdataanalysis.varianceInList': '列表 [NUMBERS] 里所有数据的方差',
        'qxsckdataanalysis.standardDeviationInList': '列表 [NUMBERS] 里所有数据的标准差',
        'qxsckdataanalysis.countNumebrsInList':'列表 [NUMBERS] 中每个数据出现的 [TYPE]',
        'qxsckdataanalysis.binaryOperList': '列表 [NUMBERS] 与列表 [NUMBERS2] 的 [OPER]',
      },

      en: {
        'qxsckdataanalysis.name': 'data analysis',

        'qxsckdataanalysis.value.count': 'count',
        'qxsckdataanalysis.value.fre': 'frequency',

        'qxsckdataanalysis.tag.average': 'average',
        'qxsckdataanalysis.tag.maximum': 'maximum',
        'qxsckdataanalysis.tag.minimum': 'minimum',
        'qxsckdataanalysis.tag.median': 'median',
        'qxsckdataanalysis.tag.mode': 'mode',
        'qxsckdataanalysis.tag.variance': 'variance',
        'qxsckdataanalysis.tag.standardDeviation': 'standard deviation',

        'qxsckdataanalysis.tag.union': 'union',
        'qxsckdataanalysis.tag.intersection': 'intersection',
        'qxsckdataanalysis.tag.complement': 'complement',
        'qxsckdataanalysis.tag.symmetricDifference': 'symmetric difference',

        'qxsckdataanalysis.unaryOper': '[OPER] of [NUMBERS]',
        'qxsckdataanalysis.average': 'average of [NUMBERS]',
        'qxsckdataanalysis.maximum': 'maximum of [NUMBERS]',
        'qxsckdataanalysis.minimum': 'minimum of [NUMBERS]',
        'qxsckdataanalysis.median': 'median of [NUMBERS]',
        'qxsckdataanalysis.mode': 'mode of [NUMBERS]',
        'qxsckdataanalysis.variance': 'variance of [NUMBERS]',
        'qxsckdataanalysis.standardDeviation': 'standard deviation of [NUMBERS]',
        'qxsckdataanalysis.countNumebrs':'[TYPE] for each datas in [NUMBERS]',
        'qxsckdataanalysis.binaryOper': '[OPER] of [NUMBERS] and [NUMBERS2]',

        'qxsckdataanalysis.unaryOperList': '[OPER] of list [NUMBERS]',
        'qxsckdataanalysis.averageInList': 'average of list [NUMBERS]',
        'qxsckdataanalysis.maximumInList': 'maximum of list [NUMBERS]',
        'qxsckdataanalysis.minimumInList': 'minimum of list [NUMBERS]',
        'qxsckdataanalysis.medianInList': 'median of list [NUMBERS]',
        'qxsckdataanalysis.modeInList': 'mode of list [NUMBERS]',
        'qxsckdataanalysis.varianceInList': 'variance of list [NUMBERS]',
        'qxsckdataanalysis.standardDeviationInList': 'standard deviation of list [NUMBERS]',
        'qxsckdataanalysis.countNumebrsInList':'[TYPE] for each datas in list [NUMBERS]',
        'qxsckdataanalysis.binaryOperList': '[OPER] of list [NUMBERS] and list [NUMBERS2]',
      },
    });
    this.getData=function(numbers_,type){
      let numbers;
      if(type===1){
        try{
          let arr=JSON.parse(numbers_);
          numbers=arr;
        }catch(error){
          numbers=String(numbers_).split(' ');
        }
      }else{
        numbers=numbers_.value;
      }
      return numbers;
    }
    this.unique=function(list){
      return [...new Set(list)];
    }
    this.averageFunc=function(numbers_,type){
      let numbers=this.getData(numbers_,type).map(Number);

      let sum=numbers.reduce((a,b)=>a+b,0);
      return sum/numbers.length;
    }
    this.maximumFunc=function(numbers_,type){
      let numbers=this.getData(numbers_,type).map(Number);

      return Math.max(...numbers);
    }
    this.minimumFunc=function(numbers_,type){
      let numbers=this.getData(numbers_,type);
      console.log(numbers);
      return Math.min(...numbers);
    }
    this.medianFunc=function(numbers_,type){
      let numbers=this.getData(numbers_,type).map(Number);

      let sorted=numbers.sort((a,b)=>a-b);
      let middle=Math.floor(sorted.length/2);
      if (sorted.length%2===0) {
        return (sorted[middle-1]+sorted[middle])/2;
      } else {
        return sorted[middle];
      }
    }
    this.modeFunc=function(numbers_,type){
      let numbers=this.getData(numbers_,type).map(Number);

      let counts=new Map();
      let maxCount=0;
      let mode=0;
      for(const number of numbers){
        let count=counts.get(number)||0;
        count++;
        counts.set(number,count);
        if(count>maxCount) maxCount=count,mode=number;
      }
      return mode;
    }
    this.varianceFunc=function(numbers_,type){
      let numbers=this.getData(numbers_,type).map(Number);

      let mean=numbers.reduce((a,b)=>a+b,0)/numbers.length;
      let squaredDifferences=numbers.map(x=>(x-mean)**2);
      let sum=squaredDifferences.reduce((a,b)=>a+b,0);
      return sum/numbers.length;
    }
    this.standardDeviationFunc=function(numbers_,type){
      return Math.sqrt(this.varianceFunc(numbers_,type));
    }
    this.countNumebrsFunc=function(numbers_,type,type_){
      let numbers=this.getData(numbers_,type).map(String);

      const counts=new Map();
      for(const number of numbers){
        counts.set(number,counts.get(number)+1||1);
      }
      let result=new Object;
      if(type_==='count'){
        for(const [key,value] of counts) result[String(key)]=value;
        return JSON.stringify(result);
      }else if(type_==='fre'){
        let length=numbers.length;
        for(const [key,value] of counts){
          result[String(key)]=(Math.round((value/length)*100)/100);
        }
        return JSON.stringify(result);
      }else return 0;
    }
    this.unionFunc=function(numbers_,numbers2_,type){
      let numbers=this.getData(numbers_,type).map(Number),numbers2=this.getData(numbers2_,type).map(Number);
      numbers=this.unique(numbers),numbers2=this.unique(numbers2);
      const union=[...new Set([...numbers,...numbers2])];
      return JSON.stringify(union);
    }
    this.intersectionFunc=function(numbers_,numbers2_,type){
      let numbers=this.getData(numbers_,type).map(Number),numbers2=this.getData(numbers2_,type).map(Number);
      numbers=this.unique(numbers),numbers2=this.unique(numbers2);
      const intersection=numbers.filter(value=>numbers2.includes(value));
      return JSON.stringify(intersection);
    }
    this.complementFunc=function(numbers_,numbers2_,type){
      let numbers=this.getData(numbers_,type).map(Number),numbers2=this.getData(numbers2_,type).map(Number);
      numbers=this.unique(numbers),numbers2=this.unique(numbers2);
      const complement=numbers2.filter(value=>!numbers.includes(value));
      return JSON.stringify(complement);
    }
    this.symmetricDifferenceFunc=function(numbers_,numbers2_,type){
      let numbers=this.getData(numbers_,type).map(Number),numbers2=this.getData(numbers2_,type).map(Number);
      numbers=this.unique(numbers),numbers2=this.unique(numbers2);
      const symmetricDifference=[...numbers.filter(value=>!numbers2.includes(value)),...numbers2.filter(value=>!numbers.includes(value))];
      return JSON.stringify(symmetricDifference);
    }
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }
  getInfo() {
    return {
      id: 'qxsckdataanalysis',
      name: this.formatMessage('qxsckdataanalysis.name'),
      color1: '#ff9494',
      color2: '#ff9494',
      blockIconURI: insetIcon,
      menuIconURI: insetIcon,
      docsURI: 'https://learn.ccw.site/article/259ee729-cbe5-4898-8e0a-9fe5dc5b7813',
      blocks: [
        {
          opcode: 'unaryOper',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.unaryOper'),
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 3 4 5'
            },
            OPER: {
              type: 'string',
              menu: 'unaryOper.List'
            },
          }
        },
        {
          opcode: 'average',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.average'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 3 4 5'
            }
          }
        },
        {
          opcode: 'maximum',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.maximum'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '[1,2,3,4,5]'
            }
          }
        },
        {
          opcode: 'minimum',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.minimum'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '["1","2","3","4","5"]'
            }
          }
        },
        {
          opcode: 'median',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.median'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 3 4 5'
            }
          }
        },
        {
          opcode: 'mode',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.mode'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 2 3 4 5'
            }
          }
        },
        {
          opcode: 'variance',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.variance'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 3 4 5'
            }
          }
        },
        {
          opcode: 'standardDeviation',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.standardDeviation'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 3 4 5'
            }
          }
        },
        {
          opcode: 'countNumebrs',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.countNumebrs'),
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 3 4 5'
            },
            TYPE: {
              type: 'string',
              menu: 'countNumebrsList'
            },
          }
        },
        {
          opcode: 'binaryOper',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.binaryOper'),
          arguments: {
            NUMBERS: {
              type: 'string',
              defaultValue: '1 2 3'
            },
            NUMBERS2: {
              type: 'string',
              defaultValue: '3 4 5'
            },
            OPER: {
              type: 'string',
              menu: 'binaryOper.List'
            },
          },
        },

        {
          opcode: 'unaryOperList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.unaryOperList'),
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            },
            OPER: {
              type: 'string',
              menu: 'unaryOper.List'
            },
          },
          disableMonitor: true,
        },
        {
          opcode: 'averageInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.averageInList'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            }
          },
          disableMonitor: true,
        },
        {
          opcode: 'maximumInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.maximumInList'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            }
          },
          disableMonitor: true,
        },
        {
          opcode: 'minimumInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.minimumInList'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            }
          },
          disableMonitor: true,
        },
        {
          opcode: 'medianInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.medianInList'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            }
          },
          disableMonitor: true,
        },
        {
          opcode: 'modeInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.modeInList'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            }
          },
          disableMonitor: true,
        },
        {
          opcode: 'varianceInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.varianceInList'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            }
          },
          disableMonitor: true,
        },
        {
          opcode: 'standardDeviationInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.standardDeviationInList'),
          hideFromPalette: true,
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            }
          },
          disableMonitor: true,
        },
        {
          opcode: 'countNumebrsInList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.countNumebrsInList'),
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            },
            TYPE: {
              type: 'string',
              menu: 'countNumebrsList'
            },
          },
          disableMonitor: true,
        },
        {
          opcode: 'binaryOperList',
          blockType: 'reporter',
          text: this.formatMessage('qxsckdataanalysis.binaryOperList'),
          arguments: {
            NUMBERS: {
              type: 'string',
              menu: 'listMenu'
            },
            NUMBERS2: {
              type: 'string',
              menu: 'listMenu'
            },
            OPER: {
              type: 'string',
              menu: 'binaryOper.List'
            },
          },
          disableMonitor: true,
        },
      ],
      menus: {
        'listMenu': {
          items: 'findAllList'
        },
        'countNumebrsList':[
          {
            text:this.formatMessage('qxsckdataanalysis.value.count'),
            value:'count',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.value.fre'),
            value:'fre',
          }
        ],
        'unaryOper.List':[
          {
            text:this.formatMessage('qxsckdataanalysis.tag.average'),
            value:'average',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.maximum'),
            value:'maximum',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.minimum'),
            value:'minimum',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.median'),
            value:'median',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.mode'),
            value:'mode',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.variance'),
            value:'variance',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.standardDeviation'),
            value:'standardDeviation',
          },
        ],
        'binaryOper.List':[
          {
            text:this.formatMessage('qxsckdataanalysis.tag.union'),
            value:'union',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.intersection'),
            value:'intersection',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.complement'),
            value:'complement',
          },
          {
            text:this.formatMessage('qxsckdataanalysis.tag.symmetricDifference'),
            value:'symmetricDifference',
          },
        ],
      }
    };
  }

  findAllList() {
    const list = [];
    let temp;
    try {
        temp = this.runtime._stageTarget.variables;
        Object.keys(temp).forEach(obj => {
            if (temp[obj].type === 'list') {
            list.push({
                text: temp[obj].name,
                value: temp[obj].id,
            });
            }
        });
        if (!this.runtime._editingTarget.isStage) {
            temp = this.runtime._editingTarget.variables
            Object.keys(temp).forEach(obj => {
            if (temp[obj].type === 'list') {
                list.push({
                text: '[私有列表]' + temp[obj].name,
                value: temp[obj].id,
                });
            }
            });
        }
    } catch (e) {
    }
    if (list.length === 0) {
        list.push({
            text: `-`,
            value: 'empty',
        });
    }
    return list;
  }

  unaryOper(args){
    let oper=args.OPER;
    if(oper==='average') return this.averageFunc(args.NUMBERS,1);
    else if(oper==='maximum') return this.maximumFunc(args.NUMBERS,1);
    else if(oper==='minimum') return this.minimumFunc(args.NUMBERS,1);
    else if(oper==='median') return this.medianFunc(args.NUMBERS,1);
    else if(oper==='mode') return this.modeFunc(args.NUMBERS,1);
    else if(oper==='variance') return this.varianceFunc(args.NUMBERS,1);
    else if(oper==='standardDeviation') return this.standardDeviationFunc(args.NUMBERS,1);
  }
  average(args) {
    return this.averageFunc(args.NUMBERS,1);
  }
  maximum(args) {
    return this.maximumFunc(args.NUMBERS,1);
  }
  minimum(args) {
    return this.minimumFunc(args.NUMBERS,1);
  }
  median(args) {
    return this.medianFunc(args.NUMBERS,1);
  }
  mode(args) {
    return this.modeFunc(args.NUMBERS,1);
  }
  variance(args) {
    return this.varianceFunc(args.NUMBERS,1);
  }
  standardDeviation(args) {
    return this.standardDeviationFunc(args.NUMBERS,1);
  }
  countNumebrs(args){
    let type_=String(args.TYPE);
    return this.countNumebrsFunc(args.NUMBERS,1,type_);
  }
  binaryOper(args){
    let oper=args.OPER;
    if(oper==='union') return this.unionFunc(args.NUMBERS,args.NUMBERS2,1);
    else if(oper==='intersection') return this.intersectionFunc(args.NUMBERS,args.NUMBERS2,1);
    else if(oper==='complement') return this.complementFunc(args.NUMBERS,args.NUMBERS2,1);
    else if(oper==='symmetricDifference') return this.symmetricDifferenceFunc(args.NUMBERS,args.NUMBERS2,1);
  }

  unaryOperList(args,util){
    let oper=args.OPER;
    if(args.NUMBERS!='empty'){
      let numbers=util.target.lookupVariableById(args.NUMBERS);
      if(oper==='average') return this.averageFunc(numbers,2);
      else if(oper==='maximum') return this.maximumFunc(numbers,2);
      else if(oper==='minimum') return this.minimumFunc(numbers,2);
      else if(oper==='median') return this.medianFunc(numbers,2);
      else if(oper==='mode') return this.modeFunc(numbers,2);
      else if(oper==='variance') return this.varianceFunc(numbers,2);
      else if(oper==='standardDeviation') return this.standardDeviationFunc(args.NUMBERS,2);
    }
    return 'NaN';
  }
  averageInList(args, util) {
    if(args.NUMBERS!='empty'){
      return this.averageFunc(util.target.lookupVariableById(args.NUMBERS),2);
    }
    return 'NaN';
  }
  maximumInList(args, util) {
    if(args.NUMBERS!='empty'){
      return this.maximumFunc(util.target.lookupVariableById(args.NUMBERS),2);
    }
    return 'NaN';
  }
  minimumInList(args, util) {
    if(args.NUMBERS!='empty'){
      return this.minimumFunc(util.target.lookupVariableById(args.NUMBERS),2);
    }
    return 'NaN';
  }
  medianInList(args, util) {
    if(args.NUMBERS!='empty'){
      return this.medianFunc(util.target.lookupVariableById(args.NUMBERS),2);
    }
    return 'NaN';
  }
  modeInList(args, util) {
    if(args.NUMBERS!='empty'){
      return this.modeFunc(util.target.lookupVariableById(args.NUMBERS),2);
    }
    return 'NaN';
  }
  varianceInList(args, util) {
    if(args.NUMBERS!='empty'){
      return this.varianceFunc(util.target.lookupVariableById(args.NUMBERS),2);
    }
    return 'NaN';
  }
  standardDeviationInList(args,util) {
    if(args.NUMBERS!='empty'){
      return this.standardDeviationFunc(util.target.lookupVariableById(args.NUMBERS),2);
    }
    return 'NaN';
  }
  countNumebrsInList(args,util){
    if(args.NUMBERS!='empty'){
      let type_=String(args.TYPE);
      return this.countNumebrsFunc(util.target.lookupVariableById(args.NUMBERS),2,type_);
    }
    return '{}';
  }
  binaryOperList(args,util){
    let oper=args.OPER;
    if(args.NUMBERS!='empty' && args.NUMBERS2!='empty'){
      let numbers=util.target.lookupVariableById(args.NUMBERS),numbers2=util.target.lookupVariableById(args.NUMBERS2);
      if(oper==='union') return this.unionFunc(numbers,numbers2,2);
      else if(oper==='intersection') return this.intersectionFunc(numbers,numbers2,2);
      else if(oper==='complement') return this.complementFunc(numbers,numbers2,2);
      else if(oper==='symmetricDifference') return this.symmetricDifferenceFunc(numbers,numbers2,2);
    }
    return '[]';
  }
}

window.tempExt = {
  Extension: dataAnalysis,
  info: {
    name: 'qxsck.name',
    description: 'qxsck.description',
    extensionId: 'qxsckdataanalysis',
    iconURL: icon,
    insetIconURL: insetIcon,
    featured: true,
    disabled: false,
    collaborator: 'CK七星松@CCW'
  },
  l10n: {
    'zh-cn': {
        'qxsck.name': '数据分析',
        'qxsck.description': '一些关于数据分析的积木',
    },
    en: {
        'qxsck.name': 'data analysis',
        'qxsck.description': 'Some blocks about data analysis.',
    },
  },
}
