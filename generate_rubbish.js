function generateRubbish(choice) {
  // All rubbish may used
  const start = '身為一個'
  const end = '吧！'
  const target = ['工程師', '設計師', '創業家']
  const task = {
  engineer: ['加個按鈕', '加個新功能', '切個版', '改一點 code', '設計個軟體', '架個網站'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '想個設計 idea', '畫個透視圖'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '隨便說個創業 idea']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常', '不難']

  const profession = Object.keys(choice)[0]

  // Start generating rubbish by choice
  let name
  let tk
  const ph = phrase[randomNumber(phrase)]
  switch (profession) {
    case 'engineer':
      name = target[0]
      tk = task.engineer[randomNumber(task.engineer)]
      return buildUpRubbish(start, name, tk, ph, end)
    case 'designer':
      name = target[1]
      tk = task.designer[randomNumber(task.designer)]
      return buildUpRubbish(start, name, tk, ph, end)
    case 'entrepreneur':
      name = target[2]
      tk = task.entrepreneur[randomNumber(task.entrepreneur)]
      return buildUpRubbish(start, name, tk, ph, end)
    default:
      return '請選擇一個說幹話的對象！'
  }
}

function randomNumber(array) {
  return Math.floor(Math.random() * array.length)
}

function buildUpRubbish(start, name, tk, ph, end) {
  return start.concat(name, '，', tk, '，', ph, end)
}

module.exports = generateRubbish