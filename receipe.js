/**
 * @name receipe
 * @author Aélion - Nov 2019 - Cyril
 * @package
 * @version 1.0.0
 */

/**
 * 
 * @param {number} price 
 * @param {number} quantity 
 * @param {strin} sourceUnit 
 * @param {string} targetUnit 
 * @param {Optionnal number} targetQuantity 
 *
 * @return number
 * 
 * Compute ingredient price
 */
 function prix (price, quantity, sourceUnit, targetUnit, targetQuantity=null) {
     let ingredientPrice = 0

     if (sourceUnit == targetUnit) {
         if (targetQuantity != null) {
         ingredientPrice = ingredientPrice + (price * quantity/targetQuantity) ;}
         else {ingredientPrice = price * quantity;}
     }
     else {
        switch (sourceUnit) {
            case 'kg':
                ingredientPrice = price * (quantity / 1000)

            break; 
            case 'l' :
                switch (targetUnit) {
                    case 'cl' :
                        ingredientPrice = price * (quantity /100)
                        break;
                    case 'ml':
                        ingredientPrice = price * (quantity / 1000)
                        break;
                }
                break; 
            
    }
}

return ingredientPrice;
}


 /**
  * @constant array
  * Collection of ingredients
  */

 const ingredients = [
    ['Farine', 1.8, 'kg', 300, 'g'],
	['Oeufs', 0.22, 'unite', 3, 'unite'],
	['Sucre', 0.69, 'kg', 60, 'g'],
	['Beurre', 19.60, 'kg', 50, 'g'],
	['Lait', 0.94, 'l', 60, 'cl'],
	['Rhum', 9.75, 'cl', 5, 'cl', 70]
 ];

 /**
  * @constant array
  * ROI = return of investment = la rentabilite quoi.
  */

 const tauxRentabilite = [20, 25, 30, 35, 40, 45, 50]
 
 /**
  * @constant number
  * Quantile of hour (3min)
  */
 const tempsCuisson = 0.05 ;

 /**
  * @constant number
  *cELectric consumption (€/h)
  */
 const consoHeure = 0.3


let coutProductionRecette = 0
let coutProduction = 0
const qteProduite = 15

// il faudrait mettre un com pour toutes ces nouvelles variables/constantes mais là on zappe

let tpsTotal = 0
const qteAProduire = 300

 //First... Loop over ingredients to display each ingredient
 for (let i = 0; i < ingredients.length ; i++) {
     let ingredient = ingredients[i]; // Store the array of ingredients at the indice i
     //Cumul les coûts de production...
     coutProductionRecette = coutProductionRecette + prix (ingredient[1], ingredient[3], ingredient[2], ingredient[4], ingredient [5]);
     
 }
 console.log('Le coût pour ' + qteProduite + ' crepes est de : ' +  coutProductionRecette + ' €')

 //calcul du coût pour une crepe
 coutProduction = coutProductionRecette / qteProduite
 console.log('Coût pour 1 crepe : ' + coutProduction + ' €')
 console.log( 'et avec la conso : ' + ((consoHeure* tempsCuisson) + coutProduction) + ' €')

 
 

for (let j = 0 ; j < tauxRentabilite.length; j++) {
    let rentabilite = tauxRentabilite[j]
    let sellPrice = coutProduction + (coutProduction*rentabilite/100)


  console.log('Vente à l\'unité de : ' + rentabilite+ ' %: ' + sellPrice + '€');
}







