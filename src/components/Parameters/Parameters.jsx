import './Parameters.css';
import ParametersRecommendation  from './ParametersRecommendation';
import ParametersNumbers from './ParametersNumbers';
function Parameters (){
    return(
        <div className="parameters">
            <ParametersRecommendation />
            <ParametersNumbers />
            {/* 
             */}
        </div>
    );
}
export default Parameters;