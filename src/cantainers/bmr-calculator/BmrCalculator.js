import BmrCalculatorComponent from './../../components/BmrCalculatorComponent';
import { connect } from 'react-redux';
import {calculateBmr, updateBmrData} from './../../actions/bmr';

const mapStateToProps = state => {
    return {
        bmrState: state.bmr
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        calculateBmr: (age, weight, height, gender, activity_level) => {
            dispatch(calculateBmr(age, weight, height, gender, activity_level))
        },
        updateBmrData: (e, { name, value })=> {
            dispatch(updateBmrData(name, value))
        }
    }
}

const BmrCalculator = connect(mapStateToProps, mapDispatchToProps)(BmrCalculatorComponent);

export default BmrCalculator;