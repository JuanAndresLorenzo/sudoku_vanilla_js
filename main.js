let checkError = false;

const squareItems = [['11', '12', '13','21','22','23','31','32','33'], [ '14','15','16','24','25','26','34','35','36'], ['17', '18', '19', '27', '28', '29', '37', '38', '39'], ['41', '42', '43', '51', '52', '53', '61', '62', '63'], ['44', '45', '46', '54', '55', '56', '64', '65', '66'], ['47', '48', '49', '57', '58', '59', '67', '68', '69'], ['71', '72', '73', '81', '82', '83', '91', '92', '93'], ['74', '75', '76', '84', '85', '86', '94', '95', '96'], ['77', '78', '79', '87', '88', '89', '97', '98', '99']]

const inputSquare = {

  //first row of squares
  '11': '1',
  '12': '1',
  '13': '1',
  '21': '1',
  '22': '1',
  '23': '1',
  '31': '1',
  '32': '1',
  '33': '1',

  '14': '2',
  '15': '2',
  '16': '2',
  '24': '2',
  '25': '2',
  '26': '2',
  '34': '2',
  '35': '2',
  '36': '2',

  '17': '3',
  '18': '3',
  '19': '3',
  '27': '3',
  '28': '3',
  '29': '3',
  '37': '3',
  '38': '3',
  '39': '3',

  //second row of squares
  '41': '4',
  '42': '4',
  '43': '4',
  '51': '4',
  '52': '4',
  '53': '4',
  '61': '4',
  '62': '4',
  '63': '4',


  '44': '5',
  '45': '5',
  '46': '5',
  '54': '5',
  '55': '5',
  '56': '5',
  '64': '5',
  '65': '5',
  '66': '5',

 
  '47': '6',
  '48': '6',
  '49': '6',
  '57': '6',
  '58': '6',
  '59': '6',
  '67': '6',
  '68': '6',
  '69': '6',

  //third row of squares

  '71': '7',
  '72': '7',
  '73': '7',
  '81': '7',
  '82': '7',
  '83': '7',
  '91': '7',
  '92': '7',
  '93': '7',


  '74': '8',
  '75': '8',
  '76': '8',
  '84': '8',
  '85': '8',
  '86': '8',
  '94': '8',
  '95': '8',
  '96': '8',

 
  '77': '9',
  '78': '9',
  '79': '9',
  '87': '9',
  '88': '9',
  '89': '9',
  '97': '9',
  '98': '9',
  '99': '9',
}

function checkColumn(id){
  return true;
}

function checkRow(id){
  return true;
}

function checkSquare(i){
  let checkDuplicate = new Array(9).fill(false);
  for (let j in squareItems[i]){
    if (checkDuplicate[Number(document.getElementById(squareItems[i][Number(j)]).firstChild.value)-1]){
      document.getElementById(squareItems[i][Number(j)]).firstChild.style.backgroundColor = "red";
      return false;
    }else{
      checkDuplicate[Number(document.getElementById(squareItems[i][Number(j)]).firstChild.value)-1] = true;
    }
  }

  for (elem in checkDuplicate){
    if(!checkDuplicate[elem]) return false;
  }

  return true;
}

function checkValues(){
  for(let i=0; i<9; i++ ){
    if(!(checkRow(i) && checkColumn(i) && checkSquare(i))){
      checkError = true;
      break;
    }  
  }
  if(checkError){
    console.log('there are some errors')
  }else{
    console.log('you won!')
  }
}
