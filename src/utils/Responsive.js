import {Dimensions,PixelRatio} from 'react-native'
const {width,height} = Dimensions.get('window')
const widthToDp = number =>{
    let givenNumber = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width*givenNumber)/100);
}

const heightToDp = number =>{
    let givenNumber = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height*givenNumber)/100);
}

const numberToDp = number =>{
    let givenNumber = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel(givenNumber);
}

export {widthToDp,heightToDp,numberToDp};