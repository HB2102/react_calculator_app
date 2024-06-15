import './Calculator.css'

function Calculator(){
    return(
        <div className="container">
            <div className="screen"></div>
            <div className="buttons">
                <button className='color two'>Clear</button>
                <button className='color'>C</button>
                <button className='color'>÷</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='color'>×</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className='color'>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className='color'>+</button>
                <button>0</button>
                <button>.</button>
                <button className='color two'>=</button>
            </div>
        </div>
    )
}

export default Calculator