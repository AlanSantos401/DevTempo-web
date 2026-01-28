import { colors } from "../styles/theme"




export function getTemperatureColor(temp: number) {
 if(temp <= 10) return colors.tempCold
 if(temp <= 25) return colors.tempMild
 if(temp <= 35) return colors.tempWarm
 return colors.tempHot
}
