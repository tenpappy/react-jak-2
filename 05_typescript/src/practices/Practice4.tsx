import React from 'react'

export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  }
  const onclickPractice = ()=> {
    calcTotalFee(1000);
  }
  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onclickPractice}>練習問題4を実行</button>
    </div>
  )
}
