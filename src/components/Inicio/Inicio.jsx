import './inicio.css'
import iconoCompartir from '../../images/iconoCompartir.png'
import iconoInfoHeader from '../../images/iconoInfoHeader.png'
import iconoLogo from '../../images/logo.png'

const Inicio = () => {
  return (
    <div className='inicio'>
      <header>
        <div className='iconoHeaderInicio'>
          <img src={iconoInfoHeader} className='mr-2.5' /> <img src={iconoCompartir} className='mr-2.5' />
        </div>
        <div className='menuInicio'>
          <img src={iconoLogo} className='mr-2.5 iconoLogo' />
          <div className='horario'>
            <h1>Donde los Panas Burguer </h1><code>Abre 18:00 hs</code><p>30 - 45 min . $139 envío</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Inicio
