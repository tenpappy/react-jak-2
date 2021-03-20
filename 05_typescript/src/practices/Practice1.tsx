import React from 'react'

export const Practice1 = () => {
  const calcTotalFee = (num : number) => {
    const total = num * 1.1;
    console.log(total);
  }
  const onclickPractice = ()=> {
    calcTotalFee(1000);

    //// num: numberを記載しないと、↓でもうまく動作してしまう。
    // calcTotalFee('1000');
  }
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onclickPractice}>練習問題1を実行</button>
    </div>
  )
}
