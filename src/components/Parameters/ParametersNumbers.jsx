import './ParametersNumbers.css';
function ParametersNumbers() {
    return (
        <div className='parameters_numbers'>
            <div className="parameters_sector parameters_numbers_uv">UV</div>
            <div className="parameters_sector parameters_numbers_preassure">PR</div>
            <div className="parameters_sector parameters_numbers_wind">WI</div>
            <div className="parameters_sector parameters_numbers_humidity">HU</div>
            <div className="parameters_sector parameters_numbers_precipitation">PR</div>
            <div className="parameters_sector parameters_numbers_polluton">PL</div>
        </div>
    );
}

export default ParametersNumbers;