const switchCase = i => {
    let string = ''
    switch(i) {
      case "0":
        string ='I would like to order the Santa Claus decorative peice.'
        break;
      case "1":
        string = 'I would like to order the Curvy Glass decorative peice.'
        break;
      case "2":
        string = 'I would like to order the Cups and Plates decorative set.'
        break;
      case "3":
        string = 'I would like to order the Pot Plants decorative set.'
        break;
      case "4":
        string = 'I would like to order the Plant Pots decorative set.'
        break;
      case "5":
        string = 'I would like to order the Plates decorative set.'
        break;
      case "6":
        string = 'I would like to order the Plates and Cutlery decorative set.'
        break;
      case "7":
        string = 'I would like to order the Assortment of Plates decorative set.'
        break;
      case "8":
        string = 'I would like to order the decorative Tea set.'
        break;
      case "9":
        string = 'I would like to order the Flower Vase decorative peice.'
        break;
      default:
        string = ''
    }
    return string
  }

  export default switchCase