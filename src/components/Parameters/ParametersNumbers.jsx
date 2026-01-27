import './ParametersNumbers.css';
function ParametersNumbers() {
    return (
        <div className='parameters_numbers'>
            <div className="parameters_sector parameters_numbers__uv">
                <h2 className='parameters_numbers__header'>UV-индекс</h2>
                <span className='parameters_numbers__value'>4</span>
                <p className='parameters_numbers__comment'>Умеренный</p>
            </div>
            <div className="parameters_sector parameters_numbers__preassure">
                <h2 className='parameters_numbers__header'>Давление</h2>
                <span className='parameters_numbers__value'>760</span>
                <span className='parameters_numbers__unit'>ммHg</span>
            </div>
            <div className="parameters_sector parameters_numbers__wind">
                <h2 className='parameters_numbers__header'>Ветер</h2>
                <span className='parameters_numbers__value'>2</span>
                <span className='parameters_numbers__unit'>м/с</span>
                <p className='parameters_numbers__comment'>Порывы: 4 м/с</p>
            </div>
            <div className="parameters_sector parameters_numbers__humidity">
                <h2 className='parameters_numbers__header'>Влажность</h2>
                <span className='parameters_numbers__value'>40%</span>
            </div>
            <div className="parameters_sector parameters_numbers__precipitation">
                <h2 className='parameters_numbers__header'>Осадки</h2>
                <span className='parameters_numbers__value'>0</span>
                <span className='parameters_numbers__unit'>мм</span>
            </div>
            <div className="parameters_sector parameters_numbers__polluton">
                <h2 className='parameters_numbers__header'>ИКВ</h2>
                <span className='parameters_numbers__value'>33</span>
            </div>
        </div>
    );
}

export default ParametersNumbers;