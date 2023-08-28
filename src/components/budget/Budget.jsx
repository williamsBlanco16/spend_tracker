export const Budget = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario'>
        <div className='campo'>
          <label htmlFor="budget">Definir Presupuesto</label>
          <input id='budget' type="text" placeholder='Agrega tu presupuesto' className='nuevo-presupuesto' />
        </div>
        <input type="submit" value='Agregar' />
      </form>
    </div>
  )
}
