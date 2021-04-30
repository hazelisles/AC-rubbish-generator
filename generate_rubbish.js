function generateRubbish(choice) {
  // All rubbish may used
  const start = '身為一個'
  const end = '吧！'
  const target = ['工程師', '設計師', '創業家']
  const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單','很容易','很快','很正常']

  const profession = Object.keys(choice)[0]

  // Start generating rubbish by choice
  let name
  let tk
  const ph = phrase[randomNumber(phrase)]
  switch (profession) {
    case 'engineer':
      name = target[0]
      tk = task.engineer[randomNumber(task.engineer)]
      rubbish = start.concat(name, '，', tk, '，', ph, end)
      return rubbish
    case 'designer':
      name = target[1]
      tk = task.designer[randomNumber(task.designer)]
      rubbish = start.concat(name, '，', tk, '，', ph, end)
      return rubbish
    case 'entrepreneur':
      name = target[2]
      tk = task.entrepreneur[randomNumber(task.entrepreneur)]
      rubbish = start.concat(name, '，', tk, '，', ph, end)
      return rubbish
    default:
      return '請選擇一個說幹話的對象！'
  }
}

function randomNumber(array) {
  return Math.floor(Math.random() * array.length)
}

module.exports = generateRubbish