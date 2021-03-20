import React from 'react'

export const Practice2 = () => {
  const getTotallFee = (num : number): number => {
    const total = num * 1.1;
    return total;

    //// 型指定しないと、↓でも通ってしまう
    // return total.toString();
  }
  const onclickPractice = ()=> {
    console.log(getTotallFee(1000));
  }
  return (
    <div>
      <p>練習問題：返却時の型指定</p>
      <button onClick={onclickPractice}>練習問題2を実行</button>
    </div>
  )
}
