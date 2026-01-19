import './Parameters.css';
function Parameters (){
    return(
        <div className="parameters">
            <div className="parameters_recommendation parameters_sector">Recommendation</div>
            <div className='parameters_numbers'>
                 <div className="parameters_sector parameters_numbers_uv">UV</div>
                 <div className="parameters_sector parameters_numbers_preassure">PR</div>
                 <div className="parameters_sector parameters_numbers_wind">WI</div>
                 <div className="parameters_sector parameters_numbers_humidity">HU</div>
                 <div className="parameters_sector parameters_numbers_precipitation">PR</div>
                 <div className="parameters_sector parameters_numbers_polluton">PL</div>
            </div>
        </div>
    );
}
export default Parameters;