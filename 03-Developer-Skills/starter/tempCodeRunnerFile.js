const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const calcWorktime = function (data) {
  let totalTime = 0;
  let maxTime = 0;
  let trueDay = 0;
  for (let i = 0; i < data.length; i++) {
    totalTime += data[i];

    if (maxTime < data[i]) {
      maxTime = data[i];
    }
    if (data[i] > 0) {
      trueDay++;
    }
  }
  let workData = {
    总时长: totalTime,
    平均工时: Math.round(totalTime / data.length),
    最长工作时间: maxTime,
    实际工作天数: trueDay,
    全职工作状态: totalTime >= 35 ? `你是全职员工🏆` : `你不是全职员工😭`,
  };
  return workData;
};

console.log(calcWorktime(data));