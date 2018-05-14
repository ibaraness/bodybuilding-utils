export const bmrFormula = (age, weight, height, gender, activity_level) => 
    gender === 'female' ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) * activity_level :
        (66 + (13.75 * weight) + (5 * height) - (6.8 * age)) * activity_level;